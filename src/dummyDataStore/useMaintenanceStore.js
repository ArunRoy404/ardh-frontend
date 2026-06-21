import { create } from "zustand"
import { openMaintenance } from "../dummyData/openMaintenance"
import { maintenanceRecords } from "../dummyData/maintenanceRecords"

const useMaintenanceStore = create((set) => ({
    openMaintenance,
    maintenanceRecords,
    setOpenMaintenance: (newData) => set({ openMaintenance: newData }),
    setMaintenanceRecords: (newData) => set({ maintenanceRecords: newData }),
}))

export default useMaintenanceStore
