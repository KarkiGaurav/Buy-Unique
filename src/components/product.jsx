import React from 'react'
import { NavLink } from 'react-router-dom';

const Product = (currElm) => {

  const { id, name, image, price, category } = currElm;
  return (
    <NavLink to={`/singleproduct/${id}`} >
      <div className="card">
        <figure >
          <img src={image} alt={`this is image of the ${name}`} />
          <figcaption>{category} </figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            {/* <p className="card-data--price">{<FormatPrice price={price} />}</p> */}
          </div>
        </div>
      </div>
    </NavLink>
  )
}

export default Product
