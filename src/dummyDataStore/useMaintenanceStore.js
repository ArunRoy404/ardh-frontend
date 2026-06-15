import { create } from "zustand"
import { openMaintenance } from "../dummyData/openMaintenance"

const useMaintenanceStore = create((set) => ({
    openMaintenance,
    setOpenMaintenance: (newData) => set({ openMaintenance: newData }),
}))

export default useMaintenanceStore
