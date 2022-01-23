export default interface Article {
  name: string
  image: string
  clip?: string
  title: string
  body: string
  summary: string
  color: string
}

export interface ChangesInView {
  inView: string
}

export interface ViewTriggerer {
  handleInView(articleName: string): void
}
