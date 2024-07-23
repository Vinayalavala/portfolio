
import Approach from "@/components/components/Approach";
import Educations from "@/components/components/Educations";
import Experience from "@/components/components/Experience";
import Footer from "@/components/components/Footer";
import Grid from "@/components/components/Grid";
import Hero from "@/components/components/Hero";
import RecentProjects from "@/components/components/RecentProjects";
import Techstack from "@/components/components/Techstack";
import { FloatingNav } from "@/components/components/ui/floating-navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5 ">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <RecentProjects/>
        <Techstack/>
        <Educations/>
        <Experience/>
        <Approach/>
        <Footer/>
      </div>
    </main>
  );
}
