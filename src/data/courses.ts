export interface Course {
  id: string;
  title: string;
  title_bn?: string;
  description: string;
  description_bn?: string;
  longDescription?: string;
  longDescription_bn?: string;
  duration: string;
  duration_bn?: string;
  image: string;
  category: "diploma" | "certificate" | "academy" | "online" | "service";
  highlights: string[];
  highlights_bn?: string[];
  seoTitle?: string;
  seoTitle_bn?: string;
  seoDescription?: string;
  seoDescription_bn?: string;
  seoKeywords?: string;
  seoKeywords_bn?: string;
  eligibility?: string;
  eligibility_bn?: string;
  careerProspects?: string[];
  careerProspects_bn?: string[];
}

export const courses: Course[] = [
  {
    id: "hotel-management",
    title: "Diploma In Hotel Management",
    title_bn: "হোটেল ম্যানেজমেন্ট",
    description:
      "Comprehensive hotel management program covering front office, housekeeping, food & beverage service, and hospitality operations. Get practical and purposeful education with professional training from industry-experienced faculty.",
    description_bn:
      "ফ্রন্ট অফিস, হাউসকিপিং, ফুড অ্যান্ড বেভারেজ সার্ভিস এবং হসপিটালিটি অপারেশনস নিয়ে সম্পূর্ণ হোটেল ম্যানেজমেন্ট প্রোগ্রাম। ইন্ডাস্ট্রি-অভিজ্ঞ শিক্ষকদের কাছ থেকে ব্যবহারিক ও কার্যকরী শিক্ষা এবং পেশাদার প্রশিক্ষণ পান।",
    longDescription:
      "The Hotel Management program at TSHM & TF is designed to give students a complete understanding of the hospitality industry. The curriculum covers front office operations, housekeeping management, food & beverage service, kitchen management, and guest relations. Students receive hands-on practical training in real hospitality environments, learning from industry-experienced faculty and trainers. With 100% job assistance and stipend during training, our graduates go on to work in leading hotels, restaurants, and hospitality establishments across India and abroad.",
    longDescription_bn:
      "TSHM & TF-এর হোটেল ম্যানেজমেন্ট প্রোগ্রামটি শিক্ষার্থীদের হসপিটালিটি ইন্ডাস্ট্রির সম্পূর্ণ ধারণা দেওয়ার জন্য তৈরি করা হয়েছে। পাঠ্যক্রমে ফ্রন্ট অফিস অপারেশনস, হাউসকিপিং ম্যানেজমেন্ট, ফুড অ্যান্ড বেভারেজ সার্ভিস, কিচেন ম্যানেজমেন্ট এবং গেস্ট রিলেশনস অন্তর্ভুক্ত। শিক্ষার্থীরা প্রকৃত হসপিটালিটি পরিবেশে হাতে-কলমে প্রশিক্ষণ পায়, ইন্ডাস্ট্রি-অভিজ্ঞ শিক্ষক ও প্রশিক্ষকদের কাছ থেকে শেখে। ১০০% চাকরির সহায়তা এবং প্রশিক্ষণকালীন স্টাইপেন্ড সহ, আমাদের স্নাতকরা ভারত ও বিদেশের নামকরা হোটেল, রেস্তোরাঁ এবং হসপিটালিটি প্রতিষ্ঠানে কাজ করছে।",
    duration: "1-3 Years",
    duration_bn: "১-৩ বছর",
    image: "/images/courses/hotel-management.jpeg",
    category: "diploma",
    highlights: [
      "100% job assistance",
      "Stipend during training",
      "Industry experienced faculty & trainers",
      "Our students are working around India & abroad",
    ],
    highlights_bn: [
      "১০০% চাকরির সহায়তা",
      "প্রশিক্ষণকালীন স্টাইপেন্ড",
      "ইন্ডাস্ট্রি-অভিজ্ঞ শিক্ষক ও প্রশিক্ষক",
      "আমাদের শিক্ষার্থীরা ভারত ও বিদেশে কাজ করছে",
    ],
    seoTitle: "Hotel Management Course in Tarakeswar - Diploma Program",
    seoTitle_bn: "তারকেশ্বরে হোটেল ম্যানেজমেন্ট কোর্স - ডিপ্লোমা প্রোগ্রাম",
    seoDescription:
      "Join TSHM's Hotel Management diploma in Tarakeswar, Hooghly. 1-3 year program with 100% job assistance, stipend during training, no entrance exam. Front office, housekeeping, F&B service training.",
    seoDescription_bn:
      "তারকেশ্বর, হুগলিতে TSHM-এর হোটেল ম্যানেজমেন্ট ডিপ্লোমায় ভর্তি হন। ১-৩ বছরের প্রোগ্রাম, ১০০% চাকরির সহায়তা, প্রশিক্ষণকালীন স্টাইপেন্ড, কোনো ভর্তি পরীক্ষা নেই। ফ্রন্ট অফিস, হাউসকিপিং, F&B সার্ভিস প্রশিক্ষণ।",
    seoKeywords:
      "hotel management course Tarakeswar, diploma hotel management Hooghly, hotel management after 10th West Bengal, hospitality training near me, best hotel management institute Hooghly",
    seoKeywords_bn:
      "তারকেশ্বরে হোটেল ম্যানেজমেন্ট কোর্স, হুগলিতে ডিপ্লোমা হোটেল ম্যানেজমেন্ট, দশম শ্রেণীর পর হোটেল ম্যানেজমেন্ট পশ্চিমবঙ্গ, হসপিটালিটি প্রশিক্ষণ, সেরা হোটেল ম্যানেজমেন্ট ইনস্টিটিউট হুগলি",
    eligibility: "Class 10 (Madhyamik) or Class 12 (Higher Secondary) pass from any recognized board. No entrance exam required.",
    eligibility_bn: "যেকোনো স্বীকৃত বোর্ড থেকে দশম শ্রেণী (মাধ্যমিক) বা দ্বাদশ শ্রেণী (উচ্চমাধ্যমিক) পাশ। কোনো ভর্তি পরীক্ষার প্রয়োজন নেই।",
    careerProspects: [
      "Front Office Executive",
      "F&B Service Manager",
      "Housekeeping Supervisor",
      "Restaurant Manager",
      "Event Coordinator",
      "Cruise Ship Staff",
      "Airline Catering",
      "Hotel General Manager",
    ],
    careerProspects_bn: [
      "ফ্রন্ট অফিস এক্সিকিউটিভ",
      "F&B সার্ভিস ম্যানেজার",
      "হাউসকিপিং সুপারভাইজার",
      "রেস্তোরাঁ ম্যানেজার",
      "ইভেন্ট কোঅর্ডিনেটর",
      "ক্রুজ শিপ স্টাফ",
      "এয়ারলাইন ক্যাটারিং",
      "হোটেল জেনারেল ম্যানেজার",
    ],
  },
  {
    id: "hospitality-cruise-line",
    title: "Diploma in Hospitality & Cruise Line Management",
    title_bn: "হসপিটালিটি ও ক্রুজ লাইন ম্যানেজমেন্ট ডিপ্লোমা",
    description:
      "Specialized diploma program in hospitality and cruise line management covering cruise ship operations, guest services, food & beverage management, housekeeping, and international hospitality standards for a global career at sea.",
    description_bn:
      "ক্রুজ শিপ অপারেশনস, গেস্ট সার্ভিসেস, ফুড অ্যান্ড বেভারেজ ম্যানেজমেন্ট, হাউসকিপিং এবং আন্তর্জাতিক হসপিটালিটি স্ট্যান্ডার্ড নিয়ে হসপিটালিটি ও ক্রুজ লাইন ম্যানেজমেন্টে বিশেষায়িত ডিপ্লোমা প্রোগ্রাম।",
    longDescription:
      "The Diploma in Hospitality & Cruise Line Management at TSHM & TF prepares students for exciting careers in the international cruise and hospitality industry. The program covers cruise ship operations, front office and guest relations, food & beverage service and management, housekeeping, safety and emergency procedures, and international hospitality standards. Students receive hands-on training and industry exposure to develop the skills needed for working on luxury cruise liners and premium hospitality establishments worldwide. With 100% job assistance and industry connections, our graduates secure positions on leading cruise lines and international hotels.",
    longDescription_bn:
      "TSHM & TF-এর হসপিটালিটি ও ক্রুজ লাইন ম্যানেজমেন্ট ডিপ্লোমা শিক্ষার্থীদের আন্তর্জাতিক ক্রুজ ও হসপিটালিটি ইন্ডাস্ট্রিতে উত্তেজনাপূর্ণ ক্যারিয়ারের জন্য প্রস্তুত করে। প্রোগ্রামে ক্রুজ শিপ অপারেশনস, ফ্রন্ট অফিস ও গেস্ট রিলেশনস, ফুড অ্যান্ড বেভারেজ সার্ভিস ও ম্যানেজমেন্ট, হাউসকিপিং, সেফটি ও ইমার্জেন্সি প্রসিডিউর এবং আন্তর্জাতিক হসপিটালিটি স্ট্যান্ডার্ড অন্তর্ভুক্ত।",
    duration: "1-2 Years",
    duration_bn: "১-২ বছর",
    image: "/images/courses/Cruiseline.jpeg",
    category: "diploma",
    highlights: [
      "Cruise line job preparation",
      "International hospitality standards",
      "100% job assistance",
      "Industry experienced trainers",
    ],
    highlights_bn: [
      "ক্রুজ লাইনে চাকরির প্রস্তুতি",
      "আন্তর্জাতিক হসপিটালিটি স্ট্যান্ডার্ড",
      "১০০% চাকরির সহায়তা",
      "ইন্ডাস্ট্রি-অভিজ্ঞ প্রশিক্ষক",
    ],
    seoTitle: "Hospitality & Cruise Line Management Diploma in Tarakeswar",
    seoTitle_bn: "তারকেশ্বরে হসপিটালিটি ও ক্রুজ লাইন ম্যানেজমেন্ট ডিপ্লোমা",
    seoDescription:
      "Join TSHM's Hospitality & Cruise Line Management diploma in Tarakeswar, Hooghly. 1-2 year program with 100% job assistance, cruise ship training, international hospitality standards.",
    seoDescription_bn:
      "তারকেশ্বর, হুগলিতে TSHM-এর হসপিটালিটি ও ক্রুজ লাইন ম্যানেজমেন্ট ডিপ্লোমায় ভর্তি হন। ১-২ বছরের প্রোগ্রাম, ১০০% চাকরির সহায়তা, ক্রুজ শিপ প্রশিক্ষণ।",
    seoKeywords:
      "cruise line management course Tarakeswar, hospitality diploma Hooghly, cruise ship training West Bengal, cruise line career India",
    seoKeywords_bn:
      "তারকেশ্বরে ক্রুজ লাইন ম্যানেজমেন্ট কোর্স, হুগলিতে হসপিটালিটি ডিপ্লোমা, পশ্চিমবঙ্গে ক্রুজ শিপ প্রশিক্ষণ",
    eligibility: "Class 10 (Madhyamik) or Class 12 (Higher Secondary) pass from any recognized board. No entrance exam required.",
    eligibility_bn: "যেকোনো স্বীকৃত বোর্ড থেকে দশম শ্রেণী (মাধ্যমিক) বা দ্বাদশ শ্রেণী (উচ্চমাধ্যমিক) পাশ। কোনো ভর্তি পরীক্ষার প্রয়োজন নেই।",
    careerProspects: [
      "Cruise Ship Staff",
      "Guest Relations Officer",
      "F&B Manager (Cruise)",
      "Housekeeping Supervisor (Cruise)",
      "Shore Excursion Coordinator",
      "International Hotel Staff",
    ],
    careerProspects_bn: [
      "ক্রুজ শিপ স্টাফ",
      "গেস্ট রিলেশনস অফিসার",
      "F&B ম্যানেজার (ক্রুজ)",
      "হাউসকিপিং সুপারভাইজার (ক্রুজ)",
      "শোর এক্সকারশন কোঅর্ডিনেটর",
      "আন্তর্জাতিক হোটেল স্টাফ",
    ],
  },
  {
    id: "health-assistant",
    title: "Diploma in Health Assistant",
    title_bn: "হেলথ অ্যাসিস্ট্যান্ট ডিপ্লোমা",
    description:
      "Professional diploma program training students in basic healthcare, patient care, first aid, vital signs monitoring, and clinical assistance to support doctors and healthcare professionals.",
    description_bn:
      "মৌলিক স্বাস্থ্যসেবা, রোগী পরিচর্যা, প্রাথমিক চিকিৎসা, ভাইটাল সাইনস মনিটরিং এবং ডাক্তার ও স্বাস্থ্য পেশাদারদের সহায়তায় ক্লিনিক্যাল অ্যাসিস্ট্যান্সে শিক্ষার্থীদের প্রশিক্ষণ দেওয়ার পেশাদার ডিপ্লোমা প্রোগ্রাম।",
    longDescription:
      "The Diploma in Health Assistant at TSHM & TF is designed to train students in essential healthcare skills required to assist doctors, nurses, and other medical professionals. The program covers patient care fundamentals, first aid and emergency response, vital signs monitoring, medical terminology, clinical procedures, hygiene and infection control, and basic pharmacology. Students receive hands-on practical training in clinical settings, preparing them for immediate employment in hospitals, clinics, diagnostic centres, and home healthcare services.",
    longDescription_bn:
      "TSHM & TF-এর হেলথ অ্যাসিস্ট্যান্ট ডিপ্লোমা শিক্ষার্থীদের ডাক্তার, নার্স এবং অন্যান্য চিকিৎসা পেশাদারদের সহায়তার জন্য প্রয়োজনীয় স্বাস্থ্যসেবা দক্ষতায় প্রশিক্ষণ দেওয়ার জন্য তৈরি। প্রোগ্রামে রোগী পরিচর্যার মূল বিষয়, প্রাথমিক চিকিৎসা ও জরুরি প্রতিক্রিয়া, ভাইটাল সাইনস মনিটরিং, মেডিকেল টার্মিনোলজি, ক্লিনিক্যাল প্রসিডিউর, স্বাস্থ্যবিধি ও সংক্রমণ নিয়ন্ত্রণ এবং বেসিক ফার্মাকোলজি অন্তর্ভুক্ত।",
    duration: "1 Year",
    duration_bn: "১ বছর",
    image: "/images/courses/health-assistant.jpg",
    category: "diploma",
    highlights: [
      "Patient care training",
      "Clinical hands-on experience",
      "100% job assistance",
      "Hospital & clinic placements",
    ],
    highlights_bn: [
      "রোগী পরিচর্যা প্রশিক্ষণ",
      "ক্লিনিক্যাল হাতে-কলমে অভিজ্ঞতা",
      "১০০% চাকরির সহায়তা",
      "হাসপাতাল ও ক্লিনিকে প্লেসমেন্ট",
    ],
    seoTitle: "Health Assistant Diploma Course in Tarakeswar",
    seoTitle_bn: "তারকেশ্বরে হেলথ অ্যাসিস্ট্যান্ট ডিপ্লোমা কোর্স",
    seoDescription:
      "Join TSHM's Health Assistant diploma in Tarakeswar, Hooghly. 1 year program with patient care training, clinical experience, and 100% job assistance in hospitals and clinics.",
    seoDescription_bn:
      "তারকেশ্বর, হুগলিতে TSHM-এর হেলথ অ্যাসিস্ট্যান্ট ডিপ্লোমায় ভর্তি হন। ১ বছরের প্রোগ্রাম, রোগী পরিচর্যা প্রশিক্ষণ, ক্লিনিক্যাল অভিজ্ঞতা এবং ১০০% চাকরির সহায়তা।",
    seoKeywords:
      "health assistant course Tarakeswar, health assistant diploma Hooghly, medical assistant training West Bengal, healthcare course near me",
    seoKeywords_bn:
      "তারকেশ্বরে হেলথ অ্যাসিস্ট্যান্ট কোর্স, হুগলিতে হেলথ অ্যাসিস্ট্যান্ট ডিপ্লোমা, পশ্চিমবঙ্গে মেডিকেল অ্যাসিস্ট্যান্ট প্রশিক্ষণ",
    eligibility: "Class 10 (Madhyamik) or Class 12 (Higher Secondary) pass from any recognized board. No entrance exam required.",
    eligibility_bn: "যেকোনো স্বীকৃত বোর্ড থেকে দশম শ্রেণী (মাধ্যমিক) বা দ্বাদশ শ্রেণী (উচ্চমাধ্যমিক) পাশ। কোনো ভর্তি পরীক্ষার প্রয়োজন নেই।",
    careerProspects: [
      "Hospital Health Assistant",
      "Clinical Assistant",
      "Home Healthcare Aide",
      "Diagnostic Centre Assistant",
      "Pharmacy Assistant",
      "Community Health Worker",
    ],
    careerProspects_bn: [
      "হাসপাতাল হেলথ অ্যাসিস্ট্যান্ট",
      "ক্লিনিক্যাল অ্যাসিস্ট্যান্ট",
      "হোম হেলথকেয়ার এইড",
      "ডায়াগনস্টিক সেন্টার অ্যাসিস্ট্যান্ট",
      "ফার্মেসি অ্যাসিস্ট্যান্ট",
      "কমিউনিটি হেলথ ওয়ার্কার",
    ],
  },
  {
    id: "cms-ed",
    title: "Diploma in Community Medical Services & Essential Drugs (CMS & ED)",
    title_bn: "কমিউনিটি মেডিকেল সার্ভিসেস অ্যান্ড এসেনশিয়াল ড্রাগস (CMS & ED)",
    description:
      "Diploma Courses in Community Medical Services & Essential Drugs covering primary healthcare, essential drug dispensing, community health management, and basic clinical skills for rural and urban healthcare delivery.",
    description_bn:
      "প্রাইমারি হেলথকেয়ার, এসেনশিয়াল ড্রাগ ডিসপেন্সিং, কমিউনিটি হেলথ ম্যানেজমেন্ট এবং গ্রামীণ ও শহুরে স্বাস্থ্যসেবা প্রদানের জন্য বেসিক ক্লিনিক্যাল দক্ষতা নিয়ে কমিউনিটি মেডিকেল সার্ভিসেস অ্যান্ড এসেনশিয়াল ড্রাগসে সার্টিফিকেট কোর্স।",
    longDescription:
      "The Certificate in Community Medical Services & Essential Drugs (CMS & ED) at TSHM & TF trains students in primary healthcare delivery, essential drug management, and community health services. The program covers pharmacology basics, essential drug dispensing and storage, common disease identification and first-line treatment, patient counseling, community health education, and basic diagnostic skills. This course prepares students to serve as qualified community healthcare providers, bridging the gap between rural communities and quality healthcare access.",
    longDescription_bn:
      "TSHM & TF-এর কমিউনিটি মেডিকেল সার্ভিসেস অ্যান্ড এসেনশিয়াল ড্রাগস (CMS & ED) সার্টিফিকেট শিক্ষার্থীদের প্রাইমারি হেলথকেয়ার প্রদান, এসেনশিয়াল ড্রাগ ম্যানেজমেন্ট এবং কমিউনিটি হেলথ সার্ভিসে প্রশিক্ষণ দেয়। প্রোগ্রামে ফার্মাকোলজির মূল বিষয়, এসেনশিয়াল ড্রাগ ডিসপেন্সিং ও স্টোরেজ, সাধারণ রোগ চিহ্নিতকরণ ও প্রাথমিক চিকিৎসা, রোগী কাউন্সেলিং, কমিউনিটি হেলথ এডুকেশন এবং বেসিক ডায়াগনস্টিক দক্ষতা অন্তর্ভুক্ত।",
    duration: "6 Months - 1 Year",
    duration_bn: "৬ মাস - ১ বছর",
    image: "/images/courses/CMS & ED.jpeg",
    category: "diploma",
    highlights: [
      "Essential drug dispensing training",
      "Community healthcare skills",
      "Primary healthcare delivery",
      "Job assistance & self-employment",
    ],
    highlights_bn: [
      "এসেনশিয়াল ড্রাগ ডিসপেন্সিং প্রশিক্ষণ",
      "কমিউনিটি হেলথকেয়ার দক্ষতা",
      "প্রাইমারি হেলথকেয়ার প্রদান",
      "চাকরির সহায়তা ও স্বনির্ভরতা",
    ],
    seoTitle: "CMS & ED Certificate Course in Tarakeswar",
    seoTitle_bn: "তারকেশ্বরে CMS & ED সার্টিফিকেট কোর্স",
    seoDescription:
      "Certificate in Community Medical Services & Essential Drugs (CMS & ED) at TSHM Tarakeswar. Primary healthcare, drug dispensing, community health training in Hooghly, West Bengal.",
    seoDescription_bn:
      "TSHM তারকেশ্বরে কমিউনিটি মেডিকেল সার্ভিসেস অ্যান্ড এসেনশিয়াল ড্রাগস (CMS & ED) সার্টিফিকেট। হুগলি, পশ্চিমবঙ্গে প্রাইমারি হেলথকেয়ার, ড্রাগ ডিসপেন্সিং, কমিউনিটি হেলথ প্রশিক্ষণ।",
    seoKeywords:
      "CMS ED course Tarakeswar, community medical services certificate Hooghly, essential drugs course West Bengal, healthcare certificate near me",
    seoKeywords_bn:
      "তারকেশ্বরে CMS ED কোর্স, হুগলিতে কমিউনিটি মেডিকেল সার্ভিসেস সার্টিফিকেট, পশ্চিমবঙ্গে এসেনশিয়াল ড্রাগস কোর্স",
    eligibility: "Class 10 (Madhyamik) or Class 12 (Higher Secondary) pass from any recognized board.",
    eligibility_bn: "যেকোনো স্বীকৃত বোর্ড থেকে দশম শ্রেণী (মাধ্যমিক) বা দ্বাদশ শ্রেণী (উচ্চমাধ্যমিক) পাশ।",
    careerProspects: [
      "Community Health Provider",
      "Rural Health Practitioner",
      "Pharmacy Assistant",
      "Healthcare Clinic Assistant",
      "Drug Store Manager",
      "Community Health Educator",
    ],
    careerProspects_bn: [
      "কমিউনিটি হেলথ প্রোভাইডার",
      "গ্রামীণ স্বাস্থ্য চিকিৎসক",
      "ফার্মেসি অ্যাসিস্ট্যান্ট",
      "হেলথকেয়ার ক্লিনিক অ্যাসিস্ট্যান্ট",
      "ড্রাগ স্টোর ম্যানেজার",
      "কমিউনিটি হেলথ এডুকেটর",
    ],
  },
  {
    id: "refrigerator-ac",
    title: "Certificate in Refrigerator & Aircondition",
    title_bn: "রেফ্রিজারেটর ও এয়ারকন্ডিশন সার্টিফিকেট",
    description:
      "Certificate program covering refrigerator and air conditioner installation, repair, maintenance, and troubleshooting. Hands-on practical training for a career in the rapidly growing cooling and refrigeration industry.",
    description_bn:
      "রেফ্রিজারেটর ও এয়ার কন্ডিশনার ইনস্টলেশন, মেরামত, রক্ষণাবেক্ষণ এবং ট্রাবলশুটিং নিয়ে সার্টিফিকেট প্রোগ্রাম। দ্রুত বর্ধনশীল কুলিং ও রেফ্রিজারেশন ইন্ডাস্ট্রিতে ক্যারিয়ারের জন্য হাতে-কলমে প্রশিক্ষণ।",
    longDescription:
      "The Certificate in Refrigerator & Aircondition at TSHM & TF provides focused training in refrigeration and air conditioning systems. The program covers refrigerator repair and maintenance, split and window AC servicing, gas charging and leak detection, electrical wiring and troubleshooting, compressor repair, and thermostat calibration. Students gain hands-on experience with modern equipment, preparing them for immediate employment or self-employment in this high-demand field.",
    longDescription_bn:
      "TSHM & TF-এর রেফ্রিজারেটর ও এয়ারকন্ডিশন সার্টিফিকেট রেফ্রিজারেশন ও এয়ার কন্ডিশনিং সিস্টেমে কেন্দ্রীভূত প্রশিক্ষণ দেয়। প্রোগ্রামে রেফ্রিজারেটর মেরামত ও রক্ষণাবেক্ষণ, স্প্লিট ও উইন্ডো এসি সার্ভিসিং, গ্যাস চার্জিং ও লিক ডিটেকশন, ইলেকট্রিক্যাল ওয়্যারিং ও ট্রাবলশুটিং, কম্প্রেসর মেরামত এবং থার্মোস্ট্যাট ক্যালিব্রেশন অন্তর্ভুক্ত।",
    duration: "1 Year",
    duration_bn: "১ বছর",
    image: "/images/courses/ac-technician.jpg",
    category: "certificate",
    highlights: [
      "Refrigerator & AC repair training",
      "Hands-on practical experience",
      "Self-employment opportunity",
      "High-demand industry skills",
    ],
    highlights_bn: [
      "রেফ্রিজারেটর ও এসি মেরামত প্রশিক্ষণ",
      "হাতে-কলমে ব্যবহারিক অভিজ্ঞতা",
      "স্বনির্ভরতার সুযোগ",
      "উচ্চ চাহিদার ইন্ডাস্ট্রি দক্ষতা",
    ],
    seoTitle: "Refrigerator & AC Certificate Course in Tarakeswar",
    seoTitle_bn: "তারকেশ্বরে রেফ্রিজারেটর ও এসি সার্টিফিকেট কোর্স",
    seoDescription:
      "Certificate in Refrigerator & Aircondition at TSHM Tarakeswar. 6-month program with hands-on training in fridge and AC repair, maintenance, and installation. Hooghly, West Bengal.",
    seoDescription_bn:
      "TSHM তারকেশ্বরে রেফ্রিজারেটর ও এয়ারকন্ডিশন সার্টিফিকেট। ৬ মাসের প্রোগ্রাম, ফ্রিজ ও এসি মেরামত, রক্ষণাবেক্ষণ ও ইনস্টলেশনে হাতে-কলমে প্রশিক্ষণ।",
    seoKeywords:
      "refrigerator repair course Tarakeswar, AC certificate course Hooghly, fridge repair training West Bengal, refrigeration course near me",
    seoKeywords_bn:
      "তারকেশ্বরে রেফ্রিজারেটর মেরামত কোর্স, হুগলিতে এসি সার্টিফিকেট কোর্স, পশ্চিমবঙ্গে ফ্রিজ মেরামত প্রশিক্ষণ",
    eligibility: "Class 8 pass or equivalent. No prior technical knowledge required.",
    eligibility_bn: "অষ্টম শ্রেণী পাশ বা সমমান। পূর্ববর্তী কারিগরি জ্ঞানের প্রয়োজন নেই।",
    careerProspects: [
      "Refrigerator Repair Technician",
      "AC Service Technician",
      "Appliance Repair Specialist",
      "Service Centre Technician",
      "Self-employed Repair Business",
    ],
    careerProspects_bn: [
      "রেফ্রিজারেটর মেরামত টেকনিশিয়ান",
      "এসি সার্ভিস টেকনিশিয়ান",
      "অ্যাপ্লায়েন্স মেরামত স্পেশালিস্ট",
      "সার্ভিস সেন্টার টেকনিশিয়ান",
      "স্বনির্ভর মেরামত ব্যবসা",
    ],
  },
  {
    id: "sales-marketing",
    title: "Certificate in Sales & Marketing Management",
    title_bn: "সেলস অ্যান্ড মার্কেটিং ম্যানেজমেন্ট সার্টিফিকেট",
    description:
      "Certificate program covering sales strategy, marketing management, customer relationship building, and business development techniques for career-ready professionals.",
    description_bn:
      "সেলস স্ট্র্যাটেজি, মার্কেটিং ম্যানেজমেন্ট, কাস্টমার রিলেশনশিপ তৈরি এবং বিজনেস ডেভেলপমেন্ট টেকনিক নিয়ে সার্টিফিকেট প্রোগ্রাম — ক্যারিয়ার-প্রস্তুত পেশাদারদের জন্য।",
    longDescription:
      "The Certificate in Sales and Marketing Management is a 6-month intensive program that equips students with practical skills in sales strategy, customer relationship management, digital marketing fundamentals, and business development. Students learn from industry experts through case studies, role-playing, and real-world projects. This course is ideal for those seeking quick entry into the sales and marketing profession.",
    longDescription_bn:
      "সেলস অ্যান্ড মার্কেটিং ম্যানেজমেন্ট সার্টিফিকেট হলো ৬ মাসের একটি নিবিড় প্রোগ্রাম যা শিক্ষার্থীদের সেলস স্ট্র্যাটেজি, কাস্টমার রিলেশনশিপ ম্যানেজমেন্ট, ডিজিটাল মার্কেটিং-এর মূল বিষয় এবং বিজনেস ডেভেলপমেন্ট-এ ব্যবহারিক দক্ষতা দেয়। শিক্ষার্থীরা কেস স্টাডি, রোল-প্লেয়িং এবং বাস্তব প্রজেক্টের মাধ্যমে ইন্ডাস্ট্রি বিশেষজ্ঞদের কাছ থেকে শেখে। সেলস ও মার্কেটিং পেশায় দ্রুত প্রবেশ করতে চাওয়া যেকোনো ব্যক্তির জন্য এই কোর্সটি আদর্শ।",
    duration: "6 Months",
    duration_bn: "৬ মাস",
    image: "/images/courses/sales-marketing.jpg",
    category: "certificate",
    highlights: [
      "Practical & purposeful education",
      "Professional training",
      "Industry expert sessions",
      "Job preparation support",
    ],
    highlights_bn: [
      "ব্যবহারিক ও কার্যকরী শিক্ষা",
      "পেশাদার প্রশিক্ষণ",
      "ইন্ডাস্ট্রি বিশেষজ্ঞদের সেশন",
      "চাকরির প্রস্তুতিতে সহায়তা",
    ],
    seoTitle: "Sales & Marketing Certificate Course in Tarakeswar",
    seoTitle_bn: "তারকেশ্বরে সেলস অ্যান্ড মার্কেটিং সার্টিফিকেট কোর্স",
    seoDescription:
      "6-month certificate in Sales & Marketing at TSHM Tarakeswar. Learn sales strategy, customer relations, business development. Job preparation support included.",
    seoDescription_bn:
      "TSHM তারকেশ্বরে ৬ মাসের সেলস অ্যান্ড মার্কেটিং সার্টিফিকেট। সেলস স্ট্র্যাটেজি, কাস্টমার রিলেশনস, বিজনেস ডেভেলপমেন্ট শিখুন। চাকরির প্রস্তুতিতে সহায়তা অন্তর্ভুক্ত।",
    seoKeywords:
      "sales marketing course Tarakeswar, marketing certificate Hooghly, business development course West Bengal",
    seoKeywords_bn:
      "তারকেশ্বরে সেলস মার্কেটিং কোর্স, হুগলিতে মার্কেটিং সার্টিফিকেট, পশ্চিমবঙ্গে বিজনেস ডেভেলপমেন্ট কোর্স",
    eligibility: "Class 10 (Madhyamik) pass or equivalent. Open to working professionals seeking upskilling.",
    eligibility_bn: "দশম শ্রেণী (মাধ্যমিক) পাশ বা সমমান। দক্ষতা বাড়াতে চাওয়া কর্মরত পেশাদারদের জন্যও উন্মুক্ত।",
    careerProspects: [
      "Sales Executive",
      "Marketing Coordinator",
      "Business Development Associate",
      "Customer Relationship Manager",
      "Retail Manager",
    ],
    careerProspects_bn: [
      "সেলস এক্সিকিউটিভ",
      "মার্কেটিং কোঅর্ডিনেটর",
      "বিজনেস ডেভেলপমেন্ট অ্যাসোসিয়েট",
      "কাস্টমার রিলেশনশিপ ম্যানেজার",
      "রিটেইল ম্যানেজার",
    ],
  },
  {
    id: "tshm-studies",
    title: "TSHM Studies",
    title_bn: "TSHM স্টাডিজ",
    description:
      "A comprehensive academic support and study program by TSHM & TF designed to help students build strong foundations in core subjects, develop effective study habits, and achieve academic excellence alongside competitive foundation.",
    description_bn:
      "TSHM & TF-এর একটি সম্পূর্ণ একাডেমিক সহায়তা ও অধ্যয়ন প্রোগ্রাম যা শিক্ষার্থীদের মূল বিষয়ে দৃঢ় ভিত্তি তৈরি, কার্যকর অধ্যয়ন অভ্যাস গড়ে তোলা এবং বৃত্তিমূলক প্রশিক্ষণের পাশাপাশি একাডেমিক উৎকর্ষ অর্জনে সহায়তা করে।",
    longDescription:
      "TSHM Studies is a dedicated academic wing of TSHM & TF that provides structured study programs, tutoring, and academic guidance for students pursuing vocational courses alongside their regular education. The program offers supplementary classes, exam preparation, study skill development, and personalized academic mentoring to ensure students excel in both their vocational and academic pursuits.",
    longDescription_bn:
      "TSHM স্টাডিজ হলো TSHM & TF-এর একটি নিবেদিত একাডেমিক শাখা যা বৃত্তিমূলক কোর্সের পাশাপাশি নিয়মিত শিক্ষা অনুসরণকারী শিক্ষার্থীদের জন্য কাঠামোবদ্ধ অধ্যয়ন প্রোগ্রাম, টিউটরিং এবং একাডেমিক গাইডেন্স প্রদান করে।",
    duration: "Flexible",
    duration_bn: "নমনীয়",
    image: "/images/courses/tshm-studies.jpg",
    category: "academy",
    highlights: [
      "Academic support & tutoring",
      "Exam preparation guidance",
      "Study skill development",
      "Personalized mentoring",
    ],
    highlights_bn: [
      "একাডেমিক সহায়তা ও টিউটরিং",
      "পরীক্ষার প্রস্তুতি গাইডেন্স",
      "অধ্যয়ন দক্ষতা উন্নয়ন",
      "ব্যক্তিগত মেন্টরিং",
    ],
    seoTitle: "TSHM Studies - Academic Support Program in Tarakeswar",
    seoTitle_bn: "TSHM স্টাডিজ - তারকেশ্বরে একাডেমিক সহায়তা প্রোগ্রাম",
    seoDescription:
      "TSHM Studies academic support program in Tarakeswar. Tutoring, exam preparation, study skills, and personalized mentoring for students in Hooghly, West Bengal.",
    seoDescription_bn:
      "তারকেশ্বরে TSHM স্টাডিজ একাডেমিক সহায়তা প্রোগ্রাম। হুগলি, পশ্চিমবঙ্গে শিক্ষার্থীদের জন্য টিউটরিং, পরীক্ষার প্রস্তুতি, অধ্যয়ন দক্ষতা এবং ব্যক্তিগত মেন্টরিং।",
    seoKeywords:
      "TSHM studies Tarakeswar, academic support Hooghly, tutoring program West Bengal, study center near me",
    seoKeywords_bn:
      "তারকেশ্বরে TSHM স্টাডিজ, হুগলিতে একাডেমিক সহায়তা, পশ্চিমবঙ্গে টিউটরিং প্রোগ্রাম",
    eligibility: "Open to all students from Class 8 onwards.",
    eligibility_bn: "অষ্টম শ্রেণী থেকে সকল শিক্ষার্থীদের জন্য উন্মুক্ত।",
  },
  {
    id: "beauty-tailoring-academy",
    title: "TSHM Makeup, Beauty & Tailoring Academy",
    title_bn: "TSHM মেকআপ, বিউটি ও টেইলারিং একাডেমি",
    description:
      "Learn professional makeup, beauty therapy, skincare, hairstyling, and tailoring techniques from industry experts. Comprehensive academy program for self-employment and career growth.",
    description_bn:
      "ইন্ডাস্ট্রি বিশেষজ্ঞদের কাছ থেকে পেশাদার মেকআপ, বিউটি থেরাপি, স্কিনকেয়ার, হেয়ারস্টাইলিং এবং টেইলারিং টেকনিক শিখুন। স্বনির্ভরতা ও ক্যারিয়ার উন্নতির জন্য সম্পূর্ণ বিউটি একাডেমি প্রোগ্রাম।",
    longDescription:
      "The Makeup, Beauty & Tailoring Academy at TSHM & TF is a comprehensive program designed for aspiring beauty professionals and fashion enthusiasts. The curriculum covers professional makeup techniques, skincare treatments, hairstyling, beauty therapy, and tailoring & fashion design. Students learn on live models with professional-grade products and equipment. This program is especially popular among women seeking self-employment opportunities and career independence.",
    longDescription_bn:
      "TSHM & TF-এর মেকআপ, বিউটি ও টেইলারিং একাডেমি উচ্চাকাঙ্ক্ষী বিউটি পেশাদার এবং ফ্যাশন উৎসাহীদের জন্য তৈরি একটি সম্পূর্ণ প্রোগ্রাম। পাঠ্যক্রমে পেশাদার মেকআপ টেকনিক, স্কিনকেয়ার ট্রিটমেন্ট, হেয়ারস্টাইলিং, বিউটি থেরাপি এবং টেইলারিং ও ফ্যাশন ডিজাইন অন্তর্ভুক্ত। শিক্ষার্থীরা লাইভ মডেলে পেশাদার মানের প্রোডাক্ট ও সরঞ্জাম দিয়ে শেখে। এই প্রোগ্রামটি বিশেষভাবে স্বনির্ভরতা ও ক্যারিয়ারে স্বাধীনতা খুঁজছেন এমন মহিলাদের মধ্যে জনপ্রিয়।",
    duration: "6 Months - 1 Year",
    duration_bn: "৬ মাস - ১ বছর",
    image: "/images/courses/beauty-academy.jpg",
    category: "academy",
    highlights: [
      "Beauty & wellness training",
      "Tailoring & fashion skills",
      "Self-employment guidance",
      "Unfoldment of latent talent",
      "We provide franchise certificate",
    ],
    highlights_bn: [
      "বিউটি ও ওয়েলনেস প্রশিক্ষণ",
      "টেইলারিং ও ফ্যাশন দক্ষতা",
      "স্বনির্ভরতার দিকনির্দেশনা",
      "সুপ্ত প্রতিভার বিকাশ",
      "আমরা ফ্র্যাঞ্চাইজি সার্টিফিকেট প্রদান করি",
    ],
    seoTitle: "Beauty Academy & Tailoring Course in Tarakeswar",
    seoTitle_bn: "তারকেশ্বরে বিউটি একাডেমি ও টেইলারিং কোর্স",
    seoDescription:
      "Join TSHM's Beauty & Tailoring Academy in Tarakeswar. Professional makeup, skincare, hairstyling & fashion design training. Self-employment support. 6 months - 1 year.",
    seoDescription_bn:
      "তারকেশ্বরে TSHM-এর বিউটি ও টেইলারিং একাডেমিতে ভর্তি হন। পেশাদার মেকআপ, স্কিনকেয়ার, হেয়ারস্টাইলিং ও ফ্যাশন ডিজাইন প্রশিক্ষণ। স্বনির্ভরতায় সহায়তা। ৬ মাস - ১ বছর।",
    seoKeywords:
      "beauty academy Tarakeswar, makeup course Hooghly, tailoring course near me, beauty parlour training West Bengal, fashion design course Tarakeswar",
    seoKeywords_bn:
      "তারকেশ্বরে বিউটি একাডেমি, হুগলিতে মেকআপ কোর্স, টেইলারিং কোর্স, পশ্চিমবঙ্গে বিউটি পার্লার প্রশিক্ষণ, তারকেশ্বরে ফ্যাশন ডিজাইন কোর্স",
    eligibility: "No minimum educational qualification required. Open to all aspiring beauty professionals.",
    eligibility_bn: "কোনো ন্যূনতম শিক্ষাগত যোগ্যতার প্রয়োজন নেই। সকল উচ্চাকাঙ্ক্ষী বিউটি পেশাদারদের জন্য উন্মুক্ত।",
    careerProspects: [
      "Makeup Artist",
      "Beauty Therapist",
      "Salon Owner",
      "Bridal Makeup Specialist",
      "Fashion Designer",
      "Tailoring Entrepreneur",
    ],
    careerProspects_bn: [
      "মেকআপ আর্টিস্ট",
      "বিউটি থেরাপিস্ট",
      "সেলুন মালিক",
      "ব্রাইডাল মেকআপ স্পেশালিস্ট",
      "ফ্যাশন ডিজাইনার",
      "টেইলারিং উদ্যোক্তা",
    ],
  },
  {
    id: "career-counseling",
    title: "Career Counseling",
    title_bn: "ক্যারিয়ার কাউন্সেলিং",
    description:
      "Scientific career counseling using DMIT (Dermatoglyphics Multiple Intelligence Test) to identify innate strengths and ideal career paths. Personalized guidance for students and parents to make informed career decisions.",
    description_bn:
      "DMIT (ডার্মাটোগ্লিফিক্স মাল্টিপল ইন্টেলিজেন্স টেস্ট) ব্যবহার করে বৈজ্ঞানিক ক্যারিয়ার কাউন্সেলিং — জন্মগত শক্তি ও আদর্শ ক্যারিয়ার পথ চিহ্নিত করতে। শিক্ষার্থী ও অভিভাবকদের জন্য সঠিক ক্যারিয়ার সিদ্ধান্ত নেওয়ার ব্যক্তিগত গাইডেন্স।",
    longDescription:
      "TSHM & TF's Career Counseling service uses the scientifically-backed DMIT (Dermatoglyphics Multiple Intelligence Test) method to identify a student's innate strengths, learning style, and ideal career paths. Through detailed fingerprint analysis and aptitude testing, our trained counselors create personalized career roadmaps for each student. This service is invaluable for students confused about career choices after Madhyamik or Higher Secondary, and for parents looking to support their children's career decisions with data-driven insights.",
    longDescription_bn:
      "TSHM & TF-এর ক্যারিয়ার কাউন্সেলিং সেবা বৈজ্ঞানিকভাবে প্রমাণিত DMIT (ডার্মাটোগ্লিফিক্স মাল্টিপল ইন্টেলিজেন্স টেস্ট) পদ্ধতি ব্যবহার করে শিক্ষার্থীর জন্মগত শক্তি, শেখার ধরন এবং আদর্শ ক্যারিয়ার পথ চিহ্নিত করে। বিস্তারিত ফিঙ্গারপ্রিন্ট বিশ্লেষণ ও অ্যাপটিটিউড টেস্টের মাধ্যমে আমাদের প্রশিক্ষিত কাউন্সেলররা প্রতিটি শিক্ষার্থীর জন্য ব্যক্তিগত ক্যারিয়ার রোডম্যাপ তৈরি করেন। মাধ্যমিক বা উচ্চমাধ্যমিকের পর ক্যারিয়ার নিয়ে দ্বিধায় থাকা শিক্ষার্থীদের জন্য এবং তথ্যনির্ভর সিদ্ধান্তে সন্তানদের সহায়তা করতে চাওয়া অভিভাবকদের জন্য এই সেবা অমূল্য।",
    duration: "Ongoing",
    duration_bn: "চলমান",
    image: "/images/courses/career-counseling.jpeg",
    category: "service",
    highlights: [
      "DMIT assessment",
      "Personalized career roadmap",
      "Aptitude & potential analysis",
      "Parent-student counseling",
    ],
    highlights_bn: [
      "DMIT মূল্যায়ন",
      "ব্যক্তিগত ক্যারিয়ার রোডম্যাপ",
      "অ্যাপটিটিউড ও সম্ভাবনা বিশ্লেষণ",
      "অভিভাবক-শিক্ষার্থী কাউন্সেলিং",
    ],
    seoTitle: "Career Counseling & DMIT Assessment in Tarakeswar",
    seoTitle_bn: "তারকেশ্বরে ক্যারিয়ার কাউন্সেলিং ও DMIT মূল্যায়ন",
    seoDescription:
      "Scientific career counseling using DMIT at TSHM Tarakeswar. Identify innate strengths, get personalized career guidance. For students after Madhyamik & HS in Hooghly, West Bengal.",
    seoDescription_bn:
      "TSHM তারকেশ্বরে DMIT ব্যবহার করে বৈজ্ঞানিক ক্যারিয়ার কাউন্সেলিং। জন্মগত শক্তি চিহ্নিত করুন, ব্যক্তিগত ক্যারিয়ার গাইডেন্স পান। হুগলি, পশ্চিমবঙ্গে মাধ্যমিক ও উচ্চমাধ্যমিকের পর শিক্ষার্থীদের জন্য।",
    seoKeywords:
      "career counseling Tarakeswar, DMIT test Hooghly, career guidance after 10th, career counseling West Bengal, aptitude test near me",
    seoKeywords_bn:
      "তারকেশ্বরে ক্যারিয়ার কাউন্সেলিং, হুগলিতে DMIT টেস্ট, দশম শ্রেণীর পর ক্যারিয়ার গাইডেন্স, পশ্চিমবঙ্গে ক্যারিয়ার কাউন্সেলিং, অ্যাপটিটিউড টেস্ট",
    eligibility: "Open to all students and parents. Recommended for students in Class 8-12 and recent graduates.",
    eligibility_bn: "সকল শিক্ষার্থী ও অভিভাবকদের জন্য উন্মুক্ত। অষ্টম থেকে দ্বাদশ শ্রেণীর শিক্ষার্থী এবং সদ্য স্নাতকদের জন্য বিশেষভাবে প্রযোজ্য।",
  },
  {
    id: "consultancy-services",
    title: "Consultancy Services",
    title_bn: "কনসালট্যান্সি সার্ভিসেস",
    description:
      "Professional consultancy services by TSHM & TF offering expert guidance on career planning, business development, skill assessment, and institutional partnerships for individuals and organizations.",
    description_bn:
      "TSHM & TF-এর পেশাদার কনসালট্যান্সি সার্ভিসেস — ক্যারিয়ার পরিকল্পনা, ব্যবসা উন্নয়ন, দক্ষতা মূল্যায়ন এবং প্রাতিষ্ঠানিক অংশীদারিত্বের জন্য ব্যক্তি ও প্রতিষ্ঠানকে বিশেষজ্ঞ গাইডেন্স।",
    longDescription:
      "TSHM & TF Consultancy Services provides expert guidance and advisory support for individuals and organizations. Our consultancy covers career planning, business setup and development, skill gap assessment, educational institution partnerships, and workforce development strategies. We help students, professionals, and entrepreneurs make informed decisions to achieve their goals.",
    longDescription_bn:
      "TSHM & TF কনসালট্যান্সি সার্ভিসেস ব্যক্তি ও প্রতিষ্ঠানের জন্য বিশেষজ্ঞ গাইডেন্স ও উপদেষ্টা সহায়তা প্রদান করে। আমাদের কনসালট্যান্সিতে ক্যারিয়ার পরিকল্পনা, ব্যবসা স্থাপন ও উন্নয়ন, দক্ষতার ঘাটতি মূল্যায়ন, শিক্ষা প্রতিষ্ঠান অংশীদারিত্ব এবং কর্মশক্তি উন্নয়ন কৌশল অন্তর্ভুক্ত।",
    duration: "Flexible",
    duration_bn: "নমনীয়",
    image: "/images/courses/career-counseling.jpg",
    category: "service",
    highlights: [
      "Expert career guidance",
      "Business development advisory",
      "Skill gap assessment",
      "Institutional partnerships",
    ],
    highlights_bn: [
      "বিশেষজ্ঞ ক্যারিয়ার গাইডেন্স",
      "ব্যবসা উন্নয়ন উপদেশ",
      "দক্ষতার ঘাটতি মূল্যায়ন",
      "প্রাতিষ্ঠানিক অংশীদারিত্ব",
    ],
    seoTitle: "Consultancy Services in Tarakeswar - TSHM & TF",
    seoTitle_bn: "তারকেশ্বরে কনসালট্যান্সি সার্ভিসেস - TSHM & TF",
    seoDescription:
      "Professional consultancy services at TSHM Tarakeswar. Career planning, business development, skill assessment, and institutional partnership advisory in Hooghly, West Bengal.",
    seoDescription_bn:
      "TSHM তারকেশ্বরে পেশাদার কনসালট্যান্সি সার্ভিসেস। হুগলি, পশ্চিমবঙ্গে ক্যারিয়ার পরিকল্পনা, ব্যবসা উন্নয়ন, দক্ষতা মূল্যায়ন ও প্রাতিষ্ঠানিক অংশীদারিত্ব উপদেষ্টা।",
    seoKeywords:
      "consultancy services Tarakeswar, career consultancy Hooghly, business advisory West Bengal, skill assessment near me",
    seoKeywords_bn:
      "তারকেশ্বরে কনসালট্যান্সি সার্ভিসেস, হুগলিতে ক্যারিয়ার কনসালট্যান্সি, পশ্চিমবঙ্গে ব্যবসা উপদেষ্টা",
    eligibility: "Open to individuals, professionals, and organizations seeking expert guidance.",
    eligibility_bn: "বিশেষজ্ঞ গাইডেন্স খুঁজছেন এমন ব্যক্তি, পেশাদার ও প্রতিষ্ঠানের জন্য উন্মুক্ত।",
  },
  {
    id: "job-grooming",
    title: "Job Grooming",
    title_bn: "জব গ্রুমিং",
    description:
      "Comprehensive job grooming program designed to prepare candidates for the professional world with interview skills, resume building, workplace etiquette, and personality development training.",
    description_bn:
      "ইন্টারভিউ দক্ষতা, রেজিউমে তৈরি, কর্মক্ষেত্রের শিষ্টাচার এবং ব্যক্তিত্ব বিকাশ প্রশিক্ষণের মাধ্যমে প্রার্থীদের পেশাদার জগতের জন্য প্রস্তুত করতে ডিজাইন করা সম্পূর্ণ জব গ্রুমিং প্রোগ্রাম।",
    longDescription:
      "The Job Grooming program at TSHM & TF is a focused training initiative that prepares students and job seekers for successful careers. The program covers resume and CV writing, interview preparation and mock interviews, workplace communication and etiquette, professional dress code and grooming, confidence building and public speaking, and corporate culture orientation. This program bridges the gap between education and employment readiness.",
    longDescription_bn:
      "TSHM & TF-এর জব গ্রুমিং প্রোগ্রাম একটি কেন্দ্রীভূত প্রশিক্ষণ উদ্যোগ যা শিক্ষার্থী ও চাকরি প্রার্থীদের সফল ক্যারিয়ারের জন্য প্রস্তুত করে। প্রোগ্রামে রেজিউমে ও সিভি লেখা, ইন্টারভিউ প্রস্তুতি ও মক ইন্টারভিউ, কর্মক্ষেত্রে যোগাযোগ ও শিষ্টাচার, পেশাদার ড্রেস কোড ও গ্রুমিং, আত্মবিশ্বাস তৈরি ও পাবলিক স্পিকিং এবং কর্পোরেট কালচার ওরিয়েন্টেশন অন্তর্ভুক্ত।",
    duration: "Flexible",
    duration_bn: "নমনীয়",
    image: "/images/courses/spoken-english.jpg",
    category: "service",
    highlights: [
      "Interview preparation",
      "Resume & CV building",
      "Personality development",
      "Workplace etiquette training",
    ],
    highlights_bn: [
      "ইন্টারভিউ প্রস্তুতি",
      "রেজিউমে ও সিভি তৈরি",
      "ব্যক্তিত্ব বিকাশ",
      "কর্মক্ষেত্রের শিষ্টাচার প্রশিক্ষণ",
    ],
    seoTitle: "Job Grooming Program in Tarakeswar - TSHM & TF",
    seoTitle_bn: "তারকেশ্বরে জব গ্রুমিং প্রোগ্রাম - TSHM & TF",
    seoDescription:
      "Job grooming and interview preparation at TSHM Tarakeswar. Resume building, personality development, workplace etiquette training in Hooghly, West Bengal.",
    seoDescription_bn:
      "TSHM তারকেশ্বরে জব গ্রুমিং ও ইন্টারভিউ প্রস্তুতি। হুগলি, পশ্চিমবঙ্গে রেজিউমে তৈরি, ব্যক্তিত্ব বিকাশ, কর্মক্ষেত্রের শিষ্টাচার প্রশিক্ষণ।",
    seoKeywords:
      "job grooming Tarakeswar, interview preparation Hooghly, resume building course West Bengal, personality development near me",
    seoKeywords_bn:
      "তারকেশ্বরে জব গ্রুমিং, হুগলিতে ইন্টারভিউ প্রস্তুতি, পশ্চিমবঙ্গে রেজিউমে তৈরি কোর্স, ব্যক্তিত্ব বিকাশ",
    eligibility: "Open to all students and job seekers.",
    eligibility_bn: "সকল শিক্ষার্থী ও চাকরি প্রার্থীদের জন্য উন্মুক্ত।",
  },
  {
    id: "pgsep",
    title: "Professional Growth & Skill Enhancement Program (PGSEP)",
    title_bn: "প্রফেশনাল গ্রোথ অ্যান্ড স্কিল এনহ্যান্সমেন্ট প্রোগ্রাম (PGSEP)",
    description:
      "A structured professional development program focused on upskilling, leadership development, advanced communication, and career advancement for working professionals and graduates.",
    description_bn:
      "কর্মরত পেশাদার ও স্নাতকদের জন্য আপস্কিলিং, লিডারশিপ ডেভেলপমেন্ট, অ্যাডভান্সড কমিউনিকেশন এবং ক্যারিয়ার অগ্রগতিতে কেন্দ্রীভূত একটি কাঠামোবদ্ধ পেশাদার উন্নয়ন প্রোগ্রাম।",
    longDescription:
      "The Professional Growth & Skill Enhancement Program (PGSEP) at TSHM & TF is designed to accelerate career growth for working professionals and recent graduates. The program focuses on leadership and management skills, advanced communication techniques, professional networking, time management and productivity, critical thinking and problem solving, and industry-specific skill enhancement. PGSEP helps participants stay competitive in today's evolving job market.",
    longDescription_bn:
      "TSHM & TF-এর প্রফেশনাল গ্রোথ অ্যান্ড স্কিল এনহ্যান্সমেন্ট প্রোগ্রাম (PGSEP) কর্মরত পেশাদার ও সদ্য স্নাতকদের ক্যারিয়ার বৃদ্ধি ত্বরান্বিত করতে ডিজাইন করা হয়েছে। প্রোগ্রামে লিডারশিপ ও ম্যানেজমেন্ট দক্ষতা, অ্যাডভান্সড কমিউনিকেশন টেকনিক, প্রফেশনাল নেটওয়ার্কিং, টাইম ম্যানেজমেন্ট ও প্রোডাক্টিভিটি, ক্রিটিক্যাল থিংকিং ও সমস্যা সমাধান এবং ইন্ডাস্ট্রি-নির্দিষ্ট দক্ষতা বৃদ্ধি অন্তর্ভুক্ত।",
    duration: "Flexible",
    duration_bn: "নমনীয়",
    image: "/images/courses/pgsep.jpg",
    category: "service",
    highlights: [
      "Leadership development",
      "Advanced communication skills",
      "Professional networking",
      "Career advancement support",
    ],
    highlights_bn: [
      "লিডারশিপ ডেভেলপমেন্ট",
      "অ্যাডভান্সড কমিউনিকেশন দক্ষতা",
      "প্রফেশনাল নেটওয়ার্কিং",
      "ক্যারিয়ার অগ্রগতি সহায়তা",
    ],
    seoTitle: "Professional Growth & Skill Enhancement Program in Tarakeswar",
    seoTitle_bn: "তারকেশ্বরে প্রফেশনাল গ্রোথ ও স্কিল এনহ্যান্সমেন্ট প্রোগ্রাম",
    seoDescription:
      "PGSEP at TSHM Tarakeswar. Leadership development, advanced communication, professional networking, and career growth program in Hooghly, West Bengal.",
    seoDescription_bn:
      "TSHM তারকেশ্বরে PGSEP। হুগলি, পশ্চিমবঙ্গে লিডারশিপ ডেভেলপমেন্ট, অ্যাডভান্সড কমিউনিকেশন, প্রফেশনাল নেটওয়ার্কিং ও ক্যারিয়ার গ্রোথ প্রোগ্রাম।",
    seoKeywords:
      "professional growth program Tarakeswar, skill enhancement Hooghly, leadership development West Bengal, PGSEP course near me",
    seoKeywords_bn:
      "তারকেশ্বরে প্রফেশনাল গ্রোথ প্রোগ্রাম, হুগলিতে স্কিল এনহ্যান্সমেন্ট, পশ্চিমবঙ্গে লিডারশিপ ডেভেলপমেন্ট",
    eligibility: "Open to working professionals, graduates, and anyone seeking career advancement.",
    eligibility_bn: "কর্মরত পেশাদার, স্নাতক এবং ক্যারিয়ার অগ্রগতি খুঁজছেন এমন যেকোনো ব্যক্তির জন্য উন্মুক্ত।",
  },
  {
    id: "online-degrees",
    title: "Online Degree Programs",
    title_bn: "অনলাইন ডিগ্রি প্রোগ্রাম",
    description:
      "Pursue recognized online degrees from reputed universities - BA, B.COM, B.SC., BBA, MBA, B.SC. in Hotel Management and many more. Flexible learning schedules with full academic support.",
    description_bn:
      "স্বনামধন্য বিশ্ববিদ্যালয় থেকে স্বীকৃত অনলাইন ডিগ্রি অর্জন করুন — BA, B.COM, B.SC., BBA, MBA, হোটেল ম্যানেজমেন্টে B.SC. এবং আরও অনেক। সম্পূর্ণ একাডেমিক সহায়তা সহ নমনীয় শিক্ষার সময়সূচি।",
    longDescription:
      "TSHM & TF facilitates online degree programs from recognized universities, enabling students in Tarakeswar and surrounding areas to pursue higher education without relocating. Available programs include BA, B.COM, B.SC., BBA, MBA, and B.Sc. in Hotel Management. Students get full academic support including study materials, doubt clearing sessions, exam preparation, and assignment guidance. This is ideal for working professionals, homemakers, or anyone looking to upgrade their qualifications while maintaining their current commitments.",
    longDescription_bn:
      "TSHM & TF স্বীকৃত বিশ্ববিদ্যালয়ের অনলাইন ডিগ্রি প্রোগ্রাম সুবিধা দেয়, যা তারকেশ্বর ও আশেপাশের এলাকার শিক্ষার্থীদের স্থানান্তর ছাড়াই উচ্চশিক্ষা অর্জনে সক্ষম করে। উপলব্ধ প্রোগ্রামগুলোর মধ্যে রয়েছে BA, B.COM, B.SC., BBA, MBA এবং হোটেল ম্যানেজমেন্টে B.Sc.। শিক্ষার্থীরা স্টাডি ম্যাটেরিয়াল, ডাউট ক্লিয়ারিং সেশন, পরীক্ষার প্রস্তুতি এবং অ্যাসাইনমেন্ট গাইডেন্স সহ সম্পূর্ণ একাডেমিক সহায়তা পায়। এটি কর্মরত পেশাদার, গৃহিণী বা বর্তমান দায়িত্ব বজায় রেখে যোগ্যতা বাড়াতে চাওয়া যেকোনো ব্যক্তির জন্য আদর্শ।",
    duration: "2-3 Years",
    duration_bn: "২-৩ বছর",
    image: "/images/courses/online-degree.jpg",
    category: "online",
    highlights: [
      "BA, B.COM, B.SC., BBA, MBA",
      "B.SC. in Hotel Management",
      "Recognized universities",
      "Flexible learning schedule",
    ],
    highlights_bn: [
      "BA, B.COM, B.SC., BBA, MBA",
      "হোটেল ম্যানেজমেন্টে B.SC.",
      "স্বীকৃত বিশ্ববিদ্যালয়",
      "নমনীয় শিক্ষার সময়সূচি",
    ],
    seoTitle: "Online Degree Programs - BA, BBA, MBA, B.Sc Hotel Management",
    seoTitle_bn: "অনলাইন ডিগ্রি প্রোগ্রাম — BA, BBA, MBA, B.Sc হোটেল ম্যানেজমেন্ট",
    seoDescription:
      "Pursue online degrees at TSHM Tarakeswar — BA, B.COM, BBA, MBA, B.Sc Hotel Management from recognized universities. Flexible learning with full academic support in Hooghly.",
    seoDescription_bn:
      "TSHM তারকেশ্বরে অনলাইন ডিগ্রি অর্জন করুন — স্বীকৃত বিশ্ববিদ্যালয় থেকে BA, B.COM, BBA, MBA, B.Sc হোটেল ম্যানেজমেন্ট। হুগলিতে সম্পূর্ণ একাডেমিক সহায়তা সহ নমনীয় শিক্ষা।",
    seoKeywords:
      "online degree Tarakeswar, distance education Hooghly, online BA BBA MBA West Bengal, B.Sc hotel management online, recognized university degree near me",
    seoKeywords_bn:
      "তারকেশ্বরে অনলাইন ডিগ্রি, হুগলিতে দূরশিক্ষা, পশ্চিমবঙ্গে অনলাইন BA BBA MBA, অনলাইন B.Sc হোটেল ম্যানেজমেন্ট, স্বীকৃত বিশ্ববিদ্যালয়ের ডিগ্রি",
    eligibility: "Varies by program. Class 12 (HS) for undergraduate, graduation for MBA. Contact for specific requirements.",
    eligibility_bn: "প্রোগ্রাম অনুযায়ী পরিবর্তনশীল। স্নাতকের জন্য দ্বাদশ শ্রেণী (উচ্চমাধ্যমিক), MBA-র জন্য স্নাতক পাশ। নির্দিষ্ট প্রয়োজনীয়তার জন্য যোগাযোগ করুন।",
    careerProspects: [
      "Higher education qualification",
      "Career advancement",
      "Government job eligibility",
      "Professional recognition",
    ],
    careerProspects_bn: [
      "উচ্চশিক্ষার যোগ্যতা",
      "ক্যারিয়ারে উন্নতি",
      "সরকারি চাকরির যোগ্যতা",
      "পেশাদার স্বীকৃতি",
    ],
  },
];
