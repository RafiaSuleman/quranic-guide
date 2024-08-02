import Aboutfooter from "@/components/Aboutfooter";
import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";
const page = () => {
  const items = [

    { qualification: "Certified from Ijazah institute " },
    { qualification: "Experties in Specializing in Tajweed, Tafsir, and memorization." },

  ];

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <User2 className="h-5 w-5" />
        About me
      </Badge>
      <div className="flex flex-col gap-3">
       
          <Heading>
            Qari and Spritual  <br /> Mentor, Based In Pakistan.
          </Heading>
   
        <FramerWrapper y={0} x={100} >
          <p className=" font-poppins text-xl w-full text-primary max-sm:text-lg">
          {/* As an experienced Qari and Quranic educator,
           I am dedicated to helping students of all ages 
           and backgrounds develop a deep, meaningful
            connection with the Quran. My approach combines
             traditional teaching methods with modern techniques
              to ensure that each student receives a comprehensive 
              and personalized learning experience. */}
              Assalamu Alaikum! I am Qari Imtiyaz, a qualified and experienced Quran teacher dedicated to spreading the knowledge and beauty of the Quran. With 5 years of teaching experience, I have helped many students of all ages and backgrounds in their journey to understand and memorize the Quran.
          </p>
        </FramerWrapper>
      </div>
      <FramerWrapper className="block" y={100} delay={0.31}>
        <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl">
          <Heart className="h-8 w-8" /> Qualification
        </h1>
        <div className="w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col">
          {items.map((val, indx) => {
            return (
              <div
                key={indx}
                className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start "
              >
                <Circle className="h-3 w-3" /> {val.qualification}
              </div>
            );
          })}
        </div>
      </FramerWrapper>
      <FramerWrapper className="w-full flex flex-row justify-between max-lg:flex-col " y={100} delay={0.30}>
        <Aboutfooter />
      </FramerWrapper>
     
    </div>
  );
};

export default page;
