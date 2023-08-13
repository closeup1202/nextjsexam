

import { connectDB } from "@/utils/database"
import ListItem from "./listitem";
import Link from "next/link";
// import DetailLink  from "./detailLink";

export const dynamic = 'force-dynamic' //dynamic rendering 으로 바꾸기
//export const dynamic = 'force-static' //static rendering 으로 바꾸기
//다이나믹 렌더링 단점 : 매번 다시 보여줘서 서버나 디비 부담 증가 -> 꼬우면 캐싱 기능 사용
//캐싱: 결과를 잠깐 저장해두고 재사용

export default async function List(){

  const client = await connectDB;
  const db = client.db("blog")
  let result = await db.collection('post').find().toArray() // Promise를 뱉는 코드만 await (잠깐 기다려~) 붙이기 가능
  result = result.map((a)=>{
    a._id = a._id.toString()
    return a
  })

  return (
    <div className="list-bg">
      <ListItem result={result}/>
      <div className="w-full flex content-center">
        <Link className="p-2 border-2 w-full border-black text-center rounded-md hover:bg-slate-600 hover:text-white" href="/write">+</Link>
      </div>
    </div>
  )
}

// 링크 태그  prefetch={false} 미리 로딩 끄기