export async function getStaticPaths() {
  const posts = [{ slug: "reactjs" }, { slug: "extjs" }];

  const paths = posts.map((path) => ({
    params: { slug: path.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const posts = [
    { slug: "reactjs", title: "ReactJS Blog" },
    { slug: "extjs", title: "NextJS Blog" },
  ];

  const post = posts.find((p)=> p.slug === params.slug);

  return{
    props:{
        post,
    }
  }
}

export default function BlogDetails({post}){
    return(
        <div>
            <h1>{post.title}</h1>
            <p>Slug: {post.slug}</p>
        </div>
    )
}
