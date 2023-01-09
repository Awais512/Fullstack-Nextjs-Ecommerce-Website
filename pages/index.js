import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import UK from "../public/images/uk.png";
import { useSession, signIn, signOut } from "next-auth/react";
import Main from "../components/Home/Main";
import FlashDeals from "../components/Home/FlashDeals";

export default function Home({ country }) {
  const { data: session } = useSession();

  console.log(session);

  return (
    <>
      <Header country={country} />
      <div className={styles.home}>
        <div className={styles.container}>
          <Main />
          <FlashDeals />
        </div>
      </div>
      <Footer country={country} />
    </>
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
