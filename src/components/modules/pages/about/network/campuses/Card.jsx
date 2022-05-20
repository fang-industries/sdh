import {
  faArrowRight,
  faComment,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function (props) {
  return (
    <div className="rounded-xl bg-neutral-100 p-4 dark:bg-neutral-800">
      <img
        className="mx-auto aspect-square rounded-xl object-cover object-center"
        src={props.img}
        alt={`Image for ${props.title}`}
      />
      <div className="mt-4 flex flex-col justify-between space-y-2 text-left">
        <p className="text-lg font-medium">{props.title}</p>
        <a
          href="https://music.youtube.com/watch?v=dQw4w9WgXcQ"
          className="dark:text-neurtal-500 mt-8 flex space-x-2 text-neutral-600 hover:underline hover:decoration-sky-500 dark:text-neutral-400"
        >
          <p className="my-auto">Learn more...</p>
          <FontAwesomeIcon icon={faArrowRight} className="my-auto" />
        </a>
      </div>
    </div>
  );
}
