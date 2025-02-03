import { Header } from "./components/header"
import { Services } from "./components/services"

function App() {

  return (
    <div className="flex flex-col gap-36 pt-6 bg-background">
      <Header/>
      <Services/>
    </div>
  )
}

export default App
