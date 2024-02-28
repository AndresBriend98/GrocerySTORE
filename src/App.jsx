import { useState } from "react"

import { RiAddLine, RiPieChartLine, RiMenu3Fill, RiUser3Line, RiCloseLine, RiSearch2Line } from "react-icons/ri"
import Sidebar from "./components/Sidebar"


function App() {

  const [showMenu, setShowMenu] = useState(false)
  const [showOrder, setShowOrder] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu); //De false a true
  }

  const showDate = () => {
    const fecha = new Date();
    const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return fecha.toLocaleDateString('es-ES', opcionesFecha);
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      {/* Menu movil */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button
        ><RiUser3Line className="p-2" />
        </button>
        <button
        ><RiAddLine className="p-2" />
        </button>
        <button
        ><RiPieChartLine className="p-2" />
        </button>
        <button className="text-white p-2" onClick={toggleMenu}>
          {showMenu
            ? <RiCloseLine /> //Para que cuando se despliegue el menu aparezca una cruz
            : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-28 grid gird-cols-1 lg:grid-cols-8">
        <div className="lg:col-span-6">
          {/* Header */}
          <header className="p-4">
            {/* Title and search */}
            <div className="flex flex-col gap-4 mb-6">
              <div>
                <h1 className="text-2xl text-gray-300">Jeager Resto</h1>
                <p className="text-gray-500">{showDate()}</p>
              </div>
              <form>
                <div className="w-full relative">
                  <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input type="text" placeholder="Search" className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"></input>
                </div>
              </form>
            </div>
            {/* Tabs */}
            <nav className="text-gray-300 flex items-center justify-between border-b">
              <a href="#" className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1x] text-[#ec7c6a]">Hoy dishes</a>
              <a href="#" className="py-2 pr-4">Cold dishes</a>
              <a href="#" className="py-2 pr-4">Soup</a>
              <a href="#" className="py-2">Grill</a>
            </nav>
          </header>
        </div>
        <div className="lg:col-span-2 fixed lg:static">HOla2</div>
      </main>
    </div>
  )
}

export default App
