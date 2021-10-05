/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link'
const PostCard = ({post}) => {
    return ( 
    <Link href={"blogs/"+post.slug} passHref >
        <div className="shadow-lg rounded-lg cursor-pointer hover:shadow-2xl transform">
        <img className="rounded-t-lg" src={post.frontmatter.cover_image} alt="" />
        <div className="p-2 md:p-4">
            <h1 className="font-bold text-xl mb-1">{post.frontmatter.title}</h1>
            <p className="text-sm text-gray-500">{post.frontmatter.excerpt}</p>
        </div>
    </div> 
    </Link>
  );
}
 
export default PostCard;