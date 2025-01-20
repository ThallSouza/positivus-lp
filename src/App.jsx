import { Header } from "./components/header"
import { Hero } from "./components/hero"
import { Services } from "./components/services"

function App() {

  return (
    <div className="flex flex-col gap-36 pt-6">
      <Header/>
      <Hero/>
      <Services/>
    </div>
  )
}

export default App
