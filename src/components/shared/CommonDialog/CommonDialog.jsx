import { useState } from "react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const CommonDialog = ({
  title,
  titleClassName,
  icon = <PlusCircle className="w-4 h-4" />,
  children,
  triggerVariant
}) => {
  const [open, setOpen] = useState(false);
  const [dialogKey, setDialogKey] = useState(0);

  const handleOpenChange = (value) => {
    setOpen(value);
    if (value) {
      setDialogKey((k) => k + 1);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <Button onClick={() => setOpen(true)} variant={triggerVariant}>
        {icon}
        {title}
      </Button>

      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className={titleClassName}>{title}</DialogTitle>
        </DialogHeader>
        <div key={dialogKey}>{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export default CommonDialog;
