import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap-v5";
import { parseUserAgent } from "./ParseUserAgent";
import apiConfig from "../../../config/apiConfig";

const LoginLogDetailModal = ({ show, onHide, log }) => {
    const [location, setLocation] = useState(null);
    const [loadingLocation, setLoadingLocation] = useState(false);

    useEffect(() => {
        if (show && log?.ip_address) {
            fetchLocation(log.ip_address);
        }
    }, [show, log]);

    const fetchLocation = async (ip) => {
        if (ip === "127.0.0.1" || ip === "::1" || ip.startsWith("192.168")) {
            setLocation({ error: "IP local — sin ubicación disponible" });
            return;
        }

        setLoadingLocation(true);
        setLocation(null);
        try {
            const { data } = await apiConfig.get(`/ip-location/${ip}`);
            if (data.status === "success") {
                setLocation(data);
            } else {
                setLocation({ error: data.error || "No se pudo obtener la ubicación" });
            }
        } catch (e) {
            setLocation({ error: "Error al consultar la ubicación" });
        } finally {
            setLoadingLocation(false);
        }
    };

    if (!log) return null;

    return (
        <Modal show={show} onHide={onHide} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Detalles del Inicio de Sesión</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <table className="table table-bordered mb-0">
                    <tbody>
                        <tr>
                            <th className="w-25 bg-light">Usuario</th>
                            <td>{log.name ?? "—"}</td>
                        </tr>
                        <tr>
                            <th className="bg-light">Email</th>
                            <td>{log.email}</td>
                        </tr>
                        <tr>
                            <th className="bg-light">IP</th>
                            <td>
                                <span className="badge bg-light-info">
                                    {log.ip_address}
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <th className="bg-light">Estado</th>
                            <td>
                                <span className={`badge ${log.status === "success" ? "bg-light-success" : "bg-light-danger"}`}>
                                    {log.status === "success" ? "Exitoso" : "Fallido"}
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <th className="bg-light">Fecha y Hora</th>
                            <td>{new Date(log.logged_at).toLocaleString("es-EC")}</td>
                        </tr>
                        {/* ✅ Sección dispositivo */}
                        {(() => {
                            const { device, os, browser } = parseUserAgent(log.user_agent);
                            return (
                                <>
                                    <tr>
                                        <th className="bg-light">Dispositivo</th>
                                        <td>{device}</td>
                                    </tr>
                                    <tr>
                                        <th className="bg-light">Sistema Operativo</th>
                                        <td>
                                            <span className="badge bg-light-warning">
                                                {os}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="bg-light">Navegador</th>
                                        <td>
                                            <span className="badge bg-light-primary">
                                                {browser}
                                            </span>
                                        </td>
                                    </tr>
                                </>
                            );
                        })()}

                        {/* ✅ Sección de ubicación */}
                        <tr>
                            <th className="bg-light">Ubicación</th>
                            <td>
                                {loadingLocation ? (
                                    <span className="text-muted">
                                        <span className="spinner-border spinner-border-sm me-2" />
                                        Obteniendo ubicación...
                                    </span>
                                ) : location?.error ? (
                                    <span className="text-muted">{location.error}</span>
                                ) : location ? (
                                    <div className="d-flex flex-column gap-2">

                                        <span>
                                            🌎 <strong>Continente:</strong> {location.continent}
                                        </span>

                                        <span>
                                            🌍 <strong>País:</strong> {location.country}
                                        </span>

                                        <span>
                                            🗺️ <strong>Provincia/Estado:</strong> {location.regionName}
                                        </span>

                                        <span>
                                            🏙️ <strong>Ciudad:</strong> {location.city}
                                        </span>

                                        <span>
                                            📮 <strong>Código Postal:</strong> {location.zip || "—"}
                                        </span>

                                        <span>
                                            📍 <strong>Coordenadas:</strong>{" "}
                                            {location.lat && location.lon && (
                                                <a
                                                    href={`https://www.google.com/maps?q=${location.lat},${location.lon}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-sm btn-outline-primary mt-2"
                                                >
                                                    Ver en mapa
                                                </a>
                                            )}
                                        </span>

                                        <span>
                                            ⏰ <strong>Zona Horaria:</strong> {location.timezone}
                                        </span>

                                        <span>
                                            🌐 <strong>ISP:</strong> {location.isp}
                                        </span>

                                        <span>
                                            🏢 <strong>Organización:</strong> {location.org}
                                        </span>

                                    </div>
                                ) : null}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={onHide}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default LoginLogDetailModal;