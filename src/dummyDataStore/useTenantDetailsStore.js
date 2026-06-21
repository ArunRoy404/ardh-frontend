import { create } from "zustand"
import { tenantDetails } from "../dummyData/tenantDetailsRecords"

const useTenantDetailsStore = create((set) => ({
    tenantDetails,
    setTenantDetails: (newData) => set({ tenantDetails: newData }),
}))

export default useTenantDetailsStore
