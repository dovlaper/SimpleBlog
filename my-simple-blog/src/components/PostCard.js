import React from 'react'
import { Link } from 'react-router-dom'

export default function PostCard ({ post }) {
  return (
    <div className="card" style={{ width: '18rem', float: 'left', margin: 10}}>
      <div className="card-body">
        <h5 className="card-title">
          <Link to={`/posts/${post.id}`}>
            { post.title }
          </Link>
        </h5>
        <p className="card-text">
          { post.body }
        </p>
      </div>
    </div>
  )
}