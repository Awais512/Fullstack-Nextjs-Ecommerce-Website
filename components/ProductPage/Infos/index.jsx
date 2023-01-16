import styles from "./styles.module.scss";
import { Rating } from "@mui/material";

const Infos = ({ product }) => {
  return (
    <div className={styles.infos}>
      <div className={styles.infos__container}>
        <h1 className={styles.info__name}>{product.name}</h1>
        <h2 className={styles.info__sku}>{product.sku || "sku23475"}</h2>
        <div className={styles.infos__rating}>
          <Rating
            name="half-rating-read"
            defaultValue={product.rating}
            precision={0.5}
            readOnly
            style={{ color: "#FACF19" }}
          />
          {product.numReviews}
          {product.numReviews == 1 ? "review" : "reviews"}
        </div>
        <div className={styles.infos__price}>
          {product.priceRange ? (
            <h2>{product.priceRange}</h2>
          ) : (
            <h1>{product.price}</h1>
          )}
          {product.discount > 0 ? (
            <h3>
              <span>{product.priceBefore}</span>
              <span>(-{product.discount}%)</span>
            </h3>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Infos;
