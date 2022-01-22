export interface Fare {
  id?: number,
  origin: string,
  destination: string,
  price: number,
  isPayCard: boolean,
  isSespaService: boolean,
  workReportId: number,
  createAt?: Date,
  modifiedAt?: Date
}