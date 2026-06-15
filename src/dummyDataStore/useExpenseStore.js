import { create } from "zustand"
import { expenseData, expenseConfig } from "../dummyData/expenseCategories"

const useExpenseStore = create((set) => ({
    expenseData,
    expenseConfig,
    setExpenseData: (newData) => set({ expenseData: newData }),
}))

export default useExpenseStore
