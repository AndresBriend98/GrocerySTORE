import { useState } from "react"

import { RiAddLine, RiPieChartLine, RiMenu3Fill, RiUser3Line } from "react-icons/ri"
import Sidebar from "./components/Sidebar"


function App() {

  const [showMenu, setShowMenu] = useState(false)
  const [showOrder, setShowOrder] = useState(false)

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar />
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-4 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button
        ><RiUser3Line />
        </button>
        <button
        ><RiAddLine />
        </button>
        <button
        ><RiPieChartLine />
        </button>
        <button
        ><RiMenu3Fill className="text-white" />
        </button>
      </nav>
    </div>
  )
}

export default App
