import HistoryFilter from "@/components/Settings/HistoryFilter";
import HistoryContainer from "@/components/Settings/HistoryContainer";

const SettingsDeletedHistory = () => {
  return (
    <div className="flex flex-col gap-6 w-full mt-6 text-left">
      <HistoryFilter />
      <HistoryContainer />
    </div>
  );
};

export default SettingsDeletedHistory;
