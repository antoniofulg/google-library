import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import HomeLayout from '../../components/layouts/HomeLayout'
import SearchBar from '../../components/search-bars/SearchBar'
import CardsList from '../../components/cards/CardsList'
import { PageInfo } from './styles'
import { findBooks } from '../../services/book'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [books, setBooks] = useState([])
  const [meta, setMeta] = useState({})
  const [loading, setLoading] = useState(false)

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
        setLoading(true)
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
        <CardsList books={books} getByPage={getByPage} meta={meta}></CardsList>
      )
    }
    return <PageInfo>Não há livros a serem exibidos</PageInfo>
  }

  return (
    <HomeLayout
      title='Busque por seus livros favoritos!'
      loading={loading}
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
