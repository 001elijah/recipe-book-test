export const NoReceiptsMessage = () => {
  return (
    <div className="p-4 text-center border rounded bg-gray-100">
      <p className="text-lg font-semibold">No recipes found.</p>
      <p className="text-sm text-gray-600">Try adjusting the filters or search for another recipe.</p>
    </div>
  )
}
