import React from "react";
import CommitteeTables from "./CommiteeTable.jsx";
import drChandrakantaKumar from "/committee/steering/drChandrakantaKumar.jpeg";
import drPuneetKumarMishra from "/committee/steering/drPuneetKumarMishra.jpeg";
import drtSrinivas from "/committee/steering/drtSrinivas.jpeg";

// advisory committee
import prasantmisra from "/committee/advisory/prasantmisra.jpeg";
import aloknath from "/committee/advisory/aloknath.jpeg";
import chengappa from "/committee/advisory/chengappa.jpeg";
import ashutosh from "/committee/advisory/ashutosh.jpeg";
import DrAbhishekAppaji from "/committee/advisory/DrAbhishekAppaji.jpeg";
import nippun from "/committee/advisory/nippun.jpeg";
import param from "/committee/advisory/param.jpeg";

// genreal chair
import udaykumar from "/committee/udaykumar.jpeg";

//conference chair
import drarun from "/committee/drarun.jpeg";

// cochair
import ashwin from "/committee/cochair/ashwin-new.jpg";
import gaythri from "/committee/cochair/gaythri.jpeg";
import snehasharma from "/committee/cochair/snehasharma.jpg";

// technical
import theodre from "/committee/technical/theodre.jpeg";
import gayathri from "/committee/technical/gayathri.jpeg";
import shirshendu from "/committee/technical/shirshendu.jpg";
import godfrey from "/committee/technical/godfrey.jpeg";
import amarbajapai from "/committee/technical/amarbajapai.jpeg";
import mahesh from "/committee/technical/mahesh.jpeg";
import anandi from "/committee/technical/anandi.jpeg";

// publicity commitee
import navya from "/committee/publicity/navya.jpeg";
import mansa from "/committee/publicity/mansa.jpg";
import puneeth from "/committee/publicity/puneeth.jpeg";
import nadeem from "/committee/publicity/nadeem.jpeg";
import owais from "/committee/publicity/owais.jpeg";

// organixing commitee

import arungalai from "/committee/organizing/arungalai.jpg";
import vinu from "/committee/organizing/vinu.jpeg";
import arunananth from "/committee/organizing/arunananth.jpeg";
import mukti from "/committee/organizing/mukti.jpeg";
import divya from "/committee/organizing/divya.png";
import rashmitha from "/committee/organizing/rashmitha.jpg";
import deepthi from "/committee/organizing/deepthi.png";
import santhosh from "/committee/organizing/santhosh.jpeg";
import kanmani from "/committee/organizing/kanmani.jpg";
import boss from "/committee/organizing/boss.jpeg";
import kokila from "/committee/organizing/kokila.jpeg";
import sharan from "/committee/organizing/sharan.png";
import shwetha from "/committee/organizing/shwetha.jpeg";
import jaishree from "/committee/organizing/jaishree.jpeg";
import jisy from "/committee/organizing/jisy.jpeg";
import sudharshan from "/committee/organizing/sudharshan.jpeg";
import supraja from "/committee/organizing/supraja2.jpeg";
import pushpa from "/committee/organizing/pushpa.jpeg";

