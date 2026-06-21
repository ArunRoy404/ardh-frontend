import { create } from "zustand"
import { ownerRecords } from "../dummyData/ownerRecords"

const useOwnerStore = create((set) => ({
    ownerRecords,
    setOwnerRecords: (newData) => set({ ownerRecords: newData }),
}))

export default useOwnerStore
