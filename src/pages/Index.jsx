import Container from "../components/global/Container";
import Video from "../components/pages/home/Video";
import VideoResponsive from "../components/pages/home/responsive/Video";
import Swiper from "../components/pages/home/Swiper";
import SwiperResponsive from "../components/pages/home/responsive/Theme";
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
      <VideoResponsive />
      <Swiper />
      <SwiperResponsive />
      <About />
      {/* <Statistics />
      <Alumni />
      <News />
      <Join /> */}
    </Container>
  );
}
