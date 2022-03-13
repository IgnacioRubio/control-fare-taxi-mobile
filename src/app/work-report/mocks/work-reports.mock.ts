import { WorkReport } from "@work-report/interfaces/work-report.interface";

export const WORK_REPORTS: WorkReport[] = [
  {
    id: "wr1",
    description: "3-dic-2021",
    kilometers: 0,
    isSend: false,
    createAt: new Date("4-dec-2021")    
  },
  {
    id: "wr2",
    description: "2-dic-2021",
    kilometers: 10,
    isSend: true,
    createAt: new Date("3-dec-2021")    
  },
  {
    id: "wr3",
    description: "1-dic-2021",
    kilometers: 20,
    isSend: false,
    createAt: new Date("2-dec-2021")    
  },
  {
    id: "wr4",
    description: "30-nov-2021",
    kilometers: 30,
    isSend: true,
    createAt: new Date("31-nov-2021")    
  },
  {
    id: "wr5",
    description: "29-nov-2021",
    kilometers: 40,
    isSend: true,
    createAt: new Date("30-nov-2021")    
  },
];