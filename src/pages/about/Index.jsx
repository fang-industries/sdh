import Container from "../../components/global/Container";
import Background from "../../assets/media/images/pages/about/index/main-bg.webp";
import About from "../../components/pages/about/index/About";
import History from "../../components/pages/about/index/History";
import Quote from "../../components/pages/about/Quote";
import Improvement from "../../components/pages/about/index/Improvement";
import Development from "../../components/pages/about/index/Development";
import Join from "../../components/global/Join";

export default function () {
  return (
    <Container title="About">
      <img src={Background} className="aspect-[24/9] w-full object-cover" />
      <div id="welcome">
        <About />
      </div>
      <div id="history">
        <History />
      </div>
      <Quote />
      <Improvement />
      <Development />
      <Join />
    </Container>
  );
}
