export interface WorkReport {
  id?: number,
  description: string,
  kilometers: number,
  isSend: boolean,
  createAt?: Date,
  modifiedAt?: Date
}