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
      setTimer(setTimeout(() => props.getBySearchTerm(event.target.value), 500))
    },
    [props.getBySearchTerm, timer]
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
  getBySearchTerm: PropTypes.func,
}

export default SearchBar
