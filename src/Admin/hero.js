
export default function Hero({connectMetaHerro}) {
  return (
    <>
      <section class="dark:bg-gray-800 dark:text-gray-100 w-[50%] h-screen ">
        <div class="container flex flex-col justify-center px-10 py-6 mx-auto  lg:flex-row lg:justify-between h-screen">
          <div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <p class="text-lg  dark:text-green-400">THE NEXT GENERATION SIGCE E-VOTING
            </p>
            <h1 class="text-4xl font-bold leading-none sm:text-[2.7rem]">With The Power of Blockchian<br />
              <span class="dark:text-violet-400">Register the Candidate</span>
            </h1>
          </div>
          <div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img src="assets/svg/Business_SVG.svg" alt="" class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
          </div>
        </div>
      </section>
    </>
  )
}
