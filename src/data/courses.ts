export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  image: string;
  category: "diploma" | "certificate" | "academy" | "online" | "service";
  highlights: string[];
}

export const courses: Course[] = [
  {
    id: "hotel-management",
    title: "Hotel Management",
    description:
      "Comprehensive hotel management program covering front office, housekeeping, food & beverage service, and hospitality operations. Get practical and purposeful education with professional training from industry-experienced faculty.",
    duration: "1-3 Years",
    image: "/images/courses/hotel-management.jpg",
    category: "diploma",
    highlights: [
      "100% job assistance",
      "Stipend during training",
      "Industry experienced faculty & trainers",
      "Our students are working around India & abroad",
    ],
  },
  {
    id: "career-counseling",
    title: "Career Counseling",
    description:
      "Scientific career counseling using DMIT (Dermatoglyphics Multiple Intelligence Test) to identify innate strengths and ideal career paths. Personalized guidance for students and parents to make informed career decisions.",
    duration: "Ongoing",
    image: "/images/courses/career-counseling.jpg",
    category: "service",
    highlights: [
      "DMIT assessment",
      "Personalized career roadmap",
      "Aptitude & potential analysis",
      "Parent-student counseling",
    ],
  },
  {
    id: "sales-marketing",
    title: "Certificate in Sales and Marketing Management",
    description:
      "Certificate program covering sales strategy, marketing management, customer relationship building, and business development techniques for career-ready professionals.",
    duration: "6 Months",
    image: "/images/courses/sales-marketing.jpg",
    category: "certificate",
    highlights: [
      "Practical & purposeful education",
      "Professional training",
      "Industry expert sessions",
      "Job preparation support",
    ],
  },
  {
    id: "beauty-tailoring-academy",
    title: "TSHM & TF Make Up Beauty Tailoring Academy",
    description:
      "Learn professional makeup, beauty therapy, skincare, hairstyling, and tailoring techniques from industry experts. Comprehensive academy program for self-employment and career growth.",
    duration: "6 Months - 1 Year",
    image: "/images/courses/beauty-academy.jpg",
    category: "academy",
    highlights: [
      "Beauty & wellness training",
      "Tailoring & fashion skills",
      "Self-employment guidance",
      "Unfoldment of latent talent",
    ],
  },
  {
    id: "odd-jobs",
    title: "TSHM & TF Odd Jobs Services",
    description:
      "Effective alternate career options for students with job preparation emphasizing individual student potential. Practical skills training for various service industry roles.",
    duration: "Flexible",
    image: "/images/courses/odd-jobs.jpg",
    category: "service",
    highlights: [
      "Alternate career options",
      "Individual potential focus",
      "Job preparation",
      "Placement assistance",
    ],
  },
  {
    id: "spoken-english",
    title: "Spoken English",
    description:
      "Improve your English communication skills with our structured spoken English program. Focus on fluency, pronunciation, confidence building, and personality development for professional success.",
    duration: "3 Months & 6 Months",
    image: "/images/courses/spoken-english.jpg",
    category: "certificate",
    highlights: [
      "3 months & 6 months options",
      "Personality development",
      "Interview preparation",
      "Communication skills building",
    ],
  },
  {
    id: "ac-technician",
    title: "Diploma in AC Technician",
    description:
      "Professional diploma course covering AC installation, repair, maintenance, and troubleshooting for residential and commercial systems. Hands-on practical training with modern equipment.",
    duration: "1 Year",
    image: "/images/courses/ac-technician.jpg",
    category: "diploma",
    highlights: [
      "Hands-on practical training",
      "Industry certification",
      "Job placement support",
      "Modern equipment lab",
    ],
  },
  {
    id: "transformation",
    title: "Transformation",
    description:
      "A holistic development program focusing on physical, intellectual, and all-round development of students. Building discipline, duty, dedication, and character strength through proper man-making education.",
    duration: "Ongoing",
    image: "/images/courses/transformation.jpg",
    category: "service",
    highlights: [
      "All-round development",
      "Moral & ethical values",
      "Character building",
      "Self-learning encouragement",
    ],
  },
  {
    id: "online-degrees",
    title: "Online Degree Programs",
    description:
      "Pursue recognized online degrees from reputed universities - BA, B.COM, B.SC., BBA, MBA, B.SC. in Hotel Management and many more. Flexible learning schedules with full academic support.",
    duration: "2-3 Years",
    image: "/images/courses/online-degree.jpg",
    category: "online",
    highlights: [
      "BA, B.COM, B.SC., BBA, MBA",
      "B.SC. in Hotel Management",
      "Recognized universities",
      "Flexible learning schedule",
    ],
  },
];
