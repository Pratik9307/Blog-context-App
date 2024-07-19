import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

  

  export const AppContext=createContext();

  function AppContextProvider({children}){
    const [loading,setloading]=useState(false);
    const[posts,setposts]=useState([]);
    const[page,setPage]=useState(1);
    const[totalpages,setTotalPage]=useState(null)

    // Data finding
    

    async function fetchblogPost(page=1){
     setloading(true);  
     let url=`${baseUrl}?page=${page}`
     try{
       const result=await fetch(url);   
       const data=await result.json();
       console.log(data)
       setPage(data.page);
       setposts(data.posts);
       setTotalPage(data.totalpages)
       

     }
     catch(error){
        prompt("something went wrong")
        setPage(1);
        setposts([]);
        setTotalPage(null)

     }
     setloading(false); 
    }  
function handlePageChange(page){
    setPage(page);
    setTotalPage(totalpages)
    fetchblogPost(page) 
}



  const value={
    posts,
    setposts,
    loading,
    setloading,
    page,
    setPage,
    totalpages,
    setTotalPage,
    handlePageChange,
    fetchblogPost,  


  };
   
  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>

  }

export default AppContextProvider;