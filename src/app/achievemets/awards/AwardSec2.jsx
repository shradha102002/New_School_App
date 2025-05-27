"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const awardsData = [
  {
    img: "/award_img/img1.jpg",
    title:
      "DR. G. S. MATHAROO, FOR BEING FELICITATED WITH THE BLACKSWAN AWARD FOR EXCELLENCE IN EDUCATION 2023-24 BY ASIAONE.",
    date: "24 Aug, 2024",
    desc: "Congratulations to our Honourable Chairman, Dr. G. S. Matharoo, for being felicitated with the Blackswan Award for Excellence in Education 2023-24 by AsiaOne. Heartiest congratulations to the Prudence family for this achievement!",
  },
  {
    img: "/award_img/img2.jpg",
    title:
      "PRUDENCE SCHOOL, ASHOK VIHAR BESTOWED WITH SCHOOL EXCELLENCE AWARD -2022 BY BRAINFEED.",
    date: "10 Sep, 2022",
    desc: "Congratulations! Prudence School, Ashok Vihar bestowed with School Excellence Award -2022 by Brainfeed.",
  },
  {
    img: "/award_img/img3.jpg",
    title:
      "HONOURED WITH AN AWARD FOR EXCELLENCE IN PEDAGOGY & QUALITY EDUCATION ORGANISED BY ELDROK INDIA K-12 SUMMIT, 2022.",
    date: "10 Sep, 2022",
    desc: "This award for Excellence in Pedagogy & Quality Education organised by Eldrok India K-12 Summit, 2022.",
  },
  {
    img: "/award_img/img4.jpg",
    title:
      "PRUDENCE SCHOOL PITAMPURA FOR RASHTRA SEWA SAMMAN THAT BRINGS HONOUR AND RECOGNITION TO SCHOOL",
    date: "10 Sep, 2022",
    desc: "Congratulations to the leadership and team of Prudence School Dwarka Sector 22 for an award that brings honour and recognition to school. This award for Outstanding performance in the field of Education organised by Public Service and Safety Trust.",
  },
  {
    img: "/award_img/img.jpg",
    title:
      "DR. G. S. MATHAROO, FOR BEING FELICITATED WITH THE MOST INFLUENTIAL LEADER AWARD BY ASIAONE.",
    date: "12 Apr, 2022",
    desc: "Congratulations to our respected Chairman Dr. G. S. MATHAROO, for being felicitated with the MOST INFLUENTIAL LEADER award by AsiaOne.",
  },
  {
    img: "/award_img/img5.jpg",
    title:
      "STAR RATED SCHOOL OF INDIA IN THE BENCHMARK INNOVATIVE PRACTICES OF ACADEMIC EXCELLENCE BY CED FOUNDATION.",
    date: "22 Mar, 2022",
    desc: "We feel proud to share that Prudence School has been felicitated for being Star Rated School of India in the benchmark Innovative Practices of Academic Excellence by CED Foundation. Heartiest Congratulations to the Prudence family for this achievement.",
  },
  {
    img: "/award_img/img6.jpg",
    title: "ICON OF EXCELLENCE BY TIMES GROUP.",
    date: "26 Feb, 2022",
    desc: "Congratulations to our respected Chairman Dr. G. S. Matharoo for being honoured as an ICON OF EXCELLENCE by TIMES GROUP.",
  },
  {
    img: "/award_img/img7.jpg",
    title:
      "THE EXCELLENCE BY EDUCATION WORLD IN THE INDIA SCHOOL RANKINGS 2021-22.",
    date: "21 Dec, 2021",
    desc: "With immense joy and gratitude, we are happy to share that Prudence School, Ashok Vihar has been ranked #4 in India, #3 in Delhi NCR and #1 in Delhi for Steam Education Excellence by Education World in the India School Rankings 2021-22. This is a testimony of excellence in education of our school. We also thank and acknowledge the entire Prudence Fraternity for making it happen.",
  },
  {
    img: "/award_img/img8.jpg",
    title: "MOST RESPECTED EDUCATION BRAND 2021",
    date: "21 Dec, 2021",
    desc: "With immense joy and gratitude, we are happy to share that Prudence Group of Schools have been ranked #9 in India for being the Most Respected Education Brand by Education World in the India School Rankings 2021-22. This is a testimony of excellence in education of our schools. We also thank and acknowledge the entire Prudence Fraternity for making it happen.",
  },
  {
    img: "/award_img/img9.jpg",
    title: "CHAIRMAN DR. G.S. MATHAROO HONOURED WITH ICONIC AWARD 2021",
    date: "05 Feb, 2021",
    desc: "Our Honourable Chairman, Dr. G.S. Matharoo has been felicitated with the prestigious Iconic Award 2021 for pioneering a new paradigm of excellence in School Education by Dainik Jagran inext. The award was presented by Honourable Minister of Culture and Tourism, Shri Prahlad Singh Patel. Heartiest Congratulations to the Prudence family for this achievement.",
  },
];
export default function AwardSec2() {
  return (
    <section className="bg-[#f8f9fa] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-orange-400 text-lg font-bold uppercase tracking-wide mb-2 px-4 md:px-10 md:text-5xl">
        AWARDS & ACCOLADES _________
      </h2>
        </div>

        <div className="space-y-20">
          {awardsData.map((award, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
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
