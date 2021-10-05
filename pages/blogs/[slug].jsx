import React from 'react';
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Header from '../../components/Header';
import marked from 'marked'
const BlogView = ({
    frontmatter: { title, date, cover_image },
    slug,
    content,
  }) => {
    return ( 
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <Header/>
            <div className='post-body container m-auto mt-10  max-w-4xl'>
                <h1 className='text-4xl font-bold mb-5'>{title}</h1>
                <div className='markdown' dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            </div>
        </div> 
    );
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('blogs'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(
        path.join('blogs', slug + '.md'),
        'utf-8'
      )
    
      const { data: frontmatter, content } = matter(markdownWithMeta)
    
      return {
        props: {
          frontmatter,
          slug,
          content,
        },
      }
}
 
export default BlogView;