import { useRouter } from "next/router";

export default function Home(){
    const router = useRouter();

    const goToAbout = () =>{
        router.push("/about")
    }
    return(
        <div>
            <h1>Home Page</h1>
            <button onClick={goToAbout}>GO TO About Page</button>
        </div>
    )
}