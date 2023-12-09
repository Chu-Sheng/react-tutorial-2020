import React from 'react'
import ReactDom from 'react-dom'

// Nested Components, React Tools

function Greeting() {
  return (
    <div>
      {/* <h2>john doe</h2> */}
      <Person />
      {/* <p>this is my message</p> */}
      <Message />
    </div>
  )
}

const Person = () => <h2>john doe</h2>
const Message = () => <p>this is my message</p>

ReactDom.render(<Greeting />, document.getElementById('root'))
