import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Card } from 'react-bootstrap';
import {
    getFormattedMessage,
    placeholderText,
    currencySymbolHandling,
} from '../../shared/sharedMethod';
import { Row } from 'react-bootstrap-v5';
import { connect } from 'react-redux';
import { weekSalePurchases } from '../../store/action/weeksalePurchaseAction';
import { yearlyTopProduct } from '../../store/action/yearlyTopProductAction';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import isoWeek from 'dayjs/plugin/isoWeek';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(utc);
dayjs.extend(localizedFormat);
dayjs.extend(isoWeek);
dayjs.extend(relativeTime);
import TopSellingProductChart from './TopSellingProductChart';
import LineChart from './LineChart';
import { gradients } from '../../utils/chartGradients';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CHART_COLORS = {
    purple: '#7F77DD',
    teal: '#1D9E75',
};

const LegendDot = ({ color, label }) => (
    <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#6b7280' }}>
        <span style={{ width: 10, height: 10, borderRadius: 2, background: color, display: 'inline-block' }} />
        {label}
    </span>
);

const ChartToggle = ({ active, onClick, label }) => (
    <button
        onClick={onClick}
        style={{
            background: active ? '#7F77DD' : 'transparent',
            color: active ? '#fff' : '#9ca3af',
            border: '1px solid',
            borderColor: active ? '#7F77DD' : '#e5e7eb',
            borderRadius: 6,
            padding: '4px 12px',
            fontSize: 12,
            cursor: 'pointer',
            fontWeight: active ? 600 : 400,
            transition: 'all 0.15s',
        }}
    >
        {label}
    </button>
);

const ThisWeekSalePurchaseChart = (props) => {
    const {
        frontSetting,
        weekSalePurchases,
        weekSalePurchase,
        yearTopProduct,
        yearlyTopProduct,
        allConfigData,
    } = props;

    const [isLineChart, setIsLineChart] = useState(false);
    const year = new Date();

    useEffect(() => {
        weekSalePurchases();
        yearlyTopProduct();
    }, []);

    const currency = frontSetting?.value?.currency_symbol || '$';

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: '#1e1e2e',
                titleColor: '#a8a8b8',
                bodyColor: '#ffffff',
                padding: 12,
                cornerRadius: 8,
                callbacks: {
                    label: (item) => {
                        const val = currencySymbolHandling(allConfigData, currency, item.raw, true);
                        return `  ${item.dataset.label}: ${val}`;
                    },
                },
            },
        },
        scales: {
            x: {
                grid: { display: false },
                border: { display: false },
                ticks: { color: '#9ca3af', font: { size: 12 } },
            },
            y: {
                grid: { color: 'rgba(0,0,0,0.05)' },
                border: { display: false, dash: [4, 4] },
                ticks: {
                    color: '#9ca3af',
                    font: { size: 12 },
                    callback: (v) => currencySymbolHandling(allConfigData, currency, v, true),
                },
            },
        },
    };

    const data = {
        labels: weekSalePurchase?.dates || [],
        datasets: [
            {
                label: placeholderText('sales.title'),
                data: weekSalePurchase?.sales || [],
                backgroundColor: (ctx) => {
                    const { chart: { ctx: c, chartArea } } = ctx;
                    if (!chartArea) return CHART_COLORS.purple;
                    return gradients.blue(c, chartArea);
                },
                hoverBackgroundColor: CHART_COLORS.purple,
                borderWidth: 0,
                borderRadius: 6,
                borderSkipped: false,
            },
            {
                label: placeholderText('purchases.title'),
                data: weekSalePurchase?.purchases || [],
                backgroundColor: (ctx) => {
                    const { chart: { ctx: c, chartArea } } = ctx;
                    if (!chartArea) return CHART_COLORS.teal;
                    return gradients.green(c, chartArea);
                },
                hoverBackgroundColor: CHART_COLORS.teal,
                borderWidth: 0,
                borderRadius: 6,
                borderSkipped: false,
            },
        ],
    };

    return (
        <Row className="g-4">
            {/* ── Bar / Line Chart ── */}
            <div className="col-xxl-8 col-12">
                <Card style={{ border: '0.5px solid #f0f0f0', borderRadius: 12, boxShadow: 'none' }}>
                    <Card.Header
                        style={{
                            background: 'transparent',
                            borderBottom: '0.5px solid #f3f4f6',
                            padding: '16px 20px 12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div>
                            <h6 style={{ margin: 0, fontWeight: 600, color: '#111827', fontSize: 15 }}>
                                {getFormattedMessage('dashboard.ThisWeekSales&Purchases.title')}
                            </h6>
                            <div style={{ display: 'flex', gap: 12, marginTop: 6 }}>
                                <LegendDot color={CHART_COLORS.purple} label={placeholderText('sales.title')} />
                                <LegendDot color={CHART_COLORS.teal} label={placeholderText('purchases.title')} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: 6 }}>
                            <ChartToggle
                                active={!isLineChart}
                                onClick={() => setIsLineChart(false)}
                                label={getFormattedMessage('bar.title')}
                            />
                            <ChartToggle
                                active={isLineChart}
                                onClick={() => setIsLineChart(true)}
                                label={getFormattedMessage('line.title')}
                            />
                        </div>
                    </Card.Header>
                    <Card.Body style={{ padding: '16px 20px' }}>
                        <div style={{ position: 'relative', height: 260 }}>
                            {!isLineChart && currency && (
                                <Bar options={options} data={data} />
                            )}
                            {isLineChart && currency && (
                                <LineChart
                                    weekSalePurchase={weekSalePurchase}
                                    frontSetting={frontSetting}
                                />
                            )}
                        </div>
                    </Card.Body>
                </Card>
            </div>

            {/* ── Top Selling Products ── */}
            <div className="col-xxl-4 col-12">
                <Card style={{ border: '0.5px solid #f0f0f0', borderRadius: 12, boxShadow: 'none' }}>
                    <Card.Header
                        style={{
                            background: 'transparent',
                            borderBottom: '0.5px solid #f3f4f6',
                            padding: '16px 20px 12px',
                        }}
                    >
                        <h6 style={{ margin: 0, fontWeight: 600, color: '#111827', fontSize: 15 }}>
                            {getFormattedMessage('dashboard.TopSellingProducts.title')}
                            <span style={{ fontWeight: 400, color: '#9ca3af', marginLeft: 6, fontSize: 13 }}>
                                ({dayjs(year).format('YYYY')})
                            </span>
                        </h6>
                    </Card.Header>
                    <Card.Body style={{ padding: '16px 20px' }}>
                        <TopSellingProductChart
                            yearTopProduct={yearTopProduct}
                            frontSetting={frontSetting}
                        />
                    </Card.Body>
                </Card>
            </div>
        </Row>
    );
};

const mapStateToProps = ({ weekSalePurchase, yearTopProduct, allConfigData }) => ({
    weekSalePurchase,
    yearTopProduct,
    allConfigData,
});

export default connect(mapStateToProps, { weekSalePurchases, yearlyTopProduct })(ThisWeekSalePurchaseChart);