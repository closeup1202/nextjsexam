import { connectDB } from "@/utils/database"
import { ObjectId } from "mongodb"

export default async function Detail(props){
  const client = await connectDB;
  const db = client.db("blog")
  let result = await db.collection('post').findOne({_id: new ObjectId(props.params.posting)})

  return(
    <div>
      <h4>상세</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  )
}