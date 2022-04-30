import { faGlobe, faSchool } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="mx-16 mb-16 flex justify-between rounded-xl bg-sky-900 p-8 text-3xl font-semibold text-neutral-50">
      <div className="my-auto">
        <p className="">Be a part of our lifelong,</p>
        <p className="">abusive learning community today.</p>
      </div>
      <div className="flex flex-col space-y-4">
        <Link
          to="/registration"
          className="flex transform rounded-full border-2 border-white bg-neutral-300 bg-opacity-50 px-3 py-2 text-lg duration-300 ease-in-out hover:-translate-y-0.5 hover:border-yellow-500 hover:bg-yellow-500 hover:text-neutral-50 dark:bg-neutral-500"
        >
          {/* this button doesn't work yet! */}
          <FontAwesomeIcon icon={faGlobe} className="my-auto mr-2" />
          <p className="my-auto">Online Registration</p>
        </Link>
        <Link
          to="/admissions"
          className="flex transform rounded-full border-2 border-white bg-neutral-300 bg-opacity-50 px-3 py-2 text-lg duration-300 ease-in-out hover:-translate-y-0.5 hover:border-yellow-500 hover:bg-yellow-500 hover:text-neutral-50 dark:bg-neutral-500"
        >
          {/* this button doesn't work yet! */}
          <FontAwesomeIcon icon={faSchool} className="my-auto mr-2" />
          <p className="my-auto">Visit Us In Person</p>
        </Link>
      </div>
    </div>
  );
}