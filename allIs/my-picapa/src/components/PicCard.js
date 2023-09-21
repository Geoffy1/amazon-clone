import React from 'react';

const PicCard = ({ pic }) => {
  const tags = pic.tags.split(',');

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={pic.webformatURL} alt="" className="w-full"/>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {pic.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {pic.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {pic.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {pic.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default PicCard;