export interface WorkReport {
  id: string,
  description: string,
  kilometers: number,
  isSend: boolean,
  createAt?: Date,
  modifiedAt?: Date
}