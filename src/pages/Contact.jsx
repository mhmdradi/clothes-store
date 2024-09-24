import { assets } from "../assets/frontend_assets/assets";
import Title from "../component/Title";

function Contact() {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONATCT US"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          src={assets.contact_img}
          className="w-full md:max-w-[480px]"
          alt=""
        />
        <div className="flex flex-col justify-center items-center gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            54709 wilims station <br /> suite 350, washintagton
          </p>
          <p className="text-gray-500">
            {" "}
            tel: (415) 555-0132 <br /> email admin@forever.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
