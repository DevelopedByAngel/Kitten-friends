import React from 'react'

const Search=({oninput})=>
{
	return(
		<div>
		<input onInput={oninput} class='bg-lightest-blue pa3 b--blue ba' type='text' name='search' placeholder='enter kitten name'/>	
		</div>	);
	}

export default Search;
