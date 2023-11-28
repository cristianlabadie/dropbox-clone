import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <section className="flex flex-col lg:flex-row items-center bg-[#2B2929] dark:bg-slate-800">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-5xl font-bold">
            Welcome to Dropbox. <br />
            <br />
            Storing everything for you and your business needs. All in one place
          </h1>

          <p className="pb-20">
            Enhance your personal storage with Dropbox, offering a simple and
            efficient way to upload, organize, and access files from anywhere.
            Securely store important documents and media, and expiernce the
            convenience of easy file management and sharing in one centralized
            solution.
          </p>

          <Link
            href="/dashboard"
            className="flex group cursor-pointer bg-blue-500 p-5 w-fit"
          >
            Try it for free!
            <ArrowRight className="ml-10 group-hover:animate-pulse" />
          </Link>
        </div>

        <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10">
          <video autoPlay loop muted className="rounded-lg">
            <source
              src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"
              type="video/mp4"
            />
            Your browser does not support thie video tag
          </video>
        </div>
      </section>

      <p className="text-center font-bold text-xl pt-5">Disclaimer</p>
      <p className="text-center font-light p-2">
        This project was developed for only educational purpose, nothing else.
      </p>
    </main>
  );
}
