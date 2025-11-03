import Navbar from "@/components/Navbar";
import Image from "next/image";
import churchImage from "../assets/Church.jpg";

export default function Home() {
  return (
    <div className=" bg-background text-text-primary">
      <div className="">
        <Navbar />
        <div className="hero-section-mobile md:hidden">
          <Image
            src={churchImage}
            alt="Picture of St. Mary's Assumption Church"
            fill
            className="object-cover"
          />
        </div>

        <div className="hero-section hidden h-screen md:display md:flex justify-center items-center  ">
          <div className="relative w-1/2 h-full ">
            <Image
              src={churchImage}
              alt="Picture of St. Mary's Assumption Church"
              fill
              className="object-cover"
            />
          </div>
          <div className=" w-1/2 flex flex-col items-center justify-center p-8">
            <h2>About the Church</h2>
            <p>
              St. Mary’s Assumption Church, Mariam Nagar, Ghaziabad, is a
              vibrant parish under the Diocese of Meerut, served by the
              Carmelites of Mary Immaculate (CMI) Fathers.
            </p>
            <p>
              Established in 2007, the church continues the rich legacy of faith
              that began with the CMI mission at Patel Nagar in 1982.
            </p>
            <p>
              Home to over 200 families, it unites people from diverse
              communities in worship, service, and Catholic education.
            </p>
            <p>
              A center of spiritual growth, it stands beside St. Joseph’s
              Academy, fostering faith and learning in the heart of Mariam
              Nagar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
