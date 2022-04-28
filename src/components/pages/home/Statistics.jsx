import Card from "../../modules/pages/home/statistics/Card";
import {
  faCertificate,
  faGraduationCap,
  faPeopleGroup,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

export default function () {
    const students = 12606275;

    return (
      <div className="grid h-80 grid-cols-4 gap-8 bg-sky-900 px-16 py-8">
        <Card
          icon={faPeopleGroup}
          number={students.toLocaleString()}
          stat="Active Students"
        />
        <Card icon={faCertificate} number="8" stat="Certified Teachers" />
        <Card icon={faTrophy} number="-3" stat="International Awards" />
        <Card icon={faGraduationCap} number="11" stat="Graduates" />
      </div>
    );
}
