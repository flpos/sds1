import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import { barOptions, pieOptions } from './chart-options';
import {
  buildBarSeries,
  getGenreChartData,
  getPlatformChartData,
} from './helpers';
import './styles.css';

type PieChartData = {
  labels: string[];
  series: number[];
};
type BarChartData = {
  x: string;
  y: number;
};

const initialPieData: PieChartData = {
  labels: [],
  series: [],
};

const Charts = () => {
  const [barChartData, setBarChartData] = useState<BarChartData[]>([]);
  const [platformData, setPlataformData] = useState(initialPieData);
  const [genreData, setGenreData] = useState(initialPieData);

  useEffect(() => {
    async function getData() {
      const recordsResponse = await Axios.get('http://localhost:8080/records');
      const gamesResponse = await Axios.get('http://localhost:8080/games');

      const barData = buildBarSeries(
        gamesResponse.data,
        recordsResponse.data.content
      );
      setBarChartData(barData);

      const platformChartData = getPlatformChartData(
        recordsResponse.data.content
      );
      setPlataformData(platformChartData);

      const genreChartData = getGenreChartData(recordsResponse.data.content);
      setGenreData(genreChartData);
    }
    getData();
  }, []);

  return (
    <div className='page-container'>
      <div className='filters-container records-actions'>
        <Link to='/records'>
          <button className='action-filters'>Ver Registros</button>
        </Link>
      </div>
      <div className='chart-container'>
        <div className='top-related'>
          <h1 className='top-related-title'>Jogos mais votados</h1>
          <div className='games-container'>
            <Chart
              options={barOptions}
              type='bar'
              width={700}
              height={650}
              series={[{ data: barChartData }]}
            />
          </div>
        </div>
        <div className='charts'>
          <div className='platform-chart'>
            <h2 className='chart-title'>Plataformas</h2>
            <Chart
              options={{
                ...pieOptions,
                labels: platformData.labels,
              }}
              type='donut'
              series={platformData.series}
            />
          </div>
          <div className='genre-chart'>
            <h2 className='chart-title'>Gêneros</h2>
            <Chart
              options={{
                ...pieOptions,
                labels: genreData.labels,
              }}
              type='donut'
              series={genreData.series}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
