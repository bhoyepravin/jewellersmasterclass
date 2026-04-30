/* ─────────────────────────────────────────────────────────
   All content for the new masterclass sections.
   Image files go in:  public/images/
   Video files go in:  public/videos/
───────────────────────────────────────────────────────── */

export const COUNTDOWN_TARGET = 'April 26, 2026 11:00:00';

export const EVENT_INFO = {
  date: '26th April 2026',
  time: '11:00 am to 2:00 pm',
  dateLabel: 'Starts on 26th April 2026',
  timeLabel: '(11:00 am to 2:00 pm)',
};

export const CHECKOUT_LINK = '#offer';

export const PRICE = {
  offer:    '₹99',
  original: '₹1999',
};

/* ── What You Will Learn ────────────────────────────────── */
export const whatYouLearnData = {
  title:    'या Masterclass मध्ये तुम्ही काय शिकणार?',
  subtitle: 'Learn the proven systems that grows your Jewellery shop into a Jewellery Showroom.',
  cards: [
    {
      image:       '/what_we_learn.jpg',
      icon:        'FaCog',
      title:       'ज्वेलरी बिझनेस मध्ये Systems कश्या लावायच्या ?',
      description: 'Learn the proven systems that grows your Jewellery shop into a Jewellery Showroom.',
    },
    {
      image:       '/people_footfalls.jpg',
      icon:        'FaStore',
      title:       'ग्राहकांचा footfall कसा वाढवायचा ?',
      description: 'Learn how to attract new customers and increase customer footfall in the showroom.',
    },
    {
      image:       '/team_conducting_training.jpg',
      icon:        'FaUserGraduate',
      title:       'स्टाफ ला कसे ट्रेन करायचे ?',
      description: 'Learn how to train your staff to handle customers and work effeciantly.',
    },
    {
      image:       '/how_to_grow_sales.jpg',
      icon:        'FaChartLine',
      title:       'Sale कसा वाढवायचा ?',
      description: "Learn Arnav's Proven Sales Mastery Formula to increase your monthly sales.",
    },
  ],
};

/* ── Who Is This For ────────────────────────────────────── */
export const whoIsThisForData = {
  title: 'हा Masterclass कोणासाठी आहे ?',
  image: 'training_session_01.jpg',
  items: [
    'All types of Jewellery Business Owners',
    'Retail Jewellery Shop owners',
    'Family Run Jewellery Businesses',
    'Jewellery Wholesellers',
    'Manufacturers',
    'Jewellery Franchise Owners',
    'People who wish to start their Jewellery Business',
    'Jewellery Showroom Managers',
  ],
};

/* ── Challenges ─────────────────────────────────────────── */
export const challengesData = {
  title: 'Are you facing these challenges in your Jewellery Business?',
  points: [
    'Customers येतात पण खरेदी करत नाही',
    'Competition तुफान वाढलीय',
    'Marketing करतो पण results येत नाही',
    'Team आहे पण पण त्यांना proper ट्रेनिंग नाही',
    'Business ची growth कुठेतरी stuck झालीय',
  ],
  closingText: 'जर या प्रश्नांचे उत्तर हो असतील, तर हा मास्टर क्लास तुमच्यासाठी आहे',
};

/* ── Masterclass Benefits ───────────────────────────────── */
export const masterclassBenefitsData = {
  title: 'What you get in the Masterclass?',
  image: '/images/benefits.jpg',
  items: [
    'Step by Step Jewellery Business Growth Blueprint',
    'Proven Sales Techniques to Increase Revenue',
    'Powerful Positioning Techniques to beat competition',
    'Business Mindset Shift for Long Term Growth',
    'Strategies to Automate your Jewellery Business',
  ],
};

