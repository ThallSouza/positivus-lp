import { Button } from "@heroui/button"
import LogoImage from "../assets/logo-posi.svg"

export function Header() {

    return (
      <div className="flex justify-between items-center" style={{paddingInline:'10%'}}>
        <img src={LogoImage} alt='Logo' className='h-9 imagem cursor-pointer'/>
        <div className="flex items-center gap-10">
          <p className="text-lg font-normal text-neutral-950 hover:text-neutral-600 hover:underline cursor-pointer">Sobre mim</p>
          <p className="text-lg font-normal text-neutral-950 hover:text-neutral-600 hover:underline cursor-pointer">Projetos</p>
          <p className="text-lg font-normal text-neutral-950 hover:text-neutral-600 hover:underline cursor-pointer">Use Cases</p>
          <p className="text-lg font-normal text-neutral-950 hover:text-neutral-600 hover:underline cursor-pointer">Blog</p>
          <Button size="md" variant="bordered" radius="sm" className="border-neutral-950 hover:border-neutral-600">Contato</Button>
        </div>
      </div>
    )
  }