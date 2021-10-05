import React from 'react';

const PostCard = () => {
    return ( 
    <div className="shadow-lg rounded-lg">
        <img className="rounded-t-lg" src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
        <div className="p-2 md:p-4">
            <h1 className="font-bold text-xl mb-1">My Blog title</h1>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quo impedit id, obcaecati praesentium deleniti.</p>
        </div>
    </div> 
  );
}
 
export default PostCard;