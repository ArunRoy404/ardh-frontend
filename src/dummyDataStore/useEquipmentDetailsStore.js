import { create } from "zustand"
import { equipmentDetails } from "../dummyData/equipmentDetailsRecords"

const useEquipmentDetailsStore = create((set) => ({
    equipmentDetails,
    setEquipmentDetails: (newData) => set({ equipmentDetails: newData }),
}))

export default useEquipmentDetailsStore
