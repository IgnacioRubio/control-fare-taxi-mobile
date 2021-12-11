export interface WorkReport {
  id: number,
  description: string,
  kilometres: number,
  isSend: boolean,
  createAt: Date,
  modifiedAt?: Date
}