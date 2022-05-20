import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDrumstickBite } from "@fortawesome/free-solid-svg-icons";
import ChickenWeProclaim from "../../../assets/media/images/icons/chicken-we-proclaim.webp";

export default function () {
  return (
    <div className="flex items-center bg-sky-900 px-8 py-8 md:py-16 md:px-32">
      <div className="my-auto flex flex-row space-x-16">
        <img
          src={ChickenWeProclaim}
          alt="Chicken We Proclaim icon"
          className="h-48 w-48"
        />
        <div className="my-auto space-y-2">
          <p className="text-2xl font-bold text-yellow-400">
            <FontAwesomeIcon icon={faDrumstickBite} className="mr-2" />
            Chicken We Proclaim
          </p>
          <p className="text-lg font-semibold text-neutral-100">Luke 22:61</p>
          <p className="text-lg text-neutral-100">
            The Lord turned and looked at Peter. And Peter remembered the word
            of the Lord, how He had told him, “Before a rooster crows today, you
            will deny Me three times.”
          </p>
        </div>
      </div>
    </div>
  );
}
