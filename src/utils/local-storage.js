export const addFavoriteBook = (book) => {
  if (localStorage.getItem('books') === null) {
    localStorage.setItem('books', JSON.stringify([book]))
    return true
  } else {
    const books = JSON.parse(localStorage.getItem('books'))
    if (!books.some((storageBook) => storageBook.id === book.id)) {
      localStorage.setItem('books', JSON.stringify([...books, book]))
      return true
    }
    return false
  }
}

export const removeFavoriteBook = (book) => {
  if (localStorage.getItem('books') === null) return false
  else {
    const books = JSON.parse(localStorage.getItem('books'))
    const filteredBooks = books.filter((storageBook) => {
      return storageBook.id !== book.id
    })
    localStorage.setItem('books', JSON.stringify([...filteredBooks]))
    return true
  }
}

export const findFavoriteBooks = () => {
  if (localStorage.getItem('books') === null) return []
  return JSON.parse(localStorage.getItem('books'))
}
