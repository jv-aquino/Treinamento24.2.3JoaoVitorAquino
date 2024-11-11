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
    if (piu.length > 140) return;

    // Crie um novo array ao invés de mutar o existente
    setPius(prev => [createPiu(prev.length, piu), ...prev]);

    setPiu('');
  };

  return (
    <form onSubmit={handleCreatePiu}>
      <div className="CreatePiu__wrap">
        <textarea
          className={`CreatePiu__textarea no-scrollbar ${piu.length >= 140 ? 'maxLen' : ''}`}
          name="criarPiu"
          placeholder="Quero dar um piu..."
          maxLength={140}
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
