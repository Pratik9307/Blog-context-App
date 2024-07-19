import Blogs from "./components/Blogs"
import Pagination from "./components/Pagination"
import Header from "./components/Header"
import { useContext, useEffect } from "react"
import { AppContext } from "./Context/AppContext"
import './App.css'


export default function App() {
  const { fetchblogPost}=useContext(AppContext)

  useEffect(()=>{
    fetchblogPost();
  },[])
  return (
    <div>
      <Header></Header>
      <Blogs></Blogs>
      <Pagination></Pagination>
    </div>
  )
}
