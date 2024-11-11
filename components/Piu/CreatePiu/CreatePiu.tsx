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
    <form onSubmit={handleCreatePiu} className='h-[138px]'>
      <div className="CreatePiu__wrap h-[138px]">
        <textarea
          className={`CreatePiu__textarea no-scrollbar ${piu.length >= 140 ? 'maxLen' : ''}`}
          name="criarPiu"
          placeholder="Quero dar um piu..."
          value={piu}
          onChange={e => setPiu(e.target.value)}
        />
        <Image src="/assets/icons/leftIcons.svg" alt='' width={132} height={20} 
          className='CreatePiu__icons absolute bottom-4 left-4 z-10' />

        <p className={`CreatePiu__contador absolute bottom-4 left-[55%] lg:left-1/2 ${piu.length >= 140 ? 'maxLen' : ''}`}>
          {piu.length}/140
          <span
            className={`absolute left-0 bottom-[-2px] h-[3px] transition-all ${piu.length >= 140 ? 'bg-red-400' : 'bg-indigo-9'}`}
            style={{ width: `${Math.min((piu.length / 140) * 100, 100)}%` }}
          ></span>
        </p>

        <button type="submit" className='absolute bottom-4 right-4'>
          <Image src="/assets/icons/sendIcon.svg" alt="Enviar Piu" width={20} height={20} />
        </button>
      </div>
    </form>
  );
}

export default CreatePiu;
