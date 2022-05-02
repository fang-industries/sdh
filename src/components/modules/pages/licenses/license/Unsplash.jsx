import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faInfoCircle,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function (props) {
  return (
    <div className="space-y-8">
      <div className="flex">
        <div>
          <div className="flex flex-row">
            <p className="text-xl font-medium text-sky-500">
              {props.name} is licensed under the
            </p>
          </div>
          <p className="text-4xl font-bold">
            Unsplash License{" "}
            <span className="text-lg font-normal text-neutral-600 dark:text-neutral-400">
              Copyright © {props.copyright}
            </span>
          </p>
          <div className="mt-4">
            <p className="text-neutral-700 dark:text-neutral-300">
              A short and simple free license with conditions to only not
              compile photos from Unsplash to replicate a similar service.
              Significant modifications, and larger works may be distributed and
              sold under different terms.
            </p>
          </div>
        </div>
        <div className="flex space-x-8 pl-4">
          <div>
            <p className="font-semibold">Permissions</p>
            <div>
              <div className="flex space-x-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="my-auto text-green-500"
                />
                <p>Commercial Use</p>
              </div>
            </div>
            <div>
              <div className="flex space-x-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="my-auto text-green-500"
                />
                <p>Modifications</p>
              </div>
            </div>
            <div>
              <div className="flex space-x-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="my-auto text-green-500"
                />
                <p>Distribution</p>
              </div>
            </div>
            <div>
              <div className="flex space-x-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="my-auto text-green-500"
                />
                <p>Private Use</p>
              </div>
            </div>
          </div>
          <div>
            <p className="font-semibold">Limitations</p>
            <div>
              <div className="flex space-x-2">
                <FontAwesomeIcon
                  icon={faXmark}
                  className="my-auto text-red-500"
                />
                <p>Liability</p>
              </div>
            </div>
            <div>
              <div className="flex space-x-2">
                <FontAwesomeIcon
                  icon={faXmark}
                  className="my-auto text-red-500"
                />
                <p>Warranty</p>
              </div>
            </div>
          </div>
          <div>
            <p className="font-semibold">Conditions</p>
            <div>
              <div className="flex space-x-2">
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  className="my-auto text-blue-500"
                />
                <p>Attribution</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 border-b border-neutral-400 dark:border-neutral-600" />
      <p>
        Unsplash grants you an irrevocable, nonexclusive, worldwide copyright
        license to download, copy, modify, distribute, perform, and use photos
        from Unsplash for free, including for commercial purposes, without
        permission from or attributing the photographer or Unsplash. This
        license does not include the right to compile photos from Unsplash to
        replicate a similar or competing service.
      </p>
    </div>
  );
}
