import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'

// setup vars
const firstBook = {
  img: 'https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UY327_FMwebp_QL65_.jpg',
  title: 'I Love You To the Moon and Back',
  author: 'Amelia Hepworth',
}
const secondBook = {
  img: 'https://m.media-amazon.com/images/I/71CX11nGhWL._SY342_.jpg',
  title: 'Oath and Honor',
  author: ' Liz Cheney',
}

function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  )
}
const Book = ({ img, title, author }) => {
  //   const { img, title, author } = props
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
