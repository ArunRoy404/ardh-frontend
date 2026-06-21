import { useRef, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TenantsIcon } from "@/components/SvgIcons/TenantsIcon";
import CommonInput from "@/components/shared/Form/FormInput/CommonInput";
import FormSelect from "@/components/shared/CommonSelect/FormSelect";
import CommonTextEditor from "@/components/shared/Form/CommonTextEditor/CommonTextEditor";
import CommonFileInput from "@/components/shared/CommonFileInput/CommonFileInput";
import { DialogFooter, DialogClose } from "@/components/ui/dialog";
import { toast } from "sonner";
import { tenantSchema, tenantDefaultValues } from "@/zodSchema/tenantZodSchema";

const AddTenantsForm = () => {
  const [resetKey, setResetKey] = useState(0);
  const [idProofFile, setIdProofFile] = useState(null);
  const notesRef = useRef("");

  const methods = useForm({
    resolver: zodResolver(tenantSchema),
    defaultValues: tenantDefaultValues,
  });

  const onSubmit = (data) => {
    const notes = notesRef.current || "";
    console.log("Tenant data:", { ...data, notes, idProofFile });
    methods.reset();
    setResetKey((k) => k + 1);
    setIdProofFile(null);
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
            label="Full Name*"
            placeholder="Type name........"
            className="pl-4"
          />
          <CommonInput
            name="phone"
            label="Phone Number*"
            placeholder="Type phone number......"
            className="pl-4"
          />
        </div>

        {/* Email & ID Type - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <CommonInput
            name="email"
            label="Email*"
            placeholder="Enter email......"
            className="pl-4"
          />
          <FormSelect
            name="idType"
            label="ID Type*"
            options={[
              { label: "Aadhar", value: "Aadhar" },
              { label: "Passport", value: "Passport" },
              { label: "PAN Card", value: "PAN Card" },
              { label: "Driving License", value: "Driving License" },
            ]}
            placeholder="Select ID type"
          />
        </div>

        {/* ID Number & ID Proof Attachment - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <CommonInput
            name="idNumber"
            label="ID Number*"
            placeholder="e.g.123456789"
            className="pl-4"
          />
          <CommonFileInput
            label="ID Proof Attachment *"
            value={idProofFile}
            onChange={setIdProofFile}
            placeholder="Click to attach ID proof (PDF, JPG, PNG)"
          />
        </div>

        {/* Property Assignment Section */}
        <div>
          <h3 className="text-primary font-medium text-[20px] font-['Adobe_Aldine'] mt-2">
            Property Assignment
          </h3>
        </div>

        {/* Building & Apartment - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormSelect
            name="buildingName"
            label="Building *"
            options={[
              { label: "Sunrise Tower", value: "sunrise-tower" },
              { label: "Skyline Apartments", value: "skyline-apartments" },
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

        {/* Move in Date, Lease Start, Lease End - 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <CommonInput
            name="moveInDate"
            label="Move in Date*"
            type="date"
            placeholder="dd/mm/yyyy"
            className="pl-4"
          />
          <CommonInput
            name="leaseStart"
            label="Lease Start*"
            type="date"
            placeholder="dd/mm/yyyy"
            className="pl-4"
          />
          <CommonInput
            name="leaseEnd"
            label="Lease End (Optional)*"
            type="date"
            placeholder="dd/mm/yyyy"
            className="pl-4"
          />
        </div>

        {/* Security Deposited - full width */}
        <CommonInput
          name="securityDeposit"
          label="Security Deposited ( ₹ )"
          placeholder="0.."
          className="pl-4"
        />

        {/* Emergency Contact & Emergency Phone - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <CommonInput
            name="emergencyContact"
            label="Emergency Contact*"
            placeholder="Type contact......"
            className="pl-4"
          />
          <CommonInput
            name="emergencyPhone"
            label="Emergency Phone*"
            placeholder="Type phone......"
            className="pl-4"
          />
        </div>

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
            <TenantsIcon className="w-4 h-4" />
            Add New Tenant
          </Button>
        </DialogFooter>
      </form>
    </FormProvider>
  );
};

export default AddTenantsForm;
