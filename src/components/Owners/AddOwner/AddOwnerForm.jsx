import { useRef, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OwnersIcon } from "@/components/SvgIcons/OwnersIcon";
import CommonInput from "@/components/shared/Form/FormInput/CommonInput";
import FormSelect from "@/components/shared/CommonSelect/FormSelect";
import CommonTextEditor from "@/components/shared/Form/CommonTextEditor/CommonTextEditor";
import { DialogFooter, DialogClose } from "@/components/ui/dialog";
import { toast } from "sonner";
import { ownerSchema, ownerDefaultValues } from "@/zodSchema/ownerZodSchema";

const AddOwnerForm = () => {
  const [resetKey, setResetKey] = useState(0);
  const notesRef = useRef("");

  const methods = useForm({
    resolver: zodResolver(ownerSchema),
    defaultValues: ownerDefaultValues,
  });

  const onSubmit = (data) => {
    const notes = notesRef.current || "";
    console.log("Owner data:", { ...data, notes });
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
        {/* Full Name & Phone Number - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <CommonInput
            name="fullName"
            label="Full Name *"
            placeholder="Type name......"
            className="pl-4"
          />
          <CommonInput
            name="phone"
            label="Phone Number *"
            placeholder="Type phone number....."
            className="pl-4"
          />
        </div>

        {/* Email & City - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <CommonInput
            name="email"
            label="Email *"
            placeholder="Enter email...."
            className="pl-4"
          />
          <CommonInput
            name="city"
            label="City *"
            placeholder="Type city..."
            className="pl-4"
          />
        </div>

        {/* Address - full width */}
        <CommonInput
          name="address"
          label="Address *"
          placeholder="Type address...."
          className="pl-4"
        />

        {/* ID Type & ID Number - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormSelect
            name="idType"
            label="ID Type *"
            options={[
              { label: "Aadhar", value: "Aadhar" },
              { label: "Passport", value: "Passport" },
              { label: "PAN Card", value: "PAN Card" },
              { label: "Driving License", value: "Driving License" },
            ]}
            placeholder="Select ID type"
          />
          <CommonInput
            name="idNumber"
            label="ID Number *"
            placeholder="e.g.123456789"
            className="pl-4"
          />
        </div>

        {/* Bank Name, Account No., IFSC Code - 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <CommonInput
            name="bankName"
            label="Bank Name *"
            placeholder="Type contact......"
            className="pl-4"
          />
          <CommonInput
            name="accountNo"
            label="Account No. *"
            placeholder="Type phone....."
            className="pl-4"
          />
          <CommonInput
            name="ifscCode"
            label="IFSC Code *"
            placeholder="Type IFSC....."
            className="pl-4"
          />
        </div>

        {/* Select Properties - full width */}
        <FormSelect
          name="properties"
          label="Select Properties *"
          options={[
            { label: "101", value: "101" },
            { label: "102", value: "102" },
            { label: "201", value: "201" },
            { label: "202", value: "202" },
            { label: "Sunrise Tower - 302", value: "sunrise-302" },
          ]}
          placeholder="Select Property"
        />

        {/* Notes editor */}
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
            <OwnersIcon className="w-4 h-4" />
            Add New Owner
          </Button>
        </DialogFooter>
      </form>
    </FormProvider>
  );
};

export default AddOwnerForm;
