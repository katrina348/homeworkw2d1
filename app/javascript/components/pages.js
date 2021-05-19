import React from 'react'

// a react component is just a js function that returns jsx

const Pages = (props) => {
  const pages = props.pages

  const renderPages = ()=>{
   return pages.map((page) => {
     return(
       <div>
         <h1>{page.title}</h1>
         <p>{page.author}</p>
         <p>{page.id}</p>
         <p>{page.body}</p>
       </div>
     )
   })
  }
  return(
    <div>
      <h1>Notes</h1>
      <a href='/pages/new'>create a new page</a>
      { renderPages() }
    </div>
  )
}
export default Pages