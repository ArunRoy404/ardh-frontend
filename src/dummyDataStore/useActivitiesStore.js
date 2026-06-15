import { create } from "zustand"
import { recentActivities } from "../dummyData/recentActivities"

const useActivitiesStore = create((set) => ({
    recentActivities,
    setRecentActivities: (newActivities) => set({ recentActivities: newActivities }),
}))

export default useActivitiesStore
