import { useForm, FormProvider } from "react-hook-form";
import { Filter, Search } from "lucide-react";
import CommonInput from "@/components/shared/Form/FormInput/CommonInput";
import CommonDetailCard from "@/components/shared/DetailCard/CommonDetailCard";
import FormSelect from "@/components/shared/CommonSelect/FormSelect";

const HistoryFilter = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <CommonDetailCard cardClassName='bg-white!'>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-dark-gray text-xs font-semibold">
            <Filter className="w-4 h-4 text-dark-gray" />
            Filters
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <CommonInput
              name="search"
              icon={Search}
              placeholder="Search by name, type, user.."
            />

            <FormSelect
              name="type"
              options={[
                { label: "All", value: "all" },
                { label: "Income", value: "income" },
                { label: "Expense", value: "expense" },
                { label: "Tenant", value: "tenant" },
                { label: "Vendor", value: "vendor" },
              ]}
              placeholder="All"
            />

            <CommonInput
              name="fromDate"
              type="date"
              placeholder="dd/mm/yyyy"
            />

            <CommonInput
              name="toDate"
              type="date"
              placeholder="dd/mm/yyyy"
            />
          </div>
        </div>
      </CommonDetailCard>
    </FormProvider>
  );
};

export default HistoryFilter;
