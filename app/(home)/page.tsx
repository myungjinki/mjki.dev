import Footer from "../components/footer";
import Header from "../components/header";
import HomeMain from "./components/home-main";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeMain />
      <div className="h-40"></div>
      <Footer />
    </div>
  );
}