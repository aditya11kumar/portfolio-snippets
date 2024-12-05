import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../../pages/Layout'
import List from '../../pages/List'
import NoPage from '../../pages/NoPage'
import Details from '../../pages/Details'
import Resume from '../../pages/Resume'
import ReactJsPage from '../../pages/ReactJsPage'
import NodeJsPage from '../../pages/NodeJsPage'
import Es6 from '../../pages/Es6'
import Sql from '../../pages/Sql'
import JavaScript from '../../pages/JavaScript'
import Typescript from '../../pages/Typescript'

export default function Routing () {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Resume />} />
            <Route path='/snippets/es6' element ={<Es6 />} />
            <Route path='/snippets/reactjs' element ={<ReactJsPage />} />
            <Route path='/snippets/nodejs' element ={<NodeJsPage />} />
            <Route path='/snippets/sql' element ={< Sql />} />
            <Route path='/snippets/JavaScript' element ={<JavaScript />} />
            <Route path='/snippets/typescript' element ={<Typescript />} />

            <Route path='/list' element={<List />} />
            <Route path='/details/:blogId?' element={<Details />} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}
