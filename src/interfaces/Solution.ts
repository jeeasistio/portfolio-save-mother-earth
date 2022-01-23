import Article from './Article'

export default interface Solution extends Article {
  images: SolutionImages[]
}

export interface SolutionImages {
  src: string
  alt: string
  rows: string
  cols: string
}
