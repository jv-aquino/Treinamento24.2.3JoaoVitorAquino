import type { PiuInfo } from "@/types/common";

import Rts from '@/public/assets/icons/rts.svg'
import Comentarios from '@/public/assets/icons/comentarios.svg'
import Likes from '@/public/assets/icons/likes.svg'

function PiuInfos({ info }: { info: PiuInfo }) {
  return ( 
    <div className="flex gap-6">
      <button className="PiuInfo__button" type="button">
        <Rts className="PiuInfo__buttonIcon" />
        {info.rts}
      </button>
      <button className="PiuInfo__button" type="button">
        <Comentarios className="PiuInfo__buttonIcon" />
        {info.comentarios}
      </button>
      <button className="PiuInfo__button" type="button">
        <Likes className="PiuInfo__buttonIcon" />
        {info.likes}
      </button>
    </div>
   );
}

export default PiuInfos;