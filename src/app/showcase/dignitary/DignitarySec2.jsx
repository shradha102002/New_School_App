'use client';
import Image from "next/image";
import { motion } from 'framer-motion';

const dignitaryData = [
  {
    title: "Our proud Prudenites celebrate Raksha Bandhan with Honourable Prime Minister Shri Narendra Modi ji",
    subtitle: "Visit to Honourable Prime Minister Shri Narendra Modi Ji",
    description: "Our proud Prudentites celebrate Raksha Bandhan with Honourable Prime Minister Shri Narendra Modi ji.",
    image: "/dignitary_img/img1.jpg",
    videoLink: "#",
  },
  {
    title: "On 13th August, students from Prudence School, Dwarka Sector 22, visited the CBSE Head Office to celebrate Raksha Bandhan with the esteemed Secretary, Mr. Himanshu Gupta",
    subtitle: "Visit to celebrate Raksha Bandhan with the esteemed Secretary, Mr. Himanshu Gupta (CBSE)",
    description: "On 13th August, students from Prudence School, Dwarka Sector 22, visited the CBSE Head Office to celebrate Raksha Bandhan with the esteemed Secretary, Mr. Himanshu Gupta. They expressed their gratitude to the honourable Chairman, Dr. G.S. Matharoo and dignified Vice Chairperson, Dr. Shalu Matharoo for providing this memorable opportunity. The respected Principal, Mr. Ritesh Sharma inspired them with a message on unity and respect, emphasizing these values within the educational community. Continuing their enriching journey, on 16th August, the students visited the Directorate of Education (DOE) office at Old Secretariat. There, they had the honour of meeting the Director of Education, Mr. R.N. Sharma and the Secretary, Mr. Ashok Kumar, further reinforcing these core values.",
    image: "/dignitary_img/img2.jpg",
    videoLink: "#",
  },
  {
    title: "Leadership is the art of giving people a platform for spreading ideas that work.On the auspicious occasion of Raksha Bandhan, students of Prudence Schools Dwarka 16B, Dwarka22 and Ashok Vihar had the privilege of visiting the Honourable Prime Minister of India, Shri Narendra Modi.",
    subtitle: "Celebrated Rakshabandhan with Honourable Prime Minister of India, Shri Narendra Modi",
    description: "Leadership is the art of giving people a platform for spreading ideas that work.On the auspicious occasion of Raksha Bandhan, students of Prudence Schools Dwarka 16B, Dwarka22 and Ashok Vihar had the privilege of visiting the Honourable Prime Minister of India, Shri Narendra Modi. Accompanied by their teacher, the students visited the Prime Minister to tie the sacred thread of Rakhi, fostering a sense of national pride and responsibility. This initiative, undertaken by the school, aimed to provide students with a unique chance to share their innovative ideas and visions for a developed India. The Prime Minister's gracious willingness to listen to their thoughts and share valuable insights on responsible citizenship was a testament to the school's efforts in nurturing inquisitive and enlightened minds. He commended the school for instilling exemplary values in its students. This inspiring visit to PM residence left an indelible mark on our students, who departed with a renewed sense of purpose and a promise to contribute towards building a self-reliant India.",
    image: "/dignitary_img/img3.jpg",
    videoLink: "#",
  },
  {
    title: "Students and faculty members from Prudence School, Ashok Vihar, visited the Directorate of Education to celebrate the auspicious festival of Rakshabandhan, a symbol of love, unity, and cultural bonding.",
    subtitle: "Visit to DOE Officials on the occassion of Rakshabandhan",
    description: "Students and faculty members from Prudence School, Ashok Vihar, visited the Directorate of Education to celebrate the auspicious festival of Rakshabandhan, a symbol of love, unity, and cultural bonding. The officials warmly welcomed the group. Students tied colorful rakhis and presented sweets, paintings, handmade planters and bouquets of flowers to dignitaries 𝐒𝐡𝐫𝐢 𝐀𝐬𝐡𝐨𝐤 𝐊𝐮𝐦𝐚𝐫 𝐈𝐀𝐒 , 𝐒𝐞𝐜𝐫𝐞𝐭𝐚𝐫𝐲 , 𝐃𝐨𝐄, 𝐍𝐂𝐓 , 𝐃𝐞𝐥𝐡𝐢 𝐚𝐧𝐝 * 𝐑𝐚𝐦 𝐍𝐢𝐰𝐚𝐬 𝐒𝐡𝐚𝐫𝐦𝐚 𝐈𝐀𝐒 , 𝐃𝐢𝐫𝐞𝐜𝐭𝐨𝐫 𝐨𝐟 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 𝐍𝐂𝐓 𝐃𝐞𝐥𝐡𝐢,𝐂𝐨𝐦𝐦𝐢𝐬𝐬𝐢𝐨𝐧𝐞𝐫, 𝐋𝐚𝐛𝐨𝐮𝐫 𝐚𝐧𝐝 𝐃𝐢𝐫𝐞𝐜𝐭𝐨𝐫 (𝐃𝐈𝐏)-𝐜𝐮𝐦-𝐒𝐩𝐞𝐜𝐢𝐚𝐥 𝐒𝐞𝐜𝐫𝐞𝐭𝐚𝐫𝐲, 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 & 𝐏𝐮𝐛𝐥𝐢𝐜𝐢𝐭𝐲. In return, students expressed their gratitude for the education system's role in shaping them into responsible citizens and recited a poem about Rakshabandhan. The visit to the DOE reinforced the values of love, protection, and mutual respect. It was a memorable experience for all involved.",
    image: "/dignitary_img/img4.jpg",
    videoLink: "#",
  },
  {
    title: "Rakshabandhan is not just a tradition; it’s a celebration of the bonds that protect and strengthen us.Our students of Prudence School, Ashok Vihar celebrated Rakshabandhan with the Air Vice Marshal Rajeev Sharma and his team of Air Force officers, marking a special moment of unity and respect.",
    subtitle: "Celebrated Rakshabandhan with the Air Vice Marshal Rajeev Sharma",
    description: "Rakshabandhan is not just a tradition; it’s a celebration of the bonds that protect and strengthen us.Our students of Prudence School, Ashok Vihar celebrated Rakshabandhan with the Air Vice Marshal Rajeev Sharma and his team of Air Force officers, marking a special moment of unity and respect. The students tied rakhis on the wrist of all officers, symbolizing their gratitude and the bond of protection. The Air Vice Marshal expressed his admiration for the students and highlighted the significance of such cultural traditions in fostering strong values among the future generations. ",
    image: "/dignitary_img/img5.jpg",
    videoLink: "#",
  },
];

const DignitarySec2 = () => {
  return (
     <section className="py-12 px-4 bg-white" id="print-media">
    
    
     <h2 className="text-orange-400 text-lg font-bold uppercase tracking-wide mb-9 px-8 md:px-10 md:text-5xl">
       VISIT TO DIGNITARY  _________
      </h2>

      <div className="space-y-18">
        {dignitaryData.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isEven ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col lg:flex-row items-start gap-6"
            >
              {/* Image Section */}
              <div className={`w-full lg:w-1/3 ${!isEven ? 'order-last lg:order-first' : ''}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-2/3">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                {item.subtitle && (
                  <h4 className="text-orange-600 text-md font-bold mb-2">{item.subtitle}</h4>
                )}
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                <a
                  href={item.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-pink-600 hover:bg-pink-700 text-white text-xs font-semibold px-6 py-4 rounded-full transition"
                >
                   View Video
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default DignitarySec2;