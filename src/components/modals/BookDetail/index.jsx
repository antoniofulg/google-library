import Modal from 'react-modal'
import PropTypes from 'prop-types'
import { isMatch, format, parse } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import placeholder from '../../../assets/img/placeholder.jpg'
import {
  Image,
  Title,
  Info,
  Snippet,
  Card,
  CardContent,
  CardDescription,
  CardPreview,
  CardActions,
  DetailButton,
  FavButton,
} from './styles'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overlfow: 'scroll',
  },
}

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

const formatPageCount = (pages) => {
  if (pages) return `${pages} páginas`
  return 'Não informado'
}

Modal.setAppElement('#root')

const BookDetail = (props) => {
  const { isOpen, closeModal, book, toggleFavoriteBook } = props

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel='Example Modal'
    >
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
          <Snippet>
            {formatPageCount(book.volumeInfo?.pageCount)} |{' '}
            {book.volumeInfo?.publisher}
          </Snippet>
        </CardContent>
        <CardDescription>
          <Snippet>
            {formatSnippet(
              book.volumeInfo?.description || book.searchInfo?.textSnippet
            )}
          </Snippet>
        </CardDescription>
        <CardActions>
          <DetailButton onClick={() => closeModal()}>Fechar</DetailButton>
          <FavButton
            favorites={book.favorite}
            onClick={() => {
              toggleFavoriteBook(book)
              closeModal()
            }}
          >
            {book.favorite
              ? 'Remover dos favoritos'
              : 'Adicionar aos favoritos'}
          </FavButton>
        </CardActions>
      </Card>
    </Modal>
  )
}

BookDetail.propTypes = {
  isOpen: PropTypes.bool,
  book: PropTypes.object,
  closeModal: PropTypes.func,
  toggleFavoriteBook: PropTypes.func,
}

export default BookDetail
