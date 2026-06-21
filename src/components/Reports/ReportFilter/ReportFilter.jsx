import { useForm, FormProvider } from "react-hook-form"
import FormSelect from "@/components/shared/CommonSelect/FormSelect"
import CommonInput from "@/components/shared/Form/FormInput/CommonInput"

const ReportFilter = () => {
  const methods = useForm({
    defaultValues: {
      reportType: "income",
      building: "all",
      fromDate: "",
      toDate: "",
    },
  })

  return (
    <FormProvider {...methods}>
      <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-transparent mb-6" onSubmit={(e) => e.preventDefault()}>
        {/* Report Type Select */}
        <FormSelect
          name="reportType"
          label="Report Type"
          options={[
            { label: "Income Report", value: "income" },
            { label: "Expense Report", value: "expense" },
          ]}
          placeholder="Select Report Type"
        />

        {/* Building Select */}
        <FormSelect
          name="building"
          label="Building"
          options={[
            { label: "All Buildings", value: "all" },
            { label: "Sunrise Building", value: "sunrise-building" },
            { label: "Sunrise Tower", value: "sunrise-tower" },
            { label: "Skyline Residency", value: "skyline-residency" },
            { label: "Green Valley", value: "green-valley" },
          ]}
          placeholder="Select Building"
        />

        {/* From Date Input */}
        <CommonInput
          name="fromDate"
          label="From Date"
          type="date"
          className="pl-4"
        />

        {/* To Date Input */}
        <CommonInput
          name="toDate"
          label="To Date"
          type="date"
          className="pl-4"
        />
      </form>
    </FormProvider>
  )
}

export default ReportFilter