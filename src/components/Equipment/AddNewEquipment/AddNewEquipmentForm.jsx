import { useRef, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EquipmentIcon } from "@/components/SvgIcons/EquipmentIcon";
import CommonInput from "@/components/shared/Form/FormInput/CommonInput";
import FormSelect from "@/components/shared/CommonSelect/FormSelect";
import CommonTextEditor from "@/components/shared/Form/CommonTextEditor/CommonTextEditor";
import CommonFileInput from "@/components/shared/CommonFileInput/CommonFileInput";
import { DialogFooter, DialogClose } from "@/components/ui/dialog";
import { toast } from "sonner";
import { equipmentSchema, equipmentDefaultValues } from "@/zodSchema/equipmentZodSchema";

const AddNewEquipmentForm = () => {
  const [resetKey, setResetKey] = useState(0);
  const [attachmentFile, setAttachmentFile] = useState(null);
  const notesRef = useRef("");

  const methods = useForm({
    resolver: zodResolver(equipmentSchema),
    defaultValues: equipmentDefaultValues,
  });

  const onSubmit = (data) => {
    const notes = notesRef.current || "";
    console.log("Equipment data:", { ...data, notes, attachmentFile });
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
        {/* Name & Type - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <CommonInput
            name="name"
            label="Name *"
            placeholder="Type equipment name"
            className="pl-4"
          />
          <FormSelect
            name="type"
            label="Type"
            options={[
              { label: "HVAC", value: "HVAC" },
              { label: "Generator", value: "Generator" },
              { label: "Fire Safety", value: "Fire Safety" },
              { label: "Elevator", value: "Elevator" },
              { label: "Water Pump", value: "Water Pump" },
            ]}
            placeholder="Select Equipment Type"
          />
        </div>

        {/* Building & Brand - 2 columns */}
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
            name="brand"
            label="Brand *"
            options={[
              { label: "Brand A", value: "Brand A" },
              { label: "Brand B", value: "Brand B" },
              { label: "Brand C", value: "Brand C" },
            ]}
            placeholder="select"
          />
        </div>

        {/* Model & Serial - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <CommonInput
            name="model"
            label="Model *"
            placeholder="Type model....."
            className="pl-4"
          />
          <CommonInput
            name="serial"
            label="Serial *"
            placeholder="Type serial"
            className="pl-4"
          />
        </div>

        {/* Install Date & Warranty Expiry Date - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <CommonInput
            name="installDate"
            label="Install Date*"
            type="date"
            placeholder="dd/mm/yyyy"
            className="pl-4"
          />
          <CommonInput
            name="warrantyExpiryDate"
            label="Warranty Expiry Date*"
            type="date"
            placeholder="dd/mm/yyyy"
            className="pl-4"
          />
        </div>

        {/* AMC Vendor & AMC Expiry Date - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <CommonInput
            name="amcVendor"
            label="AMC Vendor*"
            placeholder="Enter AMC"
            className="pl-4"
          />
          <CommonInput
            name="amcExpiryDate"
            label="AMC Expiry Date*"
            type="date"
            placeholder="dd/mm/yyyy"
            className="pl-4"
          />
        </div>

        {/* Last Service Date & Next Service Date - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <CommonInput
            name="lastServiceDate"
            label="Last Service Date*"
            type="date"
            placeholder="dd/mm/yyyy"
            className="pl-4"
          />
          <CommonInput
            name="nextServiceDate"
            label="Next Service Date*"
            type="date"
            placeholder="dd/mm/yyyy"
            className="pl-4"
          />
        </div>

        {/* Status - Full Width */}
        <FormSelect
          name="status"
          label="Status *"
          options={[
            { label: "Active", value: "Active" },
            { label: "Maintenance", value: "Maintenance" },
            { label: "Inactive", value: "Inactive" },
          ]}
          placeholder="Select Equipment Status"
        />

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
            <EquipmentIcon className="w-4 h-4" />
            Add New Equipment
          </Button>
        </DialogFooter>
      </form>
    </FormProvider>
  );
};

export default AddNewEquipmentForm;
