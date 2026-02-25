import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/common/SectionTitle";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions About Courses & Admissions",
  description:
    "Find answers to common questions about TSHM & TF — admission requirements, fees, eligibility, placements, course duration, and more. Hotel Management, AC Technician, Beauty Academy courses in Tarakeswar, Hooghly.",
  keywords:
    "TSHM FAQ, hotel management admission questions, eligibility after 10th, hotel management fees West Bengal, placement after hotel management, vocational training questions Hooghly",
  openGraph: {
    title: "FAQ - TSHM & TF Admissions & Courses",
    description:
      "Common questions about admissions, fees, eligibility, placements, and courses at TSHM Tarakeswar.",
    url: "https://tshm.co.in/faq",
  },
  alternates: {
    canonical: "https://tshm.co.in/faq",
  },
};

const faqs = [
  {
    category: "Admissions & Eligibility",
    items: [
      {
        q: "What is the eligibility for hotel management course at TSHM?",
        a: "Students who have passed Class 10 (Madhyamik) or Class 12 (Higher Secondary) from any recognized board are eligible for our Hotel Management program. There is no entrance exam required for admission at TSHM & TF.",
      },
      {
        q: "Is there an entrance exam required for admission?",
        a: "No, TSHM & TF does not require any entrance exam for admission. Unlike many other institutions, we follow a direct admission process based on your academic qualifications. The JEHOM (Joint Entrance for Hotel Management) exam conducted by WBJEE is no longer applicable.",
      },
      {
        q: "Can I join hotel management after Class 10 (Madhyamik)?",
        a: "Yes! TSHM offers hotel management and other vocational courses that you can join after passing Class 10 (Madhyamik). This is a great option for students who want to start building practical career skills early.",
      },
      {
        q: "What documents are needed for admission?",
        a: "You need your Madhyamik/HS marksheet, Aadhaar card, recent passport-size photographs, and a transfer certificate from your previous institution. For online degree programs, additional university-specific documents may be required.",
      },
      {
        q: "When do admissions open at TSHM?",
        a: "Admissions are open throughout the year at TSHM & TF. However, the main admission season is from May to August, after Madhyamik and Higher Secondary results are declared. We recommend applying early as seats are limited.",
      },
    ],
  },
  {
    category: "Courses & Duration",
    items: [
      {
        q: "What courses does TSHM offer?",
        a: "TSHM & TF offers 9 courses: Hotel Management (1-3 years), AC Technician Diploma (1 year), Makeup & Beauty Academy (6 months - 1 year), Spoken English (3-6 months), Certificate in Sales & Marketing (6 months), Career Counseling/DMIT, Online Degree Programs (BA, B.COM, BBA, MBA, B.Sc Hotel Management), Transformation program, and Odd Jobs Services.",
      },
      {
        q: "What is the duration of the hotel management course?",
        a: "The Hotel Management program at TSHM ranges from 1 to 3 years depending on the level of diploma you choose. The program covers front office, housekeeping, food & beverage service, and hospitality operations with hands-on practical training.",
      },
      {
        q: "Does TSHM offer online degree programs?",
        a: "Yes, TSHM & TF offers online degree programs in partnership with recognized universities. Available degrees include BA, B.COM, B.SC., BBA, MBA, and B.Sc. in Hotel Management. These programs offer flexible learning schedules with full academic support.",
      },
      {
        q: "What is the AC Technician Diploma course about?",
        a: "The 1-year AC Technician Diploma covers AC installation, repair, maintenance, and troubleshooting for residential and commercial systems. Students receive hands-on practical training with modern equipment and get industry certification with job placement support.",
      },
    ],
  },
  {
    category: "Fees & Financial",
    items: [
      {
        q: "What are the fees for hotel management at TSHM?",
        a: "TSHM & TF offers affordable fee structures compared to other hotel management institutes in West Bengal. Our focus is on making quality vocational education accessible. Please contact us at +91 96359 64348 or visit our campus for the current fee structure, as it varies by program.",
      },
      {
        q: "Is there a stipend during training?",
        a: "Yes! TSHM & TF provides a stipend during the training period. This is one of our unique features — students earn while they learn, which helps support their education financially.",
      },
      {
        q: "Are there any scholarships available?",
        a: "TSHM provides support and guidance for students seeking government scholarships and financial aid programs available in West Bengal. Contact our admissions office to discuss financial support options based on your eligibility.",
      },
    ],
  },
  {
    category: "Placements & Career",
    items: [
      {
        q: "Does TSHM provide placement assistance?",
        a: "Yes, TSHM & TF provides 100% job assistance to all students. Our placement cell works actively with hotels, restaurants, and hospitality companies across India and abroad. Our students are currently working in leading establishments around India and internationally.",
      },
      {
        q: "What is the salary after hotel management course?",
        a: "Starting salaries for hotel management graduates typically range from ₹12,000 to ₹25,000 per month, depending on the position, location, and establishment. With experience, professionals in the hospitality industry can earn significantly more, especially in 5-star hotels and abroad.",
      },
      {
        q: "What career options are available after hotel management?",
        a: "Hotel management graduates can work as Front Office Executives, F&B Service Managers, Housekeeping Supervisors, Restaurant Managers, Event Coordinators, Airline Catering Staff, Cruise Ship Staff, and more. The hospitality industry offers diverse career paths both in India and internationally.",
      },
      {
        q: "Is hotel management a good career option after 10th?",
        a: "Absolutely! Hotel management is one of the best career options after 10th class. The hospitality industry is one of the fastest-growing sectors in India, and skilled professionals are always in demand. Starting early gives you more practical experience and a head start in your career.",
      },
    ],
  },
  {
    category: "About TSHM & Location",
    items: [
      {
        q: "Where is TSHM located?",
        a: "TSHM & TF is located at College Road, Padmapukur, Tarakeswar, Hooghly, West Bengal - 712410. Tarakeswar is well-connected by local trains from Howrah and buses from Kolkata, Chandannagar, Chinsurah, and surrounding areas.",
      },
      {
        q: "How to reach TSHM from Kolkata?",
        a: "From Kolkata/Howrah, take a local train to Tarakeswar station (approximately 1.5 hours). From the station, TSHM is a short auto-rickshaw ride to College Road, Padmapukur. You can also take a bus from Esplanade or Dankuni to Tarakeswar.",
      },
      {
        q: "What makes TSHM different from other institutes?",
        a: "TSHM & TF stands out with: no entrance exam required, 100% job assistance, stipend during training, industry-experienced faculty, practical hands-on training focus, career counseling with DMIT, affordable fees, and a supportive learning environment focused on individual student potential.",
      },
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap((section) =>
    section.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Banner */}
      <section className="pt-32 pb-20 lg:pt-36 lg:pb-24 bg-[var(--foreground)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em", lineHeight: "1.15" }}
          >
            Frequently Asked Questions
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Everything you need to know about admissions, courses, fees, and
            placements at TSHM & TF
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 lg:py-28 bg-[var(--canvas)]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          {faqs.map((section, sIdx) => (
            <div key={sIdx} className={sIdx > 0 ? "mt-16" : ""}>
              <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-8 flex items-center gap-3">
                <span className="w-8 h-8 bg-[var(--accent-soft)] rounded-full flex items-center justify-center text-sm font-bold text-[var(--accent)]">
                  {sIdx + 1}
                </span>
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.items.map((item, qIdx) => (
                  <details
                    key={qIdx}
                    className="group bg-white rounded-2xl border border-[var(--border)] overflow-hidden hover:shadow-md transition-all duration-300"
                  >
                    <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                      <h3 className="text-[var(--foreground)] font-medium pr-4 text-[15px]">
                        {item.q}
                      </h3>
                      <span className="text-[var(--muted)] group-open:rotate-45 transition-transform duration-300 text-xl shrink-0">
                        +
                      </span>
                    </summary>
                    <div className="px-6 pb-6 -mt-1">
                      <p className="text-[var(--body)] leading-relaxed text-sm">
                        {item.a}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-[var(--elevated)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <SectionTitle
            overline="STILL HAVE QUESTIONS?"
            title="We're Here to Help"
            subtitle="Contact us directly for personalized guidance on your career journey"
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--accent)] text-white font-medium rounded-full hover:bg-[var(--accent-hover)] transition-all duration-300"
            >
              Contact Us
            </Link>
            <a
              href="tel:+919635964348"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[var(--border)] text-[var(--foreground)] font-medium rounded-full hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
            >
              Call +91 96359 64348
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
