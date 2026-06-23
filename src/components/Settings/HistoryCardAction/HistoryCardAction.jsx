import { Eye, Trash2 } from "lucide-react";

const HistoryCardAction = ({ item, onDelete, onView }) => {
    return (
        <div className="flex items-center gap-4 self-end sm:self-center">
            <button
                onClick={() => onView?.(item)}
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
        </div>
    );
};

export default HistoryCardAction;
