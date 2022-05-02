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
            <LibraryCard
              name="Vite"
              version="2.9.5"
              git="https://github.com/vitejs/vite"
              web="https://vitejs.dev"
              npm="vite"
              license="MIT"
              copyright="2019-present, Yuxi (Evan) You"
            />
            <LibraryCard
              name="Tailwind CSS"
              version="3.0.24"
              git="https://github.com/tailwindlabs/tailwindcss"
              web="https://tailwindcss.com"
              npm="tailwindcss"
              license="MIT"
              copyright="Tailwind Labs, Inc."
            />
            <LibraryCard
              name="React Helmet"
              version="6.1.0"
              git="https://github.com/facebook/react"
              npm="react-helmet"
              license="MIT"
              copyright="2015 NFL"
            />
            <LibraryCard
              name="PostCSS"
              version="8.4.12"
              git="https://github.com/postcss/postcss"
              web="https://postcss.org"
              npm="postcss"
              license="MIT"
              copyright="2013 Andrey Sitnik"
              email="andrey@sitnik.ru"
            />
            <LibraryCard
              name="Autoprefixer"
              version="10.4.5"
              git="https://github.com/postcss/autoprefixer"
              npm="autoprefixer"
              license="MIT"
              copyright="2013 Andrey Sitnik"
              email="andrey@sitnik.ru"
            />
            <LibraryCard
              name="Swiper"
              version="8.1.4"
              git="https://github.com/nolimits4web/swiper"
              web="https://swiperjs.com"
              npm="swiper"
              license="MIT"
              copyright="2019 Vladimir Kharlampidi"
            />
            <LibraryCard
              name="Tippy.js"
              version="6.3.7"
              git="https://github.com/atomiks/tippyjs"
              web="https://atomiks.github.io/tippyjs"
              npm="tippy.js"
              license="MIT"
              copyright="2017-present atomiks"
            />
            <LibraryCard
              name="Framer Motion"
              version="6.3.3"
              git="https://github.com/framer/motion"
              web="https://www.framer.com/motion"
              npm="framer-motion"
              license="MIT"
              copyright="2018 Framer B.V."
            />
          </div>
        </div>
      </div>
      <Join />
    </Container>
  );
}
