import Image from 'next/image'
import  { Formulario }  from '../formHook/index'

export const Content=()=> {
    return (
       
       <section className="w-full flex flex-col items-center justify-center gap-4 p-6 z-10">

      <div className=" animate-rotation mask-container">
        <Image
          className="select-none no-drag animate-rotation animate-gradient"
          src="/mauricio.svg"
          alt="Logo do Autor"
          width={98.6}
          height={98}
          priority
        />
      </div>

        <h1 className='font-medium text-sm text-center'>Webhook Discord</h1>

       <Formulario></Formulario>
        
    </section>
    )
}

