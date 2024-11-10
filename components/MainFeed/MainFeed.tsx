'use client'

import { Piu } from "@/types/common";
import { useState } from "react";
import PiuContainer from "../Piu/PiuContainer/PiuContainer";
import { basePius } from "@/public/data/basePius";

function MainFeed() {
  const [pius, setPius] = useState<Piu[]>(basePius);

  return ( 
    <main className="flex-1 flex flex-col gap-[46px] py-8 px-8 border-x border-slate-8 overflow-y-auto h-screen no-scrollbar">
      <PiuContainer pius={pius} setPius={setPius} userId={1} />
    </main>
   );
}

export default MainFeed;