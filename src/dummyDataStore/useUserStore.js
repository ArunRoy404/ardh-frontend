import { create } from "zustand"
import { userRecords } from "../dummyData/userRecords"

const useUserStore = create((set) => ({
    userRecords,
    setUserRecords: (newData) => set({ userRecords: newData }),
}))

export default useUserStore
