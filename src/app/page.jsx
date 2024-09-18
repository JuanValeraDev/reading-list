import React from 'react'
import booksData from "/books.json"
import Image from "next/image";

export default function Home() {
    return (
        <div>
            Reading List
            <ul>
                {booksData.library.map((item, index) => (
                    <li key={index}>
                        <h2>{item.book.title}</h2>
                        <p>{item.book.synopsis}</p>
                        <Image src={item.book.cover} alt={"This is the cover of the book."} width={100} height={100}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}
