import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import CommonInput from "@/components/shared/Form/FormInput/CommonInput";
import CommonImageUpload from "@/components/shared/Form/CommonImageUpload/CommonImageUpload";
import { toast } from "sonner";
import { generalSettingsSchema, generalSettingsDefaultValues } from "@/zodSchema/settingsZodSchema";

const GeneralSettingsForm = () => {
  const [logoImages, setLogoImages] = useState([]);
  const [favIconImages, setFavIconImages] = useState([]);

  const methods = useForm({
    resolver: zodResolver(generalSettingsSchema),
    defaultValues: generalSettingsDefaultValues,
  });

  const onSubmit = (data) => {
    console.log("General Settings data:", { ...data, logo: logoImages, favicon: favIconImages });
    toast.success("Settings updated successfully!");
  };

  return (
    <FormProvider {...methods}>
      <form
        // eslint-disable-next-line react-hooks/refs
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 text-left w-full mt-6"
      >
        {/* Name & Email - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <CommonInput
            name="companyName"
            label="Company Name *"
            placeholder="ARDH Properties"
            className="pl-4"
          />
          <CommonInput
            name="companyEmail"
            label="Company Email *"
            placeholder="admin@ardh.com"
            className="pl-4"
          />
        </div>

        {/* Phone & Address - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <CommonInput
            name="phone"
            label="Phone Number *"
            placeholder="+91 987543210"
            className="pl-4"
          />
          <CommonInput
            name="address"
            label="Address *"
            placeholder="Hyderabad, India"
            className="pl-4"
          />
        </div>

        {/* Logos & Favicons - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <CommonImageUpload
            label="Company Logo *"
            images={logoImages}
            onImagesChange={setLogoImages}
            multiple={false}
            placeholder="Click to Upload"
          />
          <CommonImageUpload
            label="Fav Icon *"
            images={favIconImages}
            onImagesChange={setFavIconImages}
            multiple={false}
            placeholder="Click to Upload"
          />
        </div>

        {/* Save changes button */}
        <div className="pt-2">
          <Button type="submit" className="w-fit flex items-center gap-2 px-6">
            <Bookmark className="w-4 h-4" />
            Save Changes
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default GeneralSettingsForm;
