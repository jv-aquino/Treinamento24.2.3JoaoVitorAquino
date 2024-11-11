'use client'

import { Piu } from "@/types/common";
import { useState, useRef } from "react";
import PiuContainer from "../Piu/PiuContainer/PiuContainer";
import { basePius } from "@/public/data/basePius";
import SearchPiu from "../Piu/SearchPiu/SearchPiu";

function MainFeed() {
  const [pius, setPius] = useState<Piu[]>(basePius);
  const [searchTerm, setSearchTerm] = useState("");
  const mainRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const filteredPius = pius.filter((piu) =>
    piu.conteudo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return ( 
    <main className="flex-1 flex flex-col gap-[32px] py-8 px-8 
    border-x border-slate-8 overflow-y-auto h-screen no-scrollbar scroll-smooth relative"
    ref={mainRef}>
      <SearchPiu searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <div className="w-full border border-slate-8"></div>

      <PiuContainer pius={filteredPius} setPius={setPius} userId={1} />

      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-1/2 text-white p-1 rounded shadow-md bg-slate-1 hover:bg-indigo-9 transition"
      >
        ⬆️
      </button>
    </main>
   );
}

export default MainFeed;