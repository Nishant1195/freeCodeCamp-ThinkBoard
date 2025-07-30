import React from 'react'
import { Routes, Route } from 'react-router'
import HomePage from "./Pages/HomePage.jsx"
import CreatePage from "./Pages/CreatePage.jsx"
import PageDetail from "./Pages/PageDetail.jsx"
import toast from 'react-hot-toast'
const App = () => {
  return (
    <div data-theme="lofi">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/detail/:id' element={<PageDetail />} />
      </Routes>
    </div>
  )
}

export default App