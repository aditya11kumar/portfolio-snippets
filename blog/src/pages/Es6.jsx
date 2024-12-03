import React from 'react'
import Table from '../components/Table';
import data from '../services/data/es6.json'

export default function Es6() {
  return (
    <div>
      <Table data = {data} />
    </div>
  )
}
