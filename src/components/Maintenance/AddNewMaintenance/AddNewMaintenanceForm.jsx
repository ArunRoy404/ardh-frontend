import { useRef, useState } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MaintenanceIcon } from "@/components/SvgIcons/MaintenanceIcon";
import CommonInput from "@/components/shared/Form/FormInput/CommonInput";
import FormSelect from "@/components/shared/CommonSelect/FormSelect";
import CommonTextEditor from "@/components/shared/Form/CommonTextEditor/CommonTextEditor";
import CommonFileInput from "@/components/shared/CommonFileInput/CommonFileInput";
import { DialogFooter, DialogClose } from "@/components/ui/dialog";
import { toast } from "sonner";
import { maintenanceSchema, maintenanceDefaultValues } from "@/zodSchema/maintenanceZodSchema";

const AddNewMaintenanceForm = () => {
  const [resetKey, setResetKey] = useState(0);
  const [attachmentFile, setAttachmentFile] = useState(null);
  const notesRef = useRef("");

  const methods = useForm({
    resolver: zodResolver(maintenanceSchema),
    defaultValues: maintenanceDefaultValues,
  });

  const onSubmit = (data) => {
    const notes = notesRef.current || "";
    console.log("Maintenance data:", { ...data, notes, attachmentFile });
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
        {/* Title - Full Width */}
        <CommonInput
          name="title"
          label="Title *"
          placeholder="Type title......"
          className="pl-4"
        />

        {/* Description - Full Width */}
        <div className="space-y-1.5 relative">
          <label htmlFor="description" className="text-xs font-semibold text-dark-gray">
            Description*
          </label>
          <Controller
            name="description"
            control={methods.control}
            render={({ field }) => (
              <textarea
                id="description"
                placeholder="Enter short description ......"
                className="w-full py-3 px-4 text-sm placeholder:text-dark-gray bg-input-bg border-none rounded-md resize-none h-24 focus:outline-none"
                {...field}
              />
            )}
          />
          {methods.formState.errors.description && (
            <p className="text-[10px] text-destructive font-semibold">
              {methods.formState.errors.description.message}
            </p>
          )}
        </div>

        {/* Category, Priority, Status - 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <FormSelect
            name="category"
            label="Category *"
            options={[
              { label: "Plumbing", value: "Plumbing" },
              { label: "Electrical", value: "Electrical" },
              { label: "Cleaning", value: "Cleaning" },
              { label: "Security", value: "Security" },
              { label: "Other", value: "Other" },
            ]}
            placeholder="Maintenance Category"
          />
          <FormSelect
            name="priority"
            label="Priority *"
            options={[
              { label: "Low", value: "Low" },
              { label: "Medium", value: "Medium" },
              { label: "High", value: "High" },
            ]}
            placeholder="Status"
          />
          <FormSelect
            name="status"
            label="Status *"
            options={[
              { label: "Pending", value: "Pending" },
              { label: "In Progress", value: "In Progress" },
              { label: "Completed", value: "Completed" },
            ]}
            placeholder="Status"
          />
        </div>

        {/* Vendor - Full Width */}
        <FormSelect
          name="vendor"
          label="Vendor *"
          options={[
            { label: "Vendor A", value: "Vendor A" },
            { label: "Vendor B", value: "Vendor B" },
            { label: "Vendor C", value: "Vendor C" },
          ]}
          placeholder="select"
        />

        {/* Building & Apartment - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormSelect
            name="buildingName"
            label="Building *"
            options={[
              { label: "Sunrise Tower", value: "Sunrise Tower" },
              { label: "Skyline Apartments", value: "Skyline Apartments" },
            ]}
            placeholder="Buildings"
          />
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
        </div>

        {/* Estimated Cost, Annual Cost, Scheduled Date - 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <CommonInput
            name="estimatedCost"
            label="Estimated Cost *"
            placeholder="0"
            className="pl-4"
          />
          <CommonInput
            name="annualCost"
            label="Annual Cost *"
            placeholder="0"
            className="pl-4"
          />
          <CommonInput
            name="scheduledDate"
            label="Scheduled Date*"
            type="date"
            placeholder="dd/mm/yyyy"
            className="pl-4"
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
            <MaintenanceIcon className="w-4 h-4" />
            Add New Maintenance
          </Button>
        </DialogFooter>
      </form>
    </FormProvider>
  );
};

export default AddNewMaintenanceForm;
