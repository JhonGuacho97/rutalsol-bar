import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { weekSalePurchases } from '../../store/action/weeksalePurchaseAction';
import { yearlyTopProduct } from '../../store/action/yearlyTopProductAction';
import { placeholderText } from '../../shared/sharedMethod';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const LineChart = ({ weekSalePurchase, frontSetting }) => {
    const currency = frontSetting?.value?.currency_symbol || '$';

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: '#1e1e2e',
                titleColor: '#a8a8b8',
                bodyColor: '#ffffff',
                padding: 12,
                cornerRadius: 8,
                callbacks: {
                    label: (item) =>
                        `  ${item.dataset.label}: ${currency} ${Number(item.raw).toFixed(2)}`,
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
                grid: { color: 'rgba(0,0,0,0.05)', drawBorder: false },
                border: { display: false, dash: [4, 4] },
                ticks: {
                    color: '#9ca3af',
                    font: { size: 12 },
                    callback: (v) => `${currency} ${v}`,
                },
            },
        },
    };

    const labels = weekSalePurchase?.dates || [];

    const data = {
        labels,
        datasets: [
            {
                label: placeholderText('sales.title'),
                data: weekSalePurchase?.sales || [],
                borderColor: '#7F77DD',
                backgroundColor: 'rgba(127, 119, 221, 0.08)',
                borderWidth: 2,
                pointRadius: 3,
                pointBackgroundColor: '#7F77DD',
                tension: 0.4,
                fill: true,
            },
            {
                label: placeholderText('purchases.title'),
                data: weekSalePurchase?.purchases || [],
                borderColor: '#1D9E75',
                backgroundColor: 'rgba(29, 158, 117, 0.08)',
                borderWidth: 2,
                pointRadius: 3,
                pointBackgroundColor: '#1D9E75',
                tension: 0.4,
                fill: true,
            },
        ],
    };

    return (
        <div style={{ position: 'relative', height: '260px' }}>
            <Line options={options} data={data} />
        </div>
    );
};

const mapStateToProps = ({ weekSalePurchase, yearTopProduct }) => ({
    weekSalePurchase,
    yearTopProduct,
});

export default connect(mapStateToProps, { weekSalePurchases, yearlyTopProduct })(LineChart);