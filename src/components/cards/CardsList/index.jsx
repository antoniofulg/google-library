import PropTypes from 'prop-types'
import BookCard from '../BookCard'
import Column from '../../layouts/Column'
import { Row } from './styles'

const CardsList = ({ books }) => {
  return (
    <Row>
      {books.map((item) => (
        <Column key={item.id} mobile='12' tablet='6' desktop='4'>
          <BookCard
            thumbnail={item.volumeInfo?.imageLinks?.thumbnail}
            title={item.volumeInfo?.title}
            author={item.volumeInfo?.authors}
            textSnippet={item.searchInfo?.textSnippet}
            publishedDate={item.volumeInfo?.publishedDate}
          ></BookCard>
        </Column>
      ))}
    </Row>
  )
}

CardsList.propTypes = {
  books: PropTypes.array,
}

export default CardsList
