import { faGitAlt, faNpm } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function (props) {
  return (
    <div className="rounded-xl bg-neutral-100 p-4 dark:bg-neutral-800">
      <div className="flex flex-row justify-between">
        <p className="text-xl font-medium">
          {props.name}
          <span className="mx-2 hidden text-sm font-normal text-neutral-600 dark:text-neutral-400 md:inline-flex">
            {props.version}
          </span>
        </p>
        <div className="my-auto hidden space-x-4 text-xl md:block">
          {props.git ? (
            <a href={props.git}>
              <FontAwesomeIcon
                icon={faGitAlt}
                className="transform transition duration-300 ease-in-out hover:-translate-y-0.5 hover:text-yellow-500"
              />
            </a>
          ) : (
            ""
          )}
          {props.web ? (
            <a href={props.web}>
              <FontAwesomeIcon
                icon={faLink}
                className="transform transition ease-in-out hover:-translate-y-0.5 hover:text-yellow-500"
              />
            </a>
          ) : (
            ""
          )}
          {props.npm ? (
            <a href={"https://www.npmjs.com/package/" + props.npm}>
              <FontAwesomeIcon
                icon={faNpm}
                className="transform transition ease-in-out hover:-translate-y-0.5 hover:text-yellow-500"
              />
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="my-1">
        <p className="font-medium text-neutral-600 dark:text-neutral-400 ">
          Released under the{" "}
          <Link
            to={`/licenses/${props.name.toLowerCase().replace(" ", "")}`}
            className="underline hover:text-neutral-700 hover:decoration-yellow-500 dark:hover:text-neutral-300"
          >
            {props.license} License
          </Link>
          .
        </p>
      </div>
      <p className="text-sm font-light text-neutral-600 dark:text-neutral-400">
        Copyright © {props.copyright}.{" "}
        {props.email ? (
          <span className="hidden text-xs font-light text-neutral-500 md:inline-block">
            {"<"}
            <a
              href={`mailto:${props.email}`}
              className="underline hover:text-neutral-600 hover:decoration-yellow-500 dark:hover:text-neutral-400"
            >
              {props.email}
            </a>
            {">"}
          </span>
        ) : (
          ""
        )}
      </p>
    </div>
  );
}
