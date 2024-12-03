import React from 'react';
import Table from '../components/Table';
import data from '../services/data/sql.json'

export default function Sql() {
  return (
    <div>
      <Table data = {data} />
    </div>
  )
}
