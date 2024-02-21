import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-content-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>Ankara Jeneratör</h1>
          <p className='text-[#ADB7BE] text-base lg:text-xl'>Sektörde 20 yıldır hizmet veren Ankara Jeneratör, jeneratör kiralama, jeneratör satışı, jeneratör bakımı, jeneratör yedek parça ve jeneratör servisi konularında hizmet vermektedir.</p>
          <div className='m-5 flex gap-2 flex-col sm:flex-row items-center'>
            <button className='bg-[#FFD700] text-[#181818] w-full px-8 py-3 rounded-full font-semibold text-lg lg:text-xl'>Hemen Ara</button>
            <button className=' text-[#ADB7BE] px-8 py-3 w-full rounded-full font-semibold text-lg lg:text-xl border border-[#ADB7BE]'>Teklif Al</button>
          </div>
        </div>
        <div className='col-span-5'>
          <div className='rounded-full bg-[#181818]'>
            <Image 
              src='/3.jpg' 
              alt='Ankara Jeneratör' 
              width={800} 
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection