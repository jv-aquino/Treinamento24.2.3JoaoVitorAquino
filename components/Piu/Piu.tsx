import { User, PiuInfo } from "@/types/common";
import Image from "next/image";
import PiuInfos from "./PiuInfos";

interface PiuProps {
  user: User,
  info: PiuInfo
}

function Piu({ user, info }: PiuProps) {
  return ( 
    <div className="bg-slate-3 rounded-2xl flex gap-[30px]">
      <div className="flex gap-2">
        <Image src={user.profileUrl} alt="" width={96} height={96} />

        <div className="flex gap-2">
          <p>{user.nome}</p>
          <p>{user.piusername}</p>
        </div>
      </div>
      
      <PiuInfos info={info} />
    </div>
   );
}

export default Piu;