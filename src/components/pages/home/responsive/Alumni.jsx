import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import AlumniAlexa from "../../../../assets/media/images/components/modules/pages/home/alumni/alexa.webp";
import AlumniJovan from "../../../../assets/media/images/components/modules/pages/home/alumni/jovan.webp";
import AlumniTimothy from "../../../../assets/media/images/components/modules/pages/home/alumni/timothy.webp";
import AlumniKathleen from "../../../../assets/media/images/components/modules/pages/home/alumni/kathleen.webp";

export default function () {
  const students = 12606275;

  return (
    <div className="block py-8 px-4 md:hidden">
      <div className="space-y-2 text-center">
        <p className="text-3xl font-semibold text-sky-500">
          Featuring Outstanding
        </p>
        <p className="text-4xl font-bold tracking-wide">Alumni</p>
      </div>
      <div className="mt-8 grid gap-8">
        <div className="rounded-xl bg-neutral-100 p-8 dark:bg-neutral-800">
          <img
            className="mx-auto mb-8 h-32 w-32 rounded-full object-cover"
            src={AlumniTimothy}
            alt="Picture of Timothy Joseph"
          />
          <div className="space-y-8 text-left">
            <p className="text-lg font-medium">
              SDH shows discipline and highly value Ayam Goreng Padang. Since
              the start, SDH has consistently has had the option to show great
              labour between all educators, staff, understudies and guardians.
              The instruction is extremely exhaustive as well as socially and
              obviously spiritually.
            </p>
            <div className="font-medium">
              <div className="text-yellow-500">Timothy Joseph</div>
              <div className="text-neutral-7000">
                SDH Karawaci, Class of 1789
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-neutral-100 p-8 dark:bg-neutral-800">
          <img
            className="mx-auto mb-8 h-32 w-32 rounded-full object-cover"
            src={AlumniAlexa}
            alt="Picture of Alexa Tan"
          />
          <div className="space-y-8 text-left">
            <p className="text-lg font-medium">
              I studied at SDH Daan Mogot since I was a toddler until I was 349
              years old, same as my siblings. Before my current occupation, I
              dreamed of becoming a professional stripper, but after my
              experience in this school, I decided that I would become a
              professional sleeper instead.
            </p>
            <div className="font-medium">
              <div className="text-yellow-500">Alexa Tan</div>
              <div className="text-neutral-7000">SDH Malang, Class of 1862</div>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-neutral-100 p-8 dark:bg-neutral-800">
          <img
            className="mx-auto mb-8 h-32 w-32 rounded-full object-cover"
            src={AlumniJovan}
            alt="Picture of Jovannes Adryan"
          />
          <div className="space-y-8 text-left">
            <p className="text-lg font-medium">
              SDH has known for its chicken education system and indeed they
              fulfill it. SDH has changed and shaped many aspects in my life.
              Academically, SDH gave me the push to work hard labours and
              provide for my job as a professional snake milker.
            </p>
            <div className="font-medium">
              <div className="text-yellow-500">Jovannes Adryan</div>
              <div className="text-neutral-7000">
                SDH Daan Mogot, Class of 1959
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-neutral-100 p-8 dark:bg-neutral-800">
          <img
            className="mx-auto mb-8 h-32 w-32 rounded-full object-cover"
            src={AlumniKathleen}
            alt="Picture of Kathleen Kaslim"
          />
          <div className="space-y-8 text-left">
            <p className="text-lg font-medium">
              There are places all over Palembang and in every province for
              dedicated roosters to serve the branch of corrupt metropolice
              department. I include several in my intern program every summer.
              Penguin Habituasi has gave me the push to become a Feng Shui
              consultant.
            </p>
            <div className="font-medium">
              <div className="text-yellow-500">
                Kathleen Kaslim, Feng Shui consultant
              </div>
              <div className="text-neutral-7000">
                SPH Palembang, Class of 1352
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
