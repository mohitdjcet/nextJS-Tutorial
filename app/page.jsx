import Image from 'next/image'
import { Inter } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"]
});
export default function Home() {
    return(
       <main style={{padding: "40px"}}>
        <p className={inter.className}>This is Main Component</p>

        <Image
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt='Hero Image'
        width={300}
        height={300}
        // priority
        />
       </main>
    )
}