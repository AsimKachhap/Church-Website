import Navbar from "@/components/Navbar";
import Image from "next/image";
import churchImage from "../assets/Church.jpg";

export default function Home() {
  return (
    <div className=" bg-white">
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

        <div className="hero-section hidden h-screen md:display md:flex justify-center items-center ">
          <div className="relative w-1/2 h-full bg-red-500">
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
              The Seeds of divine vision were sown in 1982, when Sanjo CMI
              Bhawan was established at Patel Nagar, Ghaziabad. The Mariam Nagar
              Complex, as we know it today, was born from the sacred vision of
              Rev. Fr. Gerald Padinjarepeedika CMI. Guided by God's providence,
              this dream began to take form in 1989 when a new campus was
              established in Mariam Nagar.
            </p>
            <p>ear</p>
          </div>
        </div>
      </div>
    </div>
  );
}
