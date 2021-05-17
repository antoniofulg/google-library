import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import BookCard from '../BookCard'
import Pagination from '../../tools/Pagination'
import Row from '../../layouts/Row'
import BookDetailModal from '../../modals/BookDetail'
import { CardsListDiv, SearchInfo } from './styles'

const CardsList = (props) => {
  const { books, meta, getByPage } = props
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
    return `${meta.totalItems} livros encontrados`
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
