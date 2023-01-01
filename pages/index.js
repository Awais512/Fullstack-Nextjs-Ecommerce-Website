import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import UK from "../public/images/uk.png";

export default function Home({ country }) {
  return (
    <div className={styles.container}>
      <Header country={country} />
      <Footer country={country} />
    </div>
  );
}

export async function getServerSideProps() {
  let data = await axios
    .get("https://api.ipregistry.co/?key=5rouiffj7gcdpizd")
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => console.log(err));

  return {
    props: {
      // country: { name: data.name, flag: data.flag.emojitwo },
      country: {
        name: "United Kingdom",
        flag: UK,
      },
    },
  };
}

//5rouiffj7gcdpizd
