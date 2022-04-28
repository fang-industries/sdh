import Container from "../components/global/Container";
import Navbar from "../components/global/Navbar";

import logo from "../assets/images/logo.png";

export default function () {
  return (
    <Container
      title="Home"
      head="Sekolah Daging Habibullah | National Chicken School | Indonesia"
    >
      <img src={logo} alt="logo" />
    </Container>
  );
}
