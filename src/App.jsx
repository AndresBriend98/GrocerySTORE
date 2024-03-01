import { useState } from "react"

import { RiAddLine, RiPieChartLine, RiMenu3Fill, RiUser3Line, RiCloseLine, RiSearch2Line, RiArrowDownSLine, RiDeleteBin6Line } from "react-icons/ri"
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
      <main className="lg:pl-32 grid gird-cols-1 lg:grid-cols-8 p-4 pb-20">
        <div className="lg:col-span-6 md:p-8">
          {/* Header */}
          <header>
            {/* Title and search */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
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
            <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
              <a href="#" className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1x] text-[#ec7c6a]">Hoy dishes</a>
              <a href="#" className="py-2 pr-4">Cold dishes</a>
              <a href="#" className="py-2 pr-4">Soup</a>
              <a href="#" className="py-2">Grill</a>
            </nav>
          </header>

          {/* Title content */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Choose dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine /> Dine in
            </button>
          </div>

          {/* Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-flow-cols 3 gap-16">
            {/* Card */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center text-gray-300 gap-2">
              <img src="food1.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full " />
              <p className="text-xl">Dish one</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">41 Bowls available</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center text-gray-300 gap-2">
              <img src="food2.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
              <p className="text-xl">Dish two</p>
              <span className="text-gray-400">$3.29</span>
              <p className="text-gray-600">37 Bowls available</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center text-gray-300 gap-2">
              <img src="food3.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
              <p className="text-xl">Dish three</p>
              <span className="text-gray-400">$2.50</span>
              <p className="text-gray-600">15 Bowls available</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center text-gray-300 gap-2">
              <img src="food4.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
              <p className="text-xl">Dish four</p>
              <span className="text-gray-400">$4.10</span>
              <p className="text-gray-600">25 Bowls available</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center text-gray-300 gap-2">
              <img src="food5.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
              <p className="text-xl mt-0">Dish five</p>
              <span className="text-gray-400">$7.09</span>
              <p className="text-gray-600">50 Bowls available</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center text-gray-300 gap-2">
              <img src="food6.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
              <p className="text-xl">Dish six</p>
              <span className="text-gray-400">$1.99</span>
              <p className="text-gray-600">30 Bowls available</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 fixed lg:static right-0 top-0 bg-[#1F1D2B] w-full h-full">
          {/* Orders */}
          <div className="relative pt-16 text-gray-300 p-8">
            <RiCloseLine className="absolute left-0 top-0 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl" /></div>
            <h1 className="text-2xl my-4">Orders #151416</h1>
            {/*   */}
            <div className="flex items-center gap-4 flex-wrap mb-8">
              <button className="bg-[#ec7c6a] text-white rounded-xl py-2 px-4">Dine in</button>
              <button className="text-[#ec7c6a] rounded-xl py-2 px-4 border border-gray-500">To Go</button>
              <button className="text-[#ec7c6a] rounded-xl py-2 px-4 border border-gray-500">Delivery</button>
            </div>
            {/* Card */}
            <div className="grid grid-cols-6 mb-4 p-4">
              <h5 className="col-span-4">Item</h5>
              <h5>Qty</h5>
              <h5>Price</h5>
            </div>
            {/* Product */}
            <div className="bg-[#262837] p-4 rounded-xl">
              <div className="grid grid-flow-col-6 mb-4">
                {/* Product description */}
                <div className="col-span-4 flex items-center gap-3">
                  <img src="food1.png" className="w-10 h-10 object-cover"/>
                  <div>
                    <h5 className="text-sm">Dish one</h5>
                    <p className="text-xs text-gray-500">$2.29</p>
                  </div>
                </div>
                {/* Qty */}
                <div>
                  <span>2</span>
                </div>
                {/* Price */}
                <div>
                  <span>$4.58</span>
                </div>
              </div>
              {/* Note */}
              <div className="grid grid-flow-cols-6 items-center">
                <form className="col-span-5">
                  <input type="text" className="bg-[#1F1D2B] py-2 px-4 rounder-lg outline-none" placeholder="Order note..."></input>
                </form>
                <div>
                  <button className="border-red-500 p-2 rounded-lg"><RiDeleteBin6Line className="text-red-500"/></button>
                </div>
              </div>

            </div>
        </div>
      </main>
    </div>
  )
}

export default App
