import React from "react";
import { TitleText } from "../components";
const speakers = [
    {
      name: "Prof. Sodiya A. S.",
      title: "Lead Paper Presenter",
      affiliation: "Federal University of Agriculture, Abeokuta",
      bio:
        "Prof. Sodiya A. S. is a Professor of Computer Science and Information Security with over twenty years of high impact research in Cyber Security, Attack/Intrusion Detection, Authentication Systems, Cryptography, and more. He is a Fellow and the current President of the Nigeria Computer Society (NCS).",
      image: "sp1.jpeg"
    },
    {
      name: "Dr. (Mrs.) Jumoke Soyemi",
      title: "Keynote Address Speaker",
      affiliation: "Federal Polytechnic Ilaro",
      bio:
        "Dr. (Mrs.) Jumoke Soyemi is the Director of the Centre of Information and Communication Technology at Federal Polytechnic Ilaro. She holds a PhD in Computer Science with a special interest in bioinformatics and has over twenty years of extensive and impactful teaching and research. She is a member of several professional organizations including the Nigeria Computer Society (NCS) and the American Society of Human Genetics.",
      image: "sp2.jpeg"
    }
  ];
  
  const MeetOurSpeakers = () => {
    return (
      <section className="bg-white py-20 px-5">
        <div className="container mx-auto">
          <TitleText title={<>Meet Our Speakers </>} textStyles='text-center' />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {speakers.map((speaker, index) => (
              <Speaker key={index} {...speaker} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  const Speaker = ({ name, title, affiliation, bio, image }) => {
    return (
      <div className="bg-gray-100 p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <img
            src={image}
            alt={`${name}'s profile photo`}
            className="w-48 h-48 object-cover rounded-full mr-6"
          />
          <div>
            <h3 className="text-2xl font-semibold mb-1">{name}</h3>
            <p className="text-gray-600 text-lg mb-2">{title}</p>
            <p className="text-gray-600">{affiliation}</p>
          </div>
        </div>
        <p className="text-gray-700">{bio}</p>
      </div>
    );
  };
  
  
export default MeetOurSpeakers;
