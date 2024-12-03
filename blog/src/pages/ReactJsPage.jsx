import React from 'react';
import data from '../services/data/react.json'
import Table from '../components/Table';

export default function ReactJsPage() {
  return (
    <div>
      <Table data = {data} />
    </div>
  )
}
