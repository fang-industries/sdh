import ScrollToTop from "react-scroll-up";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

export default function () {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ScrollToTop showUnder={0} duration={1000}>
      <div className="z-50 flex h-10 w-10 transform flex-col justify-center rounded-full bg-sky-700 text-center text-2xl text-yellow-400 shadow-lg duration-300 ease-in-out hover:-translate-y-0.5">
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    </ScrollToTop>
  );
}