const committeeSections = [
  {
    title: "Steering Committee",
    members: [
      {
        name: "Dr. Chandrakanta Kumar",
        role: "ISRO, Chair-2025, IEEE Bangalore Section  ",
        image: drChandrakantaKumar,
      },
      {
        name: "Dr. Puneet Kumar Mishra ",
        role: "Board of Governors, IEEE AESS Chair 2025",
        image: drPuneetKumarMishra,
      },
      {
        name: "Dr. T Srinivas ",
        role: "Professor IISC Bengaluru, Chair-2024 IEEE Bangalore Section",

        image: drtSrinivas,
      },
    ],
  },
  {
    title: "Advisory Committee ",
    members: [
      {
        name: "Dr. Aloknath De",
        role: "IEEE Bangalore Section Chair 2023",
        image: aloknath,
      },
      {
        name: "Dr. Chengappa Munjandira",
        role: "IEEE Bangalore Section Vice-Chair Technical Activities 2025",
        image: chengappa,
      },
      {
        name: "Dr. Ashutosh Kedar",
        role: "Execom Member IEEE Bangalore Section",
        image: ashutosh,
      },
      {
        name: "Dr. Abhishek Appaji",
        role: "Treasurer IEEE Education Society (EdSoc) 2025",
        image: DrAbhishekAppaji,
      },
      {
        name: "Dr. A. A. Nippun Kumaar",
        role: "Chair , IEEE RAS Bangalore Chapter 2025",
        image: nippun,
      },
      {
        name: "Dr. Parameshachari B D	",
        role: "Chair, IEEE CEDA Bangalore Chapter",
        image: param,
      },
    ],
  },
  // {
  //   title: "General Chair",
  //   members: [
  //     {
  //       name: "Dr. Udaya Kumar Reddy K R",
  //       role: "Dean School of Engineering , DSU",
  //       image: udaykumar,
  //     }
  //   ],

  // },
  {
    title: "Conference Chairs",
    members: [
      {
        name: "Dr. Arun Balodi",
        role: "Chairman-ECE, DSU",
        desig: "General Chair",
        image: drarun,
      },
      {
        name: "Dr. BM Ashwin Desai",
        role: "Associate Professor, DSU",
        desig: "Conference Co-Chair & TPC Chair",
        image: ashwin,
      },
      {
        name: "Dr. Sneha Sharma",
        role: "Assistant Professor, DSU",
        desig: "Finance Chair",
        image: snehasharma,
      },
      {
        name: "Dr. Pushpamala",
        role: "Associate Professor, DSU",
        desig: "Publication Chair",
        image: pushpa,
      },
      {
        name: "Dr. Navya R",
        role: "Assistant Professor, DSU",
        desig: "Publicity Chair",
        image: navya,
      }
    ],
  },

  {
    title: "Track Chairs",
    members: [
       {
        name: "Dr. Arungalai Vendan",
        role: "Professor, DSU",
        image: arungalai,
      },
      {
        name: "Dr. Theodre Chandra",
        role: "Associate Professor, DSU",
        image: theodre,
      },
      {
        name: "Dr. Gayathri K M",
        role: "Associate Professor, DSU",
        image: gayathri,
      },
      {
        name: "Dr. Vinu R",
        role: "Associate Professor, DSU",
        image: vinu,
      },
     
      {
        name: "Dr. BM Ashwin Desai",
        role: "Associate Professor, DSU",
        image: ashwin,
      },
    ],
  },
  // ,
  // {
  //   title: "Conference Co-Chairs",
  //   members: [
  // {
  //   name: "Dr. BM Ashwin Desai",
  //   role: "Associate Professor, DSU",
  //   image:   ashwin     ,
  // },
  //     {
  //       name:" Dr. Gaythri KM",
  //       role: "Associate Professor, DSU",
  //       image: gaythri,
  //     },

  //   ],

  // },
  // {
  //   title: "Finance Chair",
  //   members: [

  // {
  //   name: "Dr. Sneha Sharma",
  //   role: "Assistant Professor, DSU",
  //   image:snehasharma,
  // }
  //   ],

  // },
  // ,
  // {
  //   title: "Publication Chair",
  //   members: [

  //     {
  //       name: "Dr. Owais Ahmad Shah",
  //       role: "Assistant Professor, DSU",
  //       image: owais,
  //     }
  //   ],

  // },
  // ,
  // {
  //   title: "Publication Committee",
  //   members: [
  // {
  //   name: "Dr. Pushpamala",
  //   role: "Associate Professor, DSU",
  //   image: pushpa,
  // },
  //     {
  //       name: "Dr. Sneha Sharma",
  //       role: "Assistant Professor, DSU",
  //       image: snehasharma,
  //     }

  //   ],

  // },{
  //   title: "Technical Program Committee",
  //   members: [
  //     {
  //       name: "Dr. Theodre Chandra",
  //       role: "Associate Professor, DSU",

  //       image: theodre,
  //     },
  //     {
  //       name: "Dr. Gayathri K M",
  //       role: "Associate Professor, DSU",

  //       image: gayathri,
  //     },
  //      {
  //       name: "Dr. BM Ashwin Desai",
  //       role: "Associate Professor, DSU",
  //       image:   ashwin     ,
  //     },
  //     {
  //       name: "Dr. Shirshendu Roy",
  //       role: "Assistant Professor, DSU",

  //       image: shirshendu,
  //     },
  //     {
  //       name: "Dr. Godfrey",
  //       role: "Assistant Professor, DSU",
  //       image: godfrey,
  //     },
  //     {
  //       name: "Dr. Ambar Bajpai",
  //       role: "IEEE Bangalore Section Execom Member 2025",

  //       image: amarbajapai,
  //     },
  //     {
  //       name: "Dr. Mahesh A",
  //       role: "Treasurer, IEEE Bangalore Section 2025",

  //       image: mahesh,
  //     },
  //     {
  //       name: "Dr. Anandi Giridharan",
  //       role: "IEEE Bangalore Section Execom Membe 2025",

  //       image: anandi,
  //     }
  //   ],

  // },
  // {
  //   title: "Publicity Committee",
  //   members: [
  // {
  //   name: "Dr. Navya R",
  //   role: "Associate Professor, DSU",
  //   image:   navya     ,
  // },
  //     {
  //       name:" Mrs. Manasa K R",
  //       role: "Assistant Professor, DSU",
  //       image: mansa,
  //     },
  //     ,
  //     {
  //       name:"Mr. Puneeth S",
  //       role: "Assistant Professor, DSU",
  //       image: puneeth,
  //     },
  //     {
  //       name: "Mr. Nadeem Pasha",
  //       role: "Assitant Professor, DSU",
  //       image:nadeem,
  //     }
  //   ],

  // },
  // {
  //   "title": "Organizing committee",
  //   "members": [
  //     {
  //       "name": "Dr. Arungalai Vendan",
  //       "role": "Associate Professor, DSU",
  //       "image": arungalai
  //     },
  //     {
  //       "name": "Dr. Vinu R",
  //       "role": "Associate Professor, DSU",
  //       "image": vinu
  //     },
  //     {
  //       "name": "Dr. Arun Ananthanarayanan",
  //       "role": "Associate Professor, DSU",
  //       "image": arunananth
  //     },
  //     {
  //       "name": "Dr. Mukti Chaturvedi",
  //       "role": "Assistant Professor, DSU",
  //       "image":mukti
  //     },
  //     {
  //       "name": "Dr. Divyashree H B",
  //       "role": "Assistant Professor, DSU",
  //       "image": divya
  //     },
  //     {
  //       "name": "Dr. Rashmita Sahoo",
  //       "role": "Assistant Professor, DSU",
  //       "image": rashmitha
  //     },
  //     {
  //       "name": "Dr. Deepthi Chamkur V",
  //       "role": "Assistant Professor, DSU",
  //       "image":deepthi
  //     },
  //     {
  //       "name": "Dr. G Santhosh",
  //       "role": "Assistant Professor, DSU",
  //       "image": santhosh
  //     },
  //     {
  //       "name": "Mrs. Kanmani B.S",
  //       "role": "Assistant Professor, DSU",
  //       "image": kanmani
  //     },
  //     {
  //       "name": "Mr. Abhinav Karan",
  //       "role": "Assistant Professor, DSU",
  //       "image":boss
  //     },
  //     {
  //       "name": "Mrs. Kokila S",
  //       "role": "Assistant Professor, DSU",
  //       "image": kokila
  //     },
  //     {
  //       "name": "Mr. Sharanabasavaraj",
  //       "role": "Assistant Professor, DSU",
  //       "image": sharan
  //     },
  //     {
  //       "name": "Mrs. Shwetha M P",
  //       "role": "Assistant Professor, DSU",
  //       "image": shwetha
  //     },
  //     {
  //       "name": "Ms. Jaishree Ramadevaru",
  //       "role": "Assistant Professor, DSU",
  //       "image": jaishree
  //     },
  //     {
  //       "name": "Ms. Jisy N K",
  //       "role": "Assistant Professor, DSU",
  //       "image": jisy
  //     },
  //     {
  //       "name": "Mr. V Sudharsan",
  //       "role": "Assistant Professor, DSU",
  //       "image": sudharshan
  //     },
  //     {
  //       "name": "Dr. Supraja Eduru",
  //       "role": "Assistant Professor, DSU",
  //       "image": supraja
  //     }
  //   ]
  // }
];

const Committee = ({ title, members }) => {
  const length = members.length;

  let containerClass = "px-20 gap-6";

  // dynammic css

  if (length <= 2) {
    containerClass += " flex justify-center flex-wrap";
  } else {
    containerClass += " grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ";
  }

  return (
    <div className="text-center py-10 bg-pink-50">
      <h2 className="text-3xl font-bold mb-8 text-orange-600">{title}</h2>
      <div className={containerClass}>
        {members.map((member, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:scale-95 hover:shadow-lg m-4"
          >
            <div className="bg-gradient-to-b from-[#dcd8facb] to-[#00796B]0 p-3">
              <img
                src={member.image}
                className="h-60 w-60 object-contain mx-auto rounded-lg shadow-sm"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500 font-medium">
                {member.institution}
              </p>
              <p className="text-sm text-gray-900 font-semibold">
                {member.desig}
              </p>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Committees = () => {
  return (
    <div>
      {committeeSections.map((section, index) => (
        <Committee
          key={index}
          title={section.title}
          members={section.members}
        />
      ))}
      <CommitteeTables />
    </div>
  );
};

export default Committees;
