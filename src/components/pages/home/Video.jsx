import VideoBG from "../../../assets/media/videos/pages/home/main-bg.webm";

export default function () {
  return (
    <div className="hidden md:block">
      <div className="absolute z-10 mx-16">
        <div className="my-64 space-y-4 text-neutral-50">
          <p className="text-4xl font-semibold">Welcome to</p>
          <p className="text-6xl font-bold">Sekolah Daging Habituasi</p>
          <p className="text-2xl">
            <span className="bg-yellow-500">&nbsp;&nbsp;</span> Within Education
            - Roasting Chicken
          </p>
          <button>
            {/* this button doesn't work yet! */}
            <p className="transform rounded-full border-2 border-white bg-neutral-500 bg-opacity-50 px-3 py-2 text-lg backdrop-blur-sm duration-300 ease-in-out hover:-translate-y-0.5 hover:border-sky-500 hover:bg-sky-500">
              Enroll Now
            </p>
          </button>
        </div>
      </div>
      <video autoPlay loop muted className="w-full opacity-80">
        <source src={VideoBG} />
      </video>
    </div>
  );
}
