import React from "react";
import img1 from "../../../public/assets/serviceImage1.png";
import img2 from "../../../public/assets/serviceImage2.png";
import img3 from "../../../public/assets/serviceImage3.png";
import img4 from "../../../public/assets/serviceImage4.png";

const ServiceContent = () => {
  return (
    <section>
      <div className="flex flex-col gap-10 mb-10 px-4 lg:px-0">
        <div className="flex items-center gap-10 bg-neutral-100 flex-wrap card-shadow sm:max-w-[500px] mx-auto xl:max-w-full">
          <img src={img1.src} alt="" className="" />
          <div className="max-w-[40rem] mx-auto flex flex-col gap-4 xl:p-0 p-4 lg:text-base text-xs">
            <div className="font-black">
              Studying Abroad Simplified: Your Path to Global Education{" "}
            </div>
            <div>
              <span className="font-bold">Streamlining Study Abroad:</span> The
              process used to be complex, but we&apos;ve simplified it for you.
            </div>
            <div>
              <span className="font-bold">
                Introducing Study Abroad Services:
              </span>{" "}
              We make global education accessible. Begin your academic journey.
            </div>
            <div>
              <span className="font-bold">World-Class Universities:</span> Gain
              admission to renowned institutions across the globe.
            </div>
            <div>
              <span className="font-bold">Accessible Education:</span> We assist
              students from all corners of the world in achieving their
              educational dreams.
            </div>
            <div>
              <span className="font-bold">Expert Advisers:</span>
              Our team provides guidance on eligibility, course selection, and
              seamless applications.
            </div>
            <div>
              <span className="font-bold">Success Stories:</span> Join the ranks
              of our satisfied students who are studying abroad.
            </div>
            <div>
              <span className="font-bold">Unlock Your Future:</span> Explore
              global education opportunities with us!
            </div>
          </div>
        </div>

        <div className="flex items-center gap-10 bg-neutral-100 flex-wrap card-shadow sm:max-w-[500px] mx-auto xl:max-w-full">
          <img src={img2.src} alt="" className="" />
          <div className="max-w-[40rem] mx-auto flex flex-col gap-4 xl:p-0 p-4 lg:text-base text-xs">
            <div className="font-black">
              Visa and Passport Assistance: Your Gateway to Global Travel
            </div>
            <div>
              <span className="font-bold">
                {" "}
                Simplifying Visa and Passport Services:
              </span>{" "}
              Navigating the visa and passport process has never been easier.
            </div>
            <div>
              <span className="font-bold">Your Global Passport:</span> We
              facilitate your travel documentation, making your global
              adventures seamless.
            </div>
            <div>
              <span className="font-bold">Worldwide Access:</span> Our services
              cater to travelers from every corner of the globe, ensuring
              hassle-free journeys.
            </div>
            <div>
              <span className="font-bold">Expert Support:</span> Our team
              provides expert assistance, from visa applications to passport
              renewals.
            </div>
            <div>
              <span className="font-bold"> Satisfied Travelers:</span>
              Join our satisfied globetrotters who have experienced smooth
              travels with us.
            </div>
            <div>
              <span className="font-bold">
                Unlock Your Passport to the World:
              </span>{" "}
              Begin your journey with us today!
            </div>
          </div>
        </div>

        <div className="flex items-center gap-10 bg-neutral-100 flex-wrap card-shadow sm:max-w-[500px] mx-auto xl:max-w-full">
          <img src={img3.src} alt="" className="" />
          <div className="max-w-[40rem] mx-auto flex flex-col gap-4 xl:p-0 p-4 lg:text-base text-xs">
            <div className="font-black">
              Effortless Ticketing: Your Passage to Worldwide Travel
            </div>
            <div>
              <span className="font-bold">
                {" "}
                Streamlining Ticket Reservations:
              </span>{" "}
              Booking flights used to be complex, but we&apos;ve simplified it
              for you.
            </div>
            <div>
              <span className="font-bold">
                {" "}
                Introducing Ticketing Services:
              </span>{" "}
              Explore the world hassle-free. Your travel adventure begins here.
            </div>
            <div>
              <span className="font-bold"> Global Destinations: </span> Fly to
              your dream locations worldwide.
            </div>
            <div>
              <span className="font-bold"> Accessible Booking:</span> We cater
              to travelers from all corners of the world, ensuring seamless
              reservations.
            </div>
            <div>
              <span className="font-bold"> Expert Assistance:</span>
              Our team provides expert guidance, from booking to boarding.
            </div>
            <div>
              <span className="font-bold">Satisfied Travelers:</span> Join our
              delighted passengers who&apos;ve booked their flights with us.
            </div>
            <div>
              <span className="font-bold">Wings to Your Dreams:</span> Embark on
              your journey with us!
            </div>
          </div>
        </div>

        <div className="flex items-center lg:gap-10 gap-2 bg-neutral-100 flex-wrap card-shadow sm:max-w-[500px] mx-auto xl:max-w-full">
          <img src={img4.src} alt="" className="" />
          <div className="max-w-[40rem] mx-auto flex flex-col gap-4 xl:p-0 p-4 lg:text-base text-xs">
            <div className="font-black">
              Unforgettable Tours and Holiday Packages: Your Journey Starts Here
            </div>
            <div>
              <span className="font-bold">
                {" "}
                Simplifying Tour and Holiday Planning:
              </span>{" "}
              Crafting memorable trips used to be complex, but we&apos;ve
              simplified it for you.
            </div>
            <div>
              <span className="font-bold">
                {" "}
                Introducing Tour and Holiday Services:
              </span>{" "}
              Embark on incredible adventures with ease. Your dream vacation
              awaits.
            </div>
            <div>
              <span className="font-bold"> Global Exploration: </span> Discover
              captivating destinations and immersive experiences worldwide.
            </div>
            <div>
              <span className="font-bold"> Accessible Tours:</span> We cater to
              travelers from every corner of the world, ensuring unforgettable
              journeys.
            </div>
            <div>
              <span className="font-bold"> Expert Guidance:</span>
              Our team curates exceptional itineraries and unforgettable
              experiences.
            </div>
            <div>
              <span className="font-bold"> Happy Travelers:</span> Join our
              satisfied explorers who&apos;ve embarked on incredible tours and
              holidays with us.
            </div>
            <div>
              <span className="font-bold"> Start Your Journey:</span> Uncover
              the world&apos;s wonders with us!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceContent;
