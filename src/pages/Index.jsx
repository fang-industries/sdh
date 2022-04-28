import Container from "../components/global/Container";
import Video from "../components/pages/home/Video";
import Swiper from "../components/pages/home/Swiper";

export default function () {
  return (
    <Container
      title="Home"
      head="Sekolah Daging Habibullah | National Chicken School | Indonesia"
    >
      <Video />
      <Swiper />
    </Container>
  );
}
