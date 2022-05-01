import Card from "../../modules/pages/home/news/Card";

export default function () {
  return (
    <div className="py-8 px-4 md:py-16 md:px-16">
      <div className="space-y-2 text-center">
        <p className="text-3xl font-semibold text-sky-500">
          Latest News & Events
        </p>
        <p className="text-4xl font-bold tracking-wide">What&apos;s on SDH</p>
      </div>
      <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-16">
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
          img="https://raw.githubusercontent.com/sekolah-daging-habituasi/assets/main/newsletter/export/ambassadors-goreng-padang.png"
          topic="Song and Logo Contest"
          title={`Daging Habituasi Theme 2022-2023 "Be Ambassadors for...`}
          desc="School Theme SDH_SLH is a theme that unites the direction of self-development, curriculum (school ..."
          news="/newsletter/ambassadors-goreng-padang"
          stats={{ views: "66", comments: "32", hearts: "10" }}
        />
        <Card
          img="https://raw.githubusercontent.com/sekolah-daging-habituasi/assets/main/newsletter/export/proclaiming-beef.png"
          topic="Festivals"
          title={`Daging Habituasi School Subject Festival 2022`}
          desc="Hello Daging Community! Melalui SDH Subject Festival 2022, SDH rindu untuk mendukung pemahaman..."
          news="/newsletter/proclaiming-beef"
          stats={{ views: "51", comments: "49", hearts: "39" }}
        />
      </div>
    </div>
  );
}
