import { useRef, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IncomeIcon } from "@/components/SvgIcons/IncomeIcon";
import CommonInput from "@/components/shared/Form/FormInput/CommonInput";
import FormSelect from "@/components/shared/CommonSelect/FormSelect";
import CommonTextEditor from "@/components/shared/Form/CommonTextEditor/CommonTextEditor";
import CommonFileInput from "@/components/shared/CommonFileInput/CommonFileInput";
import { DialogFooter, DialogClose } from "@/components/ui/dialog";
import { toast } from "sonner";
import { incomeSchema, incomeDefaultValues } from "@/zodSchema/incomeZodSchema";

const RecordNewIncomeForm = () => {
  const [resetKey, setResetKey] = useState(0);
  const [attachmentFile, setAttachmentFile] = useState(null);
  const notesRef = useRef("");

  const methods = useForm({
    resolver: zodResolver(incomeSchema),
    defaultValues: incomeDefaultValues,
  });

  const onSubmit = (data) => {
    const notes = notesRef.current || "";
    console.log("Income data:", { ...data, notes, attachmentFile });
    methods.reset();
    setResetKey((k) => k + 1);
    setAttachmentFile(null);
    notesRef.current = "";
    toast.warning("Feature not implemented yet!");
  };

  return (
    <FormProvider {...methods}>
      <form
        // eslint-disable-next-line react-hooks/refs
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 text-left"
      >
        {/* Income Entity - Full Width */}
        <FormSelect
          name="incomeEntity"
          label="Income Entity *"
          options={[
            { label: "Tenant Payment", value: "Tenant Payment" },
            { label: "Other Income", value: "Other Income" },
            { label: "Interest", value: "Interest" },
          ]}
          placeholder="Select income entity type"
        />

        {/* Type & Amount - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormSelect
            name="type"
            label="Type *"
            options={[
              { label: "Rent", value: "Rent" },
              { label: "Security Deposit", value: "Security Deposit" },
              { label: "Maintenance Fee", value: "Maintenance Fee" },
              { label: "Water Charge", value: "Water Charge" },
            ]}
            placeholder="Select Income Type"
          />
          <CommonInput
            name="amount"
            label="Amount ₹ *"
            placeholder="0....."
            className="pl-4"
          />
        </div>

        {/* Tenant Name & Building - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <CommonInput
            name="tenantName"
            label="Tenant Name *"
            placeholder="Enter tenant name......"
            className="pl-4"
          />
          <FormSelect
            name="buildingName"
            label="Building *"
            options={[
              { label: "Sunrise Tower", value: "Sunrise Tower" },
              { label: "Skyline Apartments", value: "Skyline Apartments" },
            ]}
            placeholder="Buildings"
          />
        </div>

        {/* Apartment & Period - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormSelect
            name="apartment"
            label="Apartment *"
            options={[
              { label: "101", value: "101" },
              { label: "102", value: "102" },
              { label: "201", value: "201" },
              { label: "202", value: "202" },
            ]}
            placeholder="Apartments"
          />
          <CommonInput
            name="period"
            label="Period *"
            placeholder="e.g. 2026-05"
            className="pl-4"
          />
        </div>

        {/* Payment Date & Method - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <CommonInput
            name="paymentDate"
            label="Payment Date*"
            type="date"
            placeholder="dd/mm/yyyy"
            className="pl-4"
          />
          <FormSelect
            name="method"
            label="Method *"
            options={[
              { label: "Cash", value: "Cash" },
              { label: "Bank Transfer", value: "Bank Transfer" },
              { label: "UPI", value: "UPI" },
              { label: "Cheque", value: "Cheque" },
            ]}
            placeholder="Select Methods"
          />
        </div>

        {/* Reference & Status - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <CommonInput
            name="reference"
            label="Reference *"
            placeholder="Enter ......"
            className="pl-4"
          />
          <FormSelect
            name="status"
            label="Status *"
            options={[
              { label: "Paid", value: "Paid" },
              { label: "Pending", value: "Pending" },
              { label: "Failed", value: "Failed" },
            ]}
            placeholder="Select status"
          />
        </div>

        {/* Attachment / Evidence - Full Width */}
        <CommonFileInput
          label="Attachment / Evidence *"
          value={attachmentFile}
          onChange={setAttachmentFile}
          placeholder="Attach receipt or evidence"
        />

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
            <IncomeIcon className="w-4 h-4" />
            Add New Income Record
          </Button>
        </DialogFooter>
      </form>
    </FormProvider>
  );
};

export default RecordNewIncomeForm;
