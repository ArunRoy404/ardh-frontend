import HistoryFilter from "@/components/Settings/SetingsHistory/HistoryFilter";
import HistoryContainer from "@/components/Settings/SetingsHistory/HistoryContainer";

const SettingsDeletedHistory = () => {
  return (
    <div className="flex flex-col gap-6 w-full mt-6 text-left">
      <HistoryFilter />
      <HistoryContainer />
    </div>
  );
};

export default SettingsDeletedHistory;
