import React from "react";
import Footer from "./Footer";
import mappin from "/images/mappin.svg";
import AbtVerbose from "./AbtVerbose.jsx";
import Tracks from "./Tracks.jsx";
import Video from "./Video.jsx";
import video from "/images/video.mp4";

const About = () => {
  return (
    <section className="h-full bg-gradient-to-r " id="about">
      <div className="mx-auto pt-5 ml-8 pl-6 pr-5">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
          About the Conference
        </h2>
        <AbtVerbose /> {/* Verbose Section */}
        <Tracks />
        <Video src={video} />
        {/* flex-div with oraganizer one side and veue on other side */}
        <div className="bg-none shadow-lg rounded-2xl p-6 hover:shadow-xl transition bg-white mb-8">
          <h3 className="text-2xl font-bold text-blue-800 mb-3 flex justify-center">
            Contact & Venue
          </h3>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <h4 className="text-2xl font-bold  text-orange-600 mb-3">
                Contact
              </h4>
              <h4 className="text-md font-bold  text-orange-600 ">
                Oraganizing Committee
              </h4>
              <ul className="text-black">
                <li className="text-xl font-semibold">
                  Department of Electronics And Communication
                </li>
                <li className="text-md font-semibold mb-2">
                  Dayananda Sagar Univeristy
                </li>

                <li className="text-black font-semibold">
                  email :{" "}
                  <a href="mailto:centcon@dsu.edu.in">centcon@dsu.edu.in</a>{" "}
                </li>
              </ul>
            </div>
            {/* venue section with address link to dsucampus harohalli   */}
            <div className="w-full md:w-1/2">
              <h4 className="text-2xl font-bold text-orange-600 mb-3">Venue</h4>
              <div className="addMap flex">
                <did className="imagepinmap align-middle ">
                  <a href="https://maps.app.goo.gl/A8f3w5wD62Y21JdD8">
                    <img
                      src={mappin}
                      alt="dropicon"
                      className="inline-block pr-3 pt-6 h-15 "
                    />
                  </a>
                </did>
                <div>
                  <a
                    href="https://maps.app.goo.gl/A8f3w5wD62Y21JdD8"
                    className=""
                  >
                    <p className="text-xl font-semibold text-blue-900">
                      Dayananda Sagar University <br />
                      Devarakaggalahalli, Harohalli, Kanakapura Road <br />{" "}
                      Bengaluru South District - 562112
                    </p>

                    <div className="dirtodsu text-blue-900">
                      {/* <p className="text-lg  ">Kanakapura Road, Bengaluru South District - 562112</p> */}
                      {/* <p className="text-lg  ">Bengaluru – 562 112, Karnataka, India. </p> */}
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </section>
  );
};

export default About;
