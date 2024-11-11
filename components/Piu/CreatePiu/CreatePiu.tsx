import './CreatePiu.css'
import { Piu } from "@/types/common";
import { useState } from "react";
import { createPiu } from "@/utils/createPiu";
import Image from 'next/image';

interface CreatePiuProps {
  setPius: React.Dispatch<React.SetStateAction<Piu[]>>;
}

function CreatePiu({ setPius }: CreatePiuProps) {
  const [piu, setPiu] = useState<string>('');

  const handleCreatePiu = (e: React.FormEvent) => {
    e.preventDefault();
    if (piu.length > 140 || piu.length <= 0) return;

    setPius(prev => [createPiu(prev.length, piu), ...prev]);

    setPiu('');
  };

  return (
    <form onSubmit={handleCreatePiu} className='h-min'>
      <div className="CreatePiu__wrap h-min">
        <textarea
          className={`CreatePiu__textarea no-scrollbar ${piu.length >= 140 ? 'maxLen' : ''}`}
          name="criarPiu"
          placeholder="Quero dar um piu..."
          value={piu}
          onChange={e => setPiu(e.target.value)}
        />
        <Image src="/assets/icons/leftIcons.svg" alt='' width={132} height={20} 
          className='absolute bottom-4 left-4' />


        <button type="submit" className='absolute bottom-4 right-4'>
          <Image src="/assets/icons/sendIcon.svg" alt="Enviar Piu" width={20} height={20} />
        </button>
      </div>
    </form>
  );
}

export default CreatePiu;
