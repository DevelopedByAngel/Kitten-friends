import React,{Component} from 'react';
import './Component1.css'
import 'tachyons'
const Component1=(props)=>
{
	return(
		<div class='tc'>
		<h1>Replacing Class with function and remoing render 
		since no more an object reoming this</h1>
		<h5>{props.quote}</h5>
		</div>
		);
}
export default Component1;