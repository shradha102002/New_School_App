"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const awardsData = [
  {
    img: "/news_img/img1.jpg",
    title:
      "State Topper | National Standard Examination in Junior Science 2024",
    date: "05 Mar,2025",
    desc: "Heartiest Congratulations! We are thrilled to felicitate our achiever, Garv Ahuja of Grade 10, for his outstanding accomplishment in National Standard Examination in Junior Science -2024.Prudence School, Ashok Vihar, takes immense pride in your dedication to excellence and commitment to achieving greatness. Your hard work and perseverance have truly paid off!Keep shining, Garv! We wish you continued success and achievements in all your future endeavors.",
  },
  {
    img: "/news_img/img2.jpg",
    title:
      "Celebrated Rakshabandhan with the Air Vice Marshal Rajeev Sharma",
    date: "19 Aug,2024",
    desc: "Rakshabandhan is not just a tradition; it’s a celebration of the bonds that protect and strengthen us. Our students of Prudence School, Ashok Vihar celebrated Rakshabandhan with the Air Vice Marshal Rajeev Sharma and his team of Air Force officers, marking a special moment of unity and respect. The students tied rakhis on the wrist of all officers, symbolizing their gratitude and the bond of protection. The Air Vice Marshal expressed his admiration for the students and highlighted the significance of such cultural traditions in fostering strong values among the future generations. ",
  },
  {
    img: "/news_img/img3.jpg",
    title:
      "Visit to DOE Officials on the occassion of Rakshabandhan",
    date: "19 Aug,2024  ",
    desc: "Students and faculty members from Prudence School, Ashok Vihar, visited the Directorate of Education to celebrate the auspicious festival of Rakshabandhan, a symbol of love, unity, and cultural bonding. The officials warmly welcomed the group. Students tied colorful rakhis and presented sweets, paintings, handmade planters and bouquets of flowers to dignitaries 𝐒𝐡𝐫𝐢 𝐀𝐬𝐡𝐨𝐤 𝐊𝐮𝐦𝐚𝐫 𝐈𝐀𝐒 , 𝐒𝐞𝐜𝐫𝐞𝐭𝐚𝐫𝐲 , 𝐃𝐨𝐄, 𝐍𝐂𝐓 , 𝐃𝐞𝐥𝐡𝐢 𝐚𝐧𝐝 * 𝐑𝐚𝐦 𝐍𝐢𝐰𝐚𝐬 𝐒𝐡𝐚𝐫𝐦𝐚 𝐈𝐀𝐒 , 𝐃𝐢𝐫𝐞𝐜𝐭𝐨𝐫 𝐨𝐟 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 𝐍𝐂𝐓 𝐃𝐞𝐥𝐡𝐢,𝐂𝐨𝐦𝐦𝐢𝐬𝐬𝐢𝐨𝐧𝐞𝐫, 𝐋𝐚𝐛𝐨𝐮𝐫 𝐚𝐧𝐝 𝐃𝐢𝐫𝐞𝐜𝐭𝐨𝐫 (𝐃𝐈𝐏)-𝐜𝐮𝐦-𝐒𝐩𝐞𝐜𝐢𝐚𝐥 𝐒𝐞𝐜𝐫𝐞𝐭𝐚𝐫𝐲, 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 & 𝐏𝐮𝐛𝐥𝐢𝐜𝐢𝐭𝐲. In return, students expressed their gratitude for the education system's role in shaping them into responsible citizens and recited a poem about Rakshabandhan. The visit to the DOE reinforced the values of love, protection, and mutual respect. It was a memorable experience for all involved. ",
  },
  {
    img: "/news_img/img4.jpg",
    title:
      "Celebrated Rakshabandhan with Honourable Prime Minister of India, Shri Narendra Modi",
    date: "19 Aug,2024   ",
    desc: "Leadership is the art of giving people a platform for spreading ideas that work. On the auspicious occasion of Raksha Bandhan, students of Prudence Schools Dwarka 16B, Dwarka22 and Ashok Vihar had the privilege of visiting the Honourable Prime Minister of India, Shri Narendra Modi. Accompanied by their teacher, the students visited the Prime Minister to tie the sacred thread of Rakhi, fostering a sense of national pride and responsibility. This initiative, undertaken by the school, aimed to provide students with a unique chance to share their innovative ideas and visions for a developed India. The Prime Minister's gracious willingness to listen to their thoughts and share valuable insights on responsible citizenship was a testament to the school's efforts in nurturing inquisitive and enlightened minds. He commended the school for instilling exemplary values in its students. This inspiring visit to PM residence left an indelible mark on our students, who departed with a renewed sense of purpose and a promise to contribute towards building a self-reliant India.",
  },
  {
    img: "/news_img/img5.jpg",
    title:
      "Visit to celebrate Raksha Bandhan with the esteemed Secretary, Mr. Himanshu Gupta (CBSE)",
    date: "19 Aug,2024   ",
    desc: "On 13th August, students from Prudence School, Dwarka Sector 22, visited the CBSE Head Office to celebrate Raksha Bandhan with the esteemed Secretary, Mr. Himanshu Gupta. They expressed their gratitude to the honourable Chairman, Dr. G.S. Matharoo and dignified Vice Chairperson, Dr. Shalu Matharoo for providing this memorable opportunity. The respected Principal, Mr. Ritesh Sharma inspired them with a message on unity and respect, emphasizing these values within the educational community. Continuing their enriching journey, on 16th August, the students visited the Directorate of Education (DOE) office at Old Secretariat. There, they had the honour of meeting the Director of Education, Mr. R.N. Sharma and the Secretary, Mr. Ashok Kumar, further reinforcing these core values.",
  },
  {
    img: "/news_img/img6.jpg",
    title:
      "Visit to Honourable Prime Minister Shri Narendra Modi Ji",
    date: "19 Aug,2024 ",
    desc: "Our proud Prudenites celebrate Raksha Bandhan with Honourable Prime Minister Shri Narendra Modi ji.",
  },
  {
    img: "/news_img/img7.jpg",
    title: "Mr. Ritesh Sharma, Principal of Prudence School, Sector-22, Dwarka, Delhi, is bestowed with prestigious Indian Icon Award 2024",
    date: "27 May,2024",
    desc: "Warmest congratulations to Mr. Ritesh Sharma, the esteemed Principal of Prudence School Dwarka 22, for receiving the prestigious Indian Icon Award 2024 in recognition of his exceptional leadership in education. His visionary guidance and unwavering dedication to excellence have significantly shaped the future of education. This well-deserved recognition celebrates a remarkable achievement!",
  },
  {
    img: "/news_img/img8.jpg",
    title:
      "Prudence, DW-22 proudly congratulates its achievers of the Mukhyamantri Vigyan Pratibha Pariksha 2023-24 (formerly JSTSE).",
    date: "23 May,2024",
    desc: "Prudence, DW-22 proudly congratulates its achievers of the Mukhyamantri Vigyan Pratibha Pariksha 2023-24 (formerly JSTSE).The honourable Chairman Sir Dr. G.S. Matharoo, dignified Vice Chairperson Dr. Shalu Matharoo, and respected Principal Mr. Ritesh Sharma praised the students for their dedication and hard work that have yielded outstanding results.",
  },
  {
    img: "/news_img/img9.jpg",
    title: "PRUDENCE, Ashok Vihar PROUDLY CONGRATULATES Aalya Gupta, a student of grade X-H for representing Delhi in the 3rd Taekwondo (Kyorugi & Poomsae) Junior & Senior National Championship 2024.",
    date: "13 Apr,2024",
    desc: "Congratulations to Aalya Gupta of grade X-H for representing Delhi in the 3rd Taekwondo (Kyorugi & Poomsae) Junior & Senior National Championship 2024 in the 55 kg girls' category at Jawaharlal Nehru Indoor Stadium, Cuttack, Odisha, from June 28th to 30th, 2024. She secured the Bronze medal in Junior Kyorugi. Over 250 participants from various states also participated in the event.",
  },
  {
    img: "/news_img/img10.jpg",
    title: "PRUDENCE, Ashok Vihar PROUDLY CONGRATULATES Natania Jain, a student of Grade X-H represented the North District (Delhi-NCR) Table Tennis Girls team at the JITO National Games",
    date: "13 Apr,2024   ",
    desc: "Congratulations to Natania Jain from Grade X-H She represented the North District (Delhi-NCR) Table Tennis Girls team at the JITO National Games held at the Dravid-Padukone Centre for Sports Excellence in Bangalore from May 23rd to May 26th, 2024. Organized by JITO (Jain International Trade Organisation) Bangalore, India, the event saw participation from over 150 players nationwide. Natania Jain excelled by winning 5 silver medals across the Under-15, Under-17, and Under-19 age categories in both singles and doubles matches.",
  },
   {
    img: "/news_img/img11.jpg",
    title:
      "PRUDENCE, Ashok Vihar PROUDLY CONGRATULATES Aditya Agarwal, a student of Grade XI-F for an exemplary performance in Badminton.",
    date: "13 Apr,2024 ",
    desc: "Aditya Agarwal, a student of Grade XI-F at Prudence School Ashok Vihar, has showcased an exemplary performance in Badminton. He has been selected to participate in the Asia Junior Sports Exchange Games 2024 in Tokyo, Japan, scheduled from August 27th to September 2nd, 2024. This prestigious competition is organized and sponsored by the Tokyo Metropolitan Government, Japan. Aditya will be accompanied by officials from the DOE, Sports Branch, GNCT of Delhi, India.",
  },
   {
    img: "/news_img/img12.jpg",
    title:
      "Prudence congratulates its IIT JEE (ADVANCED) 2022 Rank holders",
    date: "14 Sep,2022  ",
    desc: "Prudence congratulates its IIT JEE (ADVANCED) 2022 Rank holders #JEEAdvanced #JEEAdvanced2022",
  },
   {
    img: "/news_img/img13.jpg",
    title:
      "Prudence School Pitampura for Rashtra Sewa Samman that brings honour and recognition to school.",
    date: "10 Sep,2022  ",
    desc: "Congratulations to the leadership and team of  Prudence School Pitampura for Rashtra Sewa Samman that brings honour and recognition to school.This award is for Outstanding performance in the field of Education organised by Public Service and Safety Trust.",
  },
   {
    img: "/news_img/img14.jpg",
    title:
      "Honoured with an award for Excellence in Pedagogy & Quality Education organised by Eldrok India K-12 Summit, 2022.",
    date: "10 Sep,2022",
    desc: "Congratulations to the leadership and team of  Prudence School Dwarka Sector 22 for an award that brings honour and recognition to school.This award is for Excellence in Pedagogy & Quality Education organised by Eldrok India K-12 Summit, 2022.",
  },
   {
    img: "/news_img/img15.jpg",
    title:
      "Prudence congratulates its IIT JEE (ADVANCED) 2022 Rank holders",
    date: "14 Sep,2022  ",
    desc: "The Prudence family congratulates Ms. Charu Sharma, Principal, Prudence School Dwarka Sector 16B for the much deserved , Savitribai Phule Samman 2022 ,  an award that brings honour and recognition to school.Ms. Rachel Wilson , TGT, English has also been acknowledged with Savitribai Phule Samman 2022.This award is for the Outstanding contribution in  the field of Innovative pedagogies organised by Indraprastha School Sahodaya and Delhi Sahodaya schools complex",
  },
];

export default function NewsSec2() {
  return (
    <section className="bg-[#f8f9fa] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
         <h2 className="text-orange-400 text-lg font-bold uppercase tracking-wide mb-2 px-4 md:px-10 md:text-5xl">
        NEWS & UPDATES_________
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