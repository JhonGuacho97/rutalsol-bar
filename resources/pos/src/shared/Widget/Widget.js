import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { currencySymbolHandling } from "../sharedMethod";

const THEME_MAP = {
    "widget-gradient-blue": { bg: "#EEEDFE", border: "#AFA9EC", label: "#534AB7", value: "#3C3489", icon: "#7F77DD" },
    "widget-gradient-purple": { bg: "#E1F5EE", border: "#5DCAA5", label: "#0F6E56", value: "#085041", icon: "#1D9E75" },
    "widget-gradient-orange": { bg: "#FAEEDA", border: "#EF9F27", label: "#854F0B", value: "#633806", icon: "#EF9F27" },
    "widget-gradient-lightblue": { bg: "#FAECE7", border: "#F0997B", label: "#993C1D", value: "#712B13", icon: "#D85A30" },
    "widget-gradient-yellow": { bg: "#FBEAF0", border: "#ED93B1", label: "#993556", value: "#72243E", icon: "#D4537E" },
    "widget-gradient-green": { bg: "#E1F5EE", border: "#5DCAA5", label: "#0F6E56", value: "#085041", icon: "#1D9E75" },
    "widget-gradient-red": { bg: "#FAECE7", border: "#F0997B", label: "#993C1D", value: "#712B13", icon: "#D85A30" },
    "widget-gradient-pink": { bg: "#EEEDFE", border: "#AFA9EC", label: "#534AB7", value: "#3C3489", icon: "#7F77DD" },
};

const DEFAULT_THEME = { bg: "#F1EFE8", border: "#B4B2A9", label: "#5F5E5A", value: "#2C2C2A", icon: "#888780" };

const Widget = (props) => {
    const { title, value, currency, icon, className = "", onClick, allConfigData } = props;

    const themeKey = Object.keys(THEME_MAP).find((k) => className.includes(k));
    const theme = themeKey ? THEME_MAP[themeKey] : DEFAULT_THEME;
    const isCursorPointer = className.includes("cursor-pointer");

    const renderTooltip = (tooltipProps) => (
        <Tooltip id="widget-tooltip" {...tooltipProps}>
            {currency} {value}
        </Tooltip>
    );

    return (
        <div className="col-xxl-3 col-xl-4 col-sm-6" onClick={onClick} style={{ marginBottom: '8px' }}>
            <div
                style={{
                    background: theme.bg,
                    border: `0.5px solid ${theme.border}`,
                    borderRadius: 12,
                    padding: "16px 18px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    cursor: isCursorPointer ? "pointer" : "default",
                    transition: "opacity 0.15s",
                }}
                onMouseEnter={(e) => { if (isCursorPointer) e.currentTarget.style.opacity = "0.85"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
            >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span
                        style={{
                            fontSize: 11,
                            fontWeight: 600,
                            color: theme.label,
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            lineHeight: 1.3,
                            maxWidth: "70%",
                        }}
                    >
                        {title}
                    </span>
                    <div
                        style={{
                            width: 36,
                            height: 36,
                            borderRadius: 8,
                            background: theme.icon,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            color: "#fff",
                            fontSize: 15,
                        }}
                    >
                        {icon}
                    </div>
                </div>

                <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                >
                    <p
                        style={{
                            fontSize: 22,
                            fontWeight: 700,
                            color: theme.value,
                            margin: 0,
                            letterSpacing: "-0.01em",
                        }}
                    >
                        {currencySymbolHandling(allConfigData, currency, value, true)}
                    </p>
                </OverlayTrigger>
            </div>
        </div>
    );
};

export default Widget;