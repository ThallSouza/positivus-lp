import { Button } from "@heroui/button"
import {Card} from "@heroui/card";
import IlusCard1 from "../assets/cards/illustration-card1.svg"
import IlusCard2 from "../assets/cards/illustration-card2.svg"
import IlusCard3 from "../assets/cards/illustration-card3.svg"
import IlusCard4 from "../assets/cards/illustration-card4.svg"
import IlusCard5 from "../assets/cards/illustration-card5.svg"
import IlusCard6 from "../assets/cards/illustration-card6.svg"

export function Services() {

    return (
      <div className="flex flex-col justify-between items-center gap-10" style={{paddingInline:'10%'}}>
        
        <div className="grid grid-cols-2 gap-10">
            <Card className="bg-neutral-200 border-neutral-950 border-2 border-b-5 shadow-none grid grid-cols-2 p-8 gap-12">
                <div className="flex flex-col justify-between">
                    <h3 className="text-3xl font-medium text-neutral-950">Search engine optimization</h3>
                    <Button>Learn more</Button>
                </div>
                <div className="p-5">
                    <img src={IlusCard1} alt='Logo' className='imagem'/>
                </div>
                
            </Card>
            <Card className="bg-lime-400 border-neutral-950 border-2 border-b-5 shadow-none grid grid-cols-2 p-8 gap-12">
                <div className="flex flex-col justify-between">
                    <h3 className="text-3xl font-medium text-neutral-950">Search engine optimization</h3>
                    <Button>Learn more</Button>
                </div>
                <div className="p-5">
                    <img src={IlusCard2} alt='Logo' className='imagem'/>
                </div>
                
            </Card>
        </div>
        <div className="grid grid-cols-2 gap-10">
            <Card className="bg-neutral-950 border-neutral-950 border-2 border-b-5 shadow-none grid grid-cols-2 p-8 gap-12">
                <div className="flex flex-col justify-between">
                    <h3 className="text-3xl font-medium text-neutral-50">Search engine optimization</h3>
                    <Button>Learn more</Button>
                </div>
                <div className="p-5">
                    <img src={IlusCard3} alt='Logo' className='imagem'/>
                </div>
                
            </Card>
            <Card className="bg-neutral-200 border-neutral-950 border-2 border-b-5 shadow-none grid grid-cols-2 p-8 gap-12">
                <div className="flex flex-col justify-between">
                    <h3 className="text-3xl font-medium text-neutral-950">Search engine optimization</h3>
                    <Button>Learn more</Button>
                </div>
                <div className="p-5">
                    <img src={IlusCard4} alt='Logo' className='imagem'/>
                </div>
                
            </Card>
        </div>
        <div className="grid grid-cols-2 gap-10">
            <Card className="bg-lime-400 border-neutral-950 border-2 border-b-5 shadow-none grid grid-cols-2 p-8 gap-12">
                <div className="flex flex-col justify-between">
                    <h3 className="text-3xl font-medium text-neutral-950">Search engine optimization</h3>
                    <Button>Learn more</Button>
                </div>
                <div className="p-5">
                    <img src={IlusCard6} alt='Logo' className='imagem'/>
                </div>
                
            </Card>
            <Card className="bg-neutral-950 border-neutral-950 border-2 border-b-5 shadow-none grid grid-cols-2 p-8 gap-12">
                <div className="flex flex-col justify-between">
                    <h3 className="text-3xl font-medium text-neutral-50">Search engine optimization</h3>
                    <Button>Learn more</Button>
                </div>
                <div className="p-5">
                    <img src={IlusCard5} alt='Logo' className='imagem'/>
                </div>
                
            </Card>
        </div>
      </div>
    )
  }