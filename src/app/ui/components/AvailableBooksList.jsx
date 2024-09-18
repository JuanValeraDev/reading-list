import React from 'react'
import Image from 'next/image'

const AvailableBooksList = ({ books }) => {
  return (
    <ul>
      {books.map((item, index) => (
        <li key={index} className={"d-flex flex-column align-items-center"}>
          <h2 className={"text-center"}>{item.book.title}</h2>
          <p className={"text-center"}>{item.book.synopsis}</p>
          <Image className={"align-self-center"} src={item.book.cover} alt={"This is the cover of the book."} width={100} height={150}/>
        </li>
      ))}
    </ul>
  )
}

export default AvailableBooksList
