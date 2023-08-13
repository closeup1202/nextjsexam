export default function Write(){
  return (
    <div>
      <h4>글작성</h4>
      <form action="/api/post/new" method="POST">
        <label>제목</label>
        <input type="text" name="title" placeholder="글제목"/><br/>
        <textarea placeholder="내용" name="content"></textarea><br/>
        <button type="submit">발행</button>
      </form>
    </div>
  )
}