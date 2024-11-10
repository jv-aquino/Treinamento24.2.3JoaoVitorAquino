import type { New } from "@/types/common";
import Image from "next/image";

function NewsCard({ noticia }: { noticia: New }) {
  return ( 
    <li className="flex gap-2 py-6 border-t border-slate-8">
      <Image src={noticia.src} alt={noticia.desc} width={112} height={112} className="flex-shrink-0 rounded-sm" />

      <div className="flex flex-col justify-center gap-1">
        <h3 className="font-bold text-subtitle">{noticia.titulo}</h3>
        <p className="">{noticia.desc}</p>
      </div>
    </li>
   );
}

export default NewsCard;