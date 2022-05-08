import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import {
  faChurch,
  faRocket,
  faShield,
  faStar,
  faThumbsUp,
  faDrumstickBite,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import ChickenWeProclaim from "../../../assets/media/images/icons/chicken-we-proclaim.png";

export default function () {
  const [year, setYear] = useState(0);
  const [nextYear, setNextYear] = useState(1);

  useEffect(() => {
    setYear(new Date().getFullYear());
    setNextYear(new Date().getFullYear() + 1);
  });

  return (
    <div className="space-y-8 bg-sky-900 px-4 py-8 md:hidden">
      <div className="flex bg-sky-900">
        <div className="my-auto flex flex-row space-x-4">
          <img
            src={ChickenWeProclaim}
            alt="Chicken We Proclaim icon"
            className="h-32 w-32"
          />
          <div className="my-auto space-y-2">
            <p className="text-lg font-medium text-yellow-400">
              School Theme {year}/{nextYear}
            </p>
            <p className="text-2xl font-bold text-yellow-400">
              <FontAwesomeIcon icon={faDrumstickBite} className="mr-2" />
              Chicken We Proclaim
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-lg font-semibold text-neutral-100">Luke 22:61</p>
        <p className="text-lg text-neutral-100">
          The Lord turned and looked at Peter. And Peter remembered the word of
          the Lord, how He had told him, “Before a rooster crows today, you will
          deny Me three times.”
        </p>
      </div>
    </div>
  );
}
