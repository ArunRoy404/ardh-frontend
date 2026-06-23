import { Clock, XCircle, RotateCcw } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import CommonDetailCard from "@/components/shared/DetailCard/CommonDetailCard";
import CommonDetailLabel from "@/components/shared/DetailCard/CommonDetailLabel";
import { IncomeIcon } from "@/components/SvgIcons/IncomeIcon";
import { ExpensesIcon } from "@/components/SvgIcons/ExpensesIcon";
import { TenantsIcon } from "@/components/SvgIcons/TenantsIcon";
import { VendorsIcon } from "@/components/SvgIcons/VendorsIcon";

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

const renderRecordDetails = (item) => {
  if (item.type === "income") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
        <CommonDetailLabel label="Type" value="Rent" />
        <CommonDetailLabel label="Amount" value="₹18000" />
        <CommonDetailLabel label="Apartment Flat" value="3A" />
        <CommonDetailLabel label="Building Name" value="Sunrise Residency" />
        <CommonDetailLabel label="Tenant Name" value="Rajesh Kumar" />
        <CommonDetailLabel label="Period Month" value="2026 - 04" />
        <CommonDetailLabel label="Payment Date" value="2026 - 04 - 05" />
        <CommonDetailLabel label="Payment Method" value="Transfer From Nestaway" />
        <CommonDetailLabel label="Status" value="Paid" />
      </div>
    );
  } else if (item.type === "expense") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
        <CommonDetailLabel label="Type" value="Utility" />
        <CommonDetailLabel label="Amount" value="₹4500" />
        <CommonDetailLabel label="Category" value="Electricity" />
        <CommonDetailLabel label="Building Name" value="Sunrise Residency" />
        <CommonDetailLabel label="Vendor Name" value="Electricity Board" />
        <CommonDetailLabel label="Reference" value="Ref-4819" />
        <CommonDetailLabel label="Expense Date" value="2026 - 04 - 30" />
        <CommonDetailLabel label="Payment Method" value="Bank Transfer" />
        <CommonDetailLabel label="Status" value="Paid" />
      </div>
    );
  } else if (item.type === "tenant") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
        <CommonDetailLabel label="Type" value="Lease" />
        <CommonDetailLabel label="Tenant Name" value="Priya Sharma" />
        <CommonDetailLabel label="Phone" value="+91 987654 3201" />
        <CommonDetailLabel label="Email" value="priya.sharma@example.com" />
        <CommonDetailLabel label="Building Name" value="Sunrise Residency" />
        <CommonDetailLabel label="Apartment Flat" value="2B" />
        <CommonDetailLabel label="Move In Date" value="2026 - 01 - 10" />
        <CommonDetailLabel label="Lease End Date" value="2026 - 12 - 31" />
        <CommonDetailLabel label="Security Deposit" value="₹20000" />
      </div>
    );
  } else if (item.type === "vendor") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
        <CommonDetailLabel label="Type" value="Maintenance Service" />
        <CommonDetailLabel label="Vendor Name" value="QuickFix Plumbers" />
        <CommonDetailLabel label="Contact Person" value="QuickFix Services" />
        <CommonDetailLabel label="Category" value="Plumbing" />
        <CommonDetailLabel label="Phone" value="+91 876543 2109" />
        <CommonDetailLabel label="Address" value="Bangalore, India" />
        <CommonDetailLabel label="Rating" value="4.8 / 5" />
        <CommonDetailLabel label="Status" value="Active" />
      </div>
    );
  }
  return null;
};

const getDescription = (type) => {
  switch (type) {
    case "income":
      return "Electricity bill - May";
    case "expense":
      return "Utility payment for building electricity";
    case "tenant":
      return "Tenant move-out requested before lease end.";
    case "vendor":
      return "Standard plumbing vendor for maintenance emergencies.";
    default:
      return "Deleted history log record.";
  }
};

const HistoryView = ({ item, open, onOpenChange }) => {
  const badge = getBadgeDetails(item.type);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto p-6 font-['Poppins']">
        {/* Dialog Body */}
        <div className="space-y-4">
          {/* Entity Info Card (badge, title, timestamp) */}
          <CommonDetailCard>
            <div className="flex flex-col gap-2.5">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] text-xs font-semibold ${badge.classes}`}
                >
                  {badge.icon}
                  {badge.label}
                </span>
                <h3 className="text-sm font-semibold text-primary font-sans leading-snug">
                  {item.title}
                </h3>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-dark-gray font-normal font-sans">
                <Clock className="w-3.5 h-3.5 text-dark-gray" />
                <span>
                  Deleted : {item.timestamp} By : {item.user}
                </span>
              </div>
            </div>
          </CommonDetailCard>

          {/* Record Data Card */}
          <CommonDetailCard title="Record Data" cardClassName="text-sm">
            <div className="space-y-6">
              {renderRecordDetails(item)}

              {/* Full-width description */}
              <div className="border-t border-border pt-4 space-y-2">
                <span className="text-dark-gray font-normal text-xs uppercase tracking-wider block">
                  Description :
                </span>
                <p className="text-dark-accent font-semibold text-sm">
                  {getDescription(item.type)}
                </p>
              </div>
            </div>
          </CommonDetailCard>
        </div>

        {/* Dialog Footer Actions */}
        <DialogFooter className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
          <DialogClose
            render={<Button variant="outline" type="button" className="w-full" />}
          >
            <XCircle className="w-4 h-4 text-dark-gray" />
            Cancel
          </DialogClose>
          <Button
            type="button"
            isNotImplemented
            className="w-full bg-success-tag-border hover:bg-success-tag-border/80 text-white flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Restore This Record
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default HistoryView;
