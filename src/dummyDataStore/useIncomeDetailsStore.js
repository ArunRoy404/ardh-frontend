import { create } from "zustand"
import { incomeDetails } from "../dummyData/incomeDetailsRecords"

const useIncomeDetailsStore = create((set) => ({
    incomeDetails,
    setIncomeDetails: (newData) => set({ incomeDetails: newData }),
}))

export default useIncomeDetailsStore
