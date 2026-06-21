import { create } from "zustand"
import { expenseDetails } from "../dummyData/expenseDetailsRecords"

const useExpenseDetailsStore = create((set) => ({
    expenseDetails,
    setExpenseDetails: (newData) => set({ expenseDetails: newData }),
}))

export default useExpenseDetailsStore
