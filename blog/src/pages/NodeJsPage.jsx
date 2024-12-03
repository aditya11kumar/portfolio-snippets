import React from 'react';
import data from '../services/data/node.json'
import Table from '../components/Table';

export default function NodeJsPage() {
  return (
    <div>
      <Table data = {data} />
    </div>
  )
}
