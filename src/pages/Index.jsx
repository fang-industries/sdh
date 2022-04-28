import Container from "../components/global/Container";
import Video from "../components/pages/home/Video";
import Swiper from "../components/pages/home/Swiper";
import About from "../components/pages/home/About";
import Statistics from "../components/pages/home/Statistics";
import Alumni from "../components/pages/home/Alumni";

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
    </Container>
  );
}
