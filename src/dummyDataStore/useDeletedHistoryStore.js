import { create } from "zustand"
import { deletedHistoryRecords } from "../dummyData/deletedHistoryRecords"

const useDeletedHistoryStore = create((set) => ({
  deletedHistoryRecords,
  setDeletedHistoryRecords: (newData) => set({ deletedHistoryRecords: newData }),
}))

export default useDeletedHistoryStore
