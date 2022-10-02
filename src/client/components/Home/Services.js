import React from 'react'

function Services() {
  return (
    <div className='w-full pt-12 ' >
      <div className='border-b  md:w-96 border-temp-border-gray py-3' >
        <span className='text-4xl font-bold text-temp-gray' >OUR CATEGORIES</span>
      </div>
      <div className='py-3 flex flex-row justify-between w-full' >
          <span className='text-temp-gray2 font-bold text-2xl' >Find the best room and Book Quickly!</span>
      </div>
      <div className='mt-5' >  
        <div className='grid grid-cols-5 gap-4 pt-4' >
            <div className='col-span-2' >
              <div className="h-[300px] bg-center bg-cover bg-no-repeat bg-[url('/assets/images/hero.jpg')] relative" >
                <div className='absolute left-0 right-0 bottom-0 top-0 bg-[#00000060]' >

                </div>
                <div className='absolute left-0 bottom-10 h-12 md:md:w-[200px] bg-[#ffffff] flex items-center justify-center' >
                    <span className='block font-bold text-temp-red text-xl  ' >Appartement</span>
                </div>
              </div>
            </div>
            <div className='col-span-3' >
              <div className="h-[300px] bg-center bg-cover bg-no-repeat bg-[url('/assets/images/r2.jpg')] relative" >
                <div className='absolute left-0 right-0 bottom-0 top-0 bg-[#00000060]' >

                </div>
                <div className='absolute left-0 top-10 h-12 md:w-[200px] bg-[#ffffff] flex items-center justify-center' >
                 <span className='block font-bold text-temp-red text-xl  ' >House</span>
                </div>
              </div>
            </div>
        </div>
        <div className='grid grid-cols-7 gap-4 pt-4' >
            <div className='col-span-5' >
              <div className="h-[200px] bg-center bg-cover bg-no-repeat bg-[url('/assets/images/r3.jpg')] relative" >
                <div className='absolute left-0 right-0 bottom-0 top-0 bg-[#00000060]' >

                </div>
                <div className='absolute right-0 bottom-10 h-12 md:w-[200px] bg-[#ffffff] flex items-center justify-center' >
                  <span className='block font-bold text-temp-red text-xl  ' >Hotel</span>
                </div>
              </div>
            </div>
            <div className='col-span-2' >
              <div className="h-[200px] bg-center bg-cover bg-no-repeat bg-[url('/assets/images/r4.jpg')] relative" >
                <div className='absolute left-0 right-0 bottom-0 top-0 bg-[#00000060]' >

                </div>
                <div className='absolute left-0 top-10 h-12 md:w-[200px] bg-[#ffffff] flex items-center justify-center' >
                  <span className='block font-bold text-temp-red text-xl  ' >Ibiza Room</span>
                </div>
              </div>
            </div>
        </div>
        <div className='grid grid-cols-2 gap-4 pt-4' >
            <div className='col-span-1' >
              <div className="h-[250px]  bg-center bg-cover bg-no-repeat bg-[url('/assets/images/r5.jpg')] relative" >
                <div className='absolute left-0 right-0 bottom-0 top-0 bg-[#00000060]' >

                </div>
                <div className='absolute right-0 bottom-10 h-12 md:w-[200px] bg-[#ffffff] flex items-center justify-center' >
                  <span className='block font-bold text-temp-red text-xl  ' >Appartement</span>
                </div>
              </div>
            </div>
            <div className='col-span-1' >
              <div className="h-[250px] bg-purple-600 bg-center bg-cover bg-no-repeat bg-[url('/assets/images/r6.jpg')] relative" >
                <div className='absolute left-0 right-0 bottom-0 top-0 bg-[#00000060]' >

                </div>
                <div className='absolute right-0 top-10 h-12 md:w-[200px] bg-[#ffffff] flex items-center justify-center' >
                   <span className='block font-bold text-temp-red text-xl  ' >Sitting Room</span>
                </div>

              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services