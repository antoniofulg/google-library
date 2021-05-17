import { useState, useEffect, useRef } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import HomeLayout from '../../components/layouts/HomeLayout'
import SearchBar from '../../components/search-bars/SearchBar'
import CardsList from '../../components/cards/CardsList'
import { ToggleButton, PageInfo } from './styles'
import { findBooks } from '../../services/book'
import { findFavoriteBooks } from '../../utils/local-storage'

const findFavoriteMap = (book, bookToFind, favorite = true) => {
  if (book.id === bookToFind.id) book.favorite = favorite
  return book
}

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [books, setBooks] = useState([])
  const [meta, setMeta] = useState({})
  const [favorites, setFavorites] = useState(false)
  const [loading, setLoading] = useState(false)

  const searchTermInitialMount = useRef(true)
  const favoritesInitialMount = useRef(true)

  useEffect(() => {
    if (searchTermInitialMount.current) {
      searchTermInitialMount.current = false
    } else {
      getBooks(searchTerm)
    }
  }, [searchTerm])

  useEffect(() => {
    if (favoritesInitialMount.current) {
      favoritesInitialMount.current = false
    } else {
      if (favorites) setupFavoritesBooks()
      else setupBooksSearch()
    }
  }, [favorites])

  const toggleFavorites = () => {
    setFavorites(!favorites)
  }

  const getBySearchTerm = (search) => {
    setSearchTerm(search)
  }

  const getByPage = (startIndex) => {
    getBooks(searchTerm, startIndex)
  }

  const setupBooksSearch = async () => {
    getBooks(searchTerm)
  }

  const removeBook = (book) => {
    if (favorites) {
      const filteredBooks = books.filter((storageBook) => {
        return storageBook.id !== book.id
      })
      setBooks(filteredBooks)
    } else {
      unMarkBookAsFavorite(book)
    }
  }

  const markBookAsFavorite = (bookToFind, booksList = null) => {
    let filteredBooks = []
    if (booksList === null) {
      filteredBooks = books.map((book) => findFavoriteMap(book, bookToFind))
    } else {
      filteredBooks = booksList.map((book) => findFavoriteMap(book, bookToFind))
    }
    setBooks(filteredBooks)
  }

  const unMarkBookAsFavorite = (bookToFind) => {
    const filteredBooks = books.map((book) =>
      findFavoriteMap(book, bookToFind, false)
    )
    setBooks(filteredBooks)
  }

  const checkBookFavorite = (booksList) => {
    const favoriteBooks = findFavoriteBooks()
    favoriteBooks.forEach((favBook) => {
      markBookAsFavorite(favBook, booksList)
    })
  }

  const setupFavoritesBooks = async () => {
    const items = findFavoriteBooks()
    setBooks(items)
  }

  const getBooks = async (q, startIndex = 0, maxResults = 8) => {
    if (q) {
      try {
        setLoading(true)
        q = `intitle:${q}`
        const { totalItems, items } = await findBooks({
          q,
          maxResults,
          startIndex,
        })
        checkBookFavorite(items)
        setMeta({
          totalItems,
          startIndex,
          maxResults: 8,
        })
        window.scrollTo(0, 0)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        toast('Não foi possível realizar a busca!')
      }
    } else {
      toast.warning('Preencha o campo de busca!')
    }
  }

  const showCardList = () => {
    if (meta.totalItems > 0) {
      return (
        <CardsList
          books={books}
          getByPage={getByPage}
          favoritesMode={favorites}
          meta={meta}
          removeBook={removeBook}
          markBookAsFavorite={markBookAsFavorite}
        ></CardsList>
      )
    }
    return <PageInfo>Não há livros a serem exibidos</PageInfo>
  }

  return (
    <HomeLayout
      title='Busque por seus livros favoritos!'
      loading={loading}
      searchBar={
        <SearchBar
          getBySearchTerm={getBySearchTerm}
          placeholder='Ex: Milagre da manhã'
          disabled={favorites}
        ></SearchBar>
      }
      favButton={
        <ToggleButton
          type='button'
          favorites={favorites}
          onClick={() => toggleFavorites()}
        >
          {favorites ? 'Buscar livros' : 'Mostrar favoritos'}
        </ToggleButton>
      }
      body={showCardList()}
    ></HomeLayout>
  )
}

export default Home
