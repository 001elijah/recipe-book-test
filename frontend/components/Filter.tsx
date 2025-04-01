interface FilterProps {
  filterType: string
  filterValue: string
  onFilterTypeChange: (value: string) => void
  onFilterValueChange: (value: string) => void
}

export const Filter = ({ filterType, filterValue, onFilterTypeChange, onFilterValueChange }: FilterProps) => {
  return (
    <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-start gap-2">
      <select className="border p-2 h-10 w-full sm:w-auto" onChange={e => onFilterTypeChange(e.target.value)} value={filterType}>
        <option value="">Select Filter</option>
        <option value="ingredient">Filter by Ingredient</option>
        <option value="country">Filter by Country</option>
        <option value="category">Filter by Category</option>
      </select>
      <input
        className="border p-2 h-10 w-full sm:w-auto"
        onChange={e => onFilterValueChange(e.target.value)}
        placeholder="Enter filter value"
        value={filterValue}
      />
    </div>
  )
}
