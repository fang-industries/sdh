import Container from "../components/global/Container";
import Video from "../components/pages/home/Video";
import Swiper from "../components/pages/home/Swiper";
import About from "../components/pages/home/About";
import Statistics from "../components/pages/home/Statistics";
import Alumni from "../components/pages/home/Alumni";
import News from "../components/pages/home/News";
import Join from "../components/pages/home/Join";

export default function () {
  return (
    <Container
      title="Home"
      head="Sekolah Daging Habituasi | National Chicken School | Indonesia"
    >
      <Video />
      <Swiper />
      <About />
      <Statistics />
      <Alumni />
      <News />
      <Join />
    </Container>
  );
}
