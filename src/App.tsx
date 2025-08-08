import { Outlet } from "react-router-dom"
import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"

function App() {

  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <div className="mx-8">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
