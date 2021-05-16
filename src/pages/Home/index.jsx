import { useState, useEffect } from 'react'
import HomeLayout from '../../components/layouts/HomeLayout'
import SearchBar from '../../components/search-bars/SearchBar'
import CardsList from '../../components/cards/CardsList'
import { PageInfo } from './styles'
import { findBooks } from '../../services/book'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [books, setBooks] = useState([])
  const [meta, setMeta] = useState({})

  useEffect(() => {
    getBooks(searchTerm)
  }, [searchTerm])

  const getBySearchTerm = (search) => {
    setSearchTerm(search)
  }

  const getByPage = (startIndex) => {
    getBooks(searchTerm, startIndex)
  }

  const getBooks = async (q, startIndex = 0, maxResults = 8) => {
    if (q) {
      try {
        q = `intitle:${q}`
        const { totalItems, items } = await findBooks({
          q,
          maxResults,
          startIndex,
        })
        setBooks(items)
        setMeta({
          totalItems,
          startIndex,
          maxResults: 8,
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
  const showCardList = () => {
    if (meta.totalItems > 0) {
      return (
        <CardsList books={books} getByPage={getByPage} meta={meta}></CardsList>
      )
    }
    return <PageInfo>Não há livros a serem exibidos</PageInfo>
  }

  return (
    <HomeLayout
      title='Busque por seus livros favoritos!'
      header={
        <SearchBar
          getBySearchTerm={getBySearchTerm}
          placeholder='Ex: Milagre da manhã'
        ></SearchBar>
      }
      body={showCardList()}
    ></HomeLayout>
  )
}

export default Home
