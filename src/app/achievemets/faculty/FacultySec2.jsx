"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const awardsData = [
  {
    img: "/faculty_img/img1.jpg",
    title:
      "MR. RITESH SHARMA, PRINCIPAL OF PRUDENCE SCHOOL, SECTOR-22, DWARKA, DELHI, IS BESTOWED WITH PRESTIGIOUS INDIAN ICON AWARD 2024",
    date: "27 May,2024",
    desc: "Warmest congratulations to Mr. Ritesh Sharma, the esteemed Principal of Prudence School Dwarka 22, for receiving the prestigious Indian Icon Award 2024 in recognition of his exceptional leadership in education. His visionary guidance and unwavering dedication to excellence have significantly shaped the future of education. This well-deserved recognition celebrates a remarkable achievement! .",
  },
  {
    img: "/faculty_img/img2.jpg",
    title:
      "Mr. Ritesh Sharma, Principal of Prudence School, Sector-22, Dwarka, Delhi, is bestowed with a commendation certificate.",
    date: "18 Nov,2023  ",
    desc: "Mr. Ritesh Sharma, Principal of Prudence School, Sector-22, Dwarka, Delhi, is bestowed with a commendation certificate for his unwavering dedication to the advancement of the Hindi language through the International Hindi Olympiad organized by the Hindi Utkarsh Mandal, Delhi for the students of Prudence School, Dwarka Sector -22.",
  },
  {
    img: "/faculty_img/img3.jpg",
    title:
      "APPRECIATION CERTIFICATE",
    date: "07 Feb,2023   ",
    desc: "It is a matter of pride for us that one of our PGT ,Physical education, Mr Sushil Rana has been honoured by Mr. Harsh Arya ,Deputy Director of Education ,District North west B-I ,Zone -XI and Mr Rakesh Rahi ,Deputy Director of Education ,Zone-XI for invaluable contribution towards uplifting the standard of Physical Education and Sports at Annual Sports and Cultural function at Govt. Sarvodaya Vidayalya C-Block ,Saraswati Vihar, Delhi by Directoate of Education, Government of NCT of Delhi. ",
  },
  {
    img: "/faculty_img/img4.jpg",
    title:
      "SAVITRIBAI PHULE SAMMAN 2022",
    date: "10 Sep, 2022",
    desc: "The Prudence family congratulates Ms. Charu Sharma, Principal, Prudence School Dwarka Sector 16B for the much deserved , Savitribai Phule Samman 2022 , an award that brings honour and recognition to school.Ms. Rachel Wilson , TGT, English has also been acknowledged with Savitribai Phule Samman 2022.This award is for the Outstanding contribution in the field of Innovative pedagogies organised by Indraprastha School Sahodaya and Delhi Sahodaya schools complex",
  },
  {
    img: "/faculty_img/img5.jpg",
    title:
      "HONOURED WITH AN AWARD FOR EXCELLENCE IN PEDAGOGY & QUALITY EDUCATION ORGANISED BY ELDROK INDIA K-12 SUMMIT, 2022.",
    date: "10 Sep,2022 ",
    desc: "Congratulations to the leadership and team of Prudence School Dwarka Sector 22 for an award that brings honour and recognition to school.This award is for Excellence in Pedagogy & Quality Education organised by Eldrok India K-12 Summit, 2022. .",
  },
  {
    img: "/faculty_img/img6.jpg",
    title:
      "PRUDENCE SCHOOL DWARKA SECTOR 22 EARNED A PRESTIGIOUS RECOGNITION OF THE GREEN SCHOOL PROGRAMME AWARD FOR ITS TIRELESS EFFORTS TO MAKE THE EARTH A BETTER PLACE .",
    date: "02 Aug,2022 ",
    desc: "CONGRATULATIONS!!When the last tree is cut down, the last fish eaten ,and the last stream poisoned, you will realize that you can't eat money. On Saturday, 23 July 2022, Prudence School Dwarka Sector 22 earned a prestigious recognition of the Green School Programme award for its tireless efforts to make the Earth a better place . Increasing the awareness and sparking global conversations on protecting nature, tackling the climate crisis, and working together to shape a brighter future for us, the pragmatic Head of the institution, Mr. Ritesh Sharma initiated exemplary steps towards innovative solutions to environmental problems. The novelty of the Green Schools Programme lies in the fact that it moves beyond theories and textbooks and concentrates solely on experiential learning. This environmental education programme directed the students to be subtly sensitive to the environment through hands-on and thought provoking activities. The pupils of the school gathered knowledge about the consumption of natural resources within school campuses and are gradually becoming good environmental managers by deploying realistic solutions to reduce wastage of precious resources. Undoubtedly, the able guidance of the Chairman , Dr. G.S. Matharoo ,Dr Shalu Matharoo coupled by the sincere endeavours of the Principal, staff and students of the school made the world aware that where there is a will,there is a way.",
  },
  {
    img: "/faculty_img/img7.jpg",
    title: "Gaurav Sharma PET selected as the badminton TEAM COACH from Zone 21",
    date: "02 Apr,2022",
    desc: "Prudence Dwarka 22 feels immensely proud and congratulates its faculty, Gaurav Sharma PET for being selected as the badminton TEAM COACH from zone 21. He was also felicitated with a trophy.Keep soaring high! .",
  },
  {
    img: "/faculty_img/img8.jpg",
    title:
      "THE OUTSTANDING LEADERSHIP PRINCIPAL OF THE YEAR BY INTERNATIONAL EDUCATION AWARDS 2021",
    date: "26 Jan,2022 ",
    desc: "CONGRATULATIONS!!Ms. Charu Sharma, Principal of Prudence School Dwarka 16B honoured with Outstanding Leadership Principal of the Year by International Education Awards 2021",
  },
  {
    img: "/faculty_img/img9.jpg",
    title: "THE 17TH NATIONAL MASTER CHAMPIONSHIP 2021 WAS HELD ON 26TH NOVEMBER 2021 IN KARNATAKA.",
    date: "15 Jan,2022   ",
    desc: "No great achievement is possible without persistent work. The 17th National Master Championship 2021 was held on 26th November 2021 in Karnataka. Ms Reena Nishad, the swimming coach of our school, made our school proud by winning two Silver medals and two Bronze medals at National Level. She also won one Gold at the State level in Delhi State Master Championship 2021 by defeating the other competitors in the lanes next to her. We are proud of her achievement! ✨",
  },
  {
    img: "/faculty_img/img10.jpg",
    title: "शिक्षक सम्मान, 2021",
    date: "09 Dec,2021",
    desc: "4 दिसंबर 2021 को ‘न्यू सरस्वती हाउस प्रा. लि.’ ने ‘इंडिया हबीटेट सेंटर’ में ‘सरस्वती शिक्षक सम्मान 2021’ का आयोजन कर दिल्ली और दिल्ली के आसपास के राज्यों से लगभग 100 शिक्षकगण को सम्मानित करने का बीड़ा उठाया। प्रूडेन्स स्कूल,16बी, द्वारका से श्रीमती दीपांजली वलेचा को उनके अथक परिश्रम एवं महत्त्वपूर्ण योगदान के लिए सम्मानित किया गया।",
  },
   {
    img: "/faculty_img/img11.jpg",
    title:
      "CERTIFICATE OF HONOUR",
    date: "08 Nov,2021  ",
    desc: "Gandhi Smriti and Darshan Samiti felicitates our Principals with CERTIFICATE OF HONOUR for promoting Life Teachings, Values and Principles of Mahatma Gandhi .",
  },
   {
    img: "/faculty_img/img12.jpg",
    title:
      "STATE TEACHERS' AWARD 2020 BY GOVT OF NCT OF DELHI.",
    date: "29 Oct,2020  ",
    desc: "Congratulations to Dr. Chandra Bhanu Mishra, Principal, Prudence School, Ashok Vihar on receiving State Teachers' Award 2020 by Govt of NCT of Delhi.",
  },
];

export default function FacultySec2() {
  return (
    <section className="bg-[#f8f9fa] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
           <h2 className="text-orange-400 text-lg font-bold uppercase tracking-wide mb-2 px-4 md:px-10 md:text-5xl">
        FACULTY AWARDS_________
      </h2>
        </div>

        <div className="space-y-20">
          {awardsData.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-6 items-center md:items-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full md:w-1/3 transform transition duration-300"
              >
                <Image
                  src={award.img}
                  alt={award.title}
                  width={500}
                  height={300}
                  className="rounded-md shadow-lg w-full object-cover"
                />
              </motion.div>

              <div className="w-full md:w-2/3">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  {award.title}
                </h3>
                <p className="text-base text-orange-500 mt-2 mb-2">
                  {award.date}
                </p>
                <p className="text-gray-700">{award.desc}</p>

                <button className="mt-4 inline-block px-4 py-2 text-sm font-medium bg-pink-600 text-white rounded-full border border-transparent hover:bg-yellow-500 hover:text-black hover:border-yellow-600 transition duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}