import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './component/Home';
import Faq from './component/Faq';
import Blog from './component/Blog';
import Footer from "./component/Footer"



function App() {
  return (
   <div>
<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/faq" element={<Faq/>}></Route>
<Route path="/blog" element={<Blog/>}></Route>
</Routes> 
<Footer/>
</BrowserRouter>
   </div>
  );
}

export default App;