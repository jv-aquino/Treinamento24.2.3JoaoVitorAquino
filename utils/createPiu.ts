import { baseUser } from "@/public/data/baseUser";
import { Piu } from "@/types/common";

export function createPiu(piusLength: number, conteudo: string): Piu {
  return {
    id: piusLength,
    conteudo: conteudo,
    createdAt: new Date(),
    user: baseUser,
    info: {
      rts: 0,
      comentarios: 0,
      likes: 0
    }
  }
}