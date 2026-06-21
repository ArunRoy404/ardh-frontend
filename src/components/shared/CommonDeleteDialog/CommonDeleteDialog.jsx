import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Trash2, Lock, XCircle } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import CommonInput from "@/components/shared/Form/FormInput/CommonInput";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const deleteSchema = z.object({
  adminPassword: z.string().min(1, "Admin password is required"),
});

const CommonDeleteDialog = ({
  itemName = "",
  itemType = "Building",
  onDelete,
  trigger,
  open: openProp,
  onOpenChange: onOpenChangeProp,
}) => {
  const isControlled = openProp !== undefined;
  const [internalOpen, setInternalOpen] = useState(false);
  const open = isControlled ? openProp : internalOpen;
  const setOpen = isControlled ? onOpenChangeProp : setInternalOpen;

  const methods = useForm({
    resolver: zodResolver(deleteSchema),
    defaultValues: {
      adminPassword: "",
    },
  });

  const onSubmit = (data) => {
    console.log(`Deleting ${itemType} "${itemName}":`, data);
    methods.reset();
    setOpen(false);
    if (onDelete) {
      onDelete();
    }
    toast.warning("Delete action simulated (not fully implemented)!");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger && (
        <DialogTrigger asChild>
          {trigger}
        </DialogTrigger>
      )}
      <DialogContent className="sm:max-w-sm max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#DC26261A] text-[#DC2626]">
              <Trash2 className="w-5 h-5" />
            </div>
            <span className="text-[28px] font-medium font-['Adobe_Aldine'] text-[#1E3A5F]">
              Confirm Deletion
            </span>
          </DialogTitle>
        </DialogHeader>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex flex-col gap-5 pt-3"
          >
            {/* Confirmation Text */}
            <div className="space-y-3">
              <p className="text-sm font-['Poppins'] text-[#64748B] leading-relaxed">
                You are about to permanently delete <span className="font-semibold text-[#0F172A]">{itemName}</span>. This action cannot be undone.
              </p>
              <p className="text-sm font-['Poppins'] text-[#64748B]">
                Enter the admin password to proceed.
              </p>
            </div>

            {/* Password Input */}
            <div className="pb-2">
              <CommonInput
                name="adminPassword"
                label="Admin Password"
                placeholder="Enter dilation password"
                type="password"
                icon={Lock}
              />
            </div>

            {/* Footer Actions */}
            <DialogFooter className="grid grid-cols-2 gap-4 pt-2">
              <DialogClose
                render={
                  <Button
                    variant="outline"
                    type="button"
                  />
                }
              >
                <XCircle className="w-4 h-4 text-slate-500" />
                Cancel
              </DialogClose>
              <Button
                type="submit"
                variant="destructive"
              >
                <Trash2 className="w-4 h-4" />
                Delete {itemType}
              </Button>
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default CommonDeleteDialog;