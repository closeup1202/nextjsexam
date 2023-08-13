import { connectDB } from "@/utils/database"

export default async function PostList(req, res){
  const db = (await connectDB).db("blog")
  let result = await db.collection('post').find().toArray() 
  let show = res.status(200).json(result);
  return(
    <h4>{show}</h4>
  )
}