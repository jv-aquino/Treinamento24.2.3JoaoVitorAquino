import { Piu } from "@/types/common";
import PiuComponent from "../PiuComponent";
import { v4 as uuidv4 } from 'uuid';

function PiuContainer({ pius }: { pius: Piu[] }) {
  return ( 
    <div className="flex flex-col gap-[46px]">
      {pius.map(piu => {
        return <PiuComponent piu={piu} key={uuidv4()} />
      })}
    </div>
   );
}

export default PiuContainer;