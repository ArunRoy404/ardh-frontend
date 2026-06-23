import { useState } from "react";
import { LogOut } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import LogoutIcon from "@/components/SvgIcons/LogoutIcon";

const Logout = () => {
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    console.log("User logged out");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <Button variant="ghost" className=" text-destructive hover:text-destructive/80 cursor-pointer px-2! ">
                <LogoutIcon className="size-6" />
              </Button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Logout</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-xl font-medium font-['Adobe_Aldine'] text-primary">
            <div className="flex items-center justify-center w-11 h-11 rounded-full bg-destructive/10 text-destructive">
              <LogOut className="w-5 h-5" />
            </div>
            Are you Sure?
          </DialogTitle>
        </DialogHeader>

        <p className="text-sm font-['Poppins'] text-dark-gray leading-relaxed px-1">
          You want to Log Out from the Dashboard
        </p>

        <DialogFooter className="grid grid-cols-2 gap-4 pt-4">
          <DialogClose
            render={
              <Button variant="outline" type="button" />
            }
          >
            Cancel
          </DialogClose>
          <Button
            type="button"
            variant="destructive"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4" />
            Log Out
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Logout;
