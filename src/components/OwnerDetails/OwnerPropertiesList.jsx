import React from "react"
import CommonSearch from "@/components/shared/CommonSearch/CommonSearch"
import OwnerPropertiesTable from "./OwnerPropertiesTable"
import OwnerPropertiesCardsContainer from "./OwnerPropertiesCardsContainer"

const OwnerPropertiesList = ({ data = [] }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-primary font-serif">
        Properties ( {data.length} )
      </h3>

      <CommonSearch />

      {/* Cards for small screens */}
      <div className="block md:hidden">
        <OwnerPropertiesCardsContainer data={data} />
      </div>

      {/* Table for medium+ screens */}
      <div className="hidden md:block">
        <OwnerPropertiesTable data={data} />
      </div>
    </div>
  )
}

export default OwnerPropertiesList
