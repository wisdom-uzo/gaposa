import React from "react";
import { TitleText } from "../components";
const speakers = [
    {
      name: "Prof. Sodiya A. S.",
      title: "Lead Paper Presenter",
      affiliation: "Federal University of Agriculture, Abeokuta",
      bio: 'The Lead paper presenter is a Professor of Computer Science and Information Security in the Department of Computer Science, Federal University of Agriculture, Abeokuta, Ogun state, Nigeria. He has over twenty years of high impact Research in Cyber Security, Attack/Intrusion Detection, Authentication Systems, Cryptography, Systems’ Security, Privacy Protection, and Security of Distributed Systems. He presently serves as Postgraduate External Examiner/Assessor in about five universities in Nigeria and abroad.',
        bio2: 'Prof Sodiya is a Fellow and the current President of the Nigeria Computer Society (NCS). He is a prominent member of Computer Professionals of Nigeria (CPN), a member of Global Commission for the Stability of Cyberspace and several other reputable professional organizations.',
        image: "sp1.jpeg"
    },
    {
      name: "Dr. (Mrs.) Jumoke Soyemi",
      title: "Keynote Address Speaker",
      affiliation: "Federal Polytechnic Ilaro",
      bio:"The Key note Address speaker is the Director, Centre of Information and Communication Technology, Federal Polytechnic Ilaro, Ogun state, Nigeria. She holds a PhD in Computer Science with a special interest in bioinformatics. Dr. (Mrs) Soyemi has over twenty years of extensive and impactful teaching and research with many accolades won. She is a reviewer to two Scopus indexed journals, Journal of Applied Physical Science, University of Cape Coast, Ghana as well as many journals locally. ",
        bio2: 'Dr. (Mrs.) Soyemi is a member of American Society of Human Genetics, Nigeria Bioinformatics and Genomics Network, African Society of Human Genetics, International Society for Computational Biology/ African Society for Bioinformatics and Computational Biology and many other learned professional bodies. She is also a Fellow of the Nigeria Computer Society (NCS) and a member of Computer Professionals of Nigeria (CPN).',
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
  
  const Speaker = ({ name, title, affiliation, bio, bio2, image }) => {
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
        <p className="text-gray-700 mb-2">{bio}</p>
    
        <p className="text-gray-700">{bio2}</p>
      </div>
    );
  };
  
  
export default MeetOurSpeakers;
