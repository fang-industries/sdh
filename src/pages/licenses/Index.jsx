import Container from "../../components/global/Container";
import Image from "../../components/pages/licenses/Image";
import LibraryCard from "../../components/modules/pages/licenses/libraries/Card";
import Join from "../../components/pages/home/Join";

export default function () {
  return (
    <Container title="License">
      <Image />
      <div className="mx-4 my-8 space-y-8 md:my-16 md:mx-16">
        <div>
          <div className="flex flex-row">
            <p className="text-3xl font-semibold text-sky-500">Open-source</p>
          </div>
          <p className="text-4xl font-bold">License Notices</p>
        </div>
        <div className="space-y-4">
          <p className="">
            With all joking aside, this project was made possible through the
            help of open-source projects, and we would like to thank them
            through attribution on this page.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <LibraryCard
              name="React"
              version="18.0.0"
              git="https://github.com/facebook/react"
              web="https://reactjs.org"
              npm="react"
              license="MIT"
              copyright="Facebook, Inc. and its affiliates"
            />
          </div>
        </div>
      </div>
      <Join />
    </Container>
  );
}
