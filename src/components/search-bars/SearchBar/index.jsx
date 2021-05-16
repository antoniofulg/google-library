import { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { StyledInput } from './styles'

const SearchBar = (props) => {
  const [search, setSearch] = useState('')
  const [timer, setTimer] = useState(null)

  const handleSearch = useCallback(
    (event) => {
      if (timer) {
        clearTimeout(timer)
        setTimer(null)
      }
      setSearch(event.target.value)
      setTimer(setTimeout(() => props.getBooks(event.target.value), 500))
    },
    [props.getBooks, timer]
  )

  return (
    <StyledInput
      value={search}
      onChange={handleSearch}
      type='search'
      placeholder={props.placeholder}
    />
  )
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  getBooks: PropTypes.func,
}

export default SearchBar
