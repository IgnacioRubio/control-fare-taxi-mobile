export interface Fare {
  id: string,
  origin: string,
  destination: string,
  price: number,
  isPayCard: boolean,
  isSespaService: boolean,
  workReportId: string,
  createAt?: Date,
  modifiedAt?: Date
}