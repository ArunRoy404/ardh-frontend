import { TabsContent } from "@/components/ui/tabs";
import GeneralSettingsForm from "@/components/Settings/GeneralSettingsForm";
import ChangePasswordForm from "@/components/Settings/ChangePasswordForm";
import SettingsDeletedHistory from "@/components/Settings/SettingsDeletedHistory";

const SettingsTabsContainer = () => {
  return (
    <>
      <TabsContent value="general" className="mt-2">
        <GeneralSettingsForm />
      </TabsContent>

      <TabsContent value="change-password" className="mt-2">
        <ChangePasswordForm />
      </TabsContent>

      <TabsContent value="deleted-history" className="mt-2">
        <SettingsDeletedHistory />
      </TabsContent>
    </>
  );
};

export default SettingsTabsContainer;
