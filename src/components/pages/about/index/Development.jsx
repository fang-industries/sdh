import Image from "../../../../assets/media/images/pages/about/index/professional-development.webp";
import Card from "../../../modules/pages/about/index/development/Card";
import {
  faAtom,
  faGear,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

export default function () {
  return (
    <div className="my-8 mx-4 md:my-16 md:mx-16">
      <div className="space-y-8 md:flex md:space-x-16 md:space-y-0">
        <div className="space-y-8">
          <div>
            <p className="text-4xl font-bold">Professional development</p>
            <div className="flex flex-row">
              <p className="text-3xl font-semibold text-sky-500">
                and curriculum enrichment
              </p>
            </div>
          </div>
          <p className="rounded bg-yellow-500">&nbsp;</p>
          <div className="space-y-4">
            <p>
              Sekolah Daging Habituasi will improve their schools in various
              aspects through the help of PDCE team. Various professionals
              developments are conducted by PDCE team and other expertises to
              inspire teachers and staffs. PDCE team also develop important
              foundational resources, such as curriculum framework, scope and
              sequence documents to support curriculum enrichment.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-2xl font-semibold">
              We develop, conduct, and encourage.
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              <Card
                icon={faGear}
                title="Develop"
                desc="Meat-eating foundations, curriculum and programs."
              />
              <Card
                icon={faGraduationCap}
                title="Conduct"
                desc="Strategic planning aligned with vision and mission."
              />
              <Card
                icon={faAtom}
                title="Encourage"
                desc="Grow as a community in a shalom community"
              />
            </div>
          </div>
        </div>
        <img
          src={Image}
          alt="Professional development image"
          className="aspect-square h-fit rounded-xl object-cover object-center md:aspect-auto"
        />
      </div>
    </div>
  );
}
