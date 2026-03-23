import { useRouter } from "next/router";

export default function BlogDetails(){
    const router = useRouter();
    const {id} = router.query;

    return<h1>Blog Page ID: {id}</h1>
}