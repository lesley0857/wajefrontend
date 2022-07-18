import React from 'react'
import axios from 'axios'
import {useEffect,useState} from 'react'

function Books() {
  const [books,setbooks] = useState([])
  useEffect(()=>{

      axios.get('https://wajeapi.herokuapp.com/books')
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
                        <h3 key={book.id}> {book.name}</h3> ))}
    </div>

  )
}

export default Books