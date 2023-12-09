import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'

// setup vars
const books = [
  {
    id: 1,
    img: 'https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UY327_FMwebp_QL65_.jpg',
    title: 'I Love You To the Moon and Back',
    author: 'Amelia Hepworth',
  },
  {
    id: 2,
    img: 'https://m.media-amazon.com/images/I/71CX11nGhWL._SY342_.jpg',
    title: 'Oath and Honor',
    author: ' Liz Cheney',
  },
]

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book} />
      })}
    </section>
  )
}
const Book = ({ img, title, author }) => {
  // const { img, title, author } = props
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
