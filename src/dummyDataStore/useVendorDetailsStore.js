import { create } from "zustand"
import { vendorDetails } from "../dummyData/vendorDetailsRecords"

const useVendorDetailsStore = create((set) => ({
    vendorDetails,
    setVendorDetails: (newData) => set({ vendorDetails: newData }),
}))

export default useVendorDetailsStore
