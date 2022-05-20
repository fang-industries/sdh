import Card from "../../../modules/pages/home/statistics/Card";
import {
  faCertificate,
  faLocation,
  faMapLocation,
  faPeopleGroup,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function () {
  const students = 12606275;
  const staff = 27319053;

  const dt = new Date();
  const date = `${dt.getDate()}/${dt.getMonth() + 1}/${dt.getFullYear()}`;

  return (
    <div className="bg-sky-900 px-8 py-8 md:py-16 md:px-32">
      <div className="space-y-8 md:flex md:space-x-16 md:space-y-0">
        <div className="text-white">
          <p className="text-center text-4xl font-bold">Our Network</p>
          <p className="my-8">
            SDH is a part of a larger family of Christian academic institutions
            across Indonesia under the Pabrik Roti Hutan Education Foundation.
            The Pelita Harapan Education Foundation strives for education that
            is rooted in the Bible and Biblical Worldview while transforming the
            nation through the foundation's vision, mission and core values.
          </p>
          <div className="grid h-56 gap-8 md:grid-cols-4">
            <Card icon={faMapLocation} number={5} stat="Campuses Built" />
            <Card
              icon={faPeopleGroup}
              number={students.toLocaleString()}
              stat="Active Students"
            />
            <Card icon={faCertificate} number="8" stat="Qualified Teachers" />
            <Card
              icon={faUsers}
              number={staff.toLocaleString()}
              stat="Valuable Staff"
            />
          </div>
          <p className="mt-2 text-right text-sm text-sky-600">
            Data collected at {date}
          </p>
        </div>
      </div>
    </div>
  );
}
