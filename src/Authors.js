import React from 'react'
import axios from 'axios'
import  {useEffect,useState} from 'react'
import {useNavigate,Link} from 'react-router-dom'
import './componentcss/css/style.min.css'




function Authors() {
    const [authors,setauthors] = useState([])
    useEffect(()=>{

        axios.get('http://127.0.0.1:8000/authors')
             .then(res => {
                    setauthors(res.data)
                    console.log(res.data)               
                  })
            .catch(error => console.log('error reaching endoint'))
        
    },[])

  return (
    <div className='api'> 
            <h2>Name of Authors</h2>
            {authors.map(author=> (
            <h3 key={author.id}>
              <Link  to={{
                  pathname:`/author/${author.id}`,
                  state:{stateparam:true}
                  }}>
                  {author.first_name}
                </Link>
              </h3>
            ))}
    </div>
  )
}

export default Authors