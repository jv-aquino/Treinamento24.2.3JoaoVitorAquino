import { Piu } from "@/types/common";
import PiuComponent from "../PiuComponent";
import { v4 as uuidv4 } from 'uuid';

interface PiuContainerProps {
  pius: Piu[], 
  setPius: React.Dispatch<React.SetStateAction<Piu[]>>,
  userId: number
}

function PiuContainer({ pius, setPius, userId }: PiuContainerProps) {
  return ( 
    <div className="flex flex-col gap-[46px]">
      {pius.map(piu => {
        return <PiuComponent piu={piu} setPius={setPius} isFromUser={piu.user.id === userId} key={uuidv4()} />
      })}
    </div>
   );
}

export default PiuContainer;