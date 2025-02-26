import chicasLogo from '../assets/img/chicas_logo.png';
import React, { useState } from 'react';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }

  return (
    <header className='shadow-md bg-white font-sans tracking-wide relative z-50'>
      <nav
        className='flex items-center lg:justify-center flex-wrap gap-5 relative py-3 sm:px-10 px-4 border-gray-200 border-b lg:min-h-[80px] max-lg:min-h-[60px]'>
        <a href="javascript:void(0)"><img src={chicasLogo} alt="logo"
          className='md:w-[170px] w-32' />
        </a>

        <div className="space-x-4 md:absolute md:right-10 flex items-center max-md:ml-auto">
          <div className="w-7 h-7 cursor-pointer flex items-center justify-center rounded-md text-gray-800 hover:bg-pink-400 hover:text-white transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className=" w-5 h-5 fill-current transition-all" viewBox="0 0 155.139 155.139">
              <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z" data-original="#010002" />
            </svg>
          </div>
          <div className="w-7 h-7 cursor-pointer flex items-center justify-center rounded-md text-gray-800 hover:bg-pink-400 hover:text-white transition-all">
            <svg className='w-5 h-5' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 169.063 169.063" xmlSpace="preserve" fill="currentColor">
                <path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752
                                    c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407
                                    c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752
                                    c17.455,0,31.656,14.201,31.656,31.655V122.407z" />
                <path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561
                                    C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561
                                    c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z" />
                <path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78
                                    c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78
                                    C135.661,29.421,132.821,28.251,129.921,28.251z" />
            </svg>
          </div>
          <div className="w-7 h-7 cursor-pointer flex items-center justify-center rounded-md text-gray-800 hover:bg-pink-400 hover:text-white transition-all">
            <svg className='w-4 h-4' viewBox="0 0 512 512" id="icons" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor">
                <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"/>
            </svg>
          </div>
        </div>
      </nav>

      <div className='flex flex-wrap py-3.5 px-10 overflow-x-auto lg:justify-center'>

      <div id="collapseMenu"
          className={`
            ${isMenuOpen ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 transition-transform duration-500 ease-in-out translate-x-0' : 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 transition-transform duration-500 ease-in-out -translate-x-full'}
            lg:!block lg:w-auto lg:h-auto lg:relative lg:translate-x-0 lg:transition-none
        `}>
          <button id="toggleClose" onClick={handleClick} className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border'>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 320.591 320.591">
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#ffffff"></path>
              <path 
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"></path>
            </svg>
          </button>

          <ul
            className='lg:flex lg:justify-center lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
            <li className='mb-6 hidden max-lg:block'>
              <a href="javascript:void(0)"><img src={chicasLogo} alt="logo" className='w-36' />
              </a>
            </li>
            <li className='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
              className='hover:text-pink-500 text-pink-300 font-bold text-[15px] block'>Inicio</a></li>
            <li className='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
              className='hover:text-pink-500 text-pink-300 font-bold text-[15px] block'>Tiendas</a></li>
            <li className='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
              className='hover:text-pink-500 text-pink-300 font-bold text-[15px] block'>Nosotros</a></li>
            <li className='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
              className='hover:text-pink-500 text-pink-300 font-bold text-[15px] block'>Más</a></li>
          </ul>
        </div>

        <div className='flex ml-auto lg:hidden'>
          <button id="toggleOpen" onClick={handleClick}>    
            <svg className="w-7 h-7 hover:fill-pink-500" fill="#d794bb" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header