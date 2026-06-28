<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>JhonSport POS</title>

    <!-- PWA -->
    <link rel="manifest" href="/manifest.json">
    <link rel="icon" href="/favicon.ico">
    <link rel="apple-touch-icon" href="/logo192.png">

    <meta name="theme-color" content="#6366f1">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">

    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"/>
</head>

<body class="antialiased">
    <div id="root"></div>

    <script src="{{ mix('js/app.js') }}"></script>

    <!-- Service Worker -->
    <script>
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function () {
                navigator.serviceWorker.register('/sw.js')
                    .then(reg => console.log('SW registrado'))
                    .catch(err => console.log('SW error', err));
            });
        }
    </script>
</body>
</html>