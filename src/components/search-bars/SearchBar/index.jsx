import { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { StyledInput } from './styles'

const SearchBar = (props) => {
  const { getBySearchTerm, placeholder } = props
  const [search, setSearch] = useState('')
  const [timer, setTimer] = useState(null)

  const handleSearch = useCallback(
    (event) => {
      if (timer) {
        clearTimeout(timer)
        setTimer(null)
      }
      setSearch(event.target.value)
      setTimer(setTimeout(() => getBySearchTerm(event.target.value), 500))
    },
    [getBySearchTerm, timer]
  )

  return (
    <StyledInput
      value={search}
      onChange={handleSearch}
      type='search'
      placeholder={placeholder}
    />
  )
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  getBySearchTerm: PropTypes.func,
}

export default SearchBar
