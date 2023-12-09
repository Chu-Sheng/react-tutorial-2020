import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'

// setup vars
const books = [
  {
    img: 'https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UY327_FMwebp_QL65_.jpg',
    title: 'I Love You To the Moon and Back',
    author: 'Amelia Hepworth',
  },
  {
    img: 'https://m.media-amazon.com/images/I/71CX11nGhWL._SY342_.jpg',
    title: 'Oath and Honor',
    author: ' Liz Cheney',
  },
]

const names = ['john', 'peter', 'susan']
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book book={book} />
      })}
    </section>
  )
}
const Book = (props) => {
  const { img, title, author } = props.book
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {props.children}
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
