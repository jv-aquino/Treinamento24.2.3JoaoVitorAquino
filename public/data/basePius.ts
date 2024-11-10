import { Piu } from "@/types/common";

export const basePius: Piu[] = [
  {
    conteudo: 'NÃO há imoralidade em furar a fila do bandejão quem não defende é porque não tem amigos',
    createdAt: new Date('December 1, 2023'),
    user: {
      nome: 'Pedro Souza',
      profileUrl: 'pebaiano.png',
      piusername: 'pebaiano'
    },
    info: {
      rts: 5,
      comentarios: 3,
      likes:8
    }
  },
  {
    conteudo: 'Oiiiiiii (Intenção de furar a fila do bandejão)',
    createdAt: new Date('January 1, 2024'),
    user: {
      nome: 'Anna Karoline',
      profileUrl: 'anna.png',
      piusername: 'nnakarol'
    },
    info: {
      rts: 3,
      comentarios: 12,
      likes: 27
    }
  },
  {
    conteudo: '3,14159265358979323846164338327950288419726939937510582097494459230781640628620899862803482534211706798214808651',
    createdAt: new Date('February 1, 2023'),
    user: {
      nome: 'Arthur Maia',
      profileUrl: 'arthur.png',
      piusername: 'Ntutsdoscrias'
    },
    info: {
      rts: 3,
      comentarios: 14,
      likes: 15
    }
  }
]