import { Eye, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";

const HistoryCardAction = ({ item, onDelete }) => {
  const handleAction = (action) => {
    toast.warning(`${action} feature for "${item.title}" is not implemented yet!`);
  };

  return (
    <div className="flex items-center gap-4 self-end sm:self-center">
      <button
        onClick={() => handleAction("View")}
        className="text-success-tag-text hover:text-success-tag-text/80 bg-transparent flex items-center gap-1.5 text-xs font-semibold cursor-pointer transition-colors"
      >
        <Eye className="w-4 h-4 text-success-tag-text" />
        View
      </button>
      <button
        onClick={() => handleAction("Edit")}
        className="text-secondary hover:text-secondary/80 bg-transparent flex items-center gap-1.5 text-xs font-semibold cursor-pointer transition-colors"
      >
        <Pencil className="w-4 h-4 text-secondary" />
        Edit
      </button>
      <button
        onClick={() => onDelete?.(item)}
        className="text-destructive hover:text-destruct ive/80 bg-transparent flex items-center gap-1.5 text-xs font-semibold cursor-pointer transition-colors"
      >
        <Trash2 className="w-4 h-4 text-destructive" />
        Delete
      </button>
    </div>
  );
};

export default HistoryCardAction;
