import React from 'react'
import axios from 'axios'
import {useEffect,useState} from 'react'

function Books() {
  const [books,setbooks] = useState([])
  useEffect(()=>{

      axios.get('http://127.0.0.1:8000/books')
           .then(res => {
                  setbooks(res.data)
                  console.log(res.data)               
                })
          .catch(error => console.log('error reaching endoint'))
      
  },[])
  return (
    <div className='api'> 
        <h2>Name of Books</h2>
        {books.map(book=> (
                        <span key={book.id}> {book.name}</span> ))}
    </div>

  )
}

export default Books