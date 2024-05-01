import './App.scss'
import Characters from './components/Characters/Characters'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import MainPage from './components/main/MainPage'
import Episodes from './components/Episodes/Episodes'
import Character from './components/Characters/Character'

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<Character />} />
          <Route path="/episodes" element={<Episodes />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
