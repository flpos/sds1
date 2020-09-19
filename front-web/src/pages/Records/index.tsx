import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

import './styles.css';

const Records = () => {
  const [records, setRecords] = useState<RecordsResponse>();
  const [activePage, setActivePage] = useState(0);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/records?linesPerPage=12&page=${activePage}`)
      .then((res) => setRecords(res.data));
  }, [activePage]);

  return (
    <div className='page-container'>
      <div className='filters-container records-actions'>
        <Link to='/charts'>
          <button className='action-filters'>Ver Gráfico</button>
        </Link>
      </div>
      <table className='records-table' cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>
            <th>Instante</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Plataforma</th>
            <th>Gênero</th>
            <th>Título</th>
          </tr>
        </thead>
        <tbody>
          {records?.content.map((record) => (
            <tr key={record.id}>
              <td>{moment(record.moment).format('DD/MM/YYYY HH:mm')}</td>
              <td>{record.name}</td>
              <td>{record.age}</td>
              <td className='text-secondary'>{record.gamePlatform}</td>
              <td>{record.genreName}</td>
              <td className='text-primary'>{record.gameTitle}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        activePage={activePage}
        totalPages={records?.totalPages}
        goToPage={(index: number) => setActivePage(index)}
      />
    </div>
  );
};

export default Records;
