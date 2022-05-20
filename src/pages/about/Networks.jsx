import Container from "../../components/global/Container";
import Background from "../../assets/media/images/pages/about/networks/handshake.webp";
import About from "../../components/pages/about/index/About/About";
import History from "../../components/pages/about/index/History";
import Quote from "../../components/pages/about/index/Quote";
import Improvement from "../../components/pages/about/index/Improvement";
import Development from "../../components/pages/about/index/Development";
import Join from "../../components/global/Join";

export default function () {
  return (
    <Container title="About">
      <img src={Background} className="aspect-[24/9] w-full object-cover" />
      <About />
      <History />
      <Quote />
      <Improvement />
      <Development />
      <Join />
    </Container>
  );
}
