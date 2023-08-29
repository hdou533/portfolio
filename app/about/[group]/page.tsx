import { hobbyGallery } from "@/libs/data"
import Image from "next/image"
import Link from "next/link"

const HobbyPage = ({ params } : { params: { group: string } }) => {
    
    const filteredData = hobbyGallery.filter(item => item.group === params.group)
    // console.log(filteredData)
    return (
        <div className="w-full min-h-[calc(100vh-317px)] p-16 ">
            <div>
                <Link href='/about'><span className="hover:text-light-pink underline underline-offset-8">🡐 Go Back to About</span></Link>
            </div>
            <div className="py-20 px-8 flex flex-wrap gap-8 justify-center items-center overflow-y-auto">
            {filteredData.map(item =>
            (
                <div key={item.title} className="relative w-[320px] h-[400px]">
                    <Image src={item.img} fill alt="" className="object-cover rounded-lg"/>
                </div>
            )
            )}
            </div>
            
        </div>
    )
}

export default HobbyPage
