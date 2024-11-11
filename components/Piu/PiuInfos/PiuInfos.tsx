import './PiuInfos.css'
import type { PiuInfo } from "@/types/common";

import { useState } from 'react';
import Rts from '@/public/assets/icons/rts.svg'
import Comentarios from '@/public/assets/icons/comentarios.svg'
import Likes from './Likes';

function PiuInfos({ info }: { info: PiuInfo }) {
  const [isLiked, setIsLiked] = useState(false);

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
      <button className="PiuInfo__button" type="button" onClick={() => setIsLiked(prev => !prev)}>
        <Likes className={"PiuInfo__buttonIcon " + (isLiked ? 'marked' : '')} fillColor={isLiked ? '#3c61dd' : 'none'} />
        {info.likes + (isLiked ? 1 : 0)}
      </button>
    </div>
   );
}

export default PiuInfos;