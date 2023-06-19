import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800", "900"],
});

export default function Home() {
  return (
    <>
      <section className="bg-white bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] pt-5 dark:bg-gray-900 dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <a href="#" className="mb-7 inline-flex items-center justify-between rounded-full bg-blue-100 px-1 py-1 pr-4 text-sm text-blue-700 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800" >
            <span className="mr-3 rounded-full bg-blue-600 px-4 py-1.5 text-xs text-white">
              New
            </span>{" "}
            <span className="text-sm font-medium">
              Jumbotron component was launched! See what`&apos;`s new
            </span>
            <svg aria-hidden="true" className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" > {" "} <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />{" "} </svg> </a>
          <h1 className={`mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl ${poppins.className}`} >
            We invest in the world’s potential
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-200 sm:px-16 lg:px-48 lg:text-xl">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <form className="mx-auto w-full max-w-md">
            <label htmlFor="default-email" className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white" >
              Email sign-up
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" > {" "} <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />{" "} <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />{" "} </svg> </div>
              <input type="email" id="default-email" className="block w-full rounded-lg border border-gray-300 bg-white p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Enter your email here..." required />
              <button
                type="submit"
                className="absolute bottom-2.5 right-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
        <div className="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900" />
      </section>

      <div className="grid grid-cols-4 grid-rows-3 gap-4">
      <div className="row-span-1 flex justify-center items-center translate-x-20">
  <div className="ms-4 rounded-lg border border-gray-200 bg-white p-2 shadow dark:border-gray-700 dark:bg-gray-800">
    <svg className="h-6 w-6 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" /> <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" /> </svg>
    <a href="#">
      <h5 className="mb-1 text-md font-semibold tracking-tight text-gray-900 dark:text-white">
        Need help with your claim?
      </h5>
    </a>
    <p className="mb-2 text-xs font-normal text-gray-500 dark:text-gray-400">
      Check out our step-by-step guideline on how to certify for your weekly benefits:
    </p>
    <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
      See our guideline
      <svg className="ml-1 h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" /> <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" /> </svg> </a>
  </div>
</div>


        <div className="col-span-2 grid justify-items-center p-2">
        <Image height={500} width={500}
            src="/images/illustration2.svg"
            className="my-2 flex h-72 justify-self-center"
            alt="MasterCertify Logo"
          />
        </div>

        <div className="row-span-3">
        <div className="me-4 -translate-x-1/2 -translate-y-6 rounded-lg border border-gray-200 bg-white p-2 shadow dark:border-gray-700 dark:bg-gray-800">
    <svg className="h-6 w-6 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" /> <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" /> </svg>
    <a href="#">
      <h5 className="mb-1 text-md font-semibold tracking-tight text-gray-900 dark:text-white">
        Need help with your claim?
      </h5>
    </a>
    <p className="mb-2 text-xs font-normal text-gray-500 dark:text-gray-400">
      Check out our step-by-step guideline on how to certify for your weekly benefits:
    </p>
    <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
      See our guideline
      <svg className="ml-1 h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" /> <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" /> </svg> </a>
  </div>

  <div className="me-4 mt-4 translate-y-8 rounded-lg border border-gray-200 bg-white p-2 shadow dark:border-gray-700 dark:bg-gray-800">
    <svg className="h-6 w-6 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" /> <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" /> </svg>
    <a href="#">
      <h5 className="mb-1 text-md font-semibold tracking-tight text-gray-900 dark:text-white">
        Need help with your claim?
      </h5>
    </a>
    <p className="mb-2 text-xs font-normal text-gray-500 dark:text-gray-400">
      Check out our step-by-step guideline on how to certify for your weekly benefits:
    </p>
    <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
      See our guideline
      <svg className="ml-1 h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" /> <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" /> </svg> </a>
  </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-200 p-4">Item 1</div>
          <div className="bg-gray-200 p-4">Item 3</div>
          <div className="bg-gray-200 p-4">Item 6</div>
        </div>
      </div>
    </>
  );
}
