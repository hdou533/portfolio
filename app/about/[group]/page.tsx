import { hobbyGallery } from "@/libs/data"
import Image from "next/image"
import Link from "next/link"

const HobbyPage = ({ params } : { params: { group: string } }) => {
    
    const filteredData = hobbyGallery.filter(item => item.group === params.group)
    // console.log(filteredData)
    return (
        <div className="w-full min-h-[calc(100vh-317px)] py-16 px-8">
            <div>
                <Link href='/about'><span className="hover:text-light-pink underline underline-offset-8"> &larr; Go Back to About</span></Link>
            </div>
            <div className="py-20 flex flex-wrap gap-8 justify-center items-center overflow-y-auto scrollbar-hide">
            {filteredData.map(item =>
            (
                <div key={item.title} className="relative min-w-[320px] min-h-[400px]">
                    <Image src={item.img} fill alt="" className="object-cover rounded-lg"/>
                </div>
            )
            )}
            </div>
            
        </div>
    )
}

export default HobbyPage
