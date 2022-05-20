import Card from "../../../modules/pages/about/network/campuses/Card";
import UPH from "../../../../assets/media/images/pages/about/network/campuses/uph.webp";
import SPH from "../../../../assets/media/images/pages/about/network/campuses/sph.webp";
import SLH from "../../../../assets/media/images/pages/about/network/campuses/slh.webp";
import HA from "../../../../assets/media/images/pages/about/network/campuses/ha.webp";
import College from "../../../../assets/media/images/pages/about/network/campuses/college.webp";

export default function () {
  return (
    <div className="px-8 py-4 md:py-16 md:px-16">
      <div className="space-y-8 md:flex md:space-x-16 md:space-y-0">
        <div className="space-y-8 text-white">
          <p className="text-4xl font-bold">Schools and University</p>
          <p className="rounded bg-yellow-500 px-3 text-lg font-semibold tracking-wide text-white">
            &nbsp;
          </p>
          <p className="">
            Our network of schools and university covers kindergarten, primary,
            junior high and senior high education as well as undergraduate and
            graduate studies.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-5">
            <Card img={UPH} title="Universitas Pabrik Habituasi" />
            <Card img={SPH} title="Sekolah Penguin Habituasi" />
            <Card img={SLH} title="Sekolah Lembaga Habituasi" />
            <Card img={HA} title="HOPE(less) Academy" />
            <Card img={College} title="UPH College" />
          </div>
        </div>
      </div>
    </div>
  );
}
