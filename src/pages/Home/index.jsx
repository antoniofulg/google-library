import { useState } from 'react'
import HomeLayout from '../../components/layouts/HomeLayout'
import SearchBar from '../../components/search-bars/SearchBar'
import CardsList from '../../components/cards/CardsList'
import { findBooks } from '../../services/book'

const Home = () => {
  const [books, setBooks] = useState([])

  const getBooks = async (q) => {
    if (q) {
      try {
        const { totalItems, items } = await findBooks({
          q,
          maxResults: 6,
          startIndex: 1,
        })
        setBooks(items)
        console.log(totalItems)
        console.log(books)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <HomeLayout
      title='Busque por seus livros favoritos!'
      header={
        <SearchBar
          getBooks={getBooks}
          placeholder='Ex: Milagre da manhã'
        ></SearchBar>
      }
      body={<CardsList books={books}></CardsList>}
    ></HomeLayout>
  )
}

export default Home
