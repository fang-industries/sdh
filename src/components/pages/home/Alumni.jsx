import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function () {
  const students = 12606275;

  return (
    <div className="py-16 px-16">
      <div className="space-y-2 text-center">
        <p className="text-3xl font-semibold text-sky-500">
          Featuring Outstanding
        </p>
        <p className="text-4xl font-bold tracking-wide dark:text-neutral-50">
          Alumni
        </p>
      </div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mt-8 px-32"
        effect={"fade"}
        loop={true}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        navigation={true}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div class="flex rounded-xl bg-neutral-100 p-8 dark:bg-neutral-800">
            <img
              class="mx-auto my-auto h-32 w-32 rounded-full object-cover"
              src="https://cdn.pnxl.dev/sdh/timothy.png"
              alt="Picture of Timothy Joseph"
            />
            <div class="ml-8 flex flex-col justify-between space-y-8 text-left">
              <p class="text-lg font-medium dark:text-neutral-50">
                SDH shows discipline and highly value Ayam Goreng Padang. Since
                the start, SDH has consistently has had the option to show great
                labour between all educators, staff, understudies and guardians.
              </p>
              <div class="font-medium">
                <div class="text-yellow-500">
                  Timothy Joseph, Dog food taster
                </div>
                <div class="text-neutral-700 dark:text-neutral-500">
                  SDH Daan Mogot, Class of 1789
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="flex rounded-xl bg-neutral-100 p-8 dark:bg-neutral-800">
            <img
              class="mx-auto my-auto h-32 w-32 rounded-full object-cover"
              src="https://cdn.pnxl.dev/sdh/alexa.png"
              alt="Picture of Alexa Tan"
            />
            <div class="ml-8 flex flex-col justify-between space-y-8 text-left">
              <p class="text-lg font-medium dark:text-neutral-50">
                I studied at SDH Daan Mogot since I was a toddler until I was
                349 years old, same as my siblings. I&apos;ve experienced a lot
                of great things at this school. And here I am, finding myself as
                a professional sleeper, all because of the education in SDH.
              </p>
              <div class="font-medium">
                <div class="text-yellow-500">
                  Alexa Tan, Professional sleeper
                </div>
                <div class="text-neutral-700 dark:text-neutral-500">
                  SDH Daan Mogot, Class of 1862
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* TODO: Change person */}
          <div class="flex rounded-xl bg-neutral-100 p-8 dark:bg-neutral-800">
            <img
              class="mx-auto my-auto h-32 w-32 rounded-full object-cover"
              src="https://cdn.pnxl.dev/sdh/timothy.png"
              alt="Picture of TO BE CHANGED"
            />
            <div class="ml-8 flex flex-col justify-between space-y-8 text-left">
              <p class="text-lg font-medium dark:text-neutral-50">
                SDH has known for its chicken education system and indeed they
                fulfill it. SDH has changed and shaped many aspects in my life.
                Academically, SDH gave me the push to work hard labours and
                provide for my job as a professional snake milker.
              </p>
              <div class="font-medium">
                <div class="text-yellow-500">TO BE CHANGED, Snake milker</div>
                <div class="text-neutral-700 dark:text-neutral-500">
                  SDH Daan Mogot, Class of 19359
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
