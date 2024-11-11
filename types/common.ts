export type NavItem = {
  id: number,
  conteudo: string,
  src: string,
}

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

export type New = {
  titulo: string,
  desc: string,
  src: string,
}