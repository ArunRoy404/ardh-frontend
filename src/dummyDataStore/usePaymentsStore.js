import { create } from "zustand"
import { recentPayments } from "../dummyData/recentPayments"

const usePaymentsStore = create((set) => ({
    recentPayments,
    setRecentPayments: (newPayments) => set({ recentPayments: newPayments }),
}))

export default usePaymentsStore
