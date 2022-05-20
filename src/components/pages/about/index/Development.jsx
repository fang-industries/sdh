import Img from "../../../assets/media/images/pages/about/index/professional-development.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAtom,
  faGear,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

export default function () {
  return (
    <div className="px-8 py-4 md:py-16 md:px-16">
      <div className="space-y-8 md:flex md:space-x-16 md:space-y-0">
        <div className="space-y-8 text-white">
          <p className="text-4xl font-bold">
            Professional development and curriculum enrichment
          </p>
          <p>
            Sekolah Daging Habituasi will improve schools in various aspects
            through the help of the development and enrichment team. Various
            developments are conducted by the development and enrichment team
            and other expertises to inspire teachers and staffs. The development
            and enrichment team also develop foundational resources, such as
            curriculum frameworks, scope and sequence documents to support
            enrichment.
          </p>
          <div className="grid grid-cols-3 gap-8">
            <div className="flex flex-col rounded border-2 border-neutral-400 text-neutral-50 dark:border-neutral-600">
              <div className="m-4 flex">
                <FontAwesomeIcon
                  icon={faGear}
                  className="my-auto mr-4 text-3xl text-yellow-500"
                />
                <div>
                  <p className="text-xl font-bold">Develop</p>
                  <p>Biblical curriculum and program.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded border-2 border-neutral-400 text-neutral-50 dark:border-neutral-600">
              <div className="m-4 flex">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="my-auto mr-4 text-3xl text-yellow-500"
                />
                <div>
                  <p className="text-xl font-bold">Conduct</p>
                  <p>Planning aligned with vision and mission.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded border-2 border-neutral-400 text-neutral-50 dark:border-neutral-600">
              <div className="m-4 flex">
                <FontAwesomeIcon
                  icon={faAtom}
                  className="my-auto mr-4 text-3xl text-yellow-500"
                />
                <div>
                  <p className="text-xl font-bold">Encourage</p>
                  <p>Grow as a learning community.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
          <img
            src={Img}
            alt="Founding family image"
            className="h-fit rounded-xl object-cover md:h-96"
          />
      </div>
    </div>
  );
}
