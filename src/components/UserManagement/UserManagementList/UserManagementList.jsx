import CommonSearch from "@/components/shared/CommonSearch/CommonSearch"
import UserTable from "./UserTable"
import UserCardsContainer from "./UserCardsContainer"
import useUserStore from "@/dummyDataStore/useUserStore"
import ListSkeleton from "@/components/skeletons/ListSkeleton"

const UserManagementList = ({ loading = false }) => {
  const { userRecords } = useUserStore()

  if (loading) return <ListSkeleton cardRows={4} hasMiddleContent={true} cardsCount={3} tableColumns={8} tableRows={5} />

  return (
    <>
      <CommonSearch />

      {/* Cards for small screens */}
      <div className="block md:hidden">
        <UserCardsContainer
          data={userRecords}
          actionKey="id"
          itemsPerPage={10}
          emptyMessage="No users found."
        />
      </div>

      {/* Table for medium+ screens */}
      <div className="hidden md:block">
        <UserTable data={userRecords} />
      </div>
    </>
  )
}

export default UserManagementList
