import { useRef, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ApartmentsIcon } from "@/components/SvgIcons/ApartmentsIcon";
import CommonInput from "@/components/shared/Form/FormInput/CommonInput";
import FormSelect from "@/components/shared/CommonSelect/FormSelect";
import CommonCheckbox from "@/components/shared/Form/FormInput/CommonCheckbox";
import CommonTextEditor from "@/components/shared/Form/CommonTextEditor/CommonTextEditor";
import {
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { apartmentSchema, apartmentDefaultValues } from "@/zodSchema/apartmentZodSchema";

const AddApartmentForm = () => {
  const [resetKey, setResetKey] = useState(0);
  const notesRef = useRef("");

  const methods = useForm({
    resolver: zodResolver(apartmentSchema),
    defaultValues: apartmentDefaultValues,
  });

  const onSubmit = (data) => {
    const notes = notesRef.current || "";
    console.log("Apartment data:", { ...data, notes });
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
        className="flex flex-col gap-4"
      >
        {/* Row 1: Building Name */}
        <FormSelect
          name="buildingName"
          label="Building Name*"
          options={[
            { label: "Buildings", value: "buildings" },
            { label: "Sunrise Tower", value: "sunrise-tower" },
            { label: "Skyline Apartments", value: "skyline-apartments" },
          ]}
          placeholder="Select building"
        />

        {/* Row 2: Nestaway ID, Flat Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormSelect
            name="nestawayId"
            label="Nestaway ID*"
            options={[
              { label: "e.g..NW-1234", value: "nw-1234" },
              { label: "NW-5678", value: "nw-5678" },
            ]}
            placeholder="Select Nestaway ID"
          />

          <CommonInput
            name="flatNumber"
            label="Flat Number*"
            placeholder="Type flat no..."
            className="pl-4"
          />
        </div>

        {/* Row 3: Floor, Apartment Type, Area */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <CommonInput
            name="floor"
            label="Floor*"
            placeholder="0"
            className="pl-4"
          />

          <FormSelect
            name="apartmentType"
            label="Apartment Type*"
            options={[
              { label: "1BHK", value: "1BHK" },
              { label: "2BHK", value: "2BHK" },
              { label: "3BHK", value: "3BHK" },
              { label: "4BHK", value: "4BHK" },
            ]}
            placeholder="Select type"
          />

          <CommonInput
            name="area"
            label="Area ( sqft)*"
            placeholder="0.."
            className="pl-4"
          />
        </div>

        {/* Row 4: Bedrooms, Bathrooms, Parking Slot */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <CommonInput
            name="bedrooms"
            label="Bedrooms*"
            placeholder="2"
            className="pl-4"
          />
          <CommonInput
            name="bathrooms"
            label="Bathrooms*"
            placeholder="2"
            className="pl-4"
          />
          <CommonInput
            name="parkingSlot"
            label="Parking Slot*"
            placeholder="0.."
            className="pl-4"
          />
        </div>

        {/* Row 5: Has Balcony (Checkbox) */}
        <div className="flex items-center py-1">
          <CommonCheckbox
            name="hasBalcony"
            label="Has Balcony"
          />
        </div>

        {/* Row 6: Expected Rent, Maintenance Charge, Water Charge */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <CommonInput
            name="expectedRent"
            label="Expected Rent Amount ( ₹ )*"
            placeholder="0"
            className="pl-4"
          />
          <CommonInput
            name="maintenanceCharge"
            label="Maintenance Charge ( ₹ )*"
            placeholder="2"
            className="pl-4"
          />
          <CommonInput
            name="waterCharge"
            label="Water Charge ( ₹ )*"
            placeholder="0.."
            className="pl-4"
          />
        </div>

        {/* Row 7: Owner */}
        <FormSelect
          name="owner"
          label="Owner*"
          options={[
            { label: "Select Owner", value: "select-owner" },
            { label: "John Doe", value: "john-doe" },
            { label: "Jane Smith", value: "jane-smith" },
          ]}
          placeholder="Select Owner"
        />

        {/* Row 8: Notes */}
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
            render={<Button variant="outline" type="button" className="w-full" />}
          >
            <X className="w-4 h-4" />
            Cancel
          </DialogClose>
          <Button type="submit" className="w-full">
            <ApartmentsIcon className="w-4 h-4" />
            Add New Apartment
          </Button>
        </DialogFooter>
      </form>
    </FormProvider>
  );
};

export default AddApartmentForm;
