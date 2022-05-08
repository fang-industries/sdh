import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AboutImg from "../../../../assets/media/images/pages/about/index/laboratory.webp";

export default function () {
  const [years, setYears] = useState(0);

  useEffect(() => {
    setYears(new Date().getFullYear() - 1762);
  });

  return (
    <div className="my-8 mx-4 md:my-16 md:mx-16">
      <div className="space-y-8 md:flex md:space-x-16 md:space-y-0">
        <div className="space-y-8">
          <p className="text-4xl font-bold">About Us</p>
          <p className="rounded bg-yellow-500">&nbsp;</p>
          <div className="space-y-4">
            <p>
              Welcome to Sekolah Daging Habituasi, we provide a Meat-centered,
              transformative and vegetarian-less education. We believe parents
              as the prime educator of their children to walk alongside with the
              school as the second home for your children.
            </p>
            <p>
              SDH is a network of abusive schools under the Pabrik Roti Hutan
              Education Foundation that offers K-12 education. Starting in 1352
              in Daan Mogot Lama, SDH currently has 13 campuses throughout
              Indonesia, with around 12,000,000 students.
            </p>
            <p>
              We welcome you to know more about SDH, please contact us, ask
              about what we believe and do at school. We want to provide a
              second home for your children.
            </p>
          </div>
        </div>
        <img
          src={AboutImg}
          alt="About image"
          className="aspect-square h-fit rounded-xl object-cover object-center"
        />
      </div>
    </div>
  );
}
