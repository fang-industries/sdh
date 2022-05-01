import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";

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
      <div className={`${active ? "" : "hidden"} md:hidden`}>
        <button
          className="fixed z-10 h-full w-full cursor-default bg-neutral-900 bg-opacity-50 dark:bg-neutral-800 dark:bg-opacity-50"
          onClick={tapped}
        ></button>
        <div className="fixed z-20 h-full w-2/3 bg-neutral-50 dark:bg-neutral-900 md:hidden"></div>
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
        <div className="hidden flex-row items-center justify-between pt-4 md:flex">
          <div className="flex flex-row space-x-4">
            <Link to="/">
              <button
                className={`${
                  props.active === "home"
                    ? "bg-neutral-900 bg-opacity-[0.33] text-neutral-50 dark:bg-neutral-100 dark:bg-opacity-[0.33] dark:text-yellow-400"
                    : "text-neutral-900"
                } transtion flex flex-row space-x-2 rounded px-3 py-2 duration-300 hover:bg-neutral-900 hover:bg-opacity-20 dark:text-neutral-50 dark:hover:bg-neutral-100 dark:hover:bg-opacity-20`}
              >
                <FontAwesomeIcon
                  icon={faHome}
                  className="my-auto transform text-lg"
                />
                <p className="my-auto font-semibold">Home</p>
              </button>
            </Link>
            <Link to="/about">
              <Tippy
                content={
                  <div className="flex flex-col px-1 text-center">
                    <Link to="/about#welcome">
                      <div className="flex flex-row justify-between p-2 font-medium transition duration-300 ease-in-out hover:text-yellow-400">
                        <FontAwesomeIcon
                          icon={faPeopleGroup}
                          className="my-auto mr-4"
                        />
                        <p className="my-auto ml-4">About Us</p>
                      </div>
                    </Link>
                    <div className="border-[1px] border-b border-neutral-500 border-opacity-50" />
                    <Link to="/about#history">
                      <div className="flex flex-row justify-between p-2 font-medium transition duration-300 ease-in-out hover:text-yellow-400">
                        <FontAwesomeIcon
                          icon={faCalendarDay}
                          className="my-auto mr-4"
                        />
                        <p className="my-auto ml-4">History</p>
                      </div>
                    </Link>
                    <div className="border-[1px] border-b border-neutral-500 border-opacity-50" />
                    <Link to="/about/networks">
                      <div className="flex flex-row justify-between p-2 font-medium transition duration-300 ease-in-out hover:text-yellow-400">
                        <FontAwesomeIcon
                          icon={faCircleNodes}
                          className="my-auto mr-4"
                        />
                        <p className="my-auto ml-4">Networks</p>
                      </div>
                    </Link>
                    <div className="border-[1px] border-b border-neutral-500 border-opacity-50" />
                    <Link to="/about/campuses">
                      <div className="flex flex-row justify-between p-2 font-medium transition duration-300 ease-in-out hover:text-yellow-400">
                        <FontAwesomeIcon
                          icon={faSchool}
                          className="my-auto mr-4"
                        />
                        <p className="my-auto ml-4">Campuses</p>
                      </div>
                    </Link>
                  </div>
                }
                placement="bottom"
                interactive
                animation="shift-away"
              >
                <button
                  className={`${
                    props.active === "about"
                      ? "bg-neutral-900 bg-opacity-[0.33] text-neutral-50 dark:bg-neutral-100 dark:bg-opacity-[0.33] dark:text-yellow-400"
                      : "text-neutral-900"
                  } transtion flex flex-row space-x-2 rounded px-3 py-2 duration-300 hover:bg-neutral-900 hover:bg-opacity-20 dark:text-neutral-50 dark:hover:bg-neutral-100 dark:hover:bg-opacity-20`}
                >
                  <FontAwesomeIcon
                    icon={faCircleInfo}
                    className="my-auto transform text-lg"
                  />
                  <p className="my-auto font-semibold">About</p>
                </button>
              </Tippy>
            </Link>
            <Link to="/admissions">
              <Tippy
                content={
                  <div className="flex flex-col px-1 text-center">
                    <Link to="/admissions#register">
                      <div className="flex flex-row justify-between p-2 font-medium transition duration-300 ease-in-out hover:text-yellow-400">
                        <FontAwesomeIcon
                          icon={faAddressCard}
                          className="my-auto mr-4"
                        />
                        <p className="my-auto ml-4">Registration</p>
                      </div>
                    </Link>
                    <div className="border-[1px] border-b border-neutral-500 border-opacity-50" />
                    <Link to="/admissions#visit">
                      <div className="flex flex-row justify-between p-2 font-medium transition duration-300 ease-in-out hover:text-yellow-400">
                        <FontAwesomeIcon
                          icon={faSchool}
                          className="my-auto mr-4"
                        />
                        <p className="my-auto ml-4">Visit SDH</p>
                      </div>
                    </Link>
                  </div>
                }
                placement="bottom"
                interactive
                animation="shift-away"
              >
                <button
                  className={`${
                    props.active === "admissions"
                      ? "bg-neutral-900 bg-opacity-[0.33] text-neutral-50 dark:bg-neutral-100 dark:bg-opacity-[0.33] dark:text-yellow-400"
                      : "text-neutral-900"
                  } transtion flex flex-row space-x-2 rounded px-3 py-2 duration-300 hover:bg-neutral-900 hover:bg-opacity-20 dark:text-neutral-50 dark:hover:bg-neutral-100 dark:hover:bg-opacity-20`}
                >
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    className="my-auto transform text-lg"
                  />
                  <p className="my-auto font-semibold">Admissions</p>
                </button>
              </Tippy>
            </Link>
            <Link to="/education">
              <Tippy
                content={
                  <div className="flex flex-col px-1 text-center">
                    <Link to="/education/academic">
                      <div className="flex flex-row justify-between p-2 font-medium transition duration-300 ease-in-out hover:text-yellow-400">
                        <FontAwesomeIcon
                          icon={faUserGraduate}
                          className="my-auto mr-4"
                        />
                        <p className="my-auto ml-4">Academic Overview</p>
                      </div>
                    </Link>
                    <div className="border-[1px] border-b border-neutral-500 border-opacity-50" />
                    <Link to="/education/kindergarten">
                      <div className="flex flex-row justify-between p-2 font-medium transition duration-300 ease-in-out hover:text-yellow-400">
                        <FontAwesomeIcon
                          icon={faBaby}
                          className="my-auto mr-4"
                        />
                        <p className="my-auto ml-4">Kindergarten</p>
                      </div>
                    </Link>
                    <div className="border-[1px] border-b border-neutral-500 border-opacity-50" />
                    <Link to="/education/kindergarten">
                      <div className="flex flex-row justify-between p-2 font-medium transition duration-300 ease-in-out hover:text-yellow-400">
                        <FontAwesomeIcon
                          icon={faAppleWhole}
                          className="my-auto mr-4"
                        />
                        <p className="my-auto ml-4">Primary School</p>
                      </div>
                    </Link>
                    <div className="border-[1px] border-b border-neutral-500 border-opacity-50" />
                    <Link to="/education/kindergarten">
                      <div className="flex flex-row justify-between p-2 font-medium transition duration-300 ease-in-out hover:text-yellow-400">
                        <FontAwesomeIcon
                          icon={faBookOpen}
                          className="my-auto mr-4"
                        />
                        <p className="my-auto ml-4">Junior School</p>
                      </div>
                    </Link>
                    <div className="border-[1px] border-b border-neutral-500 border-opacity-50" />
                    <Link to="/education/kindergarten">
                      <div className="flex flex-row justify-between p-2 font-medium transition duration-300 ease-in-out hover:text-yellow-400">
                        <FontAwesomeIcon
                          icon={faUserGraduate}
                          className="my-auto mr-4"
                        />
                        <p className="my-auto ml-4">Senior School</p>
                      </div>
                    </Link>
                    <div className="border-[1px] border-b border-neutral-500 border-opacity-50" />
                    <Link to="/education/kindergarten">
                      <div className="flex flex-row justify-between p-2 font-medium transition duration-300 ease-in-out hover:text-yellow-400">
                        <FontAwesomeIcon
                          icon={faShapes}
                          className="my-auto mr-4"
                        />
                        <p className="my-auto ml-4">After School Activities</p>
                      </div>
                    </Link>
                  </div>
                }
                placement="bottom"
                interactive
                animation="shift-away"
              >
                <button
                  className={`${
                    props.active === "education"
                      ? "bg-neutral-900 bg-opacity-[0.33] text-neutral-50 dark:bg-neutral-100 dark:bg-opacity-[0.33] dark:text-yellow-400"
                      : "text-neutral-900"
                  } transtion flex flex-row space-x-2 rounded px-3 py-2 duration-300 hover:bg-neutral-900 hover:bg-opacity-20 dark:text-neutral-50 dark:hover:bg-neutral-100 dark:hover:bg-opacity-20`}
                >
                  <FontAwesomeIcon
                    icon={faChalkboard}
                    className="my-auto transform text-lg"
                  />
                  <p className="my-auto font-semibold">Teaching & Learning</p>
                </button>
              </Tippy>
            </Link>
          </div>
          <div className="flex flex-row space-x-4">
            <Link to="/community">
              <button
                className={`${
                  props.active === "community"
                    ? "bg-neutral-900 bg-opacity-[0.33] text-neutral-50 dark:bg-neutral-100 dark:bg-opacity-[0.33] dark:text-yellow-400"
                    : "text-neutral-900"
                } transtion flex flex-row space-x-2 rounded px-3 py-2 duration-300 hover:bg-neutral-900 hover:bg-opacity-20 dark:text-neutral-50 dark:hover:bg-neutral-100 dark:hover:bg-opacity-20`}
              >
                <FontAwesomeIcon
                  icon={faComments}
                  className="my-auto transform text-lg"
                />
                <p className="my-auto font-semibold">Community</p>
              </button>
            </Link>
            <Link to="/news">
              <button
                className={`${
                  props.active === "newspaper"
                    ? "bg-neutral-900 bg-opacity-[0.33] text-neutral-50 dark:bg-neutral-100 dark:bg-opacity-[0.33] dark:text-yellow-400"
                    : "text-neutral-900"
                } transtion flex flex-row space-x-2 rounded px-3 py-2 duration-300 hover:bg-neutral-900 hover:bg-opacity-20 dark:text-neutral-50 dark:hover:bg-neutral-100 dark:hover:bg-opacity-20`}
              >
                <FontAwesomeIcon
                  icon={faNewspaper}
                  className="my-auto transform text-lg"
                />
                <p className="my-auto font-semibold">Newspaper</p>
              </button>
            </Link>
            <Link to="/voices">
              <button
                className={`${
                  props.active === "ourvoices"
                    ? "bg-neutral-900 bg-opacity-[0.33] text-neutral-50 dark:bg-neutral-100 dark:bg-opacity-[0.33] dark:text-yellow-400"
                    : "text-neutral-900"
                } transtion flex flex-row space-x-2 rounded px-3 py-2 duration-300 hover:bg-neutral-900 hover:bg-opacity-20 dark:text-neutral-50 dark:hover:bg-neutral-100 dark:hover:bg-opacity-20`}
              >
                <FontAwesomeIcon
                  icon={faMicrophone}
                  className="my-auto transform text-lg"
                />
                <p className="my-auto font-semibold">Our Voices</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
