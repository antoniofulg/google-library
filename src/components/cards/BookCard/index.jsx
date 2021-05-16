import {
  Card,
  Image,
  Title,
  Info,
  Snippet,
  CardBox,
  CardPreview,
} from './styles'
import PropTypes from 'prop-types'
import { isMatch, format, parse } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import placeholder from '../../../assets/img/placeholder.jpg'

const BookCard = (props) => {
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

  const formatPublishedDate = (dateString = '') => {
    if (isMatch(dateString, 'yyyy-MM-dd')) {
      const date = parse(dateString, 'yyyy-MM-dd', new Date())
      return format(date, 'dd MMMM yyyy', { locale: ptBR })
    }
    if (isMatch(dateString, 'yyyy')) return dateString
    return 'Data de publicação indisponível'
  }

  return (
    <Card>
      <CardPreview>
        <Image src={formatThumbnail(props.thumbnail)} alt='Book' />
      </CardPreview>
      <CardBox>
        <Title>{props.title}</Title>
        <Info>
          por {formatAuthors(props.author)} |{' '}
          {formatPublishedDate(props.publishedDate)}
        </Info>
        <Snippet>{props.textSnippet}</Snippet>
      </CardBox>
    </Card>
  )
}

BookCard.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  textSnippet: PropTypes.string,
  publishedDate: PropTypes.string,
}

export default BookCard
