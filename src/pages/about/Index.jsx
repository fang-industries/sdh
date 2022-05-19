import Container from "../../components/global/Container";
import Background from "../../assets/media/images/pages/about/index/main-bg.webp";
import About from "../../components/pages/about/About";
import History from "../../components/pages/about/History";
import Quote from "../../components/pages/about/Quote";
import Alumni from "../../components/pages/about/Alumni";
import Join from "../../components/global/Join";

export default function () {
  return (
    <Container title="About">
      <img src={Background} className="aspect-[24/9] w-full object-cover" />
      <div id="welcome">
        <About />
      </div>
      <div>
        <History />
      </div>
      <Quote />
      <Alumni />
      <Join />
    </Container>
  );
}
