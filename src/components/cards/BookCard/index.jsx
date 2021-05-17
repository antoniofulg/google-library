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
import { isMatch, format, parse } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import placeholder from '../../../assets/img/placeholder.jpg'

const formatAuthors = (authors = []) => {
  if (authors.length > 1) {
    const last = authors.pop()
    return authors.join(', ').concat(' e ', last)
  }
  if (authors.length) return authors[0]
  return 'Autor Desconhecido'
}

const formatThumbnail = (thumb) => {
  if (thumb) return thumb
  return placeholder
}

const formatSnippet = (text) => {
  if (text) return text
  return 'Descrição não disponível'
}

const formatPublishedDate = (dateString = '') => {
  if (isMatch(dateString, 'yyyy-MM-dd')) {
    const date = parse(dateString, 'yyyy-MM-dd', new Date())
    return format(date, 'dd MMMM yyyy', { locale: ptBR })
  }
  if (isMatch(dateString, 'yyyy')) return dateString
  return 'Data de publicação indisponível'
}

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
        <Snippet>{formatSnippet(book.searchInfo?.textSnippet)}</Snippet>
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
