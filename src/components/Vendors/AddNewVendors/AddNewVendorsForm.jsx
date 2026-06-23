import { useRef, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VendorsIcon } from "@/components/SvgIcons/VendorsIcon";
import CommonInput from "@/components/shared/Form/FormInput/CommonInput";
import FormSelect from "@/components/shared/CommonSelect/FormSelect";
import CommonTextEditor from "@/components/shared/Form/CommonTextEditor/CommonTextEditor";
import { DialogFooter, DialogClose } from "@/components/ui/dialog";
import { toast } from "sonner";
import { vendorSchema, vendorDefaultValues } from "@/zodSchema/vendorZodSchema";

const AddNewVendorsForm = () => {
  const [resetKey, setResetKey] = useState(0);
  const notesRef = useRef("");

  const methods = useForm({
    resolver: zodResolver(vendorSchema),
    defaultValues: vendorDefaultValues,
  });

  const onSubmit = (data) => {
    const notes = notesRef.current || "";
    console.log("Vendor data:", { ...data, notes });
    methods.reset();
    setResetKey((k) => k + 1);
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
        {/* Name & Phone Number - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <CommonInput
            name="name"
            label="Name *"
            placeholder="Type vendor name..."
            className="pl-4"
          />
          <CommonInput
            name="phone"
            label="Phone Number *"
            placeholder="Type phone number......"
            className="pl-4"
          />
        </div>

        {/* Company & Email - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <CommonInput
            name="company"
            label="Company *"
            placeholder="Type company name...."
            className="pl-4"
          />
          <CommonInput
            name="email"
            label="Email *"
            placeholder="company@example.com"
            className="pl-4"
          />
        </div>

        {/* Vendor Type / Service - Full Width */}
        <FormSelect
          name="vendorType"
          label="Vendor Type / Service *"
          options={[
            { label: "Plumbing", value: "Plumbing" },
            { label: "Electrical", value: "Electrical" },
            { label: "Elevator Maintenance", value: "Elevator Maintenance" },
            { label: "Cleaning Services", value: "Cleaning Services" },
            { label: "Security Services", value: "Security Services" },
          ]}
          placeholder="Select Vendor Type / Service"
        />

        <p className="text-xs text-muted-foreground -mt-2">
          Used to link vendors with equipment and maintenance category.
        </p>

        {/* GST Number & Address - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <CommonInput
            name="gstNumber"
            label="GST Number *"
            placeholder="Enter GST Number..."
            className="pl-4"
          />
          <CommonInput
            name="address"
            label="Address *"
            placeholder="Type Address....."
            className="pl-4"
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
            <VendorsIcon className="w-4 h-4" />
            Add New Vendors
          </Button>
        </DialogFooter>
      </form>
    </FormProvider>
  );
};

export default AddNewVendorsForm;
