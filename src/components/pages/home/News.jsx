import Card from "../../modules/pages/home/news/Card";

export default function () {
  return (
    <div className="py-16 px-16">
      <div className="space-y-2 text-center">
        <p className="text-3xl font-semibold text-sky-500">
          Latest News & Events
        </p>
        <p className="text-4xl font-bold tracking-wide dark:text-neutral-50">
          What&apos;s on SDH
        </p>
      </div>
      <div className="mt-8 grid grid-cols-3 gap-16">
        <Card
          img="https://raw.githubusercontent.com/sekolah-daging-habituasi/assets/main/newsletter/export/chicken-roast.png"
          topic="Parents webinar"
          title={`"The Secret Ingredients Of A Great Chicken Roast"`}
          desc="Kegiatan Webinar Sesion 4 kali ini akan lebih special karena dalam
          teknis penyajian acaranya dikemas..."
          news="/newsletter/chicken-roast"
          stats={{ views: "43", comments: "8", hearts: "35" }}
        />
        <Card
          img="https://raw.githubusercontent.com/sekolah-daging-habituasi/assets/main/newsletter/export/chicken-roast.png"
          topic="Parents webinar"
          title={`"The Secret Ingredients Of A Great Chicken Roast"`}
          desc="Kegiatan Webinar Sesion 4 kali ini akan lebih special karena dalam
          teknis penyajian acaranya dikemas..."
          news="/newsletter/chicken-roast"
          stats={{ views: "43", comments: "8", hearts: "35" }}
        />
        <Card
          img="https://raw.githubusercontent.com/sekolah-daging-habituasi/assets/main/newsletter/export/chicken-roast.png"
          topic="Parents webinar"
          title={`"The Secret Ingredients Of A Great Chicken Roast"`}
          desc="Kegiatan Webinar Sesion 4 kali ini akan lebih special karena dalam
          teknis penyajian acaranya dikemas..."
          news="/newsletter/chicken-roast"
          stats={{ views: "43", comments: "8", hearts: "35" }}
        />
      </div>
    </div>
  );
}
