import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import AlumniAlexa from "../../../assets/media/images/components/modules/pages/home/alumni/alexa.webp";
import AlumniJovan from "../../../assets/media/images/components/modules/pages/home/alumni/jovan.webp";
import AlumniTimothy from "../../../assets/media/images/components/modules/pages/home/alumni/timothy.webp";

export default function () {
  const students = 12606275;

  return (
    <div className="hidden py-16 px-16 md:block">
      <div className="space-y-2 text-center">
        <p className="text-3xl font-semibold text-sky-500">
          Featuring Outstanding
        </p>
        <p className="text-4xl font-bold tracking-wide">Alumni</p>
      </div>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        className="mt-8 px-32"
        effect={"fade"}
        loop={true}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        navigation={true}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="flex rounded-xl bg-neutral-100 p-8 dark:bg-neutral-800">
            <img
              className="mx-auto my-auto h-32 w-32 rounded-full object-cover"
              src={AlumniTimothy}
              alt="Picture of Timothy Joseph"
            />
            <div className="ml-8 flex flex-col justify-between space-y-8 text-left">
              <p className="text-lg font-medium">
                SDH shows discipline and highly value Ayam Goreng Padang. Since
                the start, SDH has consistently has had the option to show great
                labour between all educators, staff, understudies and guardians.
              </p>
              <div className="font-medium">
                <div className="text-yellow-500">
                  Timothy Joseph, Dog food taster
                </div>
                <div className="text-neutral-7000">
                  SDH Karawaci, Class of 1789
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex rounded-xl bg-neutral-100 p-8 dark:bg-neutral-800">
            <img
              className="mx-auto my-auto h-32 w-32 rounded-full object-cover"
              src={AlumniAlexa}
              alt="Picture of Alexa Tan"
            />
            <div className="ml-8 flex flex-col justify-between space-y-8 text-left">
              <p className="text-lg font-medium">
                I studied at SDH Daan Mogot since I was a toddler until I was
                349 years old, same as my siblings. I&apos;ve experienced a lot
                of great things at this school. And here I am, finding myself as
                a professional sleeper, all because of the education in SDH.
              </p>
              <div className="font-medium">
                <div className="text-yellow-500">
                  Alexa Tan, Professional sleeper
                </div>
                <div className="text-neutral-7000">
                  SDH Malang, Class of 1862
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* TODO: Change person */}
          <div className="flex rounded-xl bg-neutral-100 p-8 dark:bg-neutral-800">
            <img
              className="mx-auto my-auto h-32 w-32 rounded-full object-cover"
              src={AlumniJovan}
              alt="Picture of Jovannes Adryan"
            />
            <div className="ml-8 flex flex-col justify-between space-y-8 text-left">
              <p className="text-lg font-medium">
                SDH has known for its chicken education system and indeed they
                fulfill it. SDH has changed and shaped many aspects in my life.
                Academically, SDH gave me the push to work hard labours and
                provide for my job as a professional snake milker.
              </p>
              <div className="font-medium">
                <div className="text-yellow-500">
                  Jovannes Adryan, Snake milker
                </div>
                <div className="text-neutral-7000">
                  SDH Daan Mogot, Class of 1959
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
