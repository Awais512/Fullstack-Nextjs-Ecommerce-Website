import styles from "./styles.module.scss";
import { BsArrowRightCircle } from "react-icons/bs";

const Category = ({ header, products, background }) => {
  console.log(products);

  return (
    <div className={styles.category} style={{ background: `${background}` }}>
      <div className={styles.category__header}>
        <h1>{header}</h1>
        <BsArrowRightCircle />
      </div>
      <div className={styles.category__products}>
        {products.map((product) => (
          <div key={product.price} className={styles.product}>
            <img src={product.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
