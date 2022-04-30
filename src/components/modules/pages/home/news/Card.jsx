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
    <div class="rounded-xl bg-neutral-100 p-8 dark:bg-neutral-800">
      <img
        class="mx-auto rounded-xl object-cover"
        src={props.img}
        alt={`Cover art for ${props.topic.toLowerCase()}`}
      />
      <div class="mt-8 flex flex-col justify-between space-y-2 text-left">
        <p class="text-yellow-500">{props.topic}</p>
        <p class="text-lg font-medium">{props.title}</p>
        <p class="text-sky-600 dark:text-neutral-300">{props.desc}</p>
        <Link
          to={props.news}
          className="dark:text-neurtal-500 mt-8 flex space-x-2 text-neutral-600 hover:underline hover:decoration-sky-500 dark:text-neutral-400"
        >
          <p className="my-auto">Continue reading...</p>
          <FontAwesomeIcon icon={faArrowRight} className="my-auto" />
        </Link>
      </div>
      <div className="my-8 border-2 border-b border-neutral-200 dark:border-neutral-700"></div>
      <div class="flex space-x-4 text-left">
        <p>
          <FontAwesomeIcon icon={faEye} /> {props.stats.views}
        </p>
        <p>
          <FontAwesomeIcon icon={faComment} /> {props.stats.comments}
        </p>
        <p>
          <FontAwesomeIcon icon={faHeart} /> {props.stats.hearts}
        </p>
      </div>
    </div>
  );
}
