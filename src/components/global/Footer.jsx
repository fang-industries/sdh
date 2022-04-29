import { faArrowUp, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function (props) {
  return (
    <footer>
      <div className="space-y-8 bg-sky-900 px-16 py-16 text-yellow-500">
        <div className="flex flex-row justify-center">
          <a
            href="#"
            className="flex h-10 w-10 transform flex-col justify-center rounded-full bg-sky-800 text-center text-2xl shadow duration-300 ease-in-out hover:-translate-y-0.5"
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </a>
        </div>
        <div className="flex flex-row justify-center space-x-32">
          <div className="space-y-2">
            <p className="text-lg font-semibold">Head Office</p>
            <div className="text-neutral-50">
              <p>Somewhere in the cyberspace... ☆.。.:*・°☆</p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-lg font-semibold">Contact Us</p>
            <div className="flex flex-col text-neutral-50">
              <a
                href="https://github.com/sekolah-daging-habituasi/"
                className="underline hover:decoration-yellow-500 hover:decoration-2"
              >
                GitHub Organisation
              </a>
              <a
                href="mailto:sdh@pnxl.dev"
                className="underline hover:decoration-yellow-500 hover:decoration-2"
              >
                sdh@pnxl.dev
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
                className="h-8"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-8 bg-[rgb(8,46,68)] px-16 py-8 text-neutral-50">
        <div className="text-center">
          <div className="space-y-2">
            <p className="text-lg font-medium">
              This code is licensed under the{" "}
              <a
                href="https://mit-license.org/"
                className="text-yellow-500 underline decoration-neutral-50 transition duration-300 ease-in-out hover:text-yellow-400 hover:decoration-sky-400 hover:decoration-2"
              >
                MIT license
              </a>
              .
            </p>
            <p className="text-neutral-300">
              The full source code is available{" "}
              <a
                href="https://github.com/sekolah-daging-habituasi/web"
                className="text-yellow-500 underline decoration-neutral-50 transition duration-300 ease-in-out hover:text-yellow-400 hover:decoration-sky-400 hover:decoration-2"
              >
                here
              </a>
              .
            </p>
          </div>
        </div>
        <div className="text-center">
          Made with <FontAwesomeIcon icon={faHeart} /> and lots of laughs by
          Jason and the crew.
        </div>
        <div className="text-center" style={{ fontFamily: "Klee One" }}>
          ありがとう
        </div>
      </div>
    </footer>
  );
}
