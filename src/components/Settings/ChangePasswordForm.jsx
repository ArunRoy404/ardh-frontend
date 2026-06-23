import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import CommonInput from "@/components/shared/Form/FormInput/CommonInput";
import { toast } from "sonner";
import { changePasswordSchema, changePasswordDefaultValues } from "@/zodSchema/settingsZodSchema";

const ChangePasswordForm = () => {
  const methods = useForm({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: changePasswordDefaultValues,
  });

  const onSubmit = (data) => {
    console.log("Change Password data:", data);
    methods.reset();
    toast.success("Password changed successfully!");
  };

  return (
    <FormProvider {...methods}>
      <form
        // eslint-disable-next-line react-hooks/refs
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 text-left w-full mt-6"
      >
        {/* 3 password fields - 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <CommonInput
            name="currentPassword"
            label="Current Password *"
            placeholder="********"
            type="password"
            className="pl-4"
          />
          <CommonInput
            name="newPassword"
            label="New Password *"
            placeholder="********"
            type="password"
            className="pl-4"
          />
          <CommonInput
            name="confirmNewPassword"
            label="Confirm New Password *"
            placeholder="********"
            type="password"
            className="pl-4"
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

export default ChangePasswordForm;
