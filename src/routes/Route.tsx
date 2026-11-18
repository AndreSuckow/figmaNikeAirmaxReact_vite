// adicionando rotas por yarn add react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"

function Router() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={
          <Home/>
        }>
        </Route>
        <Route path="/home" element={
          <Home/>
        }
        >
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
