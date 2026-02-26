export type Post = {
    slug: string;
    title: string;
    description: string;
    content: string;
};

export const posts: Post[] = [
    {
        slug: 'learn-nextjs',
        title: 'Learn Next.js',
        description: 'A comprehensive guide to learning Next.js, a popular React framework for building server-side rendered applications.',
        content: 'Next.js is a powerful framework that allows you to build server-side rendered React applications with ease. It provides features like automatic code splitting, optimized performance, and a great developer experience. In this guide, we will cover the basics of Next.js, including how to set up a project, create pages, and deploy your application.'
    },
    {
        slug: 'learn-react',
        title: 'Learn React',
        description: 'A comprehensive guide to learning React, a popular JavaScript library for building user interfaces.',
        content: 'React is a powerful JavaScript library that allows you to build dynamic and interactive user interfaces. It uses a component-based architecture, making it easy to create reusable UI components. In this guide, we will cover the basics of React, including how to set up a project, create components, and manage state.'
    },
    {
        slug: 'learn-javascript',
        title: 'Learn JavaScript',
        description: 'A comprehensive guide to learning JavaScript, the programming language of the web.',
        content: 'JavaScript is a versatile programming language that is essential for web development. It allows you to create interactive and dynamic web pages. In this guide, we will cover the basics of JavaScript, including variables, functions, and control flow.'
    }
];

export function getPosts(){
    return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
    return posts.find(post => post.slug === slug);
}