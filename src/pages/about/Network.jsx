import Container from "../../components/global/Container";
import Background from "../../assets/media/images/pages/about/network/handshake.webp";
import Statistics from "../../components/pages/about/network/Statistics";
import Campuses from "../../components/pages/about/network/Campuses";
import Foundation from "../../components/pages/about/network/Foundation";
import Join from "../../components/global/Join";

export default function () {
  return (
    <Container title="About">
      <img src={Background} className="aspect-[24/9] w-full object-cover" />
      <Statistics />
      <Campuses />
      <Foundation />
      <Join />
    </Container>
  );
}
