import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import BookCard from '../BookCard'
import Pagination from '../../tools/Pagination'
import Row from '../../layouts/Row'
import BookDetailModal from '../../modals/BookDetail'
import { CardsListDiv, SearchInfo } from './styles'

const CardsList = (props) => {
  const { books, meta, getByPage, favoritesMode } = props
  const [modalIsOpen, setIsOpen] = useState(false)
  const [selectedBook, setSelectedBook] = useState({})

  useEffect(() => {
    openModal()
  }, [selectedBook])

  const selectBook = (book) => {
    setSelectedBook(book)
  }

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  const getResultsInfo = (meta) => {
    if (favoritesMode) {
      if (books?.length > 1) {
        return `${books?.length} livros adicionado aos favoritos`
      }
      if (books?.length) return '1 livro adicionado aos favoritos'
      return 'Nenhum livro adicionado aos favoritos'
    }
    if (meta.totalItems > 1) {
      return `${meta.totalItems} livros encontrados`
    }
    return '1 livro encontrado'
  }

  const Modal = (item) => {
    return (
      <BookDetailModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        book={item}
      ></BookDetailModal>
    )
  }

  return (
    <>
      <Row>
        <SearchInfo>{getResultsInfo(meta)}</SearchInfo>
      </Row>
      <Row>
        <CardsListDiv>
          {books?.length ? (
            books.map((item) => (
              <BookCard
                key={item.id}
                book={item}
                selectBook={selectBook}
              ></BookCard>
            ))
          ) : (
            <></>
          )}
          {selectedBook.id && modalIsOpen ? Modal(selectedBook) : <></>}
        </CardsListDiv>
      </Row>
      {!favoritesMode ? (
        <Row>
          <Pagination meta={meta} getByPage={getByPage}></Pagination>
        </Row>
      ) : (
        <></>
      )}
    </>
  )
}

CardsList.propTypes = {
  books: PropTypes.array,
  meta: PropTypes.object,
  getByPage: PropTypes.func,
  favoritesMode: PropTypes.bool,
}

export default CardsList
