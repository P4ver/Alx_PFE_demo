import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Demo from './component/demo'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Demo />} />
        {/* <Route path="/" element={<RecordsComponent />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
