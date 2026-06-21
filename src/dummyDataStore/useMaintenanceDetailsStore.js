import { create } from "zustand"
import { maintenanceDetails } from "../dummyData/maintenanceDetailsRecords"

const useMaintenanceDetailsStore = create((set) => ({
    maintenanceDetails,
    setMaintenanceDetails: (newData) => set({ maintenanceDetails: newData }),
}))

export default useMaintenanceDetailsStore
