import { create } from "zustand"
import { tenantRecords } from "../dummyData/tenantRecords"

const useTenantStore = create((set) => ({
    tenantRecords,
    setTenantRecords: (newData) => set({ tenantRecords: newData }),
}))

export default useTenantStore
