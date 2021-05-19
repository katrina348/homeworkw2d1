import React from 'react'

const Page = (props) => {
  //js trick
  const {page} = props
  return(
    <div>
      <a href='/pages'>back to pages</a>
      <h1>{page.title}</h1>
      <p>{page.author}</p>
      <p>{page.body}</p>
      <a href={`/pages/${page.id}`}>show page</a>
      <a href={`/pages/${page.id}/edit`}>edit page</a>
      <a href={`/pages/${page.id}`} data-method="delete">delete page</a>
    </div>
  )
}

export default Page