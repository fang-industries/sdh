import Container from "../../components/global/Container";
import Join from "../../components/global/Join";

export default function () {
  return (
    <Container title="404 Not Found">
      <p className=" px-4 py-8 text-center text-3xl font-bold md:px-16">
        It looks like you found a page that doesn't exist yet. Make sure to
        check back later to see if it has been created!
      </p>
      <Join />
    </Container>
  );
}
