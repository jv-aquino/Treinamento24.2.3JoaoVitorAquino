export type User = {
  id: number,
  nome: string,
  profileUrl: string,
  piusername: string,
}

export type PiuInfo = {
  comentarios: number,
  rts: number,
  likes: number
}

export type Piu = {
  id: number,
  conteudo: string,
  createdAt: Date,
  user: User,
  info: PiuInfo
}
