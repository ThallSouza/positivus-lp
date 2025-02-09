import Pesquisa from "../assets/roadmap/pesquisa.svg"
import Definicao from "../assets/roadmap/definicao.svg"
import Prototipacao from "../assets/roadmap/prototipacao.svg"
import Analise from "../assets/roadmap/analise.svg"
import Roadmap from "../assets/roadmap/roadmap.svg"

export function Services() {

    return (
        <div className="flex flex-col gap-4" style={{paddingInline:'10%'}}>
            <div className="flex flex-col gap-2 mb-4">
                <h2 className="montserrat-alternates-bold text-3xl">Etapas de Design</h2>
                <p className="montserrat-alternates-medium text-base text-neutral-500">Colocar texto aqui para explicar o roadmap e planejamento</p>
            </div>
            <div className="flex">
                <img src={Roadmap} alt='Logo' className='imagem w-full'/>
            </div>
            <div className="grid grid-cols-4 justify-between items-center gap-4">
                <div className="bg-white shadow-none rounded-3xl px-6 pt-6">
                    <div className="flex flex-row justify-between pb-6">
                        <img src={Pesquisa} alt='Logo' className='imagem'/>
                        <p className="montserrat-alternates-semibold text-3xl text-neutral-200">01</p>
                    </div>
                    <div className="flex flex-col justify-between gap-3 pb-10">
                        <h3 className="montserrat-alternates-bold text-xl text-neutral-800">Pesquisa</h3>
                        <p className="montserrat-alternates-medium text-sm text-neutral-400">Dados do mercado</p>
                        <p className="montserrat-alternates-medium text-sm text-neutral-400">Análise de competidores</p>
                        <p className="montserrat-alternates-medium text-sm text-neutral-400">Blogs & Comunidades</p>
                        <p className="montserrat-alternates-medium text-sm text-neutral-400">Entrevista com usuários</p>
                        <p className="montserrat-alternates-medium text-sm text-neutral-400"> .</p>
                    </div>
                    <div className="flex justify-center">
                            <hr className="pesquisa"/>
                    </div>    
                </div>

                <div className="bg-white shadow-none rounded-3xl px-6 pt-6">
                    <div className="flex flex-row justify-between pb-6">
                        <img src={Definicao} alt='Logo' className='imagem'/>
                        <p className="montserrat-alternates-semibold text-3xl text-neutral-200">02</p>
                    </div>
                    <div className="flex flex-col justify-between gap-3 pb-10">
                        <h3 className="montserrat-alternates-bold text-xl text-neutral-800">Definição</h3>
                        <p className="montserrat-alternates-medium text-sm text-neutral-400">Branding</p>
                        <p className="montserrat-alternates-medium text-sm text-neutral-400">Personas</p>
                        <p className="montserrat-alternates-medium text-sm text-neutral-400">Jornada dos usuários</p>
                        <p className="montserrat-alternates-medium text-sm text-neutral-400">Storytelling</p>
                        <p className="montserrat-alternates-medium text-sm text-neutral-400">Definição de features V1</p>
                    </div>
                    <div className="flex justify-center">
                            <hr className="definicao"/>
                    </div>    
                </div>

                <div className="bg-white shadow-none rounded-3xl px-6 pt-6">
                    <div className="flex flex-row justify-between pb-6">
                        <img src={Prototipacao} alt='Logo' className='imagem'/>
                        <p className="montserrat-alternates-semibold text-3xl text-neutral-200">03</p>
                    </div>
                    <div className="flex flex-col justify-between gap-3 pb-10">
                        <h3 className="montserrat-alternates-bold text-xl text-neutral-800">Prototipação</h3>
                        <p className="montserrat-alternates-medium text-sm text-neutral-400">Arquitetura do App</p>
                        <p className="montserrat-alternates-medium text-sm text-neutral-400">Design System</p>
                        <p className="montserrat-alternates-medium text-sm text-neutral-400">Wireframe</p>
                        <p className="montserrat-alternates-medium text-sm text-neutral-400">Alta Fidelidade</p>
                        <p className="montserrat-alternates-medium text-sm text-neutral-400">Navegável</p>
                    </div>
                    <div className="flex justify-center">
                            <hr className="prototipacao"/>
                    </div>    
                </div>

                <div className="bg-white shadow-none rounded-3xl px-6 pt-6">
                    <div className="flex flex-row justify-between pb-6">
                        <img src={Analise} alt='Logo' className='imagem'/>
                        <p className="montserrat-alternates-semibold text-3xl text-neutral-200">04</p>
                    </div>
                    <div className="flex flex-col justify-between gap-3 pb-10">
                        <h3 className="montserrat-alternates-bold text-xl text-neutral-800">Análise</h3>
                        <p className="montserrat-alternates-medium text-sm text-neutral-400">Teste com usuários</p>
                        <p className="montserrat-alternates-medium text-sm text-neutral-400">Pesquisa com forncedores</p>
                        <p className="montserrat-alternates-medium text-sm text-neutral-400">Pesquisa com usuários</p>
                        <p className="montserrat-alternates-medium text-sm text-neutral-400"> .</p>
                        <p className="montserrat-alternates-medium text-sm text-neutral-400"> .</p>
                    </div>
                    <div className="flex justify-center">
                            <hr className="analise"/>
                    </div>    
                </div>
            </div>
        </div>
    )
  }