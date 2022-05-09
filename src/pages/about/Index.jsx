import Container from "../../components/global/Container";
import Image from "../../components/pages/about/index/Image";
import About from "../../components/pages/about/index/About";
import History from "../../components/pages/about/index/History";
import Verse from "../../components/pages/about/index/Verse";
import Improvement from "../../components/pages/about/index/Improvement";
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
      <Join />
    </Container>
  );
}
