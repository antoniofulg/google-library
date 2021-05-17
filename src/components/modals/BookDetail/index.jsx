import Modal from 'react-modal'
import PropTypes from 'prop-types'
import {
  DetailButton,
  FavButton,
  CardPreview,
  CardActions,
  Image,
  Title,
  Info,
  Snippet,
  CardContent,
} from '../../../shared/cards'
import { Card, CardDescription } from './styles'
import {
  formatAuthors,
  formatThumbnail,
  formatDescription,
  formatPublishedDate,
  formatPublisher,
  formatPageCount,
} from '../../../utils/book-formatter'

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
            {formatPublisher(book.volumeInfo?.publisher)}
          </Snippet>
        </CardContent>
        <CardDescription>
          <Snippet>
            {formatDescription(
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
