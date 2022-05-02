import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faInfoCircle,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function (props) {
  return (
    <div className="mx-4 my-8 space-y-8 md:my-16 md:mx-16">
      <div className="flex">
        <div>
          <div className="flex flex-row">
            <p className="text-xl font-medium text-sky-500">
              {props.name} is licensed under the
            </p>
          </div>
          <p className="text-4xl font-bold">
            MIT License{" "}
            <span className="text-lg font-normal text-neutral-600 dark:text-neutral-400">
              Copyright © {props.copyright}
            </span>
          </p>
          <div className="mt-4">
            <p className="text-neutral-700 dark:text-neutral-300">
              A short and simple permissive license with conditions only
              requiring preservation of copyright and license notices. Licensed
              works, modifications, and larger works may be distributed under
              different terms and without source code.
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
                <p>Copyright Note</p>
              </div>
              <div className="flex space-x-2">
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  className="my-auto text-blue-500"
                />
                <p>License Note</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
