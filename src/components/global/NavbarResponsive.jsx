import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../../assets/media/images/icons/logo.webp";
import {
  faAddressCard,
  faAppleWhole,
  faBaby,
  faBars,
  faBookOpen,
  faCalendarDay,
  faChalkboard,
  faChevronLeft,
  faChevronRight,
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

  const [activeAbout, setActiveAbout] = useState(false);

  const tappedAbout = () => {
    setActiveAbout(!activeAbout);
  };

  const [activeAdmissions, setActiveAdmissions] = useState(false);

  const tappedAdmissions = () => {
    setActiveAdmissions(!activeAdmissions);
  };

  const [activeEducation, setActiveEducation] = useState(false);

  const tappedEducation = () => {
    setActiveEducation(!activeEducation);
  };

  return (
    <nav className="sticky top-0 z-50">
      <div className="z-10 md:hidden">
        <AnimatePresence>
          {active && (
            <motion.button
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`${
                active ? "" : "hidden"
              } fixed z-10 h-full w-full cursor-default bg-neutral-900 bg-opacity-50 backdrop-blur-[8px] dark:bg-neutral-800 dark:bg-opacity-50`}
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
                <button onClick={tappedAbout} className="w-full">
                  <div
                    className={`${
                      props.active === "about"
                        ? "font-bold text-yellow-500"
                        : ""
                    } py-3 px-4`}
                  >
                    <div className="flex flex-row justify-between">
                      <div className="flex flex-row space-x-4">
                        <FontAwesomeIcon
                          icon={faCircleInfo}
                          className="my-auto"
                        />
                        <p className="font-medium">About</p>
                      </div>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="my-auto"
                      />
                    </div>
                  </div>
                </button>
                <div className="mx-2 border-b border-neutral-300 dark:border-neutral-700"></div>
                <button onClick={tappedAdmissions} className="w-full">
                  <div
                    className={`${
                      props.active === "admissions"
                        ? "font-bold text-yellow-500"
                        : ""
                    } py-3 px-4`}
                  >
                    <div className="flex flex-row justify-between">
                      <div className="flex flex-row space-x-4">
                        <FontAwesomeIcon
                          icon={faGraduationCap}
                          className="my-auto"
                        />
                        <p className="font-medium">Admissions</p>
                      </div>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="my-auto"
                      />
                    </div>
                  </div>
                </button>
                <div className="mx-2 border-b border-neutral-300 dark:border-neutral-700"></div>
                <button onClick={tappedEducation} className="w-full">
                  <div
                    className={`${
                      props.active === "education"
                        ? "font-bold text-yellow-500"
                        : ""
                    } py-3 px-4`}
                  >
                    <div className="flex flex-row justify-between">
                      <div className="flex flex-row space-x-4">
                        <FontAwesomeIcon
                          icon={faChalkboard}
                          className="my-auto"
                        />
                        <p className="font-medium">Education</p>
                      </div>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="my-auto"
                      />
                    </div>
                  </div>
                </button>
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
      <div className="z-20 md:hidden">
        <AnimatePresence>
          {activeAbout && (
            <motion.button
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`${
                activeAbout ? "" : "hidden"
              } fixed z-10 h-full w-full cursor-default bg-neutral-900 bg-opacity-50 dark:bg-neutral-800 dark:bg-opacity-50`}
              onClick={tappedAbout}
            ></motion.button>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {activeAbout && (
            <motion.div
              className={`${
                activeAbout ? "" : "hidden"
              } fixed z-20 h-full w-2/3 bg-neutral-50 dark:bg-neutral-900 md:hidden`}
              exit={{ x: "-100%" }}
              animate={{ x: 0 }}
              initial={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.2 }}
            ></motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {activeAbout && (
            <motion.div
              className={`${
                activeAbout ? "" : "hidden"
              } fixed z-40 flex h-full w-2/3 flex-col justify-between bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50 md:hidden`}
              exit={{ x: "-100%" }}
              animate={{ x: 0 }}
              initial={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <div>
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
                <HashLink to="/about#welcome">
                  <div className="py-3 px-4">
                    <div className="flex flex-row space-x-4">
                      <FontAwesomeIcon
                        icon={faPeopleGroup}
                        className="my-auto"
                      />
                      <p className="font-medium">About Us</p>
                    </div>
                  </div>
                </HashLink>
                <div className="mx-2 border-b border-neutral-300 dark:border-neutral-700"></div>
                <HashLink to="/about#history">
                  <div className="py-3 px-4">
                    <div className="flex flex-row space-x-4">
                      <FontAwesomeIcon
                        icon={faCalendarDay}
                        className="my-auto"
                      />
                      <p className="font-medium">History</p>
                    </div>
                  </div>
                </HashLink>
                <div className="mx-2 border-b border-neutral-300 dark:border-neutral-700"></div>
                <Link to="/about/network">
                  <div className="py-3 px-4">
                    <div className="flex flex-row space-x-4">
                      <FontAwesomeIcon icon={faComments} className="my-auto" />
                      <p className="font-medium">Networks</p>
                    </div>
                  </div>
                </Link>
                <div className="mx-2 border-b border-neutral-300 dark:border-neutral-700"></div>
                <Link to="/about/campuses">
                  <div className="py-3 px-4">
                    <div className="flex flex-row space-x-4">
                      <FontAwesomeIcon icon={faSchool} className="my-auto" />
                      <p className="font-medium">Campuses</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <button onClick={tappedAbout}>
                  <div className="py-3 px-4">
                    <div className="flex flex-row space-x-4">
                      <FontAwesomeIcon
                        icon={faChevronLeft}
                        className="my-auto"
                      />
                      <p className="font-medium">Back to menu</p>
                    </div>
                  </div>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="z-20 md:hidden">
        <AnimatePresence>
          {activeAdmissions && (
            <motion.button
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`${
                activeAdmissions ? "" : "hidden"
              } fixed z-10 h-full w-full cursor-default bg-neutral-900 bg-opacity-50 dark:bg-neutral-800 dark:bg-opacity-50`}
              onClick={tappedAdmissions}
            ></motion.button>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {activeAdmissions && (
            <motion.div
              className={`${
                activeAdmissions ? "" : "hidden"
              } fixed z-20 h-full w-2/3 bg-neutral-50 dark:bg-neutral-900 md:hidden`}
              exit={{ x: "-100%" }}
              animate={{ x: 0 }}
              initial={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.2 }}
            ></motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {activeAdmissions && (
            <motion.div
              className={`${
                activeAdmissions ? "" : "hidden"
              } fixed z-40 flex h-full w-2/3 flex-col justify-between bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50 md:hidden`}
              exit={{ x: "-100%" }}
              animate={{ x: 0 }}
              initial={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <div>
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
                <HashLink to="/admissions#register">
                  <div className="py-3 px-4">
                    <div className="flex flex-row space-x-4">
                      <FontAwesomeIcon
                        icon={faAddressCard}
                        className="my-auto"
                      />
                      <p className="font-medium">Registration</p>
                    </div>
                  </div>
                </HashLink>
                <div className="mx-2 border-b border-neutral-300 dark:border-neutral-700"></div>
                <HashLink to="/admissions#visit">
                  <div className="py-3 px-4">
                    <div className="flex flex-row space-x-4">
                      <FontAwesomeIcon icon={faSchool} className="my-auto" />
                      <p className="font-medium">Visit SDH</p>
                    </div>
                  </div>
                </HashLink>
              </div>
              <div>
                <button onClick={tappedAdmissions}>
                  <div className="py-3 px-4">
                    <div className="flex flex-row space-x-4">
                      <FontAwesomeIcon
                        icon={faChevronLeft}
                        className="my-auto"
                      />
                      <p className="font-medium">Back to menu</p>
                    </div>
                  </div>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="z-20 md:hidden">
        <AnimatePresence>
          {activeEducation && (
            <motion.button
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`${
                activeEducation ? "" : "hidden"
              } fixed z-10 h-full w-full cursor-default bg-neutral-900 bg-opacity-50 dark:bg-neutral-800 dark:bg-opacity-50`}
              onClick={tappedEducation}
            ></motion.button>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {activeEducation && (
            <motion.div
              className={`${
                activeEducation ? "" : "hidden"
              } fixed z-20 h-full w-2/3 bg-neutral-50 dark:bg-neutral-900 md:hidden`}
              exit={{ x: "-100%" }}
              animate={{ x: 0 }}
              initial={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.2 }}
            ></motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {activeEducation && (
            <motion.div
              className={`${
                activeEducation ? "" : "hidden"
              } fixed z-40 flex h-full w-2/3 flex-col justify-between bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50 md:hidden`}
              exit={{ x: "-100%" }}
              animate={{ x: 0 }}
              initial={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <div>
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
                <Link to="/education/academic">
                  <div className="py-3 px-4">
                    <div className="flex flex-row space-x-4">
                      <FontAwesomeIcon
                        icon={faUserGraduate}
                        className="my-auto"
                      />
                      <p className="font-medium">Overview</p>
                    </div>
                  </div>
                </Link>
                <div className="mx-2 border-b border-neutral-300 dark:border-neutral-700"></div>
                <Link to="/education/kindergarten">
                  <div className="py-3 px-4">
                    <div className="flex flex-row space-x-4">
                      <FontAwesomeIcon icon={faBaby} className="my-auto" />
                      <p className="font-medium">Kindergarten</p>
                    </div>
                  </div>
                </Link>
                <div className="mx-2 border-b border-neutral-300 dark:border-neutral-700"></div>
                <Link to="/education/primary">
                  <div className="py-3 px-4">
                    <div className="flex flex-row space-x-4">
                      <FontAwesomeIcon
                        icon={faAppleWhole}
                        className="my-auto"
                      />
                      <p className="font-medium">Primary School</p>
                    </div>
                  </div>
                </Link>
                <div className="mx-2 border-b border-neutral-300 dark:border-neutral-700"></div>
                <Link to="/education/junior">
                  <div className="py-3 px-4">
                    <div className="flex flex-row space-x-4">
                      <FontAwesomeIcon icon={faBookOpen} className="my-auto" />
                      <p className="font-medium">Junior School</p>
                    </div>
                  </div>
                </Link>
                <div className="mx-2 border-b border-neutral-300 dark:border-neutral-700"></div>
                <Link to="/education/senior">
                  <div className="py-3 px-4">
                    <div className="flex flex-row space-x-4">
                      <FontAwesomeIcon
                        icon={faUserGraduate}
                        className="my-auto"
                      />
                      <p className="font-medium">Senior School</p>
                    </div>
                  </div>
                </Link>
                <div className="mx-2 border-b border-neutral-300 dark:border-neutral-700"></div>
                <Link to="/education/activities">
                  <div className="py-3 px-4">
                    <div className="flex flex-row space-x-4">
                      <FontAwesomeIcon icon={faShapes} className="my-auto" />
                      <p className="font-medium">Activities</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <button onClick={tappedEducation}>
                  <div className="py-3 px-4">
                    <div className="flex flex-row space-x-4">
                      <FontAwesomeIcon
                        icon={faChevronLeft}
                        className="my-auto"
                      />
                      <p className="font-medium">Back to menu</p>
                    </div>
                  </div>
                </button>
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
