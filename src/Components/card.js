import React from 'react'

const Card=(props)=>
{
	const {name,email,id}=props
	return(
		<div class="pa3 ma2 dib  bg-light-green grow br4 shadow-5">
			<img src={`https://robohash.org/${id}?set=set4`} width='200' height='200' alt='{name}'/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		);
	}

export default Card;
