const NoDataFound = ({ message = "No results found." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6">
      <p className="text-sm text-dark-gray font-medium">{message}</p>
    </div>
  )
}

export default NoDataFound
