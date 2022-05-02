import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function (props) {
  return (
    <footer>
      <div className="space-y-4 bg-sky-900 px-4 py-8 text-yellow-500 md:px-16">
        <div className="flex-row justify-center space-x-0 space-y-8 md:flex md:space-y-0 md:space-x-32">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-lg font-semibold">Head Office</p>
            <div className="text-neutral-50">
              <p>Somewhere in the</p>
              <p>
                cyberspace...
                <span className="hidden md:inline-block">
                  &nbsp;☆.。.:*・°☆
                </span>
              </p>
            </div>
          </div>
          <div className="space-y-2 text-center md:text-right">
            <p className="text-lg font-semibold">Contact Us</p>
            <div className="flex flex-col text-neutral-50">
              <a
                href="mailto:sdh@pnxl.dev"
                className="underline hover:decoration-yellow-500 hover:decoration-2"
              >
                sdh@pnxl.dev
              </a>
              <a
                href="https://github.com/sekolah-daging-habituasi/"
                className="underline hover:decoration-yellow-500 hover:decoration-2"
              >
                GitHub Organisation
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center text-center">
          <div className="space-y-2">
            <p className="text-lg font-semibold">Assosciation</p>
            <div className="flex flex-col text-neutral-50">
              <img
                src="https://raw.githubusercontent.com/sekolah-daging-habituasi/assets/main/icons/fang-industries-white.png"
                alt="Fang Industries"
                className="h-6 md:h-8"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4 bg-[rgb(8,46,68)] px-4 py-8 text-neutral-50 md:px-16">
        <div className="text-center">
          <p className="text-lg font-medium">
            The website&apos;s full source code is available{" "}
            <a
              href="https://github.com/sekolah-daging-habituasi/web"
              className="underline hover:decoration-yellow-500 hover:decoration-2"
            >
              here
            </a>
            .
          </p>
          <p className="text-neutral-300">
            Code is licensed under the{" "}
            <a
              href="https://mit-license.org/"
              className="underline hover:decoration-yellow-500 hover:decoration-2"
            >
              MIT license
            </a>
            .
            <span>
              &nbsp;-&nbsp;
              <Link
                to="/licenses"
                className="underline hover:decoration-yellow-500 hover:decoration-2"
              >
                License Notice
              </Link>
            </span>
          </p>
        </div>
        <div className="text-center">
          Made with <FontAwesomeIcon icon={faHeart} /> and lots of laughs by
          Jason and the crew.
        </div>
        <div
          className="text-center text-yellow-400"
          style={{ fontFamily: "Klee One" }}
        >
          ありがとう
        </div>
        <p
          className="text-center text-[0.6rem] text-neutral-400"
          style={{ fontFamily: "Comic Sans MS" }}
        >
          pls contact me first at{" "}
          <a
            href="mailto:jason@pnxl.dev"
            className="underline hover:decoration-yellow-500"
          >
            jason@pnxl.dev
          </a>{" "}
          before taking any legal action for takedown ty
        </p>
      </div>
    </footer>
  );
}
