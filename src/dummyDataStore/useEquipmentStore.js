import { create } from "zustand"
import { equipmentRecords } from "../dummyData/equipmentRecords"

const useEquipmentStore = create((set) => ({
    equipmentRecords,
    setEquipmentRecords: (newData) => set({ equipmentRecords: newData }),
}))

export default useEquipmentStore
