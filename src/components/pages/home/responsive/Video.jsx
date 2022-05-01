export default function () {
  return (
    <div className="md:hidden">
      <div className="absolute z-10 mx-4 my-8 flex h-screen flex-col justify-center space-y-4 text-neutral-50">
        <p className="text-3xl font-semibold">Welcome to</p>
        <p className="text-5xl font-bold">Sekolah Daging Habituasi</p>
        <div>
          <p className="text-xl">
            <span className="bg-yellow-500">&nbsp;&nbsp;</span> Within Education
          </p>
          <p className="text-xl">
            <span className="bg-yellow-500">&nbsp;&nbsp;</span> Roasting Chicken
          </p>
        </div>
        <button>
          {/* this button doesn't work yet! */}
          <p className="transform rounded-full border-2 border-white bg-neutral-500 bg-opacity-50 px-3 py-2 text-lg duration-300 ease-in-out hover:-translate-y-0.5 hover:border-sky-500 hover:bg-sky-500">
            Enroll Now
          </p>
        </button>
      </div>
      <video
        autoPlay
        loop
        muted
        className="h-screen w-full object-cover opacity-80"
      >
        <source src="https://raw.githubusercontent.com/sekolah-daging-habituasi/assets/main/pages/home/main-bg.mp4" />
      </video>
    </div>
  );
}
