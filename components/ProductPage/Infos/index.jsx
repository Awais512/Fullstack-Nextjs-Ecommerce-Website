import styles from "./styles.module.scss";
import { Rating } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

const Infos = ({ product }) => {
  console.log(product);
  const router = useRouter();

  const [size, setSize] = useState(router.query.size);

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
          {!size ? <h2>{product.priceRange}</h2> : <h1>{product.price}</h1>}
          {product.discount > 0 ? (
            <h3>
              {size && <span>{product.priceBefore}</span>}
              <span>(-{product.discount}%)</span>
            </h3>
          ) : (
            ""
          )}
        </div>
        <span className={styles.infos__shipping}>
          {product.shipping
            ? `+$${product.shipping} Shipping fee`
            : `Free Shipping`}
        </span>
        <span>
          {!size
            ? product.quantity
            : product.sizes.reduce((start, next) => start + next.qty, 0)}{" "}
          Pieces.
        </span>
        <div className={styles.infos__sizes}>
          <h4>Select a Size :</h4>
          <div className={styles.infos__sizes_wrap}>
            {product.sizes.map((size, i) => (
              <Link
                key={i}
                href={`/product/${product.slug}?style=${router.query.style}&size=${i}`}
              >
                <div
                  className={`${styles.infos__sizes_size} ${
                    i == router.query.size && styles.active_size
                  }`}
                  onClick={() => setSize(size.size)}
                >
                  {size.size}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infos;
