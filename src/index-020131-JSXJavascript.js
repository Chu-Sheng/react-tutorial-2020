import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'

function BookList() {
  return (
    <section className='booklist'>
      <Book />
    </section>
  )
}
const author = 'Amelia Hepworth'
const Book = () => {
  const title = 'I Love You To the Moon and Back'
  return (
    <article className='book'>
      <img
        src='https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UY327_FMwebp_QL65_.jpg'
        alt=''
      />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
