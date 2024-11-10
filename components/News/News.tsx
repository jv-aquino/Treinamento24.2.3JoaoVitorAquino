import { baseNews } from "@/public/data/baseNews";
import Image from "next/image";
import NewsCard from "./NewsCard";
import { v4 as uuidv4 } from 'uuid';

function News() {
  return ( 
    <div className="w-[340px] flex-shrink-0 h-screen flex flex-col px-4 py-8">
      <h2 className="flex items-center text-headline font-bold pb-6 flex-shrink-0">
        <Image src="/assets/icons/newsIcon.svg" alt='' width={32} height={32} /> 
        Pius em alta
      </h2>

      <div className="overflow-y-auto no-scrollbar flex-1">
        {baseNews.map(noticia => (
          <NewsCard noticia={noticia} key={uuidv4()} />
        ))}
      </div>
    </div>
  );
}

export default News;
