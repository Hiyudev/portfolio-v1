export default interface IProject {
  title: string
  en_Description: string
  pt_Description: string
  tags: string[]
  thumbnail: string
  github: string | null,
  website: string | null,
  client: boolean,
  feature: boolean
}
