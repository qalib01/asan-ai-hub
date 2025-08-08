import HeroSection from "./components/hero/hero"
import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"

function App() {

  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <HeroSection />
      <Footer />
    </div>
  )
}

export default App
