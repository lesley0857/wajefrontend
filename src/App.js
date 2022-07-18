import logo from './logo.svg';
import './App.css';
import Authors from './Authors';
import Authorid from './Authorid';
import Books from './Books';
import Layout from './Layout';
import {Routes,Route} from 'react-router-dom'



function App() {
  return (
    <Layout>
    <Routes>
        <Route path='/' element={<Authors/>}/>
        <Route path='books' element={<Books/>}/> 
        <Route path='author/:authorid' element={<Authorid/>}/>   
    </Routes>
  </Layout>
  );
}

export default App;
