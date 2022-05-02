import Container from "../../components/global/Container";
import Image from "../../components/pages/licenses/Image";
import LibraryCard from "../../components/pages/licenses/cards/Libraries";
import AssetCard from "../../components/pages/licenses/cards/Assets";
import Join from "../../components/pages/home/Join";

export default function () {
  return (
    <Container title="License">
      <Image />
      <div className="mx-4 my-8 space-y-8 md:my-16 md:mx-16">
        <div className="text-center">
          <p className="text-3xl font-semibold text-sky-500">Open-source</p>
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
            <LibraryCard
              name="React-Fontawesome"
              version="0.1.18"
              git="https://github.com/FortAwesome/react-fontawesome"
              npm="@fortawesome/react-fontawesome"
              license="MIT"
              copyright="2018 Fonticons, Inc."
            />
            <LibraryCard
              name="FontAwesome SVG Core"
              version="6.1.1"
              git="https://github.com/FortAwesome/Font-Awesome"
              npm="@fortawesome/fontawesome-svg-core"
              license="MIT"
              copyright="2022 Fonticons, Inc."
            />
            <LibraryCard
              name="React Scroll Up"
              version="1.3.7"
              git="https://github.com/milosjanda/react-scroll-up"
              npm="react-scroll-up"
              license="MIT"
              copyright="2015 Miloš Janda"
            />
          </div>
        </div>
      </div>
      <div className="mx-4 my-8 space-y-8 md:my-16 md:mx-16">
        <div className="text-center">
          <p className="text-3xl font-semibold text-sky-500">
            Assets & Artwork
          </p>
          <p className="text-4xl font-bold">License Notices</p>
        </div>
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <AssetCard
              name="Body Of Water Under Sky"
              web="https://unsplash.com/photos/6ArTTluciuA"
              src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=matt-hardy-6ArTTluciuA-unsplash.jpg"
              license="Unsplash"
              copyright="Matt Hardy"
            />
            <AssetCard
              name="Holding White Printer Paper"
              web="https://unsplash.com/photos/G771MJLxPaw"
              src="https://images.unsplash.com/photo-1593871097805-09627f52f4bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=thapanee-srisawat-G771MJLxPaw-unsplash.jpg"
              license="Unsplash"
              copyright="Thapanee Srisawat"
            />
            <AssetCard
              name="Poppins"
              web="https://fonts.google.com/specimen/Poppins"
              license="SIL Open Font"
              copyright="Indian Type Foundry, Jonny Pinhorn"
            />
            <AssetCard
              name="FontAwesome Solid Fonts"
              web="https://fontawesome.com/"
              license="SIL Open Font"
              copyright="2022 Fonticons, Inc."
            />
            <AssetCard
              name="FontAwesome Brand Fonts"
              web="https://fontawesome.com/"
              license="SIL Open Font"
              copyright="2022 Fonticons, Inc."
            />
            <AssetCard
              name="Homepage Video BG"
              web="https://www.sdh.sch.id/"
              src="https://video.wixstatic.com/video/07639e_2763fc25be1645908e86bca5ad2c5cd4/720p/mp4/file.mp4"
              copyright="Sekolah Dian Harapan"
            />
            <AssetCard
              name="FontAwesome Solid Icons"
              web="https://fontawesome.com/"
              license="CC BY 4.0"
              copyright="2022 Fonticons, Inc."
            />
            <AssetCard
              name="FontAwesome Brand Icons"
              web="https://fontawesome.com/"
              license="CC BY 4.0"
              copyright="2022 Fonticons, Inc."
            />
            <AssetCard
              name="About Section Picture"
              web="https://www.sdh.sch.id/"
              src="https://static.wixstatic.com/media/07639e_3ee67789c54d4ee99f2452e334e058c7~mv2.jpg/v1/crop/x_0,y_180,w_2000,h_2640/fill/w_400,h_528,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSCF6477_edited.jpg"
              copyright="Sekolah Dian Harapan"
            />
          </div>
        </div>
      </div>
      <Join />
    </Container>
  );
}
