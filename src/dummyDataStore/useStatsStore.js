import { create } from "zustand"
import { statsData } from "../dummyData/statsData"

const useStatsStore = create((set) => ({
    stats: statsData,
    setStats: (newStats) => set({ stats: newStats }),
}))

export default useStatsStore
