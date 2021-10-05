import Head from 'next/head'
import PostCard from '../components/PostCart'
import Header from './../components/Header'
export default function Home() {
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
            [1,2,3].map((e,index)=>{
              return <PostCard key={index}/>
            })
          }
        </div>
      </div>
  )
}
