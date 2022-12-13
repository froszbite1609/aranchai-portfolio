import Content from "../components/contentLayout";
import Image from "next/image";
import devProfile from "../public/profile.jpg";
import Link from "next/link";
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoFacebook,
} from "react-icons/io5/index";
import MainLayout from "../components/mainLayout";

export default function Home() {
  return (
    <div>
      <MainLayout>
        <h1 className="text-center font-heebo text-3xl mt-2">
          Aranchai Moonkum
        </h1>
        <p className="text-center font-heebo font-thin text-lg">
          Student at Winitsuksa School
        </p>
        <Content>
          {/* Profile */}
          <section className="mt-5">
            <Image
              src={devProfile}
              alt="This is a creator."
              className="w-44 mx-auto rounded-md"
            />
          </section>

          {/* About me */}
          <section className="mt-10">
            <h1 className="font-heebo font-bold text-2xl underline-offset-[6px] decoration-zinc-700 decoration-4 underline mb-2">
              About me
            </h1>
            <p className="text-justify indent-4 text-lg">
              My Name is Aranchai Moonkum, Nickname is Aing who want to be a
              full stack web developer. This portfolio website is made for keep
              my projects.
            </p>
          </section>

          {/* Hobbies */}
          <section className="mt-10">
            <h1 className="font-heebo font-bold text-2xl underline-offset-[6px] decoration-zinc-700 decoration-4 underline mb-2">
              Hobbies
            </h1>
            <p className="text-justify indent-4 text-lg">
              Music, Typing, Coding, Note-taking, Playing games
            </p>
          </section>

          {/* Socials */}
          <section className="mt-10">
            <h1 className="font-heebo font-bold text-2xl underline-offset-[6px] decoration-zinc-700 decoration-4 underline mb-2">
              Socials
            </h1>
            <ul>
              <li className="my-2">
                <Link
                  href="https://github.com/frozbite1609"
                  className="inline-flex px-4 py-2 font-heebo text-lg text-purple-500 hover:bg-[#a855f71f] dark:text-emerald-300 dark:hover:bg-[#6ee7b71f] rounded-md"
                >
                  <IoLogoGithub className="mr-2 mt-1" />
                  froszbite1609
                </Link>
              </li>
              <li className="my-2">
                <Link
                  href="https://www.instagram.com/aranaingg_n"
                  className="inline-flex px-4 py-2 font-heebo text-lg text-purple-500 hover:bg-[#a855f71f] dark:text-emerald-300 dark:hover:bg-[#6ee7b71f] rounded-md"
                >
                  <IoLogoInstagram className="mr-2 mt-1" />
                  aranaingg_n
                </Link>
              </li>
              <li className="my-2">
                <Link
                  href="https://www.facebook.com/profile.php?id=100005874489988"
                  className="inline-flex px-4 py-2 font-heebo text-lg text-purple-500 hover:bg-[#a855f71f] dark:text-emerald-300 dark:hover:bg-[#6ee7b71f] rounded-md"
                >
                  <IoLogoFacebook className="mr-2 mt-1" />
                  Aranchai Moonkum
                </Link>
              </li>
            </ul>
          </section>
        </Content>
      </MainLayout>
    </div>
  );
}
