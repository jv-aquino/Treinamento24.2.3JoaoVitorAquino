import { baseNews } from "@/public/data/baseNews";

import Image from "next/image";
import NewsCard from "./NewsCard";
import { v4 as uuidv4 } from 'uuid';

function News() {
  return ( 
    <div className="w-[360px] flex-shrink-0 overflow-y-auto h-screen px-4 py-8 no-scrollbar">
      <h2 className="flex text-headline font-bold pb-6">
        <Image src="/assets/icons/newsIcon.svg" alt='' width={32} height={32} /> 
        Pius em alta
      </h2>

      {baseNews.map(noticia => {
        return <NewsCard noticia={noticia} key={uuidv4()} />
      })}
    </div>
   );
}

export default News;