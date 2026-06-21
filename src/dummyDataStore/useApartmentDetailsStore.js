import { create } from "zustand"
import { apartmentDetails } from "../dummyData/apartmentDetailsRecords"

const useApartmentDetailsStore = create((set) => ({
    apartmentDetails,
    setApartmentDetails: (newData) => set({ apartmentDetails: newData }),
}))

export default useApartmentDetailsStore
