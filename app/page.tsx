import Image from "next/image";
import { Poppins } from "next/font/google";
import Hero from "./component/hero";
import Neumorphcard from "./component/neumorphcard";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800", "900"],
});

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <div className="my-10 flex flex-col bg-cover" style={{ backgroundImage: `url("/images/pattern (4).svg")` }}>
        <div className="mx-20 py-6">
          <Neumorphcard
            Title="Elevate Your Skills with Our Certifications"
            Description="Unlock new career opportunities with industry-recognized certifications from Master Certify. Gain essential skills and stand out in your field with our comprehensive training programs and expert guidance."
          />
        </div>
      </div>
    </>
  );
}
