import { create } from "zustand"
import { expenseData, expenseConfig } from "../dummyData/expenseCategories"
import { expenseRecords } from "../dummyData/expenseRecords"

const useExpenseStore = create((set) => ({
    expenseData,
    expenseConfig,
    expenseRecords,
    setExpenseData: (newData) => set({ expenseData: newData }),
    setExpenseRecords: (newData) => set({ expenseRecords: newData }),
}))

export default useExpenseStore
