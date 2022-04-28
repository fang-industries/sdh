import Container from "../components/global/Container";
import Video from "../components/pages/home/Video";
import Swiper from "../components/pages/home/Swiper";
import About from "../components/pages/home/About";
import Statistics from "../components/pages/home/Statistics";

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
    </Container>
  );
}
