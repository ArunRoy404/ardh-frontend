import { TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabItems = [
  { value: "general", label: "General" },
  { value: "change-password", label: "Change Password" },
  { value: "deleted-history", label: "Deleted History" },
];

const tabTriggerClass =
  "data-active:bg-primary data-active:text-white px-4 py-2 h-10 text-xs font-semibold rounded-[6px] text-dark-gray bg-transparent border border-transparent transition-all cursor-pointer";

const SettingsTabs = () => {
  return (
    <TabsList className="bg-transparent flex gap-3 h-auto p-0 justify-start border-none">
      {tabItems.map((tab) => (
        <TabsTrigger key={tab.value} value={tab.value} className={tabTriggerClass}>
          {tab.label}
        </TabsTrigger>
      ))}
    </TabsList>
  );
};

export default SettingsTabs;
