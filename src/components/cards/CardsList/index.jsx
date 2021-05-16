import PropTypes from 'prop-types'
import BookCard from '../BookCard'
import Pagination from '../../tools/Pagination'
import Row from '../../layouts/Row'
import { CardsListDiv, SearchInfo } from './styles'

const CardsList = (props) => {
  const { books, meta, getByPage } = props

  const getResultsInfo = (meta) => {
    return `${meta.totalItems} livros encontrados`
  }

  return (
    <>
      <Row>
        <SearchInfo>{getResultsInfo(meta)}</SearchInfo>
      </Row>
      <Row>
        <CardsListDiv>
          {books.map((item) => (
            <BookCard
              key={item.id}
              thumbnail={item.volumeInfo?.imageLinks?.thumbnail}
              title={item.volumeInfo?.title}
              author={item.volumeInfo?.authors}
              textSnippet={item.searchInfo?.textSnippet}
              publishedDate={item.volumeInfo?.publishedDate}
            ></BookCard>
          ))}
        </CardsListDiv>
      </Row>
      <Row>
        <Pagination meta={meta} getByPage={getByPage}></Pagination>
      </Row>
    </>
  )
}

CardsList.propTypes = {
  books: PropTypes.array,
  meta: PropTypes.object,
  getByPage: PropTypes.func,
}

export default CardsList
