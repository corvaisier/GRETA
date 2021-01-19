import { useState } from "react"

import Header from "./pages/header"
import MiamForm from "./pages/miamForm"
import MiamWeekForm from "./pages/previsionForm"

function App() {
  const [menu, setMenu] = useState([])
  const [day, numberOfDay] = useState("")
  
  return (
    <div className="App">
      <Header />
      <MiamForm
        menu={menu}
        setMenu={setMenu}
      />
      <MiamWeekForm
        menu={menu}
        day={day}
        numberOfDay={numberOfDay}
      />
    </div>
  )
}

export default App;
