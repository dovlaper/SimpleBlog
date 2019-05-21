import React from 'react'

export default function PostCard({post}) {
	return (
		<div>
			<h3>
				{post.title}
			</h3>
			<p>
				{post.body}
			</p>
		</div>
	);
}