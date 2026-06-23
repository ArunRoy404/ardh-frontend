import { TabsContent } from "@/components/ui/tabs";
import GeneralSettingsForm from "@/components/Settings/GeneralSettingsForm";
import ChangePasswordForm from "@/components/Settings/ChangePasswordForm";

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
        <div className="text-dark-gray py-16 text-center font-['Poppins'] text-sm bg-muted/20 border border-dashed border-border rounded-lg mt-6">
          No deleted history records found.
        </div>
      </TabsContent>
    </>
  );
};

export default SettingsTabsContainer;
