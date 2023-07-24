// import { useState } from 'react'
// import './App.css'
import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Job from './components/pages/Job'
import Login from './components/Login'
import Post from './components/pages/Post'

function App() {

  return (

    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jobs' element={<Job />} />
        <Route path='/post' element={<Post/>} />
        <Route path='/login' element={<Login />} />
      </Routes>

    </Layout>

  )
}

export default App
