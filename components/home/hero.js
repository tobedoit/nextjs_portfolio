import Animation from "./animation"
import Link from 'next/link'

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">안녕하세요 유재민입니다!
          <br className="hidden lg:inline-block" />
          오늘도 넥스트13 리액트!!
        </h1>
        <p className="mb-8 leading-relaxed">길지 힘차게 위하여서 그것은 작고 것이다. 우리 사라지지 주는 눈에 가슴이 쓸쓸하랴? 같이, 그림자는 맺어, 그리하였는가? 그들에게 방황하여도, 얼음에 가치를 그것은 방지하는 이것이다. 갑 황금시대를 그것을 이것이야말로 가치를 방황하였으며, 약동하다. 이상은 청춘의 있는 우리는 이상은 그들은 우리 품었기 인생의 힘있다.</p>
        <div className="flex justify-center">
          <Link href='/projects'>
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">프로젝트 보러가기</button>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  )
}