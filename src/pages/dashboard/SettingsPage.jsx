import DashboardHeader from "@/components/DashboardLayout/DashbaordHeader";
import { Tabs } from "@/components/ui/tabs";
import SettingsTabs from "@/components/Settings/SettingsTab/SettingsTabs";
import SettingsTabsContainer from "@/components/Settings/SettingsTab/SettingsTabsContainer";

const SettingsPage = () => {
  return (
    <>
      {/* Header Block */}
      <DashboardHeader
        title="Settings"
        showBreadcrumb 
      />

      {/* Tabs Container */}
      <Tabs defaultValue="general" className="w-full mt-6 flex flex-col gap-4">
        <SettingsTabs />
        <SettingsTabsContainer />
      </Tabs>
    </>
  );
};

export default SettingsPage;
