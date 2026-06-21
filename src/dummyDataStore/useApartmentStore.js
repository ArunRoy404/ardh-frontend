import { create } from "zustand"
import { apartmentRecords } from "../dummyData/apartmentRecords"

const useApartmentStore = create((set) => ({
    apartmentRecords,
    setApartmentRecords: (newData) => set({ apartmentRecords: newData }),
}))

export default useApartmentStore
