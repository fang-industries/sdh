import Img from "../../../../assets/media/images/pages/about/index/founding-member.webp";

export default function () {
  return (
    <div className="px-8 py-4 md:py-16 md:px-16">
      <div className="space-y-8 md:flex md:space-x-16 md:space-y-0">
        <div className="space-y-8 text-white">
          <p className="text-4xl font-bold">Education Foundation</p>
          <p className="rounded bg-yellow-500 px-3 text-lg font-semibold tracking-wide text-white">
            &nbsp;
          </p>
          <p className="">
            Yayasan Pelita Harapan is an educational foundation focusing on a
            Christ-centered, holistic, and transformational education, offering
            formal schooling from kindergarten to higher education for
            Indonesian citizens and international students from around the
            world.
          </p>
        </div>
      </div>
      <img
        src={Img}
        alt="Founding family image"
        className="mt-8 aspect-[3/1] w-full rounded-xl object-cover object-center"
      />
    </div>
  );
}
