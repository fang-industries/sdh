import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Container(props) {
  const { children } = props;
  const meta = {
    url: "https://sdh.pnxl.dev",
    name: "Sekolah Daging Habituasi",
    title: props.head
      ? props.head
      : props.title
      ? props.title + " | " + "Sekolah Daging Habituasi"
      : "Sekolah Daging Habituasi",
    description:
      "Sekolah Daging Habituasi | National Chicken School | Indonesia",
    type: "website",
  };

  return (
    <div>
      <Helmet>
        {/* webpage headers */}
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:site_name" content={meta.name} />
        <meta property="og:url" content={meta.name} />
        <meta property="og:type" content={meta.type} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        {/* icons here */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0ea5e9" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <div className="bg-neutral-50 dark:bg-neutral-900">
        <div className="flex h-full flex-col justify-between">
          <Navbar active={props.title.toLowerCase().replace(" ", "")} />
          <main id="content" className="text-sky-900">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
