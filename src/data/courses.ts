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
    title: "Hotel Management",
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
    image: "/images/courses/hotel-management.jpg",
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
    image: "/images/courses/career-counseling.jpg",
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
    id: "sales-marketing",
    title: "Certificate in Sales and Marketing Management",
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
    id: "beauty-tailoring-academy",
    title: "TSHM & TF Make Up Beauty Tailoring Academy",
    title_bn: "TSHM & TF মেকআপ বিউটি একাডেমি ও টেইলারিং",
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
    ],
    highlights_bn: [
      "বিউটি ও ওয়েলনেস প্রশিক্ষণ",
      "টেইলারিং ও ফ্যাশন দক্ষতা",
      "স্বনির্ভরতার দিকনির্দেশনা",
      "সুপ্ত প্রতিভার বিকাশ",
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
    id: "odd-jobs",
    title: "TSHM & TF Odd Jobs Services",
    title_bn: "TSHM & TF অড জবস সার্ভিসেস",
    description:
      "Effective alternate career options for students with job preparation emphasizing individual student potential. Practical skills training for various service industry roles.",
    description_bn:
      "শিক্ষার্থীদের ব্যক্তিগত সম্ভাবনার উপর জোর দিয়ে কার্যকর বিকল্প ক্যারিয়ারের সুযোগ এবং চাকরির প্রস্তুতি। বিভিন্ন সার্ভিস ইন্ডাস্ট্রি ভূমিকার জন্য ব্যবহারিক দক্ষতা প্রশিক্ষণ।",
    longDescription:
      "TSHM & TF Odd Jobs Services provides practical skills training for various service industry roles. This program is designed for students seeking alternate career paths, with a focus on identifying and developing individual potential. Students receive hands-on training in multiple service skills, job preparation coaching, and placement assistance.",
    longDescription_bn:
      "TSHM & TF অড জবস সার্ভিসেস বিভিন্ন সার্ভিস ইন্ডাস্ট্রি ভূমিকার জন্য ব্যবহারিক দক্ষতা প্রশিক্ষণ দেয়। এই প্রোগ্রামটি বিকল্প ক্যারিয়ার পথ খুঁজছেন এমন শিক্ষার্থীদের জন্য তৈরি, যেখানে ব্যক্তিগত সম্ভাবনা চিহ্নিত করা ও বিকাশের উপর বিশেষ মনোযোগ দেওয়া হয়। শিক্ষার্থীরা একাধিক সেবা দক্ষতায় হাতে-কলমে প্রশিক্ষণ, চাকরির প্রস্তুতি কোচিং এবং প্লেসমেন্ট সহায়তা পায়।",
    duration: "Flexible",
    duration_bn: "নমনীয়",
    image: "/images/courses/odd-jobs.jpg",
    category: "service",
    highlights: [
      "Alternate career options",
      "Individual potential focus",
      "Job preparation",
      "Placement assistance",
    ],
    highlights_bn: [
      "বিকল্প ক্যারিয়ারের সুযোগ",
      "ব্যক্তিগত সম্ভাবনায় মনোযোগ",
      "চাকরির প্রস্তুতি",
      "প্লেসমেন্ট সহায়তা",
    ],
    seoTitle: "Odd Jobs & Service Skills Training in Tarakeswar",
    seoTitle_bn: "তারকেশ্বরে অড জবস ও সার্ভিস স্কিলস প্রশিক্ষণ",
    seoDescription:
      "Practical service industry skills training at TSHM Tarakeswar. Alternate career options with job preparation and placement assistance.",
    seoDescription_bn:
      "TSHM তারকেশ্বরে ব্যবহারিক সার্ভিস ইন্ডাস্ট্রি দক্ষতা প্রশিক্ষণ। চাকরির প্রস্তুতি ও প্লেসমেন্ট সহায়তা সহ বিকল্প ক্যারিয়ারের সুযোগ।",
    seoKeywords:
      "odd jobs training Tarakeswar, service skills course Hooghly, job preparation West Bengal",
    seoKeywords_bn:
      "তারকেশ্বরে অড জবস প্রশিক্ষণ, হুগলিতে সার্ভিস স্কিলস কোর্স, পশ্চিমবঙ্গে চাকরির প্রস্তুতি",
    eligibility: "Open to all. No minimum educational qualification required.",
    eligibility_bn: "সকলের জন্য উন্মুক্ত। কোনো ন্যূনতম শিক্ষাগত যোগ্যতার প্রয়োজন নেই।",
  },
  {
    id: "spoken-english",
    title: "Spoken English",
    title_bn: "স্পোকেন ইংলিশ",
    description:
      "Improve your English communication skills with our structured spoken English program. Focus on fluency, pronunciation, confidence building, and personality development for professional success.",
    description_bn:
      "আমাদের কাঠামোবদ্ধ স্পোকেন ইংলিশ প্রোগ্রামে আপনার ইংরেজি যোগাযোগ দক্ষতা উন্নত করুন। পেশাদার সাফল্যের জন্য ফ্লুয়েন্সি, উচ্চারণ, আত্মবিশ্বাস তৈরি এবং ব্যক্তিত্ব বিকাশে মনোযোগ।",
    longDescription:
      "The Spoken English program at TSHM & TF is a structured course designed to transform students' English communication abilities. Available in 3-month and 6-month formats, the program focuses on building fluency, improving pronunciation, developing confidence in public speaking, and enhancing personality for professional environments. Students practice through group discussions, mock interviews, presentations, and real-world conversation scenarios. This course is essential for anyone seeking employment in the hospitality, corporate, or service industries.",
    longDescription_bn:
      "TSHM & TF-এর স্পোকেন ইংলিশ প্রোগ্রাম একটি কাঠামোবদ্ধ কোর্স যা শিক্ষার্থীদের ইংরেজি যোগাযোগ দক্ষতাকে রূপান্তরিত করতে তৈরি। ৩ মাস ও ৬ মাসের ফরম্যাটে পাওয়া যায়, এই প্রোগ্রামটি ফ্লুয়েন্সি তৈরি, উচ্চারণ উন্নতি, পাবলিক স্পিকিং-এ আত্মবিশ্বাস বাড়ানো এবং পেশাদার পরিবেশের জন্য ব্যক্তিত্ব বিকাশে মনোযোগ দেয়। শিক্ষার্থীরা গ্রুপ ডিসকাশন, মক ইন্টারভিউ, প্রেজেন্টেশন এবং বাস্তব কথোপকথনের মাধ্যমে অনুশীলন করে। হসপিটালিটি, কর্পোরেট বা সার্ভিস ইন্ডাস্ট্রিতে চাকরি খুঁজছেন এমন যেকোনো ব্যক্তির জন্য এই কোর্সটি অপরিহার্য।",
    duration: "3 Months & 6 Months",
    duration_bn: "৩ মাস ও ৬ মাস",
    image: "/images/courses/spoken-english.jpg",
    category: "certificate",
    highlights: [
      "3 months & 6 months options",
      "Personality development",
      "Interview preparation",
      "Communication skills building",
    ],
    highlights_bn: [
      "৩ মাস ও ৬ মাসের অপশন",
      "ব্যক্তিত্ব বিকাশ",
      "ইন্টারভিউ প্রস্তুতি",
      "যোগাযোগ দক্ষতা তৈরি",
    ],
    seoTitle: "Spoken English Course in Tarakeswar - 3 & 6 Month Programs",
    seoTitle_bn: "তারকেশ্বরে স্পোকেন ইংলিশ কোর্স - ৩ ও ৬ মাসের প্রোগ্রাম",
    seoDescription:
      "Join spoken English classes at TSHM Tarakeswar. 3 & 6 month programs for fluency, pronunciation, interview preparation & personality development. Hooghly, West Bengal.",
    seoDescription_bn:
      "TSHM তারকেশ্বরে স্পোকেন ইংলিশ ক্লাসে যোগ দিন। ফ্লুয়েন্সি, উচ্চারণ, ইন্টারভিউ প্রস্তুতি ও ব্যক্তিত্ব বিকাশের জন্য ৩ ও ৬ মাসের প্রোগ্রাম। হুগলি, পশ্চিমবঙ্গ।",
    seoKeywords:
      "spoken english course Tarakeswar, english speaking classes Hooghly, personality development course, interview preparation training West Bengal, spoken english near me",
    seoKeywords_bn:
      "তারকেশ্বরে স্পোকেন ইংলিশ কোর্স, হুগলিতে ইংরেজি বলার ক্লাস, ব্যক্তিত্ব বিকাশ কোর্স, পশ্চিমবঙ্গে ইন্টারভিউ প্রস্তুতি প্রশিক্ষণ",
    eligibility: "Open to all age groups and educational backgrounds.",
    eligibility_bn: "সকল বয়স ও শিক্ষাগত পটভূমির জন্য উন্মুক্ত।",
    careerProspects: [
      "Improved job interview performance",
      "Better workplace communication",
      "Enhanced personality & confidence",
      "Customer-facing role readiness",
    ],
    careerProspects_bn: [
      "চাকরির ইন্টারভিউতে উন্নত পারফরম্যান্স",
      "কর্মক্ষেত্রে আরও ভালো যোগাযোগ",
      "উন্নত ব্যক্তিত্ব ও আত্মবিশ্বাস",
      "কাস্টমার-ফেসিং ভূমিকার জন্য প্রস্তুতি",
    ],
  },
  {
    id: "ac-technician",
    title: "Diploma in AC Technician",
    title_bn: "এসি টেকনিশিয়ান ডিপ্লোমা",
    description:
      "Professional diploma course covering AC installation, repair, maintenance, and troubleshooting for residential and commercial systems. Hands-on practical training with modern equipment.",
    description_bn:
      "আবাসিক ও বাণিজ্যিক সিস্টেমের জন্য এসি ইনস্টলেশন, মেরামত, রক্ষণাবেক্ষণ এবং ট্রাবলশুটিং নিয়ে পেশাদার ডিপ্লোমা কোর্স। আধুনিক সরঞ্জাম দিয়ে হাতে-কলমে ব্যবহারিক প্রশিক্ষণ।",
    longDescription:
      "The 1-year Diploma in AC Technician at TSHM & TF provides comprehensive training in air conditioning installation, repair, maintenance, and troubleshooting for both residential and commercial systems. Students work with modern equipment in our training lab, learning from experienced technicians. The program covers split AC, window AC, central air conditioning systems, refrigeration basics, and electrical fundamentals. With the growing demand for AC technicians in India, this diploma opens doors to immediate employment and self-employment opportunities.",
    longDescription_bn:
      "TSHM & TF-এ ১ বছরের এসি টেকনিশিয়ান ডিপ্লোমা আবাসিক ও বাণিজ্যিক উভয় সিস্টেমের জন্য এয়ার কন্ডিশনিং ইনস্টলেশন, মেরামত, রক্ষণাবেক্ষণ এবং ট্রাবলশুটিং-এ সম্পূর্ণ প্রশিক্ষণ দেয়। শিক্ষার্থীরা আমাদের ট্রেনিং ল্যাবে আধুনিক সরঞ্জাম নিয়ে কাজ করে, অভিজ্ঞ টেকনিশিয়ানদের কাছ থেকে শেখে। প্রোগ্রামে স্প্লিট এসি, উইন্ডো এসি, সেন্ট্রাল এয়ার কন্ডিশনিং সিস্টেম, রেফ্রিজারেশনের মূল বিষয় এবং ইলেকট্রিক্যাল ফান্ডামেন্টালস অন্তর্ভুক্ত। ভারতে এসি টেকনিশিয়ানদের ক্রমবর্ধমান চাহিদার সাথে, এই ডিপ্লোমা তাৎক্ষণিক চাকরি ও স্বনির্ভরতার সুযোগ খুলে দেয়।",
    duration: "1 Year",
    duration_bn: "১ বছর",
    image: "/images/courses/ac-technician.jpg",
    category: "diploma",
    highlights: [
      "Hands-on practical training",
      "Industry certification",
      "Job placement support",
      "Modern equipment lab",
    ],
    highlights_bn: [
      "হাতে-কলমে ব্যবহারিক প্রশিক্ষণ",
      "ইন্ডাস্ট্রি সার্টিফিকেশন",
      "চাকরিতে প্লেসমেন্ট সহায়তা",
      "আধুনিক সরঞ্জামের ল্যাব",
    ],
    seoTitle: "AC Technician Diploma Course in Tarakeswar - 1 Year Program",
    seoTitle_bn: "তারকেশ্বরে এসি টেকনিশিয়ান ডিপ্লোমা কোর্স - ১ বছরের প্রোগ্রাম",
    seoDescription:
      "1-year AC Technician Diploma at TSHM Tarakeswar. Learn AC installation, repair & maintenance. Hands-on training, industry certification, job placement support. Hooghly, West Bengal.",
    seoDescription_bn:
      "TSHM তারকেশ্বরে ১ বছরের এসি টেকনিশিয়ান ডিপ্লোমা। এসি ইনস্টলেশন, মেরামত ও রক্ষণাবেক্ষণ শিখুন। হাতে-কলমে প্রশিক্ষণ, ইন্ডাস্ট্রি সার্টিফিকেশন, চাকরিতে প্লেসমেন্ট সহায়তা। হুগলি, পশ্চিমবঙ্গ।",
    seoKeywords:
      "AC technician course Tarakeswar, AC repair training Hooghly, AC technician diploma West Bengal, HVAC course near me, AC mechanic training",
    seoKeywords_bn:
      "তারকেশ্বরে এসি টেকনিশিয়ান কোর্স, হুগলিতে এসি মেরামত প্রশিক্ষণ, পশ্চিমবঙ্গে এসি টেকনিশিয়ান ডিপ্লোমা, HVAC কোর্স, এসি মেকানিক প্রশিক্ষণ",
    eligibility: "Class 8 pass or equivalent. Basic understanding of electrical concepts preferred but not required.",
    eligibility_bn: "অষ্টম শ্রেণী পাশ বা সমমান। ইলেকট্রিক্যাল বিষয়ে প্রাথমিক ধারণা থাকলে ভালো, তবে বাধ্যতামূলক নয়।",
    careerProspects: [
      "AC Technician",
      "HVAC Technician",
      "AC Installation Specialist",
      "Refrigeration Mechanic",
      "Service Center Technician",
      "Self-employed AC Repair",
    ],
    careerProspects_bn: [
      "এসি টেকনিশিয়ান",
      "HVAC টেকনিশিয়ান",
      "এসি ইনস্টলেশন স্পেশালিস্ট",
      "রেফ্রিজারেশন মেকানিক",
      "সার্ভিস সেন্টার টেকনিশিয়ান",
      "স্বনির্ভর এসি মেরামত",
    ],
  },
  {
    id: "transformation",
    title: "Transformation",
    title_bn: "ট্রান্সফরমেশন",
    description:
      "A holistic development program focusing on physical, intellectual, and all-round development of students. Building discipline, duty, dedication, and character strength through proper man-making education.",
    description_bn:
      "শিক্ষার্থীদের শারীরিক, বুদ্ধিবৃত্তিক ও সার্বিক বিকাশের উপর কেন্দ্রীভূত একটি সামগ্রিক উন্নয়ন প্রোগ্রাম। সঠিক মানুষ-গড়ার শিক্ষার মাধ্যমে শৃঙ্খলা, কর্তব্য, নিষ্ঠা ও চরিত্র শক্তি তৈরি।",
    longDescription:
      "The Transformation program at TSHM & TF is a unique holistic development initiative focused on building the complete individual. Going beyond academic and vocational skills, this program emphasizes physical fitness, intellectual growth, moral and ethical values, discipline, duty, dedication, and character strength. Through structured activities, mentorship, and experiential learning, students develop the confidence and resilience needed to succeed in any career and in life.",
    longDescription_bn:
      "TSHM & TF-এর ট্রান্সফরমেশন প্রোগ্রাম একটি অনন্য সামগ্রিক উন্নয়ন উদ্যোগ যা সম্পূর্ণ ব্যক্তিত্ব গড়ে তোলার উপর কেন্দ্রীভূত। একাডেমিক ও বৃত্তিমূলক দক্ষতার বাইরে গিয়ে, এই প্রোগ্রামে শারীরিক ফিটনেস, বুদ্ধিবৃত্তিক বিকাশ, নৈতিক মূল্যবোধ, শৃঙ্খলা, কর্তব্য, নিষ্ঠা এবং চরিত্র শক্তির উপর জোর দেওয়া হয়। কাঠামোবদ্ধ কার্যক্রম, মেন্টরশিপ এবং অভিজ্ঞতামূলক শিক্ষার মাধ্যমে শিক্ষার্থীরা যেকোনো ক্যারিয়ার ও জীবনে সফল হওয়ার জন্য প্রয়োজনীয় আত্মবিশ্বাস ও মানসিক দৃঢ়তা অর্জন করে।",
    duration: "Ongoing",
    duration_bn: "চলমান",
    image: "/images/courses/transformation.jpg",
    category: "service",
    highlights: [
      "All-round development",
      "Moral & ethical values",
      "Character building",
      "Self-learning encouragement",
    ],
    highlights_bn: [
      "সার্বিক বিকাশ",
      "নৈতিক মূল্যবোধ",
      "চরিত্র গঠন",
      "স্ব-শিক্ষার উৎসাহ",
    ],
    seoTitle: "Personality & Holistic Development Program in Tarakeswar",
    seoTitle_bn: "তারকেশ্বরে ব্যক্তিত্ব ও সামগ্রিক উন্নয়ন প্রোগ্রাম",
    seoDescription:
      "Holistic personality development at TSHM Tarakeswar. All-round development, character building, moral values, and self-learning encouragement for students.",
    seoDescription_bn:
      "TSHM তারকেশ্বরে সামগ্রিক ব্যক্তিত্ব বিকাশ। শিক্ষার্থীদের জন্য সার্বিক বিকাশ, চরিত্র গঠন, নৈতিক মূল্যবোধ এবং স্ব-শিক্ষার উৎসাহ।",
    seoKeywords:
      "personality development Tarakeswar, holistic education Hooghly, character building program West Bengal",
    seoKeywords_bn:
      "তারকেশ্বরে ব্যক্তিত্ব বিকাশ, হুগলিতে সামগ্রিক শিক্ষা, পশ্চিমবঙ্গে চরিত্র গঠন প্রোগ্রাম",
    eligibility: "Open to all TSHM students and external enrollees.",
    eligibility_bn: "TSHM-এর সকল শিক্ষার্থী ও বাহ্যিক ভর্তিচ্ছুদের জন্য উন্মুক্ত।",
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
