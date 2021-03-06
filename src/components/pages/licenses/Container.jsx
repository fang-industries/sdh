import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "../../global/Container";
import { Link } from "react-router-dom";

import MIT from "../../modules/pages/licenses/license/MIT";
import Unsplash from "../../modules/pages/licenses/license/Unsplash";
import OFL from "../../modules/pages/licenses/license/OFL";
import CCBY4 from "../../modules/pages/licenses/license/CCBY4";

export default function (props) {
  return (
    <Container title={`${props.name} license`}>
      <div className="mx-4 my-8 space-y-4 md:my-16 md:mx-16">
        <Link
          to="/licenses"
          className="hover:deoration-2 flex space-x-2 text-neutral-600 underline hover:text-neutral-500 hover:decoration-yellow-500 dark:text-neutral-400 dark:hover:text-neutral-300"
        >
          <FontAwesomeIcon className="my-auto" icon={faArrowLeft} />
          <p>Back to licenses</p>
        </Link>
        {props.license === "MIT" ? (
          <MIT name={props.name} copyright={props.copyright} />
        ) : null}
        {props.license === "Unsplash" ? (
          <Unsplash name={props.name} copyright={props.copyright} />
        ) : null}
        {props.license === "OFL" ? (
          <OFL name={props.name} copyright={props.copyright} />
        ) : null}
        {props.license === "CC BY 4.0" ? (
          <CCBY4 name={props.name} copyright={props.copyright} />
        ) : null}
      </div>
    </Container>
  );
}
