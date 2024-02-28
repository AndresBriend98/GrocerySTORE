import React from 'react'
import { RiHome2Line, RiPercentLine, RiPieChartLine, RiMailLine, RiNotification3Line, RiSettings4Line, RiLoginCircleLine} from "react-icons/ri";

const Sidebar = (props) => {

    const {showMenu} = props;

    return (
        <div className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all 
        ${showMenu 
            ? "left-0" 
            : "-left-full"}`
            
        }>{/* Si showMenu esta positivo (?) hace una cosa y sino la otra (:) */}
            <div>
                <ul className='pl-4'>
                    <li>
                        <h1 className='text-2xl text-gray-300 uppercase font-bold text-center my-5'>Logo</h1>
                    </li>
                    <li className='bg-[#262837] p-4 rounded-tl-x rounded-bl-xl'>
                        <a href='#' className='bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-white'>
                            <RiHome2Line className='text-xl' />
                        </a>
                    </li>

                    <li className='hover:bg-[#262837] p-4 rounded-tl-x rounded-bl-xl group transition-colors'>
                        <a href='#' className='p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors'>
                            <RiPercentLine className='text-xl' />
                        </a>
                    </li>

                    <li className='hover:bg-[#262837] p-4 rounded-tl-x rounded-bl-xl group transition-colors'>
                        <a href='#' className='p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors'>
                            <RiPieChartLine className='text-xl' />
                        </a>
                    </li>

                    <li className='hover:bg-[#262837] p-4 rounded-tl-x rounded-bl-xl group transition-colors'>
                        <a href='#' className='p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors'>
                            <RiMailLine className='text-xl' />
                        </a>
                    </li>

                    <li className='hover:bg-[#262837] p-4 rounded-tl-x rounded-bl-xl group transition-colors'>
                        <a href='#' className='p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors'>
                            <RiNotification3Line className='text-xl' />
                        </a>
                    </li>

                    <li className='hover:bg-[#262837] p-4 rounded-tl-x rounded-bl-xl group transition-colors'>
                        <a href='#' className='p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors'>
                            <RiSettings4Line className='text-xl' />
                        </a>
                    </li>

                </ul>
            </div>
            <div>
                <ul className='pl-4'>
                    <li className='hover:bg-[#262837] p-4 rounded-tl-x rounded-bl-xl group transition-colors'>
                        <a href='#' className='p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors'>
                            <RiLoginCircleLine className='text-xl' />
                        </a>
                    </li>
                </ul>
            </div>

        </div>

    )
}

export default Sidebar