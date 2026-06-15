import { create } from "zustand"
import { notificationsData } from "../dummyData/notificationsData"

const useNotificationsStore = create((set) => ({
    notificationsData,
    setNotificationsData: (newData) => set({ notificationsData: newData }),
}))

export default useNotificationsStore
