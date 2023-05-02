import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-100">
      <header className="w-full bg-white py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/logo.svg" alt="Logo" width={40} height={40} />
            <h1 className="text-lg ml-4 font-medium text-gray-900">ChatGPT</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#"
                  className="text-base font-medium text-gray-600 hover:text-gray-900"
                >
                  프로젝트
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base font-medium text-gray-600 hover:text-gray-900"
                >
                  블로그
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base font-medium text-gray-600 hover:text-gray-900"
                >
                  연락처
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold text-gray-100">
              안녕하세요, 저는 ChatGPT입니다.
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              저는 OpenAI에서 개발된 GPT-3.5 기반 대형 언어 모델입니다. 다양한
              자연어 처리(NLP) 작업을 수행할 수 있습니다.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
              >
                더 알아보기
              </a>
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="relative h-72 md:h-96">
              <Image
                src="/hero.jpg"
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-100">프로젝트</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/project-1.jpg"
                alt="Project 1"
                width={640}
                height={427}
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-100">
                  프로젝트 제목
                </h3>
                <p className="mt-2 text-base text-gray-400">프로젝트 설명</p>
                <a
                  href="#"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg mt-4 transition duration-200"
                >
                  자세히 보기
                </a>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/project-2.jpg"
                alt="Project 2"
                width={640}
                height={427}
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-100">
                  프로젝트 제목
                </h3>
                <p className="mt-2 text-base text-gray-400">프로젝트 설명</p>
                <a
                  href="#"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg mt-4 transition duration-200"
                >
                  자세히 보기
                </a>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/project-3.jpg"
                alt="Project 3"
                width={640}
                height={427}
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-100">
                  프로젝트 제목
                </h3>
                <p className="mt-2 text-base text-gray-400">프로젝트 설명</p>
                <a
                  href="#"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg mt-4 transition duration-200"
                >
                  자세히 보기
                </a>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/project-5.jpg"
                alt="Project 5"
                width={640}
                height={427}
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-100">
                  프로젝트 제목
                </h3>
                <p className="mt-2 text-base text-gray-400">프로젝트 설명</p>
                <a
                  href="#"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg mt-4 transition duration-200"
                >
                  자세히 보기
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-100">문의</h2>
          <p className="text-gray-400 mt-4">
            문의사항이 있으시다면 아래 연락처로 연락주세요.
          </p>
          <ul className="mt-6">
            <li>
              <a
                href="mailto:이메일주소"
                className="flex items-center hover:text-gray-300 transition duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8v3.5l4 2.5 4-2.5V8m0 5.5v2.5l-4 2.5-4-2.5v-2.5m8-5.5v9m4-9v2.5l-4 4-4-4V8.5l4-2.5 4 2.5z"
                  />
                </svg>
                이메일주소
              </a>
            </li>
            <li className="mt-4">
              <a
                href="https://github.com/깃허브계정"
                className="flex items-center hover:text-gray-300 transition duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19c-4.142 0-7.5-3.358-7.5-7.5 0-3.542 2.482-6.492 5.812-7.272.424-.079.578.184.578.412v1.3c-2.368.722-2.825 1.722-2.825 2.977 0 2.184 1.913 2.848 3.625 3.292-.925.696-1.425 1.643-1.425 2.755 0 2.1 1.7 3.8 3.8 3.8 2.1 0 3.8-1.7 3.8-3.8 0-1.112-.5-2.059-1.425-2.755 1.712-.444 3.625-1.108 3.625-3.292 0-1.255-.457-2.255-2.825-2.977v-1.3c0-.228.154-.491.578-.412C16.518 5.508 19 8.458 19 12.001c0 4.142-3.358 7.5-7.5 7.5z"
                  />
                </svg>
                깃허브 계정
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