/* ── Exclusive Bonuses ──────────────────────────────────── */
export const bonusSectionData = {
  title: 'Exclusive bonuses worth Rs.6,999/- for Free',
  cards: [
    {
      image:       '/images/bonus-1.jpg',
      icon:        'FaUsers',
      title:       'Community Access',
      description: 'Get introduced with what and why of neuromarketing',
      worth:       '₹1,999',
    },
    {
      image:       '/images/bonus-2.jpg',
      icon:        'FaToolbox',
      title:       'Jewellers Toolkit',
      description: 'Get introduced with what and why of neuromarketing',
      worth:       '₹4,999',
    },
    {
      image:       '/images/bonus-3.jpg',
      icon:        'FaUsers',
      title:       'Community Access',
      description: 'Get introduced with what and why of neuromarketing',
      worth:       '₹2,999',
    },
    {
      image:       '/images/bonus-4.jpg',
      icon:        'FaUsers',
      title:       'Community Access',
      description: 'Get introduced with what and why of neuromarketing',
      worth:       '₹2,999',
    },
    {
      image:       '/images/bonus-5.jpg',
      icon:        'FaUsers',
      title:       'Community Access',
      description: 'Get introduced with what and why of neuromarketing',
      worth:       '₹2,999',
    },
  ],
};

/* ── Testimonials (full, with images + videos) ──────────── */
export const masterclassTestimonialsData = {
  title: 'ज्यांनी अनुभवले, त्यांनी सांगितले',
  items: [
    {
      name:     'Mr. Aakash Maid',
      location: 'Mumbai',
      text:     'काळानुसार आपल्यामध्ये जो बदल अपेक्षित आहे, जो बदल आपल्याला स्वतःमध्ये आणि व्यवसायामध्ये करायला पाहिजे, ते मला या मास्टरक्लास मधून समजले.',
      image:    '/images/testimonial-1.jpg',
      video:    '/testimonials/testimonials_01.mp4',
      gradientFrom: '#480A62',
      gradientTo:   '#6B1A8A',
    },
    {
      name:     'Ms. Divya Choudhari',
      location: '',
      text:     "Connecting with Arnav Sir was the best decision of my life. I am soo excited to launch my new jewellery brand after attending Arnav sir's Masterclass. Thank You Arnav Sir!",
      image:    '/images/testimonial-2.jpg',
      video:    '/videos/testimonial-video-2.mp4',
      gradientFrom: '#F97316',
      gradientTo:   '#EA6C0A',
    },
    {
      name:     'Mr. Akshay Shahane',
      location: 'Thane',
      text:     'मी आजपर्यंत बरेच प्रोग्राम अटेंड केले आहेत, पण ज्वेलर्स मास्टर क्लास सारखा हा स्पेसिफिक ज्वेलरी बिझनेस प्रोग्रॅम मी पहिल्यांदाच अटेंड केला आणि आत्तापर्यंतचा सगळ्यात बेस्ट अनुभव होता हा माझा. सरांनी जे पॉईंट सांगितले हे खूप प्रॅक्टिकल आणि रियालिटीला धरून होते. One of the best investments of time and money.',
      image:    '/images/testimonial-3.jpg',
      video:    '/videos/testimonial-video-3.mp4',
      gradientFrom: '#2E063E',
      gradientTo:   '#480A62',
    },
    {
      name:     'Mr. Sai Kharote',
      location: 'Nagpur',
      text:     'कुठेतरी जो कॉन्फिडन्स डाउन झाला होता तो पुन्हा एकदा जागा झाला आहे. आपल्या धंद्यात खूप पोटेन्शिअल आहे आणि आपण त्याचा योग्य वापर करून आपल्या ब्रांडला मोठं केलं पाहिजे हे आज मला शिकायला मिळाले',
      image:    '/images/testimonial-4.jpg',
      video:    null,
      gradientFrom: '#480A62',
      gradientTo:   '#6B1A8A',
    },
    {
      name:     'Jewellers Masterclass Batch',
      location: '',
      text:     'आम्ही अर्णव सरांसोबत आमचे पिढीजात व्यवसाय Automation ला नेले. Sale दुपटीने वाढला आणि Brand मोठा करण्याचा confidence वाढला.',
      image:    '/images/testimonial-5.jpg',
      video:    null,
      gradientFrom: '#F97316',
      gradientTo:   '#480A62',
    },
  ],
};

