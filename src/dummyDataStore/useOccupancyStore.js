import { create } from "zustand"
import { occupancyData, occupancyConfig } from "../dummyData/occupancyData"

const useOccupancyStore = create((set) => ({
    occupancyData,
    occupancyConfig,
    setOccupancyData: (newData) => set({ occupancyData: newData }),
}))

export default useOccupancyStore
