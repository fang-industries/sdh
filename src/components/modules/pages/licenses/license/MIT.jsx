import Disclaimer from "../modules/Disclaimer";

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
      <div className="border-2 border-b border-neutral-400 dark:border-neutral-600" />
      <div className="space-y-8">
        <div className="space-y-4">
          <p>
            Permission is hereby granted, free of charge, to any person
            obtaining a copy of this software and associated documentation files
            (the “Software”), to deal in the Software without restriction,
            including without limitation the rights to use, copy, modify, merge,
            publish, distribute, sublicense, and/or sell copies of the Software,
            and to permit persons to whom the Software is furnished to do so,
            subject to the following conditions:
          </p>
          <p>
            The above copyright notice and this permission notice shall be
            included in all copies or substantial portions of the Software.
          </p>
        </div>
        <Disclaimer>
          <p>
            THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
            NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
            BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
            ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
            CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.
          </p>
        </Disclaimer>
      </div>
    </div>
  );
}
