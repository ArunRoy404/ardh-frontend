import { create } from "zustand"
import { ownerDetails } from "../dummyData/ownerDetailsRecords"

const useOwnerDetailsStore = create((set) => ({
    ownerDetails,
    setOwnerDetails: (newData) => set({ ownerDetails: newData }),
}))

export default useOwnerDetailsStore
