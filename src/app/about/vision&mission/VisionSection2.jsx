import Image from "next/image";

export default function VisionMission() {
  return (
    <section className="py-12 px-4 bg-white" id="print-media">

    
    
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-xl text-yellow-500 font-bold tracking-wide">VISION & MISSION</h2>
        <h1 className="text-3xl text-pink-600 font-bold mt-2">OUR VISION</h1>
      </div>

      {/* Vision Row */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div className="flex justify-center">
          <Image
            src="/vision_img/vision2.jpg"
            alt="Chairman"
            width={350}
            height={350}
            className="rounded-lg border-2 border-pink-300"
          />
        </div>
        <div>
          <p className="text-gray-700 leading-relaxed">
            <span className="font-bold text-pink-600">Prudence</span> aims to pioneer a new paradigm of excellence in school education,
            awakening the unique individuality of every child. We aspire our children grow up innovating
            and creating enthusiastically their scholarly pursuits and intellectual awareness, and emerge
            educated holistically with strong human values and competencies of the newer world order to
            stride ahead confidently as contributing, secular, true citizens of the nation and the world.
          </p>
        </div>
      </div>

      {/* Mission Title */}
      <h1 className="text-3xl text-pink-600 font-bold mb-10 text-center">OUR MISSION</h1>

      {/* Mission Row */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-gray-700 leading-relaxed">
            <span className="font-bold text-pink-600">Prudence</span> is a school dedicated to provide an educational environment which treats each
            child as a unique, special and powerful individual. Our endeavour is to educate our children to
            attain the highest level of personal growth through rigorous learning experiences which
            encourages inquiry, innovation and creativity. Our children grow sensitive to their environment
            and the world around. Ushering in with a promise of integrative growth in all areas of their
            personality and working enthusiastically with that spirit are the teachers, management and also
            the parents of this institute.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/vision_img/vision3.jpg"
            alt="Vice Chairperson"
            width={350}
            height={350}
            className="rounded-lg border-2 border-pink-300"
          />
        </div>
      </div>
    </section>
  );
}
