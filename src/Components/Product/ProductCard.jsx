import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import { Link } from 'react-router-dom';
import classes from './product.module.css'
import Rating from '@mui/material/Rating'
function ProductCard({ product, ratingcorr, flex, renderDesc }) {
  const { image, title, id, rating, price, description } = product;

  console.log(product);
  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" className={classes.img_container} />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{maxWidth:"750px"}}>{description}</div>}
        {ratingcorr && (
          <div className={classes.rating}>
            {/* rating */}
            <Rating value={rating.rate} precision={0.1} />
            {/*count */}
            <small>{rating.count}</small>
          </div>
        )}

        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}> add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;