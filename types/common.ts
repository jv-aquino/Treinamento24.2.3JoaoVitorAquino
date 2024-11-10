export type User = {
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
  conteudo: string,
  createdAt: Date,
  isUserAtual: boolean | undefined,
  user: User,
  info: PiuInfo
}
