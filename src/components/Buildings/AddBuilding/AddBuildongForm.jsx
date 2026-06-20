import { useRef, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BuildingsIcon } from "@/components/SvgIcons/BuildingsIcon";
import CommonInput from "@/components/shared/Form/FormInput/CommonInput";
import FormSelect from "@/components/shared/CommonSelect/FormSelect";
import CommonTextEditor from "@/components/shared/Form/CommonTextEditor/CommonTextEditor";
import CommonImageUpload from "@/components/shared/Form/CommonImageUpload/CommonImageUpload";
import {
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { buildingSchema, buildingDefaultValues } from "@/zodSchema/buildingZodSchema";



const AddBuildingForm = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [resetKey, setResetKey] = useState(0);
  const descriptionRef = useRef("");

  const methods = useForm({
    resolver: zodResolver(buildingSchema),
    defaultValues: buildingDefaultValues,
  });

  const onSubmit = (data) => {
    const description = descriptionRef.current || "";
    console.log("Building data:", { ...data, description, uploadedImages });
    methods.reset();
    setResetKey((k) => k + 1);
    setUploadedImages([]);
    descriptionRef.current = "";
    toast.warning("Feature not implemented yet!");
  };

  return (
    <FormProvider {...methods}>
      <form
        // eslint-disable-next-line react-hooks/refs
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        {/* Building Name - full width */}
        <CommonInput
          name="buildingName"
          label="Building Name*"
          placeholder="Type your building name..."
          className="pl-4"
        />

        {/* Address - full width */}
        <CommonInput
          name="address"
          label="Address*"
          placeholder="Type your building address..."
          className="pl-4"
        />

        {/* City, State, Country - 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <CommonInput
            name="city"
            label="City*"
            placeholder="Type your city address..."
            className="pl-4"
          />
          <CommonInput
            name="state"
            label="State*"
            placeholder="Type your state address..."
            className="pl-4"
          />
          <CommonInput
            name="country"
            label="country*"
            placeholder="Type your country ..."
            className="pl-4"
          />
        </div>

        {/* Google Map Link, Total Floors - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <CommonInput
            name="googleMapLink"
            label="Google Map Link*"
            placeholder="Type your city address..."
            className="pl-4"
          />
          <CommonInput
            name="totalFloors"
            label="Total Floors*"
            placeholder="Type your country ..."
            className="pl-4"
          />
        </div>

        {/* Parking Details, Status - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <CommonInput
            name="parkingDetails"
            label="Parking Details*"
            placeholder="Type parking details..."
            className="pl-4"
          />

          {/* Status Dropdown */}
          <FormSelect
            name="status"
            label="Status*"
            options={[
              { label: "Active", value: "active" },
              { label: "Inactive", value: "inactive" },
              { label: "Under Construction", value: "under-construction" },
            ]}
            placeholder="Select status"
          />
        </div>

        {/* Description - CommonTextEditor */}
        <CommonTextEditor
          key={resetKey}
          label="Description*"
          placeholder="Type description..."
          onContentChange={(html) => {
            descriptionRef.current = html;
          }}
        />

        {/* Upload Building Image */}
        <CommonImageUpload
          label="Upload Building image*"
          images={uploadedImages}
          onImagesChange={setUploadedImages}
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
            <BuildingsIcon className="w-4 h-4" />
            Add New Building
          </Button>
        </DialogFooter>
      </form>
    </FormProvider>
  );
};

export default AddBuildingForm;
