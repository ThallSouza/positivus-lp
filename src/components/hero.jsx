import { Button } from "@heroui/button"
import IlusHero from "../assets/illustration-hero.svg"
import { Companys } from "./companys"

export function Hero() {

    return (
        <div className="flex flex-col gap-16" style={{paddingInline:'10%'}}>
            <div className="grid grid-cols-2 gap-28">
                <div className="flex flex-col gap-8 w-10/12">
                    <h1 className="text-6xl font-medium text-neutral-950">Navigating the digital landscape for success</h1>
                    <p className="text-lg font-normal text-neutral-950">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                    <div>
                        <Button size="lg" variant="solid" radius="sm" className="bg-neutral-950 text-neutral-50">Book a consultation</Button>
                    </div>
                </div>
                <div>
                    <img src={IlusHero} alt='Illustration' className='imagem'/>
                </div>
            </div>
            <Companys/>
        </div>
    )
  }