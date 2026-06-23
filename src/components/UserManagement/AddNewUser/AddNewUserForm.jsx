import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { X, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import CommonInput from "@/components/shared/Form/FormInput/CommonInput";
import FormSelect from "@/components/shared/CommonSelect/FormSelect";
import CommonImageUpload from "@/components/shared/Form/CommonImageUpload/CommonImageUpload";
import {
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { userSchema, userDefaultValues } from "@/zodSchema/userZodSchema";

const AddNewUserForm = () => {
  const [uploadedImages, setUploadedImages] = useState([]);

  const methods = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: userDefaultValues,
  });

  const onSubmit = (data) => {
    console.log("User data:", { ...data, profileImage: uploadedImages });
    methods.reset();
    setUploadedImages([]);
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
            placeholder="Enter full name...."
            className="pl-4"
          />
          <CommonInput
            name="phone"
            label="Phone Number *"
            placeholder="Enter phone number...."
            className="pl-4"
          />
        </div>

        {/* Email & Address - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <CommonInput
            name="email"
            label="Email *"
            placeholder="company@example.com"
            className="pl-4"
          />
          <CommonInput
            name="address"
            label="Address *"
            placeholder="Type Address....."
            className="pl-4"
          />
        </div>

        {/* User Password & Confirm User Password - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <CommonInput
            name="password"
            label="User Password *"
            placeholder="********"
            type="password"
            className="pl-4"
          />
          <CommonInput
            name="confirmPassword"
            label="Confirm User Password *"
            placeholder="********"
            type="password"
            className="pl-4"
          />
        </div>

        {/* Select Role & Permissions to Use - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormSelect
            name="role"
            label="Select Role *"
            options={[
              { label: "Owner/Super admin", value: "Owner/Super admin" },
              { label: "Admin", value: "Admin" },
              { label: "Property Manager", value: "Property Manager" },
              { label: "Accountant", value: "Accountant" },
              { label: "Security", value: "Security" },
              { label: "Technician", value: "Technician" },
            ]}
            placeholder="Select Role"
          />
          <FormSelect
            name="permissions"
            label="Permissions to Use *"
            options={[
              { label: "Full Access", value: "Full Access" },
              { label: "Read Only", value: "Read Only" },
              { label: "Custom Permissions", value: "Custom" },
            ]}
            placeholder="Select Permissions"
          />
        </div>

        {/* Upload Profile Image */}
        <CommonImageUpload
          label="Upload Profile Image *"
          images={uploadedImages}
          onImagesChange={setUploadedImages}
          multiple={false}
          placeholder="Click to Upload"
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
            <Upload className="w-4 h-4" />
            Upload Document
          </Button>
        </DialogFooter>
      </form>
    </FormProvider>
  );
};

export default AddNewUserForm;
