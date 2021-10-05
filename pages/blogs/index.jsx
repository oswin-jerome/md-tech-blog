import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import PostCard from './../../components/PostCart'
import Header from './../../components/Header'
export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Tech Blog</title>
        <meta name="description" content="Blog app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
        <div className="container mx-auto mt-5 p-5 md:px-0  grid sm:grid-cols-4 gap-4">
          {
            posts.map((e,index)=>{
              return <PostCard post={e} key={index}/>
            })
          }
        </div>
      </div>
  )
}


export async function getStaticProps() {
  const files = fs.readdirSync(path.join('blogs'))

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(
      path.join('blogs', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts,
    },
  }
}