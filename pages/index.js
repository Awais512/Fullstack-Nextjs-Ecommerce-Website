import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import UK from "../public/images/uk.png";
import { useSession } from "next-auth/react";
import Main from "../components/Home/Main";
import FlashDeals from "../components/Home/FlashDeals";
import Category from "../components/Home/Category";
import {
  gamingSwiper,
  homeImprovSwiper,
  women_accessories,
  women_dresses,
  women_shoes,
  women_swiper,
} from "../data/home";
import { useMediaQuery } from "react-responsive";
import ProductsSwiper from "../components/ProductsSwiper";
import { connectDB } from "../utils/db";
import Product from "../models/Product";
import ProductCard from "../components/ProductCard";

export default function Home({ country, products }) {
  const isMedium = useMediaQuery({ query: "(max-width:850px)" });
  const isMobile = useMediaQuery({ query: "(max-width:550px)" });

  const { data: session } = useSession();

  return (
    <>
      <Header country={country} />
      <div className={styles.home}>
        <div className={styles.container}>
          <Main />
          <FlashDeals />
          <div className={styles.home__category}>
            <Category
              header="Dresses"
              products={women_dresses}
              background="#5a31f4"
            />
            {!isMedium && (
              <Category
                header="Shoes"
                products={women_shoes}
                background="#3c811f"
              />
            )}
            {isMobile && (
              <Category
                header="Shoes"
                products={women_shoes}
                background="#3c811f"
              />
            )}
            <Category
              header="Accessories"
              products={women_accessories}
              background="#000"
            />
          </div>
          <ProductsSwiper
            products={women_swiper}
            header="For Women"
            bg="#5d246e"
          />
          <ProductsSwiper
            products={gamingSwiper}
            header="For Gamers"
            bg="#071e26"
          />
          <ProductsSwiper
            products={homeImprovSwiper}
            header="Home Improvements"
            bg="#272c7f"
          />
          <div className={styles.product}>
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <Footer country={country} />
    </>
  );
}

export async function getServerSideProps() {
  connectDB();
  let products = await Product.find().sort({ createdAt: -1 }).lean();
  let data = await axios
    .get("https://api.ipregistry.co/?key=5rouiffj7gcdpizd")
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => console.log(err));

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      // country: { name: data.name, flag: data.flag.emojitwo },
      country: {
        name: "United Kingdom",
        flag: UK,
      },
    },
  };
}

//5rouiffj7gcdpizd
