import { Icons } from '../icons/index';

export const Footer=()=>{
    return(
        <div className="w-full items-center justify-center flex flex-col">
            <p className="text-center w-full text-[16px] ">Desenvolvido com 💜 por Mauricio</p>
            <p className="text-center w-full text-sm">Todas as mensagens enviadas chegarão no webhook localizado no meu servidor do discord</p>
            <a target='blank' href="https://discord.gg/8Z99zSyf" className=" hover:text-violet-500  text-center w-full text-sm text-violet-400 underline mt-2">Visitar o Servidor do Discord e ver o Resultado </a>
            <Icons></Icons>
        </div>
    )
}