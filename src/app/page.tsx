'use client'

import { Content } from '../components/content/index'
import { Footer } from '../components/footer/index'
import Circle  from '../components/Circle'

export default function Home() {
  return (

    <div className='w-full flex justify-center '>
    <Circle></Circle>
    <main className="flex w-full max-w-[900px] min-h-screen flex-col items-center justify-center gap-8 p-5">
    <Content></Content>
    <Footer></Footer>
    </main>
    </div>

  )
}
