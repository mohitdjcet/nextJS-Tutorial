import Link from "next/link"

export default function Blog(){
    return(
       <div>
         <h1>Blog Page</h1>
        <ul>
            <li><Link href="/blog/1">Blog 1</Link></li>
            <li><Link href="/blog/react">React Blog</Link></li>
            <li><Link href="/blog/nextjs">Nextjs Blog</Link></li>
        </ul>
       </div>
    )
}