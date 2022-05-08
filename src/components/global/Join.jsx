import { faGlobe, faSchool } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div
      className={`mx-4 mb-8 justify-between space-y-8 rounded-xl bg-[url('/src/assets/media/images/components/global/join/bg.jpg')] bg-cover bg-center p-8 font-semibold text-neutral-50 md:mx-16 md:mb-16 md:flex md:space-y-0`}
    >
      <div className="my-auto text-2xl">
        <p>Be a part of our lifelong,</p>
        <p>abusive learning community today.</p>
      </div>
      <div className="flex flex-col space-y-4">
        <Link
          to="/registration"
          className="flex transform rounded-full border-2 border-white bg-neutral-300 bg-opacity-30 px-3 py-2 backdrop-blur-sm duration-300 ease-in-out hover:-translate-y-0.5 hover:border-yellow-500 hover:bg-yellow-500 hover:text-neutral-50 dark:bg-neutral-500 dark:bg-opacity-30"
        >
          {/* this button doesn't work yet! */}
          <FontAwesomeIcon icon={faGlobe} className="my-auto mr-2" />
          <p className="my-auto">Online Registration</p>
        </Link>
        <Link
          to="/admissions"
          className="flex transform rounded-full border-2 border-white bg-neutral-300 bg-opacity-50 px-3 py-2 backdrop-blur-sm duration-300 ease-in-out hover:-translate-y-0.5 hover:border-yellow-500 hover:bg-yellow-500 hover:text-neutral-50 dark:bg-neutral-500 dark:bg-opacity-30"
        >
          {/* this button doesn't work yet! */}
          <FontAwesomeIcon icon={faSchool} className="my-auto mr-2" />
          <p className="my-auto">Visit Us In Person</p>
        </Link>
      </div>
    </div>
  );
}
