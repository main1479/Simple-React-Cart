import React from 'react';

const ProductTable = (props) => {
   if(props.products.length === 0){
      return (
         <h1 className="display-6 text-center mt-5 border-top">The cart is empty</h1>
      )
   }
	return (
		<table className="table">
			<thead>
				<tr>
					<th scope="col">Product</th>
					<th scope="col">Quantity</th>
					<th scope="col"></th>
					<th scope="col">Price</th>
				</tr>
			</thead>
			<tbody>
				{props.products.map((product) => {
					const btnClasses = product.quantity > 1 ? 'btn btn-primary' : 'btn btn-primary disabled';
					return (
						<tr key={product.name}>
							<td>{product.name}</td>
							<td>
								<button onClick={() => props.onDecrement(product)} className={btnClasses}>
									-
								</button>
								<button className="btn btn-danger mx-2" style={{ pointerEvents: 'none' }}>
									{product.quantity}
								</button>
								<button onClick={() => props.onIncrement(product)} className="btn btn-primary">
									+
								</button>
							</td>
							<td>
								<button onClick={() => props.onDelete(product)} className="btn btn-danger">
									Delete
								</button>
							</td>
							<td>${product.price * product.quantity}</td>
						</tr>
					);
				})}
			</tbody>
			<tfoot>
				<tr>
					<th scope="col">
						<button onClick={()=> props.onReset()} className="btn btn-danger">Reset Cart</button>
					</th>
					<th scope="col"></th>
					<th scope="col">Total</th>
					<th scope="col">
						$
						{props.products.reduce((acc, curr) => {
							return acc + curr.price * curr.quantity;
						}, 0)}
					</th>
				</tr>
			</tfoot>
		</table>
	);
};

export default ProductTable;
