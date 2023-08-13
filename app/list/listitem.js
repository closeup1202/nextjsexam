'use client'

import Link from "next/link"

export default function ListItem({result}){
  return(
    <div>
      {
        result.map((a, i)=>
          <div className="list-item opacity-100 transition-all duration-100" key={i}>
            <Link className="m-10 no-underline" href={'detail/' + a._id.toString()}><h4>{a.title}</h4></Link>
            <p>{a.content}</p>
            <Link href={'/edit/' + a._id.toString()}>EDIT</Link>
            <span className="hover:cursor-pointer hover:bg-red-400" onClick={(e)=>{
              fetch('/api/post/delete', {method : 'DELETE', body: a._id.toString()})
              .then(()=>{ 
                e.target.parentElement.style.opacity = 0;
                setTimeout(()=>{
                  e.target.parentElement.style.display = 'none';
                }, 1000)
              })
            }}>🗑️</span>
            <span className="hover:cursor-pointer hover:bg-blue-400" onClick={()=>{fetch('/api/test?name=kim&age=20')}}>🗑️쿼리 스트링</span>
            <span className="hover:cursor-pointer hover:bg-blue-400" onClick={()=>{fetch('/api/aaa/kim')}}>🗑️url 파라미터</span>
          </div>
        )
      }
    </div>
  )
}