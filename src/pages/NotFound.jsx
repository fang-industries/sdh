import Container from "../components/global/Container";
import Join from "../components/global/Join";

export default function () {
  return (
    <Container title="404 Not Found">
      <p className="px-4 pt-8 text-3xl font-semibold md:px-16">
        Oh hey, what are you doing here?
      </p>
      <p className="px-4 pb-8 pt-4 text-xl md:px-16">
        It looks like you found a page that doesn't exist yet. Make sure to
        check back later to see if it has been created!
      </p>
      <Join />
    </Container>
  );
}
