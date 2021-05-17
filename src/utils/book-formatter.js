import { isMatch, format, parse } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import placeholder from '../assets/img/placeholder.jpg'

export const formatAuthors = (authors = []) => {
  if (authors.length > 1) {
    const last = authors.pop()
    return authors.join(', ').concat(' e ', last)
  }
  if (authors.length) return authors[0]
  return 'Autor não informado'
}

export const formatThumbnail = (thumb) => {
  if (thumb) return thumb
  return placeholder
}

export const formatDescription = (text) => {
  if (text) return text
  return 'Descrição não disponível'
}

export const formatPublisher = (text) => {
  if (text) return text
  return 'Editora não informada'
}

export const formatPublishedDate = (dateString = '') => {
  if (isMatch(dateString, 'yyyy-MM-dd')) {
    const date = parse(dateString, 'yyyy-MM-dd', new Date())
    return format(date, 'dd MMMM yyyy', { locale: ptBR })
  }
  if (isMatch(dateString, 'yyyy')) return dateString
  return 'Data de publicação indisponível'
}

export const formatPageCount = (pages) => {
  if (pages) return `${pages} páginas`
  return 'Não informado'
}
