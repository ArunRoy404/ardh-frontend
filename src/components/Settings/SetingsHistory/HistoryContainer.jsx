import { useState } from "react";
import useDeletedHistoryStore from "@/dummyDataStore/useDeletedHistoryStore";
import HistoryCard from "@/components/Settings/SetingsHistory/HistoryCard";
import HistoryDelete from "@/components/Settings/HistoryCardAction/HistoryDelete";
import HistoryView from "@/components/Settings/HistoryView";

const HistoryContainer = () => {
  const records = useDeletedHistoryStore((state) => state.deletedHistoryRecords);
  const [deletingItem, setDeletingItem] = useState(null);
  const [viewingItem, setViewingItem] = useState(null);

  if (records.length === 0) {
    return (
      <div className="text-dark-gray py-16 text-center text-sm bg-muted/20 border border-dashed border-border rounded-lg">
        No deleted history records found.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {records.map((item) => (
        <HistoryCard
          key={item.id}
          item={item}
          onDelete={(it) => setDeletingItem(it)}
          onView={(it) => setViewingItem(it)}
        />
      ))}

      <HistoryView
        item={viewingItem}
        open={!!viewingItem}
        onOpenChange={(open) => {
          if (!open) setViewingItem(null);
        }}
      />

      <HistoryDelete
        item={deletingItem}
        open={!!deletingItem}
        onOpenChange={(open) => {
          if (!open) setDeletingItem(null);
        }}
      />
    </div>
  );
};

export default HistoryContainer;
