import { connectDB } from "@/utils/database"

export default async function handler(req, res){
  const db = (await connectDB).db("blog")
  
  if(req.method == 'POST'){
    console.log(req.body)
    if(req.body.title == ''){
      console.log('빈값')
      return res.status(200).redirect(302, '/write')
    }
    await db.collection('post').insertOne(req.body)
    return res.status(200).redirect(302, '/list') 
  }

  console.log(res.body);
}

//res.status(200).redirect(302, '/list') 페이지 이동