import React from 'react';
import data from '../services/data/react_snippets.json'
import Table from '../components/Table';

export default function ReactSnippets() {
  return (
    <div>
      <Table data = {data} />
    </div>
  )
}
