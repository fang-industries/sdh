import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function (props) {
  return (
    <div className="flex flex-col rounded border-2 border-sky-900 text-center dark:border-neutral-500">
      <div className="my-4">
        <FontAwesomeIcon
          icon={props.icon}
          className="text-4xl text-yellow-500"
        />
        <p className="mt-4 text-xl font-bold">{props.title}</p>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}
