import { useState } from "react"

import Header from "./pages/header"
import MiamForm from "./pages/miamForm"
import MiamWeekForm from "./pages/previsionForm"

function App() {
  const [menu, setMenu] = useState([])
  const [day, numberOfDay] = useState("")

  return (
    <div className="App" style={{textAlign:"center", marginTop:"50px"}}>
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
