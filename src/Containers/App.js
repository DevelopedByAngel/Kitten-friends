import React from 'react'
import Cardlist from '../Components/cardlist';
import Search from '../Components/search'
import Scroll from '../Components/scroll';
											const kitt=[
											{
												name:'oscar',
												email:'oscar@gmail.com'
											},
											{
												name:'smokey',
												email:'smokey@aho.com'
											},
											{
											name:'kitty',
											email:'kitty66@gmail.com'},
											{
												name:'Charlie',
											email:'Charlie@gmail.com'
											},
											{
												name:'Tom',
											email:'Tom96@gmail.com'
											},
											{
												name:'Lilly',
											email:'Lilly57@gmail.com'
											},
											{
												name:'Oliver',
											email:'Oliver@gmail.com'
											},
											{
												name:'Sebastian',
											email:'Sebastian@gmail.com'
											}]
// not using robots array anymore
class App extends React.Component
{
	constructor()
	{
		super();
		this.state=
		{
			kitt:kitt,
			searchfield:''
		}
	}
	componentDidMount()
	{
		fetch('https://jsonplaceholder.typicode.com/users')
		// requesting to API
		.then(response => response.json())
		// 
		.then(user=>this.setState({kitt:user}))
	}
	oninput=(e)=>
	// using arrow function so that this refers to app not the element
	{
		this.setState({searchfield:e.target.value});
		// e.target gives the element doing the event
	}
	render()
	{
		const filteredrobots=this.state.kitt.filter(kitten=>
			{
				return kitten.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
			});
		if(this.state.kitt.length===0)
		{
			return <h1>Loading...</h1>
		}
		else
		{
			return(
				<div class='tc'>
					<link href="https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap" rel="stylesheet"/>
					<h1 class='heading'>Kittens</h1>
					<Search oninput={this.oninput}/>
					<hr/>
					<Scroll>
						<Cardlist kitt={filteredrobots}/>
					</Scroll>
				</div>
		);
	}
	}
}
export default App;