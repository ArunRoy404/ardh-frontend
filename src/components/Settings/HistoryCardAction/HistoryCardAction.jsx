import { useState } from "react";
import { Eye, Trash2 } from "lucide-react";
import HistoryView from "@/components/Settings/HistoryView";

const HistoryCardAction = ({ item, onDelete }) => {
    const [viewOpen, setViewOpen] = useState(false);

    return (
        <div className="flex items-center gap-4 self-end sm:self-center">
            <button
                onClick={() => setViewOpen(true)}
                className="text-success-tag-text hover:text-success-tag-text/80 bg-transparent flex items-center gap-1.5 text-xs font-semibold cursor-pointer transition-colors"
            >
                <Eye className="w-4 h-4 text-success-tag-text" />
                View
            </button>
            <button
                onClick={() => onDelete?.(item)}
                className="text-destructive hover:text-destructive/80 bg-transparent flex items-center gap-1.5 text-xs font-semibold cursor-pointer transition-colors"
            >
                <Trash2 className="w-4 h-4 text-destructive" />
                Delete
            </button>

            {/* History Details View Modal */}
            <HistoryView
                item={item}
                open={viewOpen}
                onOpenChange={setViewOpen}
            />
        </div>
    );
};

export default HistoryCardAction;
