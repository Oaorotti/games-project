import Footer from "./footer"
import MainHelper from "./main-helper"
import Main from "./main"
import AlmostFooter from "./almost-footer"
import Customers from "./customers"

export default function Home() {

  let elements = []
  for (var i = 0; i < 4; i++) {
    elements.push(<Customers key={i} />)
  }

  return (
    <div>
      <header>
        <div className="navbar bg-base-200 flex items-center justify-between p-4">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-md sm:text-md md:text-lg lg:text-xl xl:text-2xl">Best Games</a>
          </div>
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="divider bg-base-100 -mt-0 -mb-0"></div>

      <main className="bg-base-100 px-20">
        <MainHelper />
        <div className="divider"></div>
        <Main />
      </main>

      <div className="divider bg-base-100 -mt-0 -mb-0"></div>

      <AlmostFooter />

      <div className="divider bg-base-100 -mt-0 -mb-0"></div>

      <div className="flex items-center justify-between bg-base-100">
        <h1 className="flex items-center">
          <a href="#" className="mr-2 p-2">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
          </a>
          Melhores jogos
        </h1>

        <h1 className="flex items-center m-2">
          <a href="#" className="mr-2 p-2">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
          </a>
          Confiança jogos
        </h1>

        <h1 className="flex items-center">
          <a href="#" className="mr-2 p-2">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
          </a>
          Melhores jogos
        </h1>

        <h1 className="flex items-center m-2">
          <a href="#" className="mr-2 p-2">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
          </a>
          Confiança jogos
        </h1>

        <h1 className="flex items-center">
          <a href="#" className="mr-2 p-2">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
          </a>
          Melhores jogos
        </h1>

        <h1 className="flex items-center m-2">
          <a href="#" className="mr-2 p-2">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
          </a>
          Confiança jogos
        </h1>
      </div>

      <div className="divider bg-base-100 -mt-0 -mb-0"></div>

      <div className="bg-base-100 p-4 flex items-center justifiy-between space-x-4">
        {elements}
      </div>

      <footer>
        <div className="divider bg-base-100 -mt-0 -mb-0"></div>
        <Footer />
      </footer>
    </div >
  )
}
