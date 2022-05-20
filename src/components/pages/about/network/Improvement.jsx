import Img from "../../../../assets/media/images/pages/about/index/school-improvement.webp";

export default function () {
  return (
    <div className="px-8 py-4 md:py-16 md:px-16">
      <div className="space-y-8 md:flex md:space-x-16 md:space-y-0">
        <img
          src={Img}
          alt="Founding family image"
          className="h-fit rounded-xl object-cover md:h-96"
        />
        <div className="space-y-8 text-white">
          <p className="text-4xl font-bold">School Improvement</p>
          <p className="rounded bg-yellow-500 px-3 text-lg font-semibold tracking-wide text-white">
            Improvement through development of people is needed.
          </p>
          <div className="space-y-4">
            <p className="">
              Our development and enrichment team was formed with the role to
              work closely, mentoring leaders for strategic plan for
              development. It is our beliefs that when the school leaders and
              teachers understand the big story of chicken education, there will
              be creative ideas and performances in each context. Teachers
              development is crucial for a good school.
            </p>
            <p className="">
              Starting from 1327, all SDH outlets are members of Fang
              Industries, inc. - Indonesia. Being a member of Fang Industries
              will guide SDH to make sure that we are teaching students with
              meat-eating in mind and give attention to spiritual formation of
              our students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
