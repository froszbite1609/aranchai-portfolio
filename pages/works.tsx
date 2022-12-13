import Image from "next/image";
import Link from "next/link";
import Content from "../components/contentLayout";
import MainLayout from "../components/mainLayout";
import managementProject from "../public/management.png";

export default function Works() {
  return (
    <div>
      <MainLayout>
        <Content>
          <h1 className="text-heebo font-bold text-2xl">Works</h1>
          <div className="grid gap-[1.5rem] grid-cols-2 max-md:grid-cols-1">
            <section className="mt-5 text-center">
              <Link href="https://github.com/froszbite1609/PHP-management">
                <Image
                  src={managementProject}
                  alt="This is my project when I was an intern at Lopburi Cancer Hospital."
                  width={300}
                  className="mx-auto"
                />
                <h1 className="font-heebo text-xl mt-5">Management</h1>
                <p>
                  A website management with login and register system. sort
                  people by level member and admin.
                </p>
              </Link>
            </section>
          </div>
        </Content>
      </MainLayout>
    </div>
  );
}
