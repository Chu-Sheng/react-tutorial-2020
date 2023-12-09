import React from 'react'
import ReactDom from 'react-dom'

// Nested Components, React Tools

function BookList() {
  return (
    <section>
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}
const Image = () => (
  <img
    src='https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UY327_FMwebp_QL65_.jpg'
    alt=''
  />
)
const Title = () => <h1>I Love You To the Moon and Back</h1>
const Author = () => <h4>Amelia Hepworth</h4>
ReactDom.render(<BookList />, document.getElementById('root'))
