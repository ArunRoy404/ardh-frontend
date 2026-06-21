import { useRef, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { XCircle, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ExpensesIcon } from "@/components/SvgIcons/ExpensesIcon";
import CommonInput from "@/components/shared/Form/FormInput/CommonInput";
import FormSelect from "@/components/shared/CommonSelect/FormSelect";
import CommonTextEditor from "@/components/shared/Form/CommonTextEditor/CommonTextEditor";
import { DialogFooter, DialogClose } from "@/components/ui/dialog";
import { toast } from "sonner";
import { expenseSchema, expenseDefaultValues } from "@/zodSchema/expenseZodSchema";

const AddNewExpensesRecordForm = () => {
  const [resetKey, setResetKey] = useState(0);
  const [attachmentFile, setAttachmentFile] = useState(null);
  const notesRef = useRef("");
  const fileInputRef = useRef(null);

  const methods = useForm({
    resolver: zodResolver(expenseSchema),
    defaultValues: expenseDefaultValues,
  });

  const onSubmit = (data) => {
    const notes = notesRef.current || "";
    console.log("Expense data:", { ...data, notes, attachmentFile });
    methods.reset();
    setResetKey((k) => k + 1);
    setAttachmentFile(null);
    notesRef.current = "";
    toast.warning("Feature not implemented yet!");
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setAttachmentFile(file);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        // eslint-disable-next-line react-hooks/refs
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 text-left"
      >
        {/* Expenses Category - Full Width */}
        <FormSelect
          name="category"
          label="Expenses Category *"
          options={[
            { label: "Operational", value: "Operational" },
            { label: "Administrative", value: "Administrative" },
            { label: "Capital", value: "Capital" },
          ]}
          placeholder="Select category"
        />

        {/* Expenses Head - Full Width */}
        <FormSelect
          name="expenseHead"
          label="Expenses Head *"
          options={[
            { label: "Watchman Salary", value: "Watchman Salary" },
            { label: "Cleaning Service", value: "Cleaning Service" },
            { label: "Electricity", value: "Electricity" },
            { label: "Repair / Maintenance", value: "Repair / Maintenance" },
          ]}
          placeholder="Select expense head"
        />

        {/* Specific Item - Full Width */}
        <FormSelect
          name="specificItem"
          label="Specific Item *"
          options={[
            { label: "Monthly Salary", value: "Monthly Salary" },
            { label: "One-time Service", value: "One-time Service" },
            { label: "Bill Payment", value: "Bill Payment" },
          ]}
          placeholder="Select specific item"
        />

        {/* Expense Nature & Amount - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormSelect
            name="nature"
            label="Expense Nature *"
            options={[
              { label: "Recurring", value: "Recurring" },
              { label: "Non-recurring", value: "Non-recurring" },
            ]}
            placeholder="Select expenses Nature"
          />
          <CommonInput
            name="amount"
            label="Amount ₹ *"
            placeholder="0....."
            className="pl-4"
          />
        </div>

        {/* Expense Entity - Full Width */}
        <FormSelect
          name="entity"
          label="Expense Entity *"
          options={[
            { label: "Building level", value: "Building level" },
            { label: "Apartment level", value: "Apartment level" },
          ]}
          placeholder="Select entity level"
        />

        {/* Building - Full Width */}
        <FormSelect
          name="buildingName"
          label="Building *"
          options={[
            { label: "Sunrise Tower", value: "Sunrise Tower" },
            { label: "Skyline Apartments", value: "Skyline Apartments" },
          ]}
          placeholder="Buildings"
        />

        {/* Expense Date & Finance Method - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <CommonInput
            name="expenseDate"
            label="Expense Date*"
            type="date"
            placeholder="dd/mm/yyyy"
            className="pl-4"
          />
          <FormSelect
            name="financeMethod"
            label="Finance Method *"
            options={[
              { label: "Cash", value: "Cash" },
              { label: "Bank Transfer", value: "Bank Transfer" },
              { label: "UPI", value: "UPI" },
              { label: "Cheque", value: "Cheque" },
            ]}
            placeholder="Select Methods"
          />
        </div>

        {/* Status & Reference - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormSelect
            name="status"
            label="Status *"
            options={[
              { label: "Paid", value: "Paid" },
              { label: "Pending", value: "Pending" },
              { label: "Approved", value: "Approved" },
            ]}
            placeholder="Select Type"
          />
          <CommonInput
            name="reference"
            label="Reference *"
            placeholder="Enter ......"
            className="pl-4"
          />
        </div>

        {/* Attachment / Evidence - Full Width */}
        <div className="space-y-1.5 relative">
          <label className="text-xs font-semibold text-dark-gray">Attachment / Evidence *</label>
          <div
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 py-3 px-4 rounded-md bg-input-bg border-none text-sm text-dark-gray cursor-pointer hover:bg-input-bg/80 transition-colors w-full"
          >
            <Paperclip className="w-4 h-4 text-dark-gray flex-shrink-0" />
            <span className="truncate font-sans text-dark-gray text-xs">
              {attachmentFile ? attachmentFile.name : "Attach receipt or evidence"}
            </span>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        {/* Notes Editor */}
        <CommonTextEditor
          key={resetKey}
          label="Notes*"
          placeholder="Type a note..."
          onContentChange={(html) => {
            notesRef.current = html;
          }}
        />

        {/* Footer Actions */}
        <DialogFooter className="grid grid-cols-2 gap-4 pt-2">
          <DialogClose
            render={<Button variant="outline" type="button" className="w-full h-auto py-3" />}
          >
            <XCircle className="w-4 h-4" />
            Cancel
          </DialogClose>
          <Button type="submit" className="w-full h-auto py-3">
            <ExpensesIcon className="w-4 h-4" />
            Add New Expenses Record
          </Button>
        </DialogFooter>
      </form>
    </FormProvider>
  );
};

export default AddNewExpensesRecordForm;
