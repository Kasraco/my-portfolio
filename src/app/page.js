import Photo from "@/components/Photo"
import Socials from "@/components/Socials"
import { Button } from "@/components/ui/button"
import { FiDownload } from 'react-icons/fi'

const Home = () => {
  return (
    <section className="h-full">
      <div class="container max-auto  w-full">
        <div class="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">Hello I`m <br /><span className="text-accent">Mostafa Rasouli</span></h1>
            <p className="max-w-[800px] mb-8 text-white/80">I excel at crafting elegant digital experiences, leveraging my expertise in web and desktop application development. Proficient in technologies such as Asp.Net Core, React.js, Next.js, Tailwind CSS, and MSSQL, I bring over 20 years of programming experience to the table. Security is paramount in all my projects, ensuring robust, safeguarded solutions.</p>
            {/* create button social media */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="flex items-center gap-2">
                <span >Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials containserStyle="flex  gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section >
  )
}

export default Home