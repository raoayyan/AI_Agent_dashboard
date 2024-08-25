import Image from "next/image";

import Header from "@/container/header/header";
export default function Home() {
  return (
    <div>
     <Header />

      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gray-900 h-screen text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <p className="text-sm font-semibold tracking-wide text-yellow-400 uppercase">
                AI Agent for taking customer calls
              </p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-5xl lg:mt-6 xl:text-6xl">
                <span className="block">Check the Performance</span>
                <span className="block text-yellow-400">Of AI Chat Agent</span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Grow your business fast with the Artifical Intelligence.
              </p>

              <div className="mt-8 sm:mt-10">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 bg-yellow-400 border border-transparent rounded-full hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors duration-200"
                >
                  Join for free
                  <svg
                    className="w-5 h-5 ml-3 -mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>

              <p className="mt-5 text-sm text-gray-400">
                Already joined us?{" "}
                <a
                  href="#"
                  className="font-medium text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
                >
                  Log in
                </a>
              </p>
            </div>

            <div className="flex justify-center items-center sm:-mb-48 lg:m-0 lg:relative">
              <img
                className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto object-cover rounded-md shadow-lg"
                src="/side12.jpg"
                alt="AI Chat Agent"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 sm:gap-x-12 gap-y-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight">
                1 team.
                <br />
                6+ years.
                <br />
                300+ projects.
                <br />
              </h2>
              <p className="mt-6 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>

            <div className="lg:col-span-3 xl:col-span-4">
              <div className="grid items-center max-w-4xl grid-cols-2 mx-auto lg:grid-cols-4 gap-x-10 gap-y-16">
                <div>
                  <img
                    className="object-contain w-full h-6 mx-auto"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-1.png"
                    alt=""
                  />
                </div>

                <div>
                  <img
                    className="object-contain w-full h-8 mx-auto"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-2.png"
                    alt=""
                  />
                </div>

                <div>
                  <img
                    className="object-contain w-full h-8 mx-auto"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-3.png"
                    alt=""
                  />
                </div>

                <div>
                  <img
                    className="object-contain w-full mx-auto h-7"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-4.png"
                    alt=""
                  />
                </div>

                <div className="hidden lg:block">
                  <img
                    className="object-contain w-full h-8 mx-auto"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-5.png"
                    alt=""
                  />
                </div>

                <div className="hidden lg:block">
                  <img
                    className="object-contain w-full h-8 mx-auto"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-6.png"
                    alt=""
                  />
                </div>

                <div className="hidden lg:block">
                  <img
                    className="object-contain w-full h-8 mx-auto"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-7.png"
                    alt=""
                  />
                </div>

                <div className="hidden lg:block">
                  <img
                    className="object-contain w-full h-8 mx-auto"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-8.png"
                    alt=""
                  />
                </div>

                <div className="hidden lg:block">
                  <img
                    className="object-contain w-full h-8 mx-auto"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-9.png"
                    alt=""
                  />
                </div>

                <div className="hidden lg:block">
                  <img
                    className="object-contain w-full mx-auto h-7"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-10.png"
                    alt=""
                  />
                </div>

                <div className="hidden lg:block">
                  <img
                    className="object-contain w-full h-8 mx-auto"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-11.png"
                    alt=""
                  />
                </div>

                <div className="hidden lg:block">
                  <img
                    className="object-contain w-full h-8 mx-auto"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-12.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="flex items-center justify-start mt-10 space-x-3 lg:hidden">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-600 block"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Pricing & Plans
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
            <div className="overflow-hidden bg-white border-2 border-gray-100 rounded-md">
              <div className="p-8 xl:px-12">
                <h3 className="text-base font-semibold text-purple-600">
                  Standard
                </h3>
                <p className="text-5xl font-bold text-black mt-7">$29</p>
                <p className="mt-3 text-base text-gray-600">One-time payment</p>

                <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-indigo-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-gray-900">
                      {" "}
                      1 Domain License{" "}
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-indigo-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-gray-900">
                      {" "}
                      Full Celebration Library{" "}
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="h-5 text-indigo-500 flex-shrink-0w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-gray-900">
                      {" "}
                      120+ Coded Blocks{" "}
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="h-5 text-indigo-500 flex-shrink-0w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-gray-900">
                      {" "}
                      Design Files Included{" "}
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-indigo-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="pb-0.5 text-base font-medium text-gray-900 border-b border-black border-dashed">
                      {" "}
                      Premium Support{" "}
                    </span>
                  </li>
                </ul>

                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
                  role="button"
                >
                  {" "}
                  Get full access{" "}
                </a>
                <p className="mt-4 text-sm text-gray-500">
                  14 Days Moneyback Guarantee
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-white border-2 border-gray-100 rounded-md shadow-lg">
              <div className="p-8 xl:px-12">
                <h3 className="text-base font-semibold text-purple-600">
                  Professional
                </h3>
                <p className="text-5xl font-bold text-black mt-7">$49</p>
                <p className="mt-3 text-base text-gray-600">One-time payment</p>

                <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-indigo-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-gray-900">
                      {" "}
                      5 Domain License{" "}
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-indigo-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-gray-900">
                      {" "}
                      Full Celebration Library{" "}
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-indigo-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-gray-900">
                      {" "}
                      120+ Coded Blocks{" "}
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-indigo-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-gray-900">
                      {" "}
                      Design Files Included{" "}
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-indigo-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="pb-0.5 text-base font-medium text-gray-900 border-b border-black border-dashed">
                      {" "}
                      Premium Support{" "}
                    </span>
                  </li>
                </ul>

                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-white transition-all duration-200 rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                  role="button"
                >
                  {" "}
                  Get full access{" "}
                </a>
                <p className="mt-4 text-sm text-gray-500">
                  14 Days Moneyback Guarantee
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-white border-2 border-gray-100 rounded-md">
              <div className="p-8 xl:px-12">
                <h3 className="text-base font-semibold text-purple-600">
                  Exclusive
                </h3>
                <p className="text-5xl font-bold text-black mt-7">$79</p>
                <p className="mt-3 text-base text-gray-600">One-time payment</p>

                <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-indigo-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-gray-900">
                      {" "}
                      Unlimited Domain License{" "}
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-indigo-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-gray-900">
                      {" "}
                      Full Celebration Library{" "}
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-indigo-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-gray-900">
                      {" "}
                      120+ Coded Blocks{" "}
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-indigo-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-gray-900">
                      {" "}
                      Design Files Included{" "}
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-indigo-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="pb-0.5 text-base font-medium text-gray-900 border-b border-black border-dashed">
                      {" "}
                      Premium Support{" "}
                    </span>
                  </li>
                </ul>

                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
                  role="button"
                >
                  {" "}
                  Get full access{" "}
                </a>
                <p className="mt-4 text-sm text-gray-500">
                  14 Days Moneyback Guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-10 bg-black sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-yellow-500 sm:text-4xl lg:text-5xl">
              Pricing & Plans
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-yellow-300">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
            <div className="overflow-hidden bg-black-500 border-2 border-yellow-400 rounded-md">
              <div className="p-8 xl:px-12">
                <h3 className="text-base font-semibold text-black">Standard</h3>
                <p className="text-5xl font-bold text-white mt-7">$29</p>
                <p className="mt-3 text-base text-yellow-300">
                  One-time payment
                </p>

                <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-yellow-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-white">
                      1 Domain License
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-yellow-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-white">
                      Full Celebration Library
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-yellow-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-white">
                      120+ Coded Blocks
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-yellow-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-white">
                      Design Files Included
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-yellow-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="pb-0.5 text-base font-medium text-white border-b border-yellow-400 border-dashed">
                      Premium Support
                    </span>
                  </li>
                </ul>

                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-md hover:bg-yellow-400 focus:bg-yellow-400"
                  role="button"
                >
                  Get full access
                </a>
                <p className="mt-4 text-sm text-yellow-200">
                  14 Days Moneyback Guarantee
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-black-500 border-2 border-yellow-400 rounded-md shadow-lg">
              <div className="p-8 xl:px-12">
                <h3 className="text-base font-semibold text-black">
                  Professional
                </h3>
                <p className="text-5xl font-bold text-white mt-7">$49</p>
                <p className="mt-3 text-base text-yellow-300">
                  One-time payment
                </p>

                <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-yellow-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-white">
                      5 Domain License
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-yellow-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-white">
                      Full Celebration Library
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-yellow-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-white">
                      150+ Coded Blocks
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-yellow-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-white">
                      Design Files Included
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-yellow-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="pb-0.5 text-base font-medium text-white border-b border-yellow-400 border-dashed">
                      Premium Support
                    </span>
                  </li>
                </ul>

                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-md hover:bg-yellow-400 focus:bg-yellow-400"
                  role="button"
                >
                  Get full access
                </a>
                <p className="mt-4 text-sm text-yellow-200">
                  14 Days Moneyback Guarantee
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-black-500 border-2 border-yellow-400 rounded-md">
              <div className="p-8 xl:px-12">
                <h3 className="text-base font-semibold text-black">
                  Enterprise
                </h3>
                <p className="text-5xl font-bold text-white mt-7">$79</p>
                <p className="mt-3 text-base text-yellow-300">
                  One-time payment
                </p>

                <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-yellow-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-white">
                      Unlimited Domain License
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-yellow-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-white">
                      Full Celebration Library
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-yellow-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-white">
                      200+ Coded Blocks
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-yellow-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-white">
                      Design Files Included
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-yellow-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="pb-0.5 text-base font-medium text-white border-b border-yellow-400 border-dashed">
                      Premium Support
                    </span>
                  </li>
                </ul>

                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-md hover:bg-yellow-400 focus:bg-yellow-400"
                  role="button"
                >
                  Get full access
                </a>
                <p className="mt-4 text-sm text-yellow-200">
                  14 Days Moneyback Guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-900 sm:pt-16 lg:pt-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12">
            <div>
              <p className="text-base text-gray-500">Company</p>

              <ul className="mt-8 space-y-4">
                <li>
                  <a
                    href=""
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Features{" "}
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Works{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-base text-gray-500">Help</p>

              <ul className="mt-8 space-y-4">
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Customer Support{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Delivery Details{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Terms & Conditions{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Privacy Policy{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-base text-gray-500">Resources</p>

              <ul className="mt-8 space-y-4">
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Free eBooks{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Development Tutorial{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    How to - Blog{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="mt-16 mb-10 border-gray-800" />

          <div className="flex flex-wrap items-center justify-between">
            <ul className="flex items-center space-x-3 md:order-3">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-yellow-400 hover:bg-yellow-400 hover:border-yellow-400 focus:border-yellow-400"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-yellow-400 hover:bg-yellow-400 hover:border-yellow-400 focus:border-yellow-400"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-yellow-400 hover:bg-yellow-400 hover:border-yellow-400 focus:border-yellow-400"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                    <circle cx="16.806" cy="7.207" r="1.078"></circle>
                    <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-yellow-400 hover:bg-yellow-400 hover:border-yellow-400 focus:border-yellow-400"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>

            <p className="w-full mt-8 text-sm text-center text-gray-100 md:mt-0 md:w-auto md:order-2">
              © Copyright 2021, All Rights Reserved by Postcraft
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
