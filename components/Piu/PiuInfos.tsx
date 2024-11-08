import { PiuInfo } from "@/types/common";

function PiuInfos({ info }: { info: PiuInfo }) {
  return ( 
    <div className="flex gap-6">
      <button type="button">{info.comentarios}</button>
      <button type="button">{info.rts}</button>
      <button type="button">{info.likes}</button>
    </div>
   );
}

export default PiuInfos;