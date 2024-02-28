import { useState } from "react"

import { RiAddLine, RiPieChartLine, RiMenu3Fill, RiUser3Line,RiCloseLine } from "react-icons/ri"
import Sidebar from "./components/Sidebar"


function App() {

  const [showMenu, setShowMenu] = useState(false)
  const [showOrder, setShowOrder] = useState(false)

  const toggleMenu = () =>{
    setShowMenu(!showMenu); //De false a true
  }

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu}/>
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button
        ><RiUser3Line className="p-2"/>
        </button>
        <button
        ><RiAddLine className="p-2"/>
        </button>
        <button
        ><RiPieChartLine className="p-2"/>
        </button>
        <button className="text-white p-2" onClick={toggleMenu}>
          {showMenu 
            ? <RiCloseLine /> //Para que cuando se despliegue el menu aparezca una cruz
            : <RiMenu3Fill/>}
        </button>
      </nav>
      <main className="lg:pl-28 grid gird-cols-1 lg:grid-cols-8">
        <div className="lg:col-span-6">HOla</div>
        <div className="lg:col-span-2 fixed lg:static">HOla2</div>
      </main>
    </div>
  )
}

export default App
