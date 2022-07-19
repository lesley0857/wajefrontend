import React,{useEffect,useState} from 'react';
import axios from 'axios'
import {Link,useParams,useLocation} from 'react-router-dom';

function Authorid(props) {
  const parameter = useParams().authorid;
  const [authordetail,setauthordetail] = useState([])
  console.log()
  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/author/${parameter}`)  
        .then( response=>(setauthordetail(response.data) ,
                          console.log(response.data) ) )
  },[])
  return (
    <div className='api'>
       <h3>first_name--{authordetail.first_name}</h3>
       <h3>last_name--{authordetail.last_name}</h3>
    </div>
  )
}

export default Authorid