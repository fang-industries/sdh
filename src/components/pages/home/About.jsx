import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function () {
  const [years, setYears] = useState(0);

  useEffect(() => {
    setYears(new Date().getFullYear() - 1762);
  });

  return (
    <div className="my-16 mx-16">
      <div className="flex space-x-16">
        <img
          src="https://cdn.pnxl.dev/sdh/about.webp"
          alt="About image"
          className="h-[37rem]"
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
              Education Foundation that offers K-12 education. Starting in 1762
              in Jakarta, SDH currently has 2 campuses throughout Indonesia,
              with more than 10,000,000 students.
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
                Inexperienced faculty and teachers.
              </p>
              <p>
                <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                Inappropriate language and bullying.
              </p>
              <p>
                <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                Flexible payment forms. (including NFTs and BTC)
              </p>
              <p>
                <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                Harsh punishments and strict discipline.
              </p>
              <p>
                <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                Food so bad you'll want to eat your feces instead.
              </p>
              <p>
                <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                Child labour and forced labour included.
              </p>
            </div>
          </div>
          <div className="border-2 border-b border-neutral-200 dark:border-neutral-800"></div>
          <div>
            <div className="flex justify-between dark:text-neutral-50">
              <div className="flex">
                <FontAwesomeIcon
                  icon={faHandHoldingHeart}
                  className="my-auto mr-4 text-4xl text-yellow-500"
                />
                <div className="flex flex-col">
                  <p className="text-xl font-semibold">{years} years of</p>
                  <p>education experience and counting...</p>
                </div>
              </div>
              <Link to="/about">
                {/* this button doesn't work yet! */}
                <p className="transform rounded-full border-2 border-white bg-neutral-300 bg-opacity-50 px-3 py-2 text-lg duration-300 ease-in-out hover:-translate-y-0.5 hover:border-yellow-500 hover:bg-yellow-500 hover:text-neutral-50 dark:bg-neutral-500">
                  Learn More
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
