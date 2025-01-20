import Company1 from "../assets/company-logo/amazon.svg"
import Company2 from "../assets/company-logo/dribbble.svg"
import Company3 from "../assets/company-logo/hubspot.svg"
import Company4 from "../assets/company-logo/netflix.svg"
import Company5 from "../assets/company-logo/notion.svg"
import Company6 from "../assets/company-logo/zoom.svg"

export function Companys() {

    return (
        <div className="flex justify-between items-center grayscale">
            <img src={Company1} alt='Company1' className='imagem'/>
            <img src={Company2} alt='Company2' className='imagem'/>
            <img src={Company3} alt='Company3' className='imagem'/>
            <img src={Company4} alt='Company4' className='imagem'/>
            <img src={Company5} alt='Company5' className='imagem'/>
            <img src={Company6} alt='Company6' className='imagem'/>
        </div>
    )
  }