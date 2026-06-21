import { create } from "zustand"
import { incomeRecords } from "../dummyData/incomeRecords"

const useIncomeStore = create((set) => ({
    incomeRecords,
    setIncomeRecords: (newData) => set({ incomeRecords: newData }),
}))

export default useIncomeStore
