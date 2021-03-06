import React, { useState, useEffect } from "react";
import axios from "axios";
import { FunctionComponent } from "react";
import {Photo} from "./Photo";

export const Photos: React.FunctionComponent  = () => {

    const [photos, getPhotos] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const results = await axios.get(
				"https://jsonplaceholder.typicode.com/photos"
			).then(
               // state管理とか書く、エラー画面表示
			).catch(
               // state管理とか書く、エラー画面表示
			);
			getPhotos(results.data);
		};
		fetchData();
    }, []);
    console.log(photos);
    return (
		<div className='photos'>
			{/* {photos.map((photo, index) => (
				<Photo key={index} index={index} photo={photo} />
			))} */}
		</div>
	);
};
