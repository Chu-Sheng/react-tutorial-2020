import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'
import { books } from './books'
// import Book from './Book'
import SpecificBook from './Book'
import { greeting } from './testing/testing'
// setup vars

function BookList() {
  console.log(greeting)
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <SpecificBook key={book.id} {...book} />
      })}
    </section>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
