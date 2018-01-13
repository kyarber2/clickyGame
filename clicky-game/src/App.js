import React, { Component } from 'react';
import ClickItem from './components/ClickItem';
import flowers from './flowers.json';
import './App.css';
import Title from './components/Title';
import Wrapper from './components/Wrapper';

class App extends Component {
	state = {
		flowers
	};

	removeFlower = id => {
    
    const flowers = this.state.flowers.filter(flower => flower.id !== id);
   
    this.setState({ flowers });
  };

render() {
	return (
			<Wrapper>
				<Title> Flowers! </Title>
				{this.state.flowers.map(flower => (
					<ClickItem
						id={flower.id}
						image={flower.image}
						clicked={flower.clicked}
					/>
				))}
			</Wrapper>
		);
	}

}

export default App;
