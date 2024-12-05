import React from 'react';
import Table from '../components/Table';
import data from '../services/data/ts.json'

export default function Typescript() {
  return (
    <div>
      <Table data = {data} />
    </div>
  )
}
