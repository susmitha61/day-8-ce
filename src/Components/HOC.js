import React from 'react';
function HOC(products)
{
return function List()
{
      return (
        <div>
          <h2>Product List</h2>  
          <ul>
      {products.map((product) => (
          <li key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <img src={product.imageUrl} alt={product.name} />
        </li>
      ))}
    </ul>
        </div>
      );
    }
  }
  export default HOC;
