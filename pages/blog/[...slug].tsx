import { useRouter } from "next/router";

export default function BlogSlug(){
    const router = useRouter();
    const {slug} = router.query;

    return(
        <div>
            <h1>Catch All Routes</h1>
            <p>Slug : {JSON.stringify(slug)}</p>
        </div>
    )
}