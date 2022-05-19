import Container from "../../components/global/Container";
import Background from "../../assets/media/images/pages/about/index/main-bg.webp";
import About from "../../components/pages/about/About";
import History from "../../components/pages/about/History";
import Statistics from "../../components/pages/about/Statistics";
import Alumni from "../../components/pages/about/Alumni";
import AlumniResponsive from "../../components/pages/about/responsive/Alumni";
import News from "../../components/pages/about/News";
import Join from "../../components/global/Join";

export default function () {
  return (
    <Container title="About">
      <Image />
      <div id="welcome">
        <About />
      </div>
      <div>
        <History />
      </div>
      <Verse />
      <Improvement />
      <Development />
      <img src={Background} className="aspect-[24/9] w-full object-cover" />
      <About />
      <History />
      <Statistics />
      <Alumni />
      <AlumniResponsive />
      <News />
      <Join />
    </Container>
  );
}
