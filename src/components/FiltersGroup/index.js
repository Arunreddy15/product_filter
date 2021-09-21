import './index.css'
import {BsSearch} from 'react-icons/bs'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    searchInput,
    categoryFilter,
    ratingFilter,
    clearFilters,
  } = props

  const onChangeCategorySearch = event => {
    const {target} = event
    const {value} = target
    searchInput(value)
  }

  const onChangeCategoryOption = event => {
    const {target} = event
    const {value} = target
    categoryFilter(parseInt(value, 10))
  }

  const onChangeRatingOption = event => {
    const {target} = event
    const {value} = target
    ratingFilter(parseInt(value, 10))
    console.log(event.target.value)
  }

  return (
    <div className="filters-group-container">
      {/* Replace this element with your code */}
      <div className="search-con">
        <input
          type="search"
          onChange={onChangeCategorySearch}
          placeholder="search"
          className="search-input"
        />

        <BsSearch className="sort-by-icon" />
      </div>
      <div>
        <p className="title-category">Category</p>
        <ul>
          {categoryOptions.map(each => (
            <li key={each.categoryId} className="category-list-item">
              <button
                type="button"
                value={each.categoryId}
                onClick={onChangeCategoryOption}
                className="category-item"
              >
                {each.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="title-rating">Rating</p>
        <ul>
          {ratingsList.map(each => (
            <li className="rating-box" key={each.ratingId}>
              <button
                type="button"
                onClick={onChangeRatingOption}
                className="rate"
                id={each.ratingId}
              >
                <img src={each.imageUrl} alt="rating" className="rate-star" />
              </button>
              <p>&Up</p>
            </li>
          ))}
        </ul>
      </div>
      <button type="button" className="clear-filter" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
