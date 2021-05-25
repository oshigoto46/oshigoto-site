import React, { useState } from "react";
import MenuIcon      from '@material-ui/icons/Menu';
import IconButton    from "@material-ui/core/IconButton";
import {UploadModal} from "./UploadModal";

export const Photo = () => {
	const [like, setLike] = useState(false);
	const likeFunction = () => {
		setLike((like) => !like);
	};
	const [open , setOpen]  = useState<boolean>(false);
	// どう書くのがいいのか検討
	const handleStateChange = ():void => setOpen(true);
	const handleClose       = ():void => setOpen(false);

	return (
		<nav className='photo'>
			{open && <UploadModal open={open}  handleClose={handleClose} />}
			<IconButton
				edge="start"
				// className={classes.menuButton}
				onClick={() => setOpen(true)}
				color="inherit"
				aria-label="menu"
			>
			　　<MenuIcon />
			     upload
			</IconButton>
		</nav>
		// <div className='photo'>
		// 	<img src={photo.url} width={"100%"} alt={`Thumbnail: ${photo.id}`} />
		// 	<div className='title'>
		// 		<p className='title'>{photo.title}</p>{" "}
		// 		<div className='icons'>
		// 		</div>
		// 	</div>
		// </div>
	);
};