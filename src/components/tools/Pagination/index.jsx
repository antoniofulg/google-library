import PropTypes from 'prop-types'
import { PageNavigation, PageInfo, PaginationDiv } from './styles'

const Pagination = (props) => {
  const { getByPage, meta } = props

  const getOnScreenBooksCount = () => {
    const firstBook = meta.startIndex + 1
    const endIndex = meta.startIndex + meta.maxResults
    let lastBook = 0
    if (endIndex > meta.totalItems) lastBook = meta.totalItems
    else lastBook = endIndex
    return `do ${firstBook}º ao ${lastBook}º livro`
  }

  const getTotalItems = () => {
    return meta.totalItems
  }

  const getPreviousPageButtonValidation = () => {
    return meta.startIndex - meta.maxResults < 0
  }

  const getNextPageButtonValidation = () => {
    return meta.startIndex + meta.maxResults > meta.totalItems
  }

  const updatePagination = (next = false) => {
    if (next && !getNextPageButtonValidation()) {
      const startIndex = meta.startIndex + meta.maxResults
      getByPage(startIndex)
    } else if (!next && !getPreviousPageButtonValidation()) {
      const startIndex = meta.startIndex - meta.maxResults
      getByPage(startIndex)
    }
  }

  return (
    <PaginationDiv>
      <PageNavigation
        disabled={getPreviousPageButtonValidation()}
        onClick={() => updatePagination()}
      >
        Página anterior
      </PageNavigation>
      <PageInfo>
        Mostrando: {getOnScreenBooksCount()}, de {getTotalItems()}
      </PageInfo>
      <PageNavigation
        disabled={getNextPageButtonValidation()}
        onClick={() => updatePagination(true)}
      >
        Próxima página
      </PageNavigation>
    </PaginationDiv>
  )
}

Pagination.propTypes = {
  meta: PropTypes.object,
  getByPage: PropTypes.func,
}

export default Pagination
