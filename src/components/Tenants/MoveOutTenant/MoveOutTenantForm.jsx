import { useRef, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import CommonInput from "@/components/shared/Form/FormInput/CommonInput";
import CommonTextEditor from "@/components/shared/Form/CommonTextEditor/CommonTextEditor";
import { DialogFooter, DialogClose } from "@/components/ui/dialog";
import { toast } from "sonner";
import { moveOutTenantSchema, moveOutTenantDefaultValues } from "@/zodSchema/moveOutTenantZodSchema";

const MoveOutTenantForm = () => {
  const [resetKey, setResetKey] = useState(0);
  const notesRef = useRef("");

  const methods = useForm({
    resolver: zodResolver(moveOutTenantSchema),
    defaultValues: moveOutTenantDefaultValues,
  }); 

  const onSubmit = (data) => {
    const notes = notesRef.current || "";
    console.log("Move Out Tenant data:", { ...data, notes });
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
        className="flex flex-col gap-4 text-left font-['Poppins']"
      >
        {/* Move Out Date - full width */}
        <CommonInput
          name="moveOutDate"
          label="Move Out Date*"
          type="date"
          placeholder="dd/mm/yyyy"
          className="pl-4"
        />

        {/* Pending Rent, Damage, Refund - 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <CommonInput
            name="pendingRent"
            label="Pending Rent *"
            placeholder="0"
            className="pl-4"
          />
          <CommonInput
            name="damage"
            label="Damage *"
            placeholder="0"
            className="pl-4"
          />
          <CommonInput
            name="refund"
            label="Refund *"
            placeholder="0.."
            className="pl-4"
          />
        </div>

        {/* ID Number - full width */}
        <CommonInput
          name="idNumber"
          label="ID Number*"
          placeholder="e.g.123456789"
          className="pl-4"
        />

        {/* Notes - CommonTextEditor */}
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
            <XCircle className="w-4 h-4 text-dark-gray" />
            Cancel
          </DialogClose>
          <Button type="submit" variant="destructive" className="w-full">
            Confirm Move Out
          </Button>
        </DialogFooter>
      </form>
    </FormProvider>
  );
};

export default MoveOutTenantForm;
