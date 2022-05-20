import Img from "../../../../assets/media/images/pages/about/index/science.webp";

export default function () {
  return (
    <div className="bg-sky-900 px-8 py-8 md:py-16 md:px-32">
      <div className="space-y-8 md:flex md:space-x-16 md:space-y-0">
        <img
          src={Img}
          alt="About image"
          className="aspect-square h-fit w-80 rounded-xl object-cover"
        />
        <div className="space-y-8 text-white">
          <p className="text-4xl font-bold">About Us</p>
          <div className="space-y-4">
            <p className="">
              Welcome to Sekolah Dian Harapan, we provide a Christ-centered,
              transformative and holistic education. We believe parents as the
              prime educator of their children to walk alongside with the school
              as the second home for your children.
            </p>
            <p className="">
              SDH is a network of Christian schools under the Pelita Harapan
              Education Foundation that offers K-12 education. Starting in 1995
              in Lippo Village, SDH currently has 13 campuses throughout
              Indonesia, with around 10,000 students.
            </p>
            <p className="">
              We welcome you to know more about SDH, please contact us, ask
              about what we believe and do at school. We want to provide a
              second home for your children.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
