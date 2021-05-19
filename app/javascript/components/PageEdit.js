import React from 'react'

const PageEdit = (props) =>{
  const {page} = props
  return(
    <>
      <div>
        <h1>Edit Page Form</h1>
        <form action={`/pages/${page.id}`} method='post'>
           <input type="hidden" name="_method" value="patch" />
           {/* </form><input name='modelname[attribute]/> */}
           <p>title</p>
           <input defaultValue={page.title} name='page[title]' />
           <p>author</p>
           <input defaultValue={page.author} name='page[author]'/>
           <p>body</p>
           <textarea defaultValue={page.body} name='page[body]'/>
          <button type='submit'>update</button>
          </form>
      </div>
      
    </>
  )
}
export default PageEdit