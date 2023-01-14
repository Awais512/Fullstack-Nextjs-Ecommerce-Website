import styles from "./product.module.scss";
import { connectDB, disconnectDB } from "../../utils/db";
import Product from "../../models/Product";

const ProductDetails = ({ newProduct }) => {
  console.log(newProduct);
  return <div>ProductDetails</div>;
};

export async function getServerSideProps(context) {
  const { query } = context;
  const slug = query.slug;
  const style = query.style;
  const size = query.size || 0;
  connectDB();
  //---------//
  let product = await Product.findOne({ slug }).lean();
  let subProduct = product.subProducts[style];
  let prices = subProduct.sizes
    .map((s) => {
      return s.price;
    })
    .sort((a, b) => {
      return a - b;
    });
  let newProduct = {
    ...product,
    images: subProduct.images,
    sizes: subProduct.sizes,
    discount: subProduct.discount,
    sku: product.sku,
    colors: product.subProducts.map((p) => {
      return p.color;
    }),
    priceRange:
      prices.length > 1
        ? `From ${prices[0]} to ${prices[prices.length - 1]}`
        : "",
    price:
      subProduct.discount > 0
        ? (
            subProduct.sizes[size].price -
            subProduct.sizes[size].price / subProduct.discount
          ).toFixed(2)
        : subProduct.sizes[size].price,
    priceBefore: subProduct.sizes[size].price,
    quantity: subProduct.sizes[size].qty,
  };
  //--------//
  disconnectDB();
  return {
    props: {
      newProduct: JSON.parse(JSON.stringify(newProduct)),
    },
  };
}

export default ProductDetails;
