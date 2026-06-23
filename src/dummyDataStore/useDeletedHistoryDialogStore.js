import { create } from "zustand"

const useDeletedHistoryDialogStore = create((set) => ({
  viewingItem: null,
  deletingItem: null,
  openView: (item) => set({ viewingItem: item }),
  closeView: () => set({ viewingItem: null }),
  openDelete: (item) => set({ deletingItem: item }),
  closeDelete: () => set({ deletingItem: null }),
}))

export default useDeletedHistoryDialogStore
