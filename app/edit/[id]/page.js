import { connectDB } from "@/utils/database"
import { ObjectId } from "mongodb"

export default async function Edit(props){
  const client = await connectDB;
  const db = client.db("blog")
  let result = await db.collection('post').findOne({_id: new ObjectId(props.params.id)})

  return(
    <div>
      <h4>글수정</h4>
      <form action="/api/post/modify" method="POST" className="border border-orange-200">
        <label className="p-5">제목</label>
        <input type="text" name="title" placeholder="글제목" defaultValue={result.title}/><br/>
        <label className="p-5">내용</label>
        <textarea placeholder="내용" name="content">{result.content}</textarea><br/>
        <input name="_id" defaultValue={result._id.toString()} type="hidden"/>
        <button type="submit" className="rounded-lg border border-black p-5">수정</button>
      </form>
    </div>
  )
}