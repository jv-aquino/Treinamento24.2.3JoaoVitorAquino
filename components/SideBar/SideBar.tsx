'use client'

import './SideBar.css'
import { useState } from "react";
import { navItens } from "@/public/data/navItens";
import Image from "next/image";

function SideBar() {
  const [index, setIndex] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  return ( 
    <>
      <div className={"SideBar w-full lg:w-[310px] h-screen flex-shrink-0 z-10 fixed bg-slate-1 lg:sticky top-0 " + (open ? 'show' : '')}>
        <Image src='/assets/images/logo.svg' alt="PiuPiuwer" width={226} height={40} className="pt-8 pb-8 mx-auto" />
        <nav className="SideBar__nav">
          <ul className="flex flex-col gap-2">
            {navItens.map(item => {
              return (
                <li className={(item.id === index) ? "selected" : ''} key={item.id}>
                  <button onClick={() => setIndex(item.id)}>
                    <Image src={'/assets/icons/' + item.src} alt="" width={18} height={18}  />
                    {item.conteudo}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      
        <div className="absolute right-1/2 translate-x-1/2 bottom-2">
          <Image src='/assets/images/user.png' alt="User Profile" width={40} height={40} className="mx-auto rounded-full" />
          <button className="mx-auto mt-4 flex items-center">
            <Image src='/assets/icons/logout.svg' alt="Logout" width={40} height={40} className="mx-auto" />
          </button>
        </div>
      </div>
      
      <button type="button" className="lg:hidden fixed top-3 right-3 z-20 rounded w-6 h-6 bg-indigo-9 
      flex justify-center items-center" 
      onClick={() => {
        return setOpen(prev => !prev)
      }}>
        <Image src={`/assets/icons/${open ? 'close' : 'menu'}.svg`} alt='Abrir/fechar Sidebar' width={16} height={16} />
      </button>
    </>
   );
}

export default SideBar;