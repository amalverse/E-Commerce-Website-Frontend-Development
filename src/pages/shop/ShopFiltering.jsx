import React from "react";

//Rendering the filtering options in the shop page.
const ShopFiltering = ({
  filters,
  filtersState,
  setFiltersState,
  clearFilters,
}) => {
  return (
    <div className="space-y-5 shrink-0">
      <h3>Filters</h3>

      {/* Filter By Category */}
      <div className="flex flex-col space-y-2 ">
        <h4 className="font-medium text-lg">Category</h4>
        <hr />
        {filters.categories.map((category) => (
          <label key={category} className="capitalize cursor-pointer">
            <input
              type="radio"
              name="category"
              value={category}
              checked={filtersState.category === category}
              onChange={(e) =>
                setFiltersState({ ...filtersState, category: e.target.value })
              }
            />
            <span className="ml-1">{category}</span>
          </label>
        ))}
      </div>

      {/* Filter By Price Range */}
      <div className="flex flex-col space-y-2">
        <h4 className="font-medium text-lg">Price Range</h4>
        <hr />
        {filters.priceRange.map((range) => (
          <label key={range.label} className="capitalize cursor-pointer">
            <input
              type="radio"
              name="ratingRange"
              id="ratingRange"
              checked={
                filtersState.priceRange &&
                filtersState.priceRange.min === range.min &&
                filtersState.priceRange.max === range.max
              }
              onChange={() =>
                setFiltersState({ ...filtersState, priceRange: range })
              }
            />
            <span className="ml-1">{range.label}</span>
          </label>
        ))}
      </div>

      {/* Filter By Rating Range */}
      <div className="flex flex-col space-y-2">
        <h4 className="font-medium text-lg">Rating</h4>
        <hr />
        {filters.ratingRange.map((range) => (
          <label key={range.label} className="capitalize cursor-pointer">
            <input
              type="radio"
              name="priceRange"
              id="priceRange"
              checked={
                filtersState.ratingRange &&
                filtersState.ratingRange.min === range.min &&
                filtersState.ratingRange.max === range.max
              }
              onChange={() =>
                setFiltersState({ ...filtersState, ratingRange: range })
              }
            />
            <span className="ml-1">{range.label}</span>
          </label>
        ))}
      </div>

      {/* clear filters */}
      <button
        onClick={clearFilters}
        className="bg-red-600 py-2 px-4 text-white rounded"
      >
        Clear All Filters
      </button>
    </div>
  );
};

export default ShopFiltering;
