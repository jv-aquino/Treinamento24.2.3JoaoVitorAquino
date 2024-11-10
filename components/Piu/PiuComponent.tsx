import { Piu } from "@/types/common";
import Image from "next/image";
import PiuInfos from "./PiuInfos";

function PiuComponent({ piu }: { piu: Piu }) {
  return ( 
    <div className="bg-slate-3 rounded-2xl p-6 flex flex-col gap-[30px]">
      <div className="flex gap-2 items-center">
        <div className="flex items-center justify-center w-24 h-24 rounded-[48px] bg-blueGradient">
          <div className="flex items-center justify-center bg-slate-3 w-[88px] h-[88px] rounded-[48px]">
            <Image
              className="rounded-[48px]"
              src={"/assets/images/" + piu.user.profileUrl}
              alt=""
              width={80}
              height={80} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p>{piu.user.nome}</p>
          <p>@{piu.user.piusername}</p>
        </div>
      </div>

      <p>{piu.conteudo}</p>
      
      <PiuInfos info={piu.info} />
    </div>
   );
}

export default PiuComponent;