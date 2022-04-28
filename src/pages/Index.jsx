import Container from "../components/global/Container";
import Video from "../components/pages/home/Video";
import Swiper from "../components/pages/home/Swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function () {
  return (
    <Container
      title="Home"
      head="Sekolah Daging Habituasi | National Chicken School | Indonesia"
    >
      <Video />
      <Swiper />
      <div className="my-16 mx-16">
        <div className="flex space-x-16">
          <img
            src="https://cdn.pnxl.dev/sdh/about.webp"
            alt="About image"
            className="w-[20rem]"
          />
          <div className="space-y-8">
            <div>
              <div className="flex flex-row">
                <p className="text-3xl font-semibold text-sky-500">About</p>
              </div>
              <p className="text-4xl font-bold dark:text-neutral-50">
                Daging Habituasi School
              </p>
            </div>
            <p className="rounded bg-yellow-500 px-3 text-lg font-semibold tracking-wide text-white">
              We build in a chicken-frying way.
            </p>
            <div className="space-y-4">
              <p className="dark:text-neutral-50">
                SDH is a network of chicken schools under the Pabrik Roti Hutan
                Education Foundation that offers K-12 education. Starting in
                1762 in Jakarta, SDH currently has 2 campuses throughout
                Indonesia, with more than 10,000,000 students.
              </p>
              <p className="dark:text-neutral-50">
                We are committed to developing a meat-loving community where
                students learn to love meat and the people around them. Here's a
                little sneak peek of our community. We do hope that you consider
                Daging Habituasi School for your children's education.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-4 dark:text-neutral-50">
                <p>
                  <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                  Inexperienced faculty and teachers
                </p>
                <p>
                  <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                  Abusive language and bullying
                </p>
                <p>
                  <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                  Flexible payment methods (including via NFTs and BTC)
                </p>
                <p>
                  <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                  Harsh punishments and strict discipline
                </p>
                <p>
                  <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                  Non-affordable and expensive lunch and snacks
                </p>
                <p>
                  <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                  Child labour and forced labour included in our curriculum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
