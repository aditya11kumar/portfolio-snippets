import React from 'react'
import Table from '../components/Table';
import data from '../services/data/components.json'

export default function Components() {
  return (
    <div>
      <Table data = {data} />
    </div>
  )
}
