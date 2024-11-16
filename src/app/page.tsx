import Image from 'next/image'
import profileImg from '@/assets/img/profile.png'

export default function HomePage() {
  return (
    <>
      <div className="flex items-center  min-h-[40vw] p-4 w-[70vw] mx-auto">
          {/* Circular Background */}
          <div className="relative mr-12 md:w-2/5 flex justify-center">
            <div className='w-[25vw] h-[25vw] bg-indigo-400 rounded-full'></div>
            <div className='absolute top-[5vw] w-[25vw]'>
                <Image
                  src={profileImg}
                  alt="Picture of the author"
                />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 md:w-3/5 pt-[10vw]">
              <h1 className="text-[3.5vw] font-bold mb-2 text-gray-500 dark:text-gray-300">
                Hello, I'm <span className='text-6xl text-indigo-900 dark:text-indigo-400 '>Ricky</span>
              </h1>
              <h2 className="text-[3vw] text-[3.5vw] mb-4 text-indigo-500 dark:text-indigo-300  font-semibold">
                Website Software Engineer
              </h2>
              <p className="text-gray-700 dark:text-gray-200 mb-6">
                A passionate web developer based in Indonesia, specializing in creating
                fast and secure digital experiences.
              </p>

              <div className="flex space-x-4 mt-[10vw]">
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  Download CV
                </button>
                <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                  Contact Me
                </button>
              </div>
          </div>
      </div>

      <div className="flex justify-center text-center  min-h-[40vw] p-4 mx-auto w-[70vw]">
          <div className="flex-1">
              <h1 className="text-[2vw] font-bold mb-2 text-gray-500 dark:text-gray-300">
                Recent Project
              </h1>
             
             <div className='text-right'>See All</div>
             <div className='w-full flex'> {/* add border */}
                <div className='w-1/3'>
                  <div>TITLE 1</div>
                  <div>IMAGE</div>
                  <div>caption</div>
                </div>
                <div className='w-1/3'>
                  <div>TITLE 2</div>
                  <div>IMAGE</div>
                  <div>caption</div>
                </div>
                <div className='w-1/3'>
                  <div>TITLE 3</div>
                  <div>IMAGE</div>
                  <div>caption</div>
                </div>
             </div>
          </div>
      </div>
    </>
  );
}
