import { Clock } from "lucide-react";
import CommonDetailCard from "@/components/shared/DetailCard/CommonDetailCard";
import { IncomeIcon } from "@/components/SvgIcons/IncomeIcon";
import { ExpensesIcon } from "@/components/SvgIcons/ExpensesIcon";
import { TenantsIcon } from "@/components/SvgIcons/TenantsIcon";
import { VendorsIcon } from "@/components/SvgIcons/VendorsIcon";
import HistoryCardAction from "@/components/Settings/HistoryCardAction/HistoryCardAction";

const getBadgeDetails = (type) => {
  switch (type) {
    case "income":
      return {
        label: "Income",
        icon: <IncomeIcon className="size-3.5 text-success-tag-text" />,
        classes: "bg-success-tag-bg text-success-tag-text border border-success-tag-border",
      };
    case "expense":
      return {
        label: "Expense",
        icon: <ExpensesIcon className="size-3.5 text-warning-tag-text" />,
        classes: "bg-warning-tag-bg text-warning-tag-text border border-warning-tag-border",
      };
    case "tenant":
      return {
        label: "Tenant",
        icon: <TenantsIcon className="size-3.5 text-medium-tag-text" />,
        classes: "bg-medium-tag-bg text-medium-tag-text border border-medium-tag-border",
      };
    case "vendor":
      return {
        label: "Vendor",
        icon: <VendorsIcon className="size-3.5 text-progress-tag-text" />,
        classes: "bg-progress-tag-bg text-progress-tag-text border border-progress-tag-border",
      };
    default:
      return {
        label: type,
        icon: null,
        classes: "bg-muted text-dark-gray border border-border",
      };
  }
};

const HistoryCard = ({ item, onDelete, onView }) => {
  const badge = getBadgeDetails(item.type);

  return (
    <CommonDetailCard>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Item Details */}
        <div className="flex flex-col gap-2.5">
          <div className="flex flex-wrap items-center gap-3">
            {/* Entity Tag Badge */}
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] text-xs font-semibold ${badge.classes}`}
            >
              {badge.icon}
              {badge.label}
            </span>
            {/* Item Title */}
            <h3 className="text-sm font-semibold text-primary font-sans leading-snug">
              {item.title}
            </h3>
          </div>

          {/* Date & User Info */}
          <div className="flex items-center gap-1.5 text-xs text-dark-gray font-normal font-sans">
            <Clock className="w-3.5 h-3.5 text-dark-gray" />
            <span>
              {item.timestamp} by {item.user}
            </span>
          </div>
        </div>

        {/* Actions */}
        <HistoryCardAction item={item} onDelete={onDelete} onView={onView} />
      </div>
    </CommonDetailCard>
  );
};

export default HistoryCard;
