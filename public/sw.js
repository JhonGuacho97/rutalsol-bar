// JhonSport POS — Service Worker
// Estrategia: "Install only" — la app es instalable pero siempre
// va a la red. No se cachean respuestas de API para evitar datos
// desactualizados en un sistema POS.

const CACHE_NAME = "jhonsport-pos-v1";

// Solo cacheamos el shell estático de la app (HTML, JS, CSS)
// para que el ícono y la pantalla de carga aparezcan rápido.
const STATIC_ASSETS = [
    "/",
    "/js/app.js",
    "/manifest.json",
    "/favicon.ico",
    "/logo192.png",
    "/logo512.png",
];

// ─── Install ──────────────────────────────────────────────────────────────────
// Se dispara una sola vez cuando el SW se registra por primera vez.
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            // Pre-cachear solo los assets estáticos del shell
            return cache.addAll(STATIC_ASSETS).catch(() => {
                // Si algún asset falla no bloqueamos la instalación
            });
        })
    );
    // Activar inmediatamente sin esperar a que se cierren tabs viejas
    self.skipWaiting();
});

// ─── Activate ─────────────────────────────────────────────────────────────────
// Limpia caches viejos cuando se actualiza el SW.
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys
                    .filter((key) => key !== CACHE_NAME)
                    .map((key) => caches.delete(key))
            )
        )
    );
    // Tomar control de todas las tabs abiertas inmediatamente
    self.clients.claim();
});

// ─── Fetch ────────────────────────────────────────────────────────────────────
// Estrategia: Network First siempre.
// - Peticiones a /api/* → siempre van a la red, nunca se cachean.
// - Assets estáticos → red primero, caché como fallback.
// - Si no hay conexión → muestra página de sin conexión.
self.addEventListener("fetch", (event) => {
    const url = new URL(event.request.url);

    if (event.request.method !== "GET") return;
    if (!url.protocol.startsWith("http")) return;

    // Lista explícita de extensiones/paths que SÍ se pueden cachear
    const esAssetEstatico =
        STATIC_ASSETS.includes(url.pathname) ||
        /\.(js|css|png|jpg|jpeg|svg|ico|woff2?)$/.test(url.pathname);

    if (!esAssetEstatico) {
        // Cualquier petición de datos dinámicos: siempre red, nunca caché
        event.respondWith(fetch(event.request));
        return;
    }

    // Solo para assets estáticos: red primero, caché como fallback
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                if (response && response.status === 200 && response.type === "basic") {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });
                }
                return response;
            })
            .catch(() => {
                return caches.match(event.request).then((cached) => {
                    if (cached) return cached;
                    if (event.request.mode === "navigate") {
                        return caches.match("/offline.html");
                    }
                });
            })
    );
});