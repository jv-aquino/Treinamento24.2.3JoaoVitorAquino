'use client'

import { useState } from "react";
import { navItens } from "@/public/data/navItens";
import Image from "next/image";

function SideBar() {
  const [index, setIndex] = useState<number>(0);

  return ( 
    <div className="w-[310px] h-screen flex-shrink-0 sticky top-0">
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
      
      <Image src='/assets/images/user.png' alt="User Profile" width={40} height={40} className="mx-auto mt-4 rounded-full" />
      <button className="mx-auto mt-4 flex items-center">
        <Image src='/assets/icons/logout.svg' alt="Logout" width={40} height={40} className="mx-auto" />
      </button>
    </div>
   );
}

export default SideBar;