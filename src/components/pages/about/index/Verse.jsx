import { useState, useEffect } from "react";
import ChickenWeProclaim from "../../../../assets/media/images/icons/chicken-we-proclaim.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDrumstickBite } from "@fortawesome/free-solid-svg-icons";

export default function () {
  const [year, setYear] = useState(0);
  const [nextYear, setNextYear] = useState(1);

  useEffect(() => {
    setYear(new Date().getFullYear());
    setNextYear(new Date().getFullYear() + 1);
  });

  return (
    <div className="my-8 flex h-80 items-center justify-center space-x-16 bg-sky-900 px-32 md:my-16">
      <div className="my-auto flex flex-row space-x-16">
        <img
          src={ChickenWeProclaim}
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
          <p className="text-lg font-semibold text-neutral-100">Luke 22:61</p>
          <p className="text-lg text-neutral-100">
            The Lord turned and looked at Peter. And Peter remembered the word
            of the Lord, how He had told him, “Before a rooster crows today, you
            will deny Me three times.”
          </p>
        </div>
      </div>
    </div>
  );
}
