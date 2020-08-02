import React from 'react';
import Card from './card';
const Cardlist=(props)=>
{
	const {kitt}=props;
	return(
		kitt.map((user,i)=>
		{
			return <Card key={i} name={kitt[i].name} email={kitt[i].email} id={kitt[i].id}/>
		})
		);
}
export default Cardlist