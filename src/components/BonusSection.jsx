'use client';
import { motion } from 'framer-motion';
import { FaUsers, FaToolbox, FaGift } from 'react-icons/fa';

const ICON_MAP = {
  FaUsers: <FaUsers />,
  FaToolbox: <FaToolbox />,
};

const GRADIENTS = [
  ['#F97316', '#EA6C0A'],
  ['#480A62', '#6B1A8A'],
  ['#F97316', '#480A62'],
  ['#2E063E', '#480A62'],
  ['#6B1A8A', '#F97316'],
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11 },
  },
};

export default function BonusSection({ data }) {
  return (
    <section
      className="section-padding"
      style={{
        background: 'linear-gradient(135deg, #480A62, #6B1A8A)',
      }}
    >
      <div className="container-max">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.span
            variants={fadeUp}
            className="section-label"
            style={{
              background: 'rgba(255,255,255,0.10)',
              color: '#fff',
              borderColor: 'rgba(255,255,255,0.20)',
            }}
          >
            Exclusive Bonuses
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-heading font-black text-3xl md:text-5xl text-white leading-tight flex items-center justify-center gap-3"
          >
            <FaGift className="text-[#F97316]" />
            {data.title}
          </motion.h2>
        </motion.div>

        {/* Book Style Cards */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={stagger}
        >
          {data.cards.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Compact Book Cover */}
              <div
                className="relative w-full h-28 sm:h-36 md:h-44"
                style={{
                  background: `linear-gradient(
                    135deg,
                    ${GRADIENTS[i][0]},
                    ${GRADIENTS[i][1]}
                  )`,
                }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Icon */}
                <div className="absolute top-2 right-2">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-sm">
                    {ICON_MAP[card.icon] ?? <FaGift />}
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-3 md:p-4">
                <h3 className="font-heading font-bold text-[#1A1A1A] text-sm md:text-base mb-2 line-clamp-2">
                  {card.title}
                </h3>

                <p className="font-body text-gray-500 text-xs md:text-sm leading-relaxed mb-3 line-clamp-2">
                  {card.description}
                </p>

                <span
                  className="inline-block text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded-full"
                  style={{ background: '#F97316' }}
                >
                  Worth {card.worth}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}









// 'use client';
// import { motion } from 'framer-motion';
// import { FaUsers, FaToolbox, FaGift } from 'react-icons/fa';

// const ICON_MAP = { FaUsers: <FaUsers />, FaToolbox: <FaToolbox /> };

// const GRADIENTS = [
//   ['#F97316', '#EA6C0A'],
//   ['#480A62', '#6B1A8A'],
//   ['#F97316', '#480A62'],
//   ['#2E063E', '#480A62'],
//   ['#6B1A8A', '#F97316'],
// ];

// const fadeUp = {
//   hidden:  { opacity: 0, y: 28 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
// };
// const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.11 } } };

// export default function BonusSection({ data }) {
//   return (
//     <section className="section-padding" style={{ background: 'linear-gradient(135deg, #480A62, #6B1A8A)' }}>
//       <div className="container-max">

//         {/* Heading */}
//         <motion.div
//           className="text-center mb-12"
//           initial="hidden" whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={stagger}
//         >
//           <motion.span
//             variants={fadeUp}
//             className="section-label"
//             style={{ background: 'rgba(255,255,255,0.10)', color: '#fff', borderColor: 'rgba(255,255,255,0.20)' }}
//           >
//             Exclusive Bonuses
//           </motion.span>
//           <motion.h2
//             variants={fadeUp}
//             className="font-heading font-black text-3xl md:text-5xl text-white leading-tight flex items-center justify-center gap-3"
//           >
//             <FaGift className="text-[#F97316]" />
//             {data.title}
//           </motion.h2>
//         </motion.div>

//         {/* Cards Grid */}
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto"
//           initial="hidden" whileInView="visible"
//           viewport={{ once: true, amount: 0.12 }}
//           variants={stagger}
//         >
//           {data.cards.map((card, i) => (
//             <motion.div
//               key={i}
//               variants={fadeUp}
//               whileHover={{ y: -6 }}
//               className="bg-white rounded-2xl overflow-hidden shadow-lg"
//             >
//               {/* Card image */}
//               <div
//                 className="relative h-36 w-full"
//                 style={{ background: `linear-gradient(135deg, ${GRADIENTS[i][0]}, ${GRADIENTS[i][1]})` }}
//               >
//                 <img
//                   src={card.image}
//                   alt={card.title}
//                   className="absolute inset-0 w-full h-full object-cover"
//                   loading="lazy"
//                   onError={(e) => { e.currentTarget.style.display = 'none'; }}
//                 />
//                 {/* Icon overlay */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white text-2xl">
//                     {ICON_MAP[card.icon] ?? <FaGift />}
//                   </div>
//                 </div>
//               </div>

//               {/* Card body */}
//               <div className="p-5">
//                 <h3 className="font-heading font-bold text-[#1A1A1A] text-base mb-1">{card.title}</h3>
//                 <p className="font-body text-gray-500 text-sm leading-relaxed mb-3">{card.description}</p>
//                 <span
//                   className="inline-block text-white text-xs font-bold px-3 py-1 rounded-full"
//                   style={{ background: '#F97316' }}
//                 >
//                   Worth {card.worth}
//                 </span>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   );
// }
