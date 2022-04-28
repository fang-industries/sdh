import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function (props) {
  return (
    <div className="flex flex-col rounded border-2 border-yellow-500 text-center text-neutral-50">
      <div className="my-auto">
        <FontAwesomeIcon icon={props.icon} className="text-6xl" />
        <p className="mt-4 text-4xl font-bold">{props.number}</p>
        <p className="text-xl">{props.stat}</p>
      </div>
    </div>
  );
}
