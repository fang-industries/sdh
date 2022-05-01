import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../../assets/images/logo.png";
import {
  faAddressCard,
  faAppleWhole,
  faBaby,
  faBars,
  faBookOpen,
  faCalendarDay,
  faChalkboard,
  faCircleInfo,
  faCircleNodes,
  faComments,
  faGraduationCap,
  faHome,
  faMicrophone,
  faNewspaper,
  faPeopleGroup,
  faSchool,
  faShapes,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

export default function (props) {
  const [active, setActive] = useState(false);

  const tapped = () => {
    setActive(!active);
  };

  return (
    <nav className="sticky top-0 z-50">
      <div className="md:hidden">
        <AnimatePresence>
          {active && (
            <motion.button
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`${
                active ? "" : "hidden"
              } fixed z-10 h-full w-full cursor-default bg-neutral-900 bg-opacity-50 dark:bg-neutral-800 dark:bg-opacity-50`}
              onClick={tapped}
            ></motion.button>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {active && (
            <motion.div
              className={`${
                active ? "" : "hidden"
              } fixed z-20 h-full w-2/3 bg-neutral-50 dark:bg-neutral-900 md:hidden`}
              exit={{ x: "-100%" }}
              animate={{ x: 0 }}
              initial={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.2 }}
            ></motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {active && (
            <motion.div
              className={`${
                active ? "" : "hidden"
              } fixed z-40 h-full w-2/3 bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50 md:hidden`}
              exit={{ x: "-100%" }}
              animate={{ x: 0 }}
              initial={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <div>
                <Link to="/">
                  <div
                    className={`${
                      props.active === "home" ? "font-bold text-yellow-500" : ""
                    } py-3 px-4`}
                  >
                    <div className="flex flex-row space-x-4">
                      <FontAwesomeIcon icon={faHome} className="my-auto" />
                      <p className="font-medium">Home</p>
                    </div>
                  </div>
                </Link>
                <div className="mx-2 border-b border-neutral-300 dark:border-neutral-700"></div>
                <Link to="/about">
                  <div
                    className={`${
                      props.active === "about"
                        ? "font-bold text-yellow-500"
                        : ""
                    } py-3 px-4`}
                  >
                    <div className="flex flex-row space-x-4">
                      <FontAwesomeIcon
                        icon={faCircleInfo}
                        className="my-auto"
                      />
                      <p className="font-medium">About</p>
                    </div>
                  </div>
                </Link>
                <div className="mx-2 border-b border-neutral-300 dark:border-neutral-700"></div>
                <Link to="/admissions">
                  <div
                    className={`${
                      props.active === "admissions"
                        ? "font-bold text-yellow-500"
                        : ""
                    } py-3 px-4`}
                  >
                    <div className="flex flex-row space-x-4">
                      <FontAwesomeIcon
                        icon={faGraduationCap}
                        className="my-auto"
                      />
                      <p className="font-medium">Admissions</p>
                    </div>
                  </div>
                </Link>
                <div className="mx-2 border-b border-neutral-300 dark:border-neutral-700"></div>
                <Link to="/education">
                  <div
                    className={`${
                      props.active === "education"
                        ? "font-bold text-yellow-500"
                        : ""
                    } py-3 px-4`}
                  >
                    <div className="flex flex-row space-x-4">
                      <FontAwesomeIcon
                        icon={faChalkboard}
                        className="my-auto"
                      />
                      <p className="font-medium">Education</p>
                    </div>
                  </div>
                </Link>
                <div className="mx-2 border-b border-neutral-300 dark:border-neutral-700"></div>
                <Link to="/community">
                  <div
                    className={`${
                      props.active === "community"
                        ? "font-bold text-yellow-500"
                        : ""
                    } py-3 px-4`}
                  >
                    <div className="flex flex-row space-x-4">
                      <FontAwesomeIcon icon={faComments} className="my-auto" />
                      <p className="font-medium">Community</p>
                    </div>
                  </div>
                </Link>
                <div className="mx-2 border-b border-neutral-300 dark:border-neutral-700"></div>
                <Link to="/newspaper">
                  <div
                    className={`${
                      props.active === "newspaper"
                        ? "font-bold text-yellow-500"
                        : ""
                    } py-3 px-4`}
                  >
                    <div className="flex flex-row space-x-4">
                      <FontAwesomeIcon icon={faNewspaper} className="my-auto" />
                      <p className="font-medium">Newspaper</p>
                    </div>
                  </div>
                </Link>
                <div className="mx-2 border-b border-neutral-300 dark:border-neutral-700"></div>
                <Link to="/voices">
                  <div
                    className={`${
                      props.active === "ourvoices"
                        ? "font-bold text-yellow-500"
                        : ""
                    } py-3 px-4`}
                  >
                    <div className="flex flex-row space-x-4">
                      <FontAwesomeIcon
                        icon={faMicrophone}
                        className="my-auto"
                      />
                      <p className="font-medium">Our Voices</p>
                    </div>
                  </div>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className=" bg-neutral-100 bg-opacity-60 py-4 px-4 shadow-xl backdrop-blur-[8px] backdrop-filter dark:bg-neutral-800 dark:bg-opacity-60 md:hidden">
        <div className="flex flex-row justify-between">
          <Link to="/">
            <div className="flex flex-row">
              <img src={logo} className="my-auto h-12 w-12" />
              <p className="my-auto ml-2 text-5xl font-bold tracking-wide text-sky-500">
                SDH
              </p>
            </div>
          </Link>
          <button
            className="my-auto inline-flex rounded px-3 py-3 font-bold text-neutral-50 hover:bg-neutral-100 hover:bg-opacity-20 hover:text-white dark:hover:bg-neutral-900 dark:hover:bg-opacity-20 lg:hidden"
            onClick={tapped}
          >
            <FontAwesomeIcon icon={faBars} className="text-xl" />
          </button>
        </div>
      </div>
    </nav>
  );
}
