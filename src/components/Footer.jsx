import chicasLogo from '../assets/img/chicas_logo.png';

const Footer = () => {
    return (
      
        <footer className=" bg-footer p-4">
            <div className="mx-auto w-full max-w-screen-xl p-4 lg:py-8 border-pink-300 border-8 border-double">
                <div className="md:flex md:justify-around font-chicas">
                    
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-lg font-bold text-pink-300 uppercase">Servicio al cliente</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Preguntas Frecuentes</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Ubicaciones</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Contacto</a>
                            </li>
                        </ul>
                    </div>
                    <div className='px-10'>
                        <h2 className="mb-6 text-lg font-bold text-pink-300 uppercase">Nosotros</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline ">Sobre Nosotros</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline ">Distribuidor</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Bolsa de Trabajo</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-lg font-bold text-pink-300 uppercase">Más Información</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Aviso de Privacidad</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Términos y Condiciones</a>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div className="mb-6 md:mb-0">
                    <a href="#" className="flex items-center">
                        <img src={chicasLogo} className="h-20 me-3" alt="Chicas Logo" />
                    </a>
                    </div>
                </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="#" className="hover:underline">Chicas Cosmetics™</a>. Todos los Derechos Reservados.
                </span>
                <div className="flex mt-4 sm:justify-center sm:mt-0">
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="#" fill="currentColor" viewBox="0 0 8 19">
                                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                            </svg>
                        <span className="sr-only">Facebook page</span>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                    <svg className='w-4 h-4' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 169.063 169.063" xmlSpace="preserve" fill="currentColor">
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
                        <span className="sr-only">Instagram</span>
                    </a>
                    
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                    <svg className='w-4 h-4' viewBox="0 0 512 512" id="icons" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor">
                        <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"/>
                    </svg>
                        <span className="sr-only">Tiktok</span>
                    </a>
                    
                </div>
            </div>
            </div>
        </footer>

    )
  }
  
  export default Footer