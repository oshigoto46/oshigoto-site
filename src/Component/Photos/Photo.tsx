import React, { useState } from "react";

export const Photo = ({ photo }) => {
	const [like, setLike] = useState(false);
	const likeFunction = () => {
		setLike((like) => !like);
	};

	return (
		<div className='photo'>
			<img src={photo.url} width={"100%"} alt={`Thumbnail: ${photo.id}`} />
			<div className='title'>
				<p className='title'>{photo.title}</p>{" "}
				<div className='icons'>
				</div>
			</div>
		</div>
	);
};