/* ── Mentor ─────────────────────────────────────────────── */
export const mentorSectionData = {
  title:       'Meet your Mentor',
  image:       '/arnav_patil_sir.JPG',
  name:        'Mr. Arnav Patil',
  designation: 'International Business Coach, Strategist, Consultant and a Key-Note Speaker',
  content:     'Mr. Arnav Patil is an Entrepreneur, Business Coach and Trainer helping Business Owners grow and scale their business.',
  points: [
    '10+ years of experience in helping Jewellers automate their Jewellery Business',
    '1000+ Coaching clients',
    'Currently working in 5 different countries',
    '11K+ Social Media Following',
    'Provides Proven Strategies for Real Business Growth.',
  ],
};

/* ── Mission ────────────────────────────────────────────── */
export const missionData = {
  images: [
    '/training_session_01.jpg',
    '/training_session_02.jpg',
    '/training_session.jpeg',
  ],
  content: 'I am on a MISSION to Help 10 Lakh+ Jewellery Business Owners to upscale their Jewellery Business into a POWERFUL BRAND',
};

/* ── FAQ ────────────────────────────────────────────────── */
export const faqSectionData = {
  title: 'Frequently Asked Questions:',
  items: [
    {
      q: "How I'll get the link to attend the program?",
      a: 'You will get an email right after you register. Do check the spam and promotions tab just in case it landed there.',
    },
    {
      q: "How I'll get the bonus items?",
      a: 'Bonuses will be distributed exclusively to participants who attend and successfully complete the workshop.',
    },
    {
      q: 'Why does this program cost only ₹99?',
      a: 'The fee is just to make sure to get a commitment from you that you will be there. It is not the value of the program. Attend the program and understand the value yourself.',
    },
    {
      q: 'Will I get the recording of the program?',
      a: 'This is a live online workshop. So no recording will be provided.',
    },
    {
      q: 'Why is the training during business hours?',
      a: 'This is an investment in your business — when you learn, you grow. I strongly believe every entrepreneur has a personal life and would want to make sure you are learning during business hours so you can implement what you learn directly in your business.',
    },
    {
      q: 'Who is this masterclass ideal for?',
      a: 'All types of Jewellery Business Owners — retail shop owners, family run businesses, wholesellers, manufacturers, franchise owners, showroom managers, and those who wish to start a jewellery business.',
    },
    {
      q: 'Is this applicable to my type of jewellery business?',
      a: 'Yes. Whether you run a retail shop, a wholesale unit, or a manufacturing unit — the systems and strategies taught here are applicable across all formats of jewellery businesses.',
    },
    {
      q: `Can I attend this if I want to start a jewellery business but don't have one yet?`,
      a: 'Yes, you are welcome to attend. This Masterclass will give you clarity on the right foundation to build your jewellery business from day one.',
    },
    {
      q: 'What if I have questions about registration or attending?',
      a: 'You can drop us a DM on Instagram or WhatsApp. We will be happy to help you.',
    },
    {
      q: 'If I miss attending this time, can I attend again?',
      a: 'Yes, you may attend a future batch. However, the ₹99 offer and the bonuses are only for this batch, so it is best to attend now.',
    },
    {
      q: 'What do I need to keep handy during the masterclass?',
      a: 'Just an open mind and a notebook to make lots of notes.',
    },
    {
      q: 'Can I attend this program along with my business partner(s)?',
      a: 'Yes you can. It is preferred you attend with your partners so that you can learn and implement together.',
    },
    {
      q: 'Is it a LIVE masterclass?',
      a: 'Yes, this is a fully LIVE Zoom session with Arnav Patil Sir. He will be live throughout the session to answer your questions.',
    },
  ],
};
