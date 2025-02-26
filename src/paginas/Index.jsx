import { useState, useEffect } from 'react';

import tienda_chicas from '../assets/img/tienda_chicas.png'
import logo_pinkup from '../assets/img/logo_pinkup.png'
import goc_logo_b from '../assets/img/goc_logo_b.png'
import gyk_logo from '../assets/img/gyk_logo.png'
import pinkup from '../assets/img/pinkup.png'
import gyk from '../assets/img/gyk.png'
import goc from '../assets/img/goc.png'
import hero_chicas from '../assets/img/hero_chicas.JPG'

const Index = () => {

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <div className="flex flex-col gap-10">
      <section className='mx-auto mt-5 w-5/6'>
        <div id="divPrincipal" className="bg-white relative flex flex-col items-center justify-center rounded-xl h-max py-5 lg:flex-row lg:gap-4 lg:p-4">
          <div id="primerDiv" className="absolute top-1/2 left-1/2 w-4/6 -translate-x-1/2 -translate-y-1/2 bg-white/80 p-4 rounded-lg shadow-lg z-10 lg:static lg:transform-none lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:bg-pink-100">
            <h1 className="text-6xl font-chicas mb-5 font-bold">Eleva tu rutina de <span className="text-pink-400">Maquillaje</span></h1>
            <p>Chicas Cosmeticos es tu socio de confianza en cosméticos premium. Distribuimos las reconocidas marcas Pink Up, GOC y G&K, asegurando que tenga acceso a los mejores productos de belleza disponibles. Con varias sucursales en toda la República Mexicana, traemos la conveniencia y calidad directamente hasta ti. </p>
          </div>
          <div id="segundoDiv" className="relative h-max z-0 w-5/6 lg:static lg:z-auto">
            <img src={tienda_chicas} alt="" className="rounded-xl object-cover w-full h-[500px]"/>
          </div>
        </div>
      </section>

      <section className='flex flex-col justify-between gap-10 lg:h-fit lg:grid lg:grid-cols-3 lg:mx-5'>
        <div 
        className="relative w-4/5 mx-auto h-80 bg-gray-200 rounded-xl grid grid-cols-2 lg:w-full lg:h-[450px] lg:grid-cols-1 lg:flex lg:items-center lg:justify-center"
        style={isLargeScreen ? { backgroundImage: `url(${pinkup})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
          >

          <div className="absolute inset-0 bg-black/75 rounded-xl lg:block hidden"></div>

          <div id="segundoDiv" className="relative z-10 grid justify-items-center text-white lg:w-full mx-auto text-center lg:grid-rows-7 lg:content-between lg:h-full">
            <img src={logo_pinkup} alt="logo_pinkup" className="w-1/3 mt-3 max-w-48 lg:row-span-1 lg:self-start"/>
            <p className="mx-3 w-5/6 text-black lg:text-white lg:row-span-5 my-auto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi ullam unde impedit nisi! Consequuntur adipisci quasi tenetur ut amet magni officiis suscipit, eius neque necessitatibus qui porro voluptatum, nam tempora.
            </p>
            <button className="w-full bg-pink-500 group hover:bg-pink-600 text-white font-chicas uppercase font-bold py-2 px-4 rounded-md lg:row-span-1">
              <span className="group-hover:hidden">Comprar en Línea</span>
              <span className="hidden group-hover:inline">Comprar en Línea ➜</span>
            </button>
          </div>
          <img id="imagenFondo" src={pinkup} alt="" className="object-cover h-full w-full rounded-r-xl lg:hidden"/>
        </div>
        
        
        <div 
        className="relative w-4/5 mx-auto h-80 bg-gray-200 rounded-xl grid grid-cols-2 lg:w-full lg:h-[450px] lg:grid-cols-1 lg:flex lg:items-center lg:justify-center"
        style={isLargeScreen ? { backgroundImage: `url(${goc})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
          >

          <div className="absolute inset-0 bg-black/75 rounded-xl lg:block hidden"></div>

          <img id="imagenFondo" src={goc} alt="" className="object-cover h-full w-full rounded-l-xl lg:hidden"/>
          <div id="segundoDiv" className="relative z-10 grid justify-items-center text-white lg:w-full mx-auto text-center lg:grid-rows-7 lg:content-between lg:h-full">
            <img src={goc_logo_b} alt="logo_goc" className="w-1/3 mt-3 max-w-48 max-h-20 lg:row-span-1 lg:self-start"/>
            <p className="mx-3 w-5/6 text-black lg:text-white lg:row-span-5 my-auto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi ullam unde impedit nisi! Consequuntur adipisci quasi tenetur ut amet magni officiis suscipit, eius neque necessitatibus qui porro voluptatum, nam tempora.
            </p>
            <button className="w-full bg-white text-black group hover:bg-black hover:text-white font-chicas uppercase font-bold py-2 px-4 rounded-r-md lg:rounded-md lg:row-span-1">
              <span className="group-hover:hidden">Comprar en Línea</span>
              <span className="hidden group-hover:inline">Comprar en Línea ➜</span>
            </button>
          </div>
        </div>
        
        
        <div 
        className="relative w-4/5 mx-auto h-80 bg-gray-200 rounded-xl grid grid-cols-2 lg:w-full lg:h-[450px] lg:grid-cols-1 lg:flex lg:items-center lg:justify-center"
        style={isLargeScreen ? { backgroundImage: `url(${gyk})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
          >

          <div className="absolute inset-0 bg-black/75 rounded-xl lg:block hidden"></div>

          <div id="segundoDiv" className="relative z-10 grid justify-items-center text-white lg:w-full mx-auto text-center lg:grid-rows-7 lg:content-between lg:h-full">
            <img src={gyk_logo} alt="logo_goc" className="mt-3 max-w-40 max-h-14 lg:row-span-1 lg:self-start"/>
            <p className="mx-3 w-5/6 text-black lg:text-white lg:row-span-5 my-auto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi ullam unde impedit nisi! Consequuntur adipisci quasi tenetur ut amet magni officiis suscipit, eius neque necessitatibus qui porro voluptatum, nam tempora.
            </p>
            <button className="w-full bg-[#323091] text-white group hover:bg-[#211f67] hover:text-white font-chicas uppercase font-bold py-2 px-4 rounded-md lg:row-span-1">
              <span className="group-hover:hidden">Comprar en Línea</span>
              <span className="hidden group-hover:inline">Comprar en Línea ➜</span>
            </button>
          </div>
          <img id="imagenFondo" src={gyk} alt="" className="object-cover h-full w-full rounded-r-xl lg:hidden"/>
        </div>
      </section>

      <section className="w-full mb-9">
        <div id="localiza_tienda" 
            style={{ 
                width: "100%", 
                height: "400px", 
                backgroundImage: `url(${hero_chicas})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative' 
            }}
        >
        {/* Overlay */}
          <div 
              style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)' 
              }}
          ></div>

          {/* Contenido (p y button) */}
          <div className="inset-0 flex flex-col items-center justify-center text-center relative h-full"> 
            <p className="text-chicas-texto text-4xl font-chicas mb-4 uppercase">
                Encuentra tu tienda más cercana
                <br />
                <span className='text-4xl font-bold mb-4 uppercase text-green-100'>Y Vive la experiencia chicas</span>
            </p>
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-md">
                LOCALIZAR
            </button>
         </div>
        </div>
      </section>
    </div>
  )
}

export default Index