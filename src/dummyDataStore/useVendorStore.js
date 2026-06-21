import { create } from "zustand"
import { vendorRecords } from "../dummyData/vendorRecords"

const useVendorStore = create((set) => ({
    vendorRecords,
    setVendorRecords: (newData) => set({ vendorRecords: newData }),
}))

export default useVendorStore
