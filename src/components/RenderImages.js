import React,{Fragment} from 'react';

import {RenderImageItem} from './RenderImageItem';

export const RenderImages = ({images}) => {
	return(
		<Fragment>
			{images.map((item)=>{
				return <RenderImageItem key={item.id} info={item} />
			})}
		</Fragment>
	)
} ;