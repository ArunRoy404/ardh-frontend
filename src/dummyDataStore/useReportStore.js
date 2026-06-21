import { create } from "zustand"
import { incomeReportRecords, expenseReportRecords } from "../dummyData/reportRecords"

const useReportStore = create((set) => ({
    incomeReportRecords,
    expenseReportRecords,
    setIncomeReportRecords: (newData) => set({ incomeReportRecords: newData }),
    setExpenseReportRecords: (newData) => set({ expenseReportRecords: newData }),
}))

export default useReportStore
