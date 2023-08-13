export default function handler(req, res){
  console.log(req.query)

  if(req.method == 'POST'){
    res.status(200).json('post response')
  }
  
  if(req.method == 'GET'){
    res.status(200).json('get response')
  }
}