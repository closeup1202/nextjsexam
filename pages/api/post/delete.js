import { connectDB } from "@/utils/database"
import { ObjectId } from "mongodb"

export default async function handler(req, res){
  const db = (await connectDB).db("blog")
  
  if(req.method == 'DELETE'){
    try {
      let result = await db.collection('post').deleteOne({"_id": new ObjectId(req.body)})
      if(result.deleteCount == 1){
        return res.status(200).redirect(302, '/list') 
      } else {
        return res.status(500).redirect(302, '/error') 
      }
    } catch (error) {
      console.log(error)
    }
  }
}