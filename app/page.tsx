import About from "@/components/About";
import { EmailListBlock } from "@/components/Email";
import Header from "@/components/Header";
import { HeaderBlock } from "@/components/HeaderBlock";
import { Location } from "@/components/Location";
import { SocialBlock } from "@/components/SocialBlock";
import SquigglyLines from "@/components/SquigglyLines";
const Home = () => {
  return (
    <>
    {/* <Header /> */}
    <div className="min-h-screen bg-zinc-900 px-4 py-12  text-zinc-50 relative">
   
      <div className="mt-24">
      {/* <h1 className="text-7xl text-center mb-12 font-semibold">
       
      </h1> */}
        <h1 className="text-7xl text-center mb-12 font-semibold font-display tracking-normal text-gray-300 sm:text-7xl">
            Welcome to 
          <span className="relative whitespace-nowrap text-blue-600">
            <SquigglyLines />
            <span className="relative"> Frontend</span>{" "}
        
          </span>
          <span className="text-blue-600">Arena.</span>
        </h1>
      <div className="mx-auto max-w-4xl grid grid-cols-12 gap-4 grid-flow-dense">
        <HeaderBlock />
        <SocialBlock />
        <About />
        <Location />
        <EmailListBlock />
      </div>
      </div>
    </div>
    </>
  );
};

export default Home;
