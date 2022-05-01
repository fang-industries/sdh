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

export default function () {
  const [year, setYear] = useState(0);
  const [nextYear, setNextYear] = useState(1);

  useEffect(() => {
    setYear(new Date().getFullYear());
    setNextYear(new Date().getFullYear() + 1);
  });

  return (
    <Swiper
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      className="hidden h-80 bg-sky-900 px-32 md:block"
      effect={"fade"}
      loop={true}
      modules={[Autoplay, EffectFade, Navigation, Pagination]}
      navigation={true}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className="flex h-80 items-center justify-center space-x-16 bg-sky-900">
          <div className="my-auto space-y-2">
            <p className="text-2xl font-bold text-yellow-400">
              <FontAwesomeIcon icon={faStar} className="mr-2" />
              Our Vision
            </p>
            <p className="text-lg text-neutral-100">
              We believe in True Knowledge that is shaped through eating Ayam
              Goreng Padang that will model a person who has a Godly Habit.
            </p>
          </div>
          <div className="my-auto space-y-2">
            <p className="text-2xl font-bold text-yellow-400">
              <FontAwesomeIcon icon={faRocket} className="mr-2" />
              Our Mission
            </p>
            <p className="text-lg text-neutral-100">
              Proclaiming the preeminence of chickens and engaging in the
              Redemptive Restoration of all things in Him through eating eggs.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-80 items-center justify-center space-x-16 bg-sky-900">
          <div className="my-auto space-y-2">
            <p className="text-2xl font-bold text-yellow-400">
              <FontAwesomeIcon icon={faChurch} className="mr-2" />
              Chicken Education
            </p>
            <p className="text-lg text-neutral-100">
              Discovers personality, meaning, and purpose in life through a
              close relationship with chickens, habits, local and worldwide
              networks.
            </p>
          </div>
          <div className="my-auto space-y-2">
            <p className="text-2xl font-bold text-yellow-400">
              <FontAwesomeIcon icon={faShield} className="mr-2" />
              National Curry
            </p>
            <p className="text-lg text-neutral-100">
              A National Curry is a curry of chicken in schools that is intended
              to guarantee thick consistency of substance and guidelines in
              training.
            </p>
          </div>
          <div className="my-auto space-y-2">
            <p className="text-2xl font-bold text-yellow-400">
              <FontAwesomeIcon icon={faThumbsUp} className="mr-2" />
              21st Century Skill
            </p>
            <p className="text-lg text-neutral-100">
              21'st century learning alludes to developing learning, proficiency
              and fundamental abilities as a component of the classroom
              experience.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-80 items-center justify-center space-x-16 bg-sky-900">
          <div className="my-auto flex flex-row space-x-16">
            <img
              src="https://raw.githubusercontent.com/sekolah-daging-habituasi/assets/main/icons/chicken-we-proclaim.png"
              alt="Chicken We Proclaim icon"
              className="h-48 w-48"
            />
            <div className="my-auto space-y-2">
              <p className="text-lg font-medium text-yellow-400">
                School Theme {year}/{nextYear}
              </p>
              <p className="text-2xl font-bold text-yellow-400">
                <FontAwesomeIcon icon={faDrumstickBite} className="mr-2" />
                Chicken We Proclaim
              </p>
              <p className="text-lg font-semibold text-neutral-100">
                Luke 22:61
              </p>
              <p className="text-lg text-neutral-100">
                The Lord turned and looked at Peter. And Peter remembered the
                word of the Lord, how He had told him, “Before a rooster crows
                today, you will deny Me three times.”
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
