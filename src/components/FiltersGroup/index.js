import './index.css'
import {BsSearch} from 'react-icons/bs'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    searchInput,
    searchValue,
    clearFilters,
  } = props

  const onEnterSearchInput = event => {
    const {onEnter} = props
    if (event.key === 'Enter') {
      onEnter()
    }
  }

  const onChangeCategorySearch = event => searchInput(event.target.value)

  const renderCategory = () => (
    <div>
      <h1 className="title-category">Category</h1>
      <ul>
        {categoryOptions.map(each => {
          const {categoryFilter, activeCategoryId} = props
          const onChangeCategoryOption = () => categoryFilter(each.categoryId)
          const categoryActive =
            activeCategoryId === each.categoryId
              ? ' active-category'
              : 'category-item'
          return (
            <li
              key={each.categoryId}
              className="category-list-item"
              onClick={onChangeCategoryOption}
            >
              <p className={categoryActive}> {each.name}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )

  const renderRating = () => (
    <div>
      <h1 className="title-rating">Rating</h1>
      <ul>
        {ratingsList.map(each => {
          const {ratingFilter, activeRatingId} = props
          const onChangeRatingOption = () => ratingFilter(each.ratingId)
          const activeRating =
            activeRatingId === each.ratingId ? 'active-rating' : 'rating-color'
          return (
            <li
              className="rating-box"
              key={each.ratingId}
              onClick={onChangeRatingOption}
            >
              <img
                src={each.imageUrl}
                alt={`rating-${each.ratingId}`}
                className="rate-star"
              />

              <p className={activeRating}>&Up</p>
            </li>
          )
        })}
      </ul>
    </div>
  )

  return (
    <div className="filters-group-container">
      {/* Replace this element with your code */}
      <div className="search-con">
        <input
          value={searchValue}
          type="search"
          onChange={onChangeCategorySearch}
          onKeyDown={onEnterSearchInput}
          placeholder="search"
          className="search-input"
        />

        <BsSearch className="sort-by-icon" />
      </div>
      {renderCategory()}
      {renderRating()}

      <button type="button" className="clear-filter" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
