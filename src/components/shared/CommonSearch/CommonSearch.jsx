import { useEffect } from "react"
import { Search } from "lucide-react"
import { FormProvider, useForm } from "react-hook-form"
import CommonInput from "@/components/shared/Form/FormInput/CommonInput"

const CommonSearch = ({ onSearch, placeholder = "Search ....." }) => {
  const form = useForm({ defaultValues: { search: "" } })
  const searchValue = form.watch("search")

  useEffect(() => {
    onSearch?.(searchValue)
  }, [searchValue, onSearch])

  return (
    <div className="w-full max-w-xs mb-4">
      <FormProvider {...form}>
        <CommonInput name="search" icon={Search} placeholder={placeholder} />
      </FormProvider>
    </div>
  )
}

export default CommonSearch