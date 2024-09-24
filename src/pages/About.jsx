import { assets } from "../assets/frontend_assets/assets";
import Title from "../component/Title";

function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            ex.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, a!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            impedit.
          </p>
        </div>
      </div>
      {/* <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div> */}
    </div>
  );
}

export default About;
