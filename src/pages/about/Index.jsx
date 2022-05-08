import Container from "../../components/global/Container";
import Image from "../../components/pages/about/index/Image";
import About from "../../components/pages/about/index/About";
import Join from "../../components/global/Join";

export default function () {
  return (
    <Container title="About">
      <Image />
      <About />
      <Join />
    </Container>
  );
}
