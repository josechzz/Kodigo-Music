import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './pages/main/Main'

function App() {
  return (
    <>
      <Router>
        <div className="w-full min-h-screen bg-zinc-950 text-neutral-400 flex flex-col p-2 overflow-hidden">
          {/*aqui iran las rutas*/}
          <Routes>
            <Route exact path='/' element={<Main />}></Route>
            </Routes> 
        </div>
      </Router>
    </>
  )
}

export default App
