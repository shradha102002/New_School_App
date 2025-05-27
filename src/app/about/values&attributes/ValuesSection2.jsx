// components/ValuesSection.tsx
import Image from "next/image";
import { motion } from "framer-motion";

export default function ValuesSection() {
  return (
    <section className="w-full py-10 px-4 bg-white">
      {/* Header and Core Image */}
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src="/values_img/image2.jpg"
            alt="Core Values"
            width={300}
            height={300}
            className="object-contain"
          />
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
        <h6 className="text-orange-600 font-bold uppercase text-large">Values & Attributes</h6>

          <p className="text-2xl font-bold text-gray-800 mt-2">
            <span className="text-pink-600">We strive to seek</span>, to reach out, inform, involve and take along with us all those who share our values and beliefs.
          </p>
        </motion.div>
      </motion.div>

      {/* Values Blocks */}
      <div className="max-w-6xl mx-auto mt-10 grid gap-4">
        {values.map((item, index) => (
          <motion.div
            key={index}
            className={`p-4 text-white font-medium ${item.bgColor} rounded-md shadow-md`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold uppercase">{item.title}</h3>
            <p className="text-sm mt-1">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const values = [
  {
    title: "Excellence",
    description:
      "At Prudence we believe that the Pursuit of Excellence is the first step towards a more effective and satisfying life. We encourage students to strive for excellence in all their endeavours and realize their full potential. We continue our strive for excellence and fulfilment in our intellectual, social and spiritual pursuits.",
    bgColor: "bg-purple-600",
  },
  {
    title: "Integrity",
    description:
      "Prudence students believe the single most important quality you can ever develop that will enhance every part of one’s life, is the value of integrity and high moral character by adhering to ethical principles, acting honourably and ensuring that there is consistency between their beliefs, words, and actions.",
    bgColor: "bg-green-700",
  },
  {
    title: "Creativity & Innovation",
    description:
      "We are committed to awakening each student to discover his or her unique individuality and creativity by making them realize the critical importance of taking ownership of one’s own learning and making them understand and value new learnings in an atmosphere that embraces questioning and exploration.",
    bgColor: "bg-blue-400",
  },
  {
    title: "Respect & Responsibility",
    description:
      "We believe in the inherent dignity of all people and that mutual respect and responsibility towards one another. We value self and others through words and actions. We also inspire students to respect each person's individuality and diversity that makes us all unique and the similarities that binds us together.",
    bgColor: "bg-orange-400",
  },
  {
    title: "Leadership",
    description:
      "We believe that leadership is the capacity to translate vision into reality by inspiring people to do things they never thought they could. We, therefore, seek to nurture, empower and inspire students and teachers to be innovative, resourceful, empathetic and courageous leaders within their own spheres.",
    bgColor: "bg-purple-500",
  },
  {
    title: "Community",
    description:
      "Prudence encourages building healthy and rewarding relationships between teachers and students,and the community at large. We emphasize mutual respect, cooperation, collaboration and the need to recognize the importance of being a part of a larger global community and accept duties and responsibilities with all positivity.",
    bgColor: "bg-yellow-400 text-black",
  },
  {
    title: "Environmental Consciousness",
    description:
      "Understanding that the environmental quality is critical to the survival of the planet, we pledge to be always conscious of being environmentally friendly and the need to protect the ecology in all five elements- earth, sky, air, energy and water for the larger community.",
    bgColor: "bg-cyan-500",
  },
];
