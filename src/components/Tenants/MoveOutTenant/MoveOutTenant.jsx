import CommonDialog from "@/components/shared/CommonDialog/CommonDialog";
import MoveOutTenantForm from "./MoveOutTenantForm";
import { LogOut } from "lucide-react";

const MoveOutTenant = ({ triggerVariant }) => {
  return (
    <CommonDialog
      title="Move Out Tenant"
      triggerVariant={triggerVariant}
      icon={<LogOut className="w-4 h-4" />}
    >
      <MoveOutTenantForm />
    </CommonDialog>
  );
};

export default MoveOutTenant;
