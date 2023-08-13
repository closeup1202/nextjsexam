
import Link from "next/link";

//export const revalidate = 60;

export default async function Home() {

  //DB입출력 코드는 server component 안에서만 씁시다 : 민감한 정보는 client 에 담기면 좋지않음
  //await fetch('/URL', {cache : 'force-cache'}) //GET 요청 결과 캐싱 가능
  //await fetch('/URL', {cache : 'no-stroe'}) //캐시 사용 절대 안함
  //await fetch('/URL') //이렇게만 해도 캐싱 됌
  //await fetch('/URL', {next: {revalidate : 60}}) // 60초마다 캐싱된 데이터 갱신해줌

  return (
    <div>
      <Link href={'/list'}>글 목록</Link><br/>
      <Link href={'/write'}>글 쓰기</Link>
    </div>
  )
}
