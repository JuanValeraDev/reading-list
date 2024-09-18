import React from 'react'
import booksData from '/books.json'
import AvailableBooksList from './ui/components/AvailableBooksList'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  return (
    <div className={"d-flex flex-column align-items-center justify-content-center"}>
      <h1>Reading List</h1>
      <AvailableBooksList books={booksData.library} />
    </div>
  )
}
