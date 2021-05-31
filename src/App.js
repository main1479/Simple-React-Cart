import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import ProductTable from './components/productTable';

class App extends Component {
	state = {
		products: [
			{ name: 'Iphone 12 pro max', price: 1180, quantity: 1 },
			{ name: 'Iphone 12 pro', price: 1011, quantity: 1 },
			{ name: 'Iphone 12', price: 920, quantity: 1 },
			{ name: 'Iphone 12 mini', price: 720, quantity: 1 },
		],
		total: 0,
	};

	onDelete = (product) => {
		const index = this.state.products.indexOf(product);
		const newProducts = this.state.products.splice(index, 1);
		this.setState({ newProducts });
	};

	incrementQuantity = (product) => {
		const newProducts = this.state.products.map((item) => {
			if (item === product) {
				item.quantity++;
			}
			return item;
		});

		this.setState({ newProducts });
	};
	decrementQuantity = (product) => {
		const newProducts = this.state.products.map((item) => {
			if (item === product) {
				item.quantity--;
			}
			return item;
		});

		this.setState({ newProducts });
	};
	onReset = () => {
		const newProducts = this.state.products.map((product) => (product.quantity = 1));
		this.setState({ newProducts });
	};

	render() {
		return (
			<div className="container mt-5">
				<Navbar items={this.state.products} />
				<ProductTable
					products={this.state.products}
					onIncrement={this.incrementQuantity}
					onDecrement={this.decrementQuantity}
					onDelete={this.onDelete}
					onReset={this.onReset}
				/>
			</div>
		);
	}
}

export default App;
