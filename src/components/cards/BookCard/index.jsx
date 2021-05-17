import {
  Card,
  Image,
  Title,
  Info,
  Snippet,
  CardPreview,
  CardContent,
  CardActions,
  DetailButton,
  FavButton,
} from './styles'
import PropTypes from 'prop-types'
import {
  formatAuthors,
  formatThumbnail,
  formatDescription,
  formatPublishedDate,
} from '../../../utils/book-formatter'

const BookCard = (props) => {
  const { book, selectBook, toggleFavoriteBook } = props

  return (
    <Card>
      <CardPreview>
        <Image
          src={formatThumbnail(book.volumeInfo?.imageLinks?.thumbnail)}
          alt='Book'
        />
      </CardPreview>
      <CardContent>
        <Title>{book.volumeInfo?.title}</Title>
        <Info>
          por {formatAuthors(book.volumeInfo?.authors)} |{' '}
          {formatPublishedDate(book.volumeInfo?.publishedDate)}
        </Info>
      </CardContent>
      <CardActions>
        <DetailButton onClick={() => selectBook(book)}>
          Ver detalhes
        </DetailButton>
        <FavButton
          favorites={book.favorite}
          onClick={() => toggleFavoriteBook(book)}
        >
          {book.favorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        </FavButton>
      </CardActions>
      <CardContent>
        <Snippet>{formatDescription(book.searchInfo?.textSnippet)}</Snippet>
      </CardContent>
    </Card>
  )
}

BookCard.propTypes = {
  book: PropTypes.object,
  selectBook: PropTypes.func,
  toggleFavoriteBook: PropTypes.func,
}

export default BookCard
