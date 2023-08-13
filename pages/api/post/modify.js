import { connectDB } from "@/utils/database"
import { ObjectId } from "mongodb"

export default async function handler(req, res){
  const db = (await connectDB).db("blog")
  
  if(req.method == 'POST'){
    console.log(req.body)
    let edited = {title : req.body.title, content : req.body.content}
    if(req.body.title == ''){
      return res.status(200).redirect(302, '/modify')
    }
    await db.collection('post').updateOne(
      {_id : new ObjectId(req.body._id)}, //어떤 document 
      {$set : edited} //수정할 내용 $inc 그냥 증가만
    )
    return res.status(200).redirect(302, '/list') 
  }
}
