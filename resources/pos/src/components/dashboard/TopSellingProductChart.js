import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';

const TopSellingProductChart = (props) => {
  const { yearTopProduct } = props
  const allQuantity = yearTopProduct ? yearTopProduct.total_quantity : [];
  const allName = yearTopProduct ? yearTopProduct.name : [];
  const [allData, setAllData] = useState([])

  useEffect(() => {
    if (allQuantity && allName) {
      countDatas()
    }
  }, [yearTopProduct])

  const countDatas = () => {
    if (allData.length === 0) {
      allQuantity.map((value, i) => {
        setAllData((oldValue) => [...oldValue, {
          value: allQuantity[i],
          name: allName[i]
        }]);
      })
    } else if (allData.length >= 1) {
      setAllData([])
      allQuantity.map((value, i) => {
        setAllData((oldValue) => [...oldValue, {
          value: allQuantity[i],
          name: allName[i]
        }]);
      })
    }
  }

  const option = {
    color: ['#7F77DD', '#1D9E75', '#EF9F27', '#D85A30', '#D4537E'],
    tooltip: {
      trigger: 'item',
      backgroundColor: '#1e1e2e',
      borderWidth: 0,
      textStyle: { color: '#ffffff', fontSize: 13 },
      formatter: '{b}: {c} unidades ({d}%)'
    },
    legend: {
      orient: 'horizontal',
      left: 'center',
      top: 0,
      itemWidth: 10,
      itemHeight: 10,
      borderRadius: 2,
      textStyle: { fontSize: 12, color: '#6b7280' }
    },
    series: [
      {
        name: '',
        type: 'pie',
        radius: ['42%', '68%'],
        center: ['50%', '55%'],
        data: allData,
        label: { show: false },
        emphasis: {
          itemStyle: {
            shadowBlur: 8,
            shadowColor: 'rgba(0,0,0,0.15)'
          }
        }
      }
    ]
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: 400 }}
    />
  );
};

export default TopSellingProductChart;
