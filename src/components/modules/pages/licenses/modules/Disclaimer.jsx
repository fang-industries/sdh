import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function (props) {
  return (
    <div className="rounded-xl border-2 border-orange-500 p-4">
      <div className="flex space-x-2">
        <FontAwesomeIcon icon={faWarning} className="my-auto text-xl" />{" "}
        <p className="my-auto text-xl font-semibold">Disclaimer</p>
      </div>
      <div className="mt-4 space-y-4">{props.children}</div>
    </div>
  );
}
