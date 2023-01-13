import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import ProductSwiper from "./ProductSwiper";

const ProductCard = ({ product }) => {
  const [active, setActive] = useState(0);
  const [images, setImages] = useState(product.subProducts[active].images);
  const [prices, setPrices] = useState(
    product.subProducts[active]?.sizes
      .map((s) => {
        return s.price;
      })
      .sort((a, b) => {
        return a - b;
      })
  );
  const [styless, setStyless] = useState(
    product.subProducts.map((p) => {
      return p.color;
    })
  );

  useEffect(() => {
    setImages(product.subProducts[active].images);
    setPrices(
      product.subProducts[active]?.sizes
        .map((s) => {
          return s.price;
        })
        .sort((a, b) => {
          return a - b;
        })
    );
  }, [active]);

  return (
    <div className={styles.product}>
      <div className={styles.product__container}>
        <Link href={`/product/${product.slug}?styles=${active}`} legacyBehavior>
          <div>
            <ProductSwiper images={images} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
