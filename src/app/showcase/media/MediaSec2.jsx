// components/PrintMediaSection.jsx
'use client';

import Image from 'next/image';

const mediaData = [
  {
    id: 1,
    title: "How to Keep Oneself Calm during the Season of Examinations: A Help Guide",
    date: "24 May, 2023",
    image: "/media_img/img1.jpg",
    link: "#"
  },
  {
    id: 2,
    title: "Exam season is challenging, de-stress yourself",
    date: "13 Feb, 2023",
    image: "/media_img/img2.jpg",
    link: "#"
  },
  {
    id: 3,
    title: "CITATION CEREMONY FOR THE GRADUATING STUDENTS IN PRUDENCE SCHOOL, DWARKA SEC - 22",
    date: "10 Feb, 2023",
    image: "/media_img/img3.jpg",
    link: "#"
  },
   {
    id: 4,
    title: "CITATION CEREMONY FOR THE GRADUATING STUDENTS IN PRUDENCE SCHOOL, DWARKA SEC - 22",
    date: "1 Feb, 2023",
    image: "/media_img/img4.jpg",
    link: "#"
  },
   {
    id: 5,
    title: "CHRISTMAS CELEBRATED AT PRUDENCE SCHOOL, ASHOK VIHAR",
    date: "25 Jan, 2023",
    image: "/media_img/img5.jpg",
    link: "#"
  },
   {
    id: 6,
    title: "MY TIRANGA, MY PRIDE",
    date: "17 Aug,2022",
    image: "/media_img/img6.jpg",
    link: "#"
  },
   {
    id: 7,
    title: "SHINING STARS OF CBSE CLASS X and XII",
    date: "05 Aug,2022",
    image: "/media_img/img7.jpg",
    link: "#"
  },
   {
    id: 8,
    title:  "DR. G.S. MATHAROO, MOST INFUENTIAL EDUCATIONAL LEADERS 2021-22",
    date: "03 Aug,2022",
    image: "/media_img/img8.jpg",
    link: "#"
  },
   {
    id: 9,
    title: "SHINING STARS OF CBSE CLASS XII",
    date: "02 Aug,2022",
    image: "/media_img/img9.jpg",
    link: "#"
  },
   {
    id: 10,
    title: "Students of three Prudence schools celebrate â€˜Mango-ficient Dayâ€™ together",
    date: "29 Jul,2022",
    image: "/media_img/img10.jpg",
    link: "#"
  },
   {
    id: 11,
    title: " Prudence Group of Schools conducts several programmes aimed at empowering teachers",
    date: "19 Jul,2022",
    image: "/media_img/img11.jpg",
    link: "#"
  },
   {
    id: 12,
    title: " Prudenites bring laurels to the school",
    date: "18 Jul,2022",
    image: "/media_img/img12.jpg",
    link: "#"
  },
   {
    id: 13,
    title: "Feature in Times NIE",
    date: "30 Jun,2021",
    image: "/media_img/img13.jpg",
    link: "#"
  },
    {
    id: 14,
    title: "Feature in Times NIE",
    date: "21 Jun,2021",
    image: "/media_img/img14.jpg",
    link: "#"
  },
   {
    id: 15,
    title: "NEW NORMAL CALLS FOR NEW NORMSAn article by our Chairman Sir, Dr G.S. Matharoo (page no. 3) articulating the salient points of NEP 2020 and how we at Prudence are in sync with them.Noteworthy to share that with the support of our teachers we are already implementing them in the classrooms with full rigour.",
    date: "22 Mar,2021",
    image: "/media_img/img15.jpg",
    link: "#"
  },
   {
    id: 16,
    title: "DAINIK JAGRAN INEXT Media Coverage of Dr. G.S. Matharoo, Chairman, Prudence Group of Schools, by Dainik Jagran iNext.",
    date: "16 Feb,2021",
    image: "/media_img/img16.jpg",
    link: "#"
  },
 
   {
    id: 17,
    title: "RISHITAA JAIN: PRUDENCE ASHOK VIHAR Congratulations to Rishitaa Jain of Prudence School, Ashok Vihar for winning GOLD 57KG SUB JUNIOR GIRLS Category in Delhi State Powerlifting Championship 2021.",
    date: " 20 Jan,2021",
    image: "/media_img/img17.jpg",
    link: "#"
  },
   
];

const MediaSec2 = () => {
  return (
    <section className="py-12 px-4 bg-white" id="print-media">
      <div className="max-w-7xl mx-auto">
       <h2 className="text-orange-400 text-lg font-bold uppercase tracking-wide mb-2 px-4 md:px-10 md:text-3xl">
       DIGITAL MEDIA  _________
      </h2>
      <h1 className="text-3xl md:text-6xl font-extrabold mb-8 text-black px-4 md:px-10">
      Prudence in Print Media
      </h1>

        {mediaData.map((item, index) => (
          <div key={item.id} className="mb-10 border rounded-lg shadow hover:shadow-lg transition">
            <div className="relative w-full h-auto">
              <Image
                src={item.image}
                alt={item.title}
                width={1200}
                height={700}
                layout="responsive"
                className="rounded-t-lg object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">📅 {item.date}</p>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <a
                href={item.link}
                className="text-blue-600 text-sm hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MediaSec2;
