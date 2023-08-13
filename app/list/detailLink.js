'use client'

import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation"

export default function DetailLink(){
  let router = useRouter() // client component 만 사용 가능
  let 현재url출력 = usePathname()
  let serchparams출력 = useSearchParams()
  let 유저가다이나믹라우트입력한거출력 = useParams()
  
  return(
    <button onClick={()=>{router.push('/modify')}}>수정</button>
  )
}

// router.push('경로') : 이동
// router.back() : 뒤로 가기
// router.forward() : 앞으로 가기
// router.refresh() : 새로 고침 / 변동이 있는 html 일부만 바꿔줌
// router.prefetch() : 페이지 미리로드 이 페이지 필요한 모든 파일를 미리 로드 매우 빠르게 방문 , 근데 <Link> 에도 prefetch 기능 내장되어 있음