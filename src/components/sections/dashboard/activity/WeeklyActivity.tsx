import CardContainer from 'components/common/CardContainter';
import WeeklyActivityChart from 'components/sections/dashboard/activity/WeeklyActivityChart';
import { TransactionDataType, transactionData } from 'data/activity-chart';
import ReactECharts from 'echarts-for-react';
import { useChartResize } from 'providers/useEchartResize';
import { useEffect, useRef, useState } from 'react';

const WeeklyActivity = () => {
  const chartRef = useRef<ReactECharts>(null);
  const [chartData, setChartData] = useState<TransactionDataType[]>([]);

  useEffect(() => {
    const fetchData = () => {
      setChartData(transactionData);
    };
    fetchData();
  }, []);

  return (
    <CardContainer title="Financial Report">
      <WeeklyActivityChart chartRef={chartRef} seriesData={chartData} />
    </CardContainer>
  );
};

export default WeeklyActivity;
