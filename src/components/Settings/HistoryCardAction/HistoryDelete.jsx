import { Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import useDeletedHistoryDialogStore from "@/dummyDataStore/useDeletedHistoryDialogStore";

const HistoryDelete = () => {
  const item = useDeletedHistoryDialogStore((state) => state.deletingItem);
  const closeDelete = useDeletedHistoryDialogStore((state) => state.closeDelete);
  if (!item) return null;

  return (
    <Dialog open={!!item} onOpenChange={(open) => { if (!open) closeDelete(); }}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-xl font-medium font-['Adobe_Aldine'] text-primary">
            <div className="flex items-center justify-center w-11 h-11 rounded-full bg-destructive/10 text-destructive">
              <Trash2 className="w-5 h-5" />
            </div>
            Permanently Delete?
          </DialogTitle>
        </DialogHeader>

        <p className="text-sm font-['Poppins'] text-dark-gray leading-relaxed px-1">
          This will permanently remove <span className="font-semibold text-primary">{item?.title}</span> from the deleted history. This cannot be
          undone.
        </p>

        <DialogFooter className="grid grid-cols-2 gap-4 pt-4">
          <DialogClose
            render={
              <Button variant="outline" type="button" />
            }
          >
            Cancel
          </DialogClose>
          <Button
            type="button"
            variant="destructive"
            isNotImplemented
          >
            <Trash2 className="w-4 h-4" />
            Delete Permanently
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default HistoryDelete;
