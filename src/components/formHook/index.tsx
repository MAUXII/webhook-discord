'use client'

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import toast from 'react-hot-toast';

const createUserFormSchema = z.object({
  name: z.string()
    .nonempty("Você precisa colocar um nome")
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/
    , "Apenas Letras são permitidas")
    .min(3, "O nome deve ter pelo menos 3 caracteres")
    .max(50, "O nome deve ter no máximo 50 caracteres"),
    
  email: z.string()
    .min(1,"Email é um campo obrigatório")
    .email("Este não é um Email Válido")
    ,

  subject: z.string()
    .min(1,"É necessário algum assunto")
    .min(10, "O assunto deve ter pelo menos 10 caracteres")
    .max(600, "O Assunto deve ter no máximo 600 caracteres"),
})



type createUserFormData = z.infer<typeof createUserFormSchema>
  
export const Formulario=() => {

  const { 
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<createUserFormData>({
      resolver: zodResolver(createUserFormSchema)
  })

  const onSubmit = async (data: createUserFormData) =>{
    try{
      createUserFormSchema.safeParse(data); // => { success: true; data: [object] }
createUserFormSchema.safeParse('test'); // => { success: false; error: ZodError }
      await axios.post('/api/formHook', data)
      reset()
      toast.success("Mensagem Enviada com Sucesso!")
      
    }

    catch {
      toast.error("Erro, tente novamente!")
    }
  }
  
    return(
        
        <div className='flex justify-center items-center flex-col gap-8 w-full'>
        <form onSubmit={handleSubmit(onSubmit)}
        className="w-full items-center justify-center flex flex-col gap-2">

              {errors.name && <span className='text-sm text-red-500 items-start w-full font-light'>{errors.name.message}</span>}
                <input {...register("name")} type="text" placeholder="Nome" className=" w-full p-3 bg-transparent border rounded-sm border-slate-700 placeholder-tailwind-slate-300 outline-none text-sm focus:ring-1 ring-indigo-600"></input>

                {errors.email && <span className='text-sm text-red-500 items-start w-full font-light'>{errors.email.message}</span>}
                <input {...register("email")} type="text" placeholder="Email" className=" w-full p-3 bg-transparent border rounded-sm border-slate-700 placeholder-tailwind-slate-300 outline-none text-sm focus:ring-1 ring-indigo-600"></input>

                {errors.subject && <span className='text-sm text-red-500 items-start w-full font-light'>{errors.subject.message}</span>}
                <textarea {...register("subject")} maxLength={600} placeholder="Assunto" className=" w-full p-3 bg-transparent border rounded-sm border-slate-700 placeholder-tailwind-slate-300 outline-none text-sm h-40 resize-none scrollbar-style focus:ring-1 ring-indigo-600"></textarea>
                <div>
            <button type="submit" className=' hover:bg-indigo-900 mt-4 flex px-6 py-3 bg-indigo-700 w-full mx-auto rounded-md text-center justify-center content-center' disabled={isSubmitting}>{isSubmitting ? 'Enviando...' : `Enviar Mensagem`}</button>
            </div>
        </form>
        </div>
    )}
