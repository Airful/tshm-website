export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  duration: string;
  image: string;
  category: "diploma" | "certificate" | "academy" | "online" | "service";
  highlights: string[];
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  eligibility?: string;
  careerProspects?: string[];
}

export const courses: Course[] = [
  {
    id: "hotel-management",
    title: "Hotel Management",
    description:
      "Comprehensive hotel management program covering front office, housekeeping, food & beverage service, and hospitality operations. Get practical and purposeful education with professional training from industry-experienced faculty.",
    longDescription:
      "The Hotel Management program at TSHM & TF is designed to give students a complete understanding of the hospitality industry. The curriculum covers front office operations, housekeeping management, food & beverage service, kitchen management, and guest relations. Students receive hands-on practical training in real hospitality environments, learning from industry-experienced faculty and trainers. With 100% job assistance and stipend during training, our graduates go on to work in leading hotels, restaurants, and hospitality establishments across India and abroad.",
    duration: "1-3 Years",
    image: "/images/courses/hotel-management.jpg",
    category: "diploma",
    highlights: [
      "100% job assistance",
      "Stipend during training",
      "Industry experienced faculty & trainers",
      "Our students are working around India & abroad",
    ],
    seoTitle: "Hotel Management Course in Tarakeswar - Diploma Program",
    seoDescription:
      "Join TSHM's Hotel Management diploma in Tarakeswar, Hooghly. 1-3 year program with 100% job assistance, stipend during training, no entrance exam. Front office, housekeeping, F&B service training.",
    seoKeywords:
      "hotel management course Tarakeswar, diploma hotel management Hooghly, hotel management after 10th West Bengal, hospitality training near me, best hotel management institute Hooghly",
    eligibility: "Class 10 (Madhyamik) or Class 12 (Higher Secondary) pass from any recognized board. No entrance exam required.",
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
  },
  {
    id: "career-counseling",
    title: "Career Counseling",
    description:
      "Scientific career counseling using DMIT (Dermatoglyphics Multiple Intelligence Test) to identify innate strengths and ideal career paths. Personalized guidance for students and parents to make informed career decisions.",
    longDescription:
      "TSHM & TF's Career Counseling service uses the scientifically-backed DMIT (Dermatoglyphics Multiple Intelligence Test) method to identify a student's innate strengths, learning style, and ideal career paths. Through detailed fingerprint analysis and aptitude testing, our trained counselors create personalized career roadmaps for each student. This service is invaluable for students confused about career choices after Madhyamik or Higher Secondary, and for parents looking to support their children's career decisions with data-driven insights.",
    duration: "Ongoing",
    image: "/images/courses/career-counseling.jpg",
    category: "service",
    highlights: [
      "DMIT assessment",
      "Personalized career roadmap",
      "Aptitude & potential analysis",
      "Parent-student counseling",
    ],
    seoTitle: "Career Counseling & DMIT Assessment in Tarakeswar",
    seoDescription:
      "Scientific career counseling using DMIT at TSHM Tarakeswar. Identify innate strengths, get personalized career guidance. For students after Madhyamik & HS in Hooghly, West Bengal.",
    seoKeywords:
      "career counseling Tarakeswar, DMIT test Hooghly, career guidance after 10th, career counseling West Bengal, aptitude test near me",
    eligibility: "Open to all students and parents. Recommended for students in Class 8-12 and recent graduates.",
  },
  {
    id: "sales-marketing",
    title: "Certificate in Sales and Marketing Management",
    description:
      "Certificate program covering sales strategy, marketing management, customer relationship building, and business development techniques for career-ready professionals.",
    longDescription:
      "The Certificate in Sales and Marketing Management is a 6-month intensive program that equips students with practical skills in sales strategy, customer relationship management, digital marketing fundamentals, and business development. Students learn from industry experts through case studies, role-playing, and real-world projects. This course is ideal for those seeking quick entry into the sales and marketing profession.",
    duration: "6 Months",
    image: "/images/courses/sales-marketing.jpg",
    category: "certificate",
    highlights: [
      "Practical & purposeful education",
      "Professional training",
      "Industry expert sessions",
      "Job preparation support",
    ],
    seoTitle: "Sales & Marketing Certificate Course in Tarakeswar",
    seoDescription:
      "6-month certificate in Sales & Marketing at TSHM Tarakeswar. Learn sales strategy, customer relations, business development. Job preparation support included.",
    seoKeywords:
      "sales marketing course Tarakeswar, marketing certificate Hooghly, business development course West Bengal",
    eligibility: "Class 10 (Madhyamik) pass or equivalent. Open to working professionals seeking upskilling.",
    careerProspects: [
      "Sales Executive",
      "Marketing Coordinator",
      "Business Development Associate",
      "Customer Relationship Manager",
      "Retail Manager",
    ],
  },
  {
    id: "beauty-tailoring-academy",
    title: "TSHM & TF Make Up Beauty Tailoring Academy",
    description:
      "Learn professional makeup, beauty therapy, skincare, hairstyling, and tailoring techniques from industry experts. Comprehensive academy program for self-employment and career growth.",
    longDescription:
      "The Makeup, Beauty & Tailoring Academy at TSHM & TF is a comprehensive program designed for aspiring beauty professionals and fashion enthusiasts. The curriculum covers professional makeup techniques, skincare treatments, hairstyling, beauty therapy, and tailoring & fashion design. Students learn on live models with professional-grade products and equipment. This program is especially popular among women seeking self-employment opportunities and career independence.",
    duration: "6 Months - 1 Year",
    image: "/images/courses/beauty-academy.jpg",
    category: "academy",
    highlights: [
      "Beauty & wellness training",
      "Tailoring & fashion skills",
      "Self-employment guidance",
      "Unfoldment of latent talent",
    ],
    seoTitle: "Beauty Academy & Tailoring Course in Tarakeswar",
    seoDescription:
      "Join TSHM's Beauty & Tailoring Academy in Tarakeswar. Professional makeup, skincare, hairstyling & fashion design training. Self-employment support. 6 months - 1 year.",
    seoKeywords:
      "beauty academy Tarakeswar, makeup course Hooghly, tailoring course near me, beauty parlour training West Bengal, fashion design course Tarakeswar",
    eligibility: "No minimum educational qualification required. Open to all aspiring beauty professionals.",
    careerProspects: [
      "Makeup Artist",
      "Beauty Therapist",
      "Salon Owner",
      "Bridal Makeup Specialist",
      "Fashion Designer",
      "Tailoring Entrepreneur",
    ],
  },
  {
    id: "odd-jobs",
    title: "TSHM & TF Odd Jobs Services",
    description:
      "Effective alternate career options for students with job preparation emphasizing individual student potential. Practical skills training for various service industry roles.",
    longDescription:
      "TSHM & TF Odd Jobs Services provides practical skills training for various service industry roles. This program is designed for students seeking alternate career paths, with a focus on identifying and developing individual potential. Students receive hands-on training in multiple service skills, job preparation coaching, and placement assistance.",
    duration: "Flexible",
    image: "/images/courses/odd-jobs.jpg",
    category: "service",
    highlights: [
      "Alternate career options",
      "Individual potential focus",
      "Job preparation",
      "Placement assistance",
    ],
    seoTitle: "Odd Jobs & Service Skills Training in Tarakeswar",
    seoDescription:
      "Practical service industry skills training at TSHM Tarakeswar. Alternate career options with job preparation and placement assistance.",
    seoKeywords:
      "odd jobs training Tarakeswar, service skills course Hooghly, job preparation West Bengal",
    eligibility: "Open to all. No minimum educational qualification required.",
  },
  {
    id: "spoken-english",
    title: "Spoken English",
    description:
      "Improve your English communication skills with our structured spoken English program. Focus on fluency, pronunciation, confidence building, and personality development for professional success.",
    longDescription:
      "The Spoken English program at TSHM & TF is a structured course designed to transform students' English communication abilities. Available in 3-month and 6-month formats, the program focuses on building fluency, improving pronunciation, developing confidence in public speaking, and enhancing personality for professional environments. Students practice through group discussions, mock interviews, presentations, and real-world conversation scenarios. This course is essential for anyone seeking employment in the hospitality, corporate, or service industries.",
    duration: "3 Months & 6 Months",
    image: "/images/courses/spoken-english.jpg",
    category: "certificate",
    highlights: [
      "3 months & 6 months options",
      "Personality development",
      "Interview preparation",
      "Communication skills building",
    ],
    seoTitle: "Spoken English Course in Tarakeswar - 3 & 6 Month Programs",
    seoDescription:
      "Join spoken English classes at TSHM Tarakeswar. 3 & 6 month programs for fluency, pronunciation, interview preparation & personality development. Hooghly, West Bengal.",
    seoKeywords:
      "spoken english course Tarakeswar, english speaking classes Hooghly, personality development course, interview preparation training West Bengal, spoken english near me",
    eligibility: "Open to all age groups and educational backgrounds.",
    careerProspects: [
      "Improved job interview performance",
      "Better workplace communication",
      "Enhanced personality & confidence",
      "Customer-facing role readiness",
    ],
  },
  {
    id: "ac-technician",
    title: "Diploma in AC Technician",
    description:
      "Professional diploma course covering AC installation, repair, maintenance, and troubleshooting for residential and commercial systems. Hands-on practical training with modern equipment.",
    longDescription:
      "The 1-year Diploma in AC Technician at TSHM & TF provides comprehensive training in air conditioning installation, repair, maintenance, and troubleshooting for both residential and commercial systems. Students work with modern equipment in our training lab, learning from experienced technicians. The program covers split AC, window AC, central air conditioning systems, refrigeration basics, and electrical fundamentals. With the growing demand for AC technicians in India, this diploma opens doors to immediate employment and self-employment opportunities.",
    duration: "1 Year",
    image: "/images/courses/ac-technician.jpg",
    category: "diploma",
    highlights: [
      "Hands-on practical training",
      "Industry certification",
      "Job placement support",
      "Modern equipment lab",
    ],
    seoTitle: "AC Technician Diploma Course in Tarakeswar - 1 Year Program",
    seoDescription:
      "1-year AC Technician Diploma at TSHM Tarakeswar. Learn AC installation, repair & maintenance. Hands-on training, industry certification, job placement support. Hooghly, West Bengal.",
    seoKeywords:
      "AC technician course Tarakeswar, AC repair training Hooghly, AC technician diploma West Bengal, HVAC course near me, AC mechanic training",
    eligibility: "Class 8 pass or equivalent. Basic understanding of electrical concepts preferred but not required.",
    careerProspects: [
      "AC Technician",
      "HVAC Technician",
      "AC Installation Specialist",
      "Refrigeration Mechanic",
      "Service Center Technician",
      "Self-employed AC Repair",
    ],
  },
  {
    id: "transformation",
    title: "Transformation",
    description:
      "A holistic development program focusing on physical, intellectual, and all-round development of students. Building discipline, duty, dedication, and character strength through proper man-making education.",
    longDescription:
      "The Transformation program at TSHM & TF is a unique holistic development initiative focused on building the complete individual. Going beyond academic and vocational skills, this program emphasizes physical fitness, intellectual growth, moral and ethical values, discipline, duty, dedication, and character strength. Through structured activities, mentorship, and experiential learning, students develop the confidence and resilience needed to succeed in any career and in life.",
    duration: "Ongoing",
    image: "/images/courses/transformation.jpg",
    category: "service",
    highlights: [
      "All-round development",
      "Moral & ethical values",
      "Character building",
      "Self-learning encouragement",
    ],
    seoTitle: "Personality & Holistic Development Program in Tarakeswar",
    seoDescription:
      "Holistic personality development at TSHM Tarakeswar. All-round development, character building, moral values, and self-learning encouragement for students.",
    seoKeywords:
      "personality development Tarakeswar, holistic education Hooghly, character building program West Bengal",
    eligibility: "Open to all TSHM students and external enrollees.",
  },
  {
    id: "online-degrees",
    title: "Online Degree Programs",
    description:
      "Pursue recognized online degrees from reputed universities - BA, B.COM, B.SC., BBA, MBA, B.SC. in Hotel Management and many more. Flexible learning schedules with full academic support.",
    longDescription:
      "TSHM & TF facilitates online degree programs from recognized universities, enabling students in Tarakeswar and surrounding areas to pursue higher education without relocating. Available programs include BA, B.COM, B.SC., BBA, MBA, and B.Sc. in Hotel Management. Students get full academic support including study materials, doubt clearing sessions, exam preparation, and assignment guidance. This is ideal for working professionals, homemakers, or anyone looking to upgrade their qualifications while maintaining their current commitments.",
    duration: "2-3 Years",
    image: "/images/courses/online-degree.jpg",
    category: "online",
    highlights: [
      "BA, B.COM, B.SC., BBA, MBA",
      "B.SC. in Hotel Management",
      "Recognized universities",
      "Flexible learning schedule",
    ],
    seoTitle: "Online Degree Programs - BA, BBA, MBA, B.Sc Hotel Management",
    seoDescription:
      "Pursue online degrees at TSHM Tarakeswar — BA, B.COM, BBA, MBA, B.Sc Hotel Management from recognized universities. Flexible learning with full academic support in Hooghly.",
    seoKeywords:
      "online degree Tarakeswar, distance education Hooghly, online BA BBA MBA West Bengal, B.Sc hotel management online, recognized university degree near me",
    eligibility: "Varies by program. Class 12 (HS) for undergraduate, graduation for MBA. Contact for specific requirements.",
    careerProspects: [
      "Higher education qualification",
      "Career advancement",
      "Government job eligibility",
      "Professional recognition",
    ],
  },
];
