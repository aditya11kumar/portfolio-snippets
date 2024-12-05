import React from 'react';
import data from '../services/data/node_snippets.json'
import Table from '../components/Table';

export default function NodeSnippets() {
  return (
    <div>
      <Table data = {data} />
    </div>
  )
}
