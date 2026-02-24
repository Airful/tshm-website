import SectionTitle from "@/components/common/SectionTitle";
import { teamMembers } from "@/data/team";

export const metadata = {
  title: "About Us - TSHM & Technical Foundation",
  description:
    "Learn about Tarakeswar School of Hotel Management & Technical Foundation - our mission, vision, objectives, and dedicated team.",
};

function getInitials(name: string): string {
  return name
    .replace(/Mr\.\s*/, "")
    .split(" ")
    .map((n) => n[0])
    .join("");
}

const objectives = [
  "Developing students\u2019 curiosity and creativity through educational programs",
  "Creating responsible and engaged learners",
  "Fostering care for others",
  "Building student responsibility and self-esteem",
  "Providing relevant curriculum enabling all students to succeed",
  "Promoting strong partnerships between institution and community",
  "Maintaining high expectations of themselves and others",
];

const whyChoosePoints = [
  "Effective alternate career options for students",
  "Physical, intellectual, and all-round development",
  "Practical and purposeful education with professional training",
  "Education delivered with care, love, and understanding",
  "Fostering moral and ethical values",
  "Developing discipline, duty, dedication, and character strength",
  "Job preparation emphasizing individual student potential",
  "Unfoldment of latent talent for keen learners",
  "Encouraging self-learning over passive instruction",
  "Proper man-making education",
  "100% job assistance",
  "Stipend during training",
  "Industry experienced faculty & trainers",
  "Career counseling services",
  "DMIT (Dermatoglyphics Multiple Intelligence Test)",
];

export default function AboutPage() {
  const director = teamMembers.find((m) => m.id === "pinaki-adak");
  const rdHead = teamMembers.find((m) => m.id === "sudipta-ghosh");

  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-20 lg:pt-36 lg:pb-24 bg-[var(--foreground)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em", lineHeight: "1.15" }}
          >
            About Us
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Tarakeswar School of Hotel Management &amp; Technical Foundation
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-[var(--canvas)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-[var(--border)] border-t-2 border-t-[var(--accent)] p-8 lg:p-10">
              <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-4">
                Our Mission
              </h3>
              <p className="text-[var(--body)] leading-relaxed">
                Tarakeswar School of Hotel Management &amp; Technical Foundation
                provides a positive, vibrant and inspiring culture where students
                are encouraged to succeed as an active and supportive member of
                own family as well as the society.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-[var(--border)] border-t-2 border-t-[var(--accent)] p-8 lg:p-10">
              <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-4">
                Our Vision
              </h3>
              <p className="text-[var(--body)] leading-relaxed">
                Tarakeswar School of Hotel Management &amp; Technical Foundation
                encourages the all-round development of the student. Our motto is
                to support learners in becoming creative, curious, helpful,
                sustainable decision maker and critical thinker as an Indian
                citizen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 lg:py-28 bg-[var(--elevated)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <SectionTitle
            overline="OUR COMMITMENT"
            title="Our Objectives"
            subtitle="What we are committed to achieving for our students"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {objectives.map((obj, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-[var(--border)] p-6 flex items-start gap-4 hover:shadow-md transition-all duration-300"
              >
                <span className="text-[var(--success)] font-bold text-sm mt-0.5 shrink-0">
                  &#10003;
                </span>
                <p className="text-sm text-[var(--body)] leading-relaxed">
                  {obj}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-[var(--canvas)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <SectionTitle
            overline="OUR STRENGTHS"
            title="Why Choose TSHM?"
            subtitle="What makes us the preferred choice for vocational education"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {whyChoosePoints.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white rounded-xl border border-[var(--border)] p-5 hover:shadow-md transition-all duration-300"
              >
                <span className="text-[var(--success)] font-bold text-sm mt-0.5 shrink-0">
                  &#10003;
                </span>
                <p className="text-sm text-[var(--body)]">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director's Message */}
      {director && (
        <section className="py-20 lg:py-28 bg-[var(--elevated)]">
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <SectionTitle
              overline="LEADERSHIP"
              title="Director&apos;s Message"
            />
            <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[var(--border)] overflow-hidden">
              <div className="md:flex">
                {/* Initials circle */}
                <div className="md:w-1/3 bg-[var(--foreground)] flex items-center justify-center p-10 lg:p-12">
                  <div className="w-28 h-28 rounded-full border-2 border-white/20 flex items-center justify-center">
                    <span className="text-white text-3xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                      PA
                    </span>
                  </div>
                </div>
                {/* Message */}
                <div className="md:w-2/3 p-8 lg:p-10">
                  <div className="text-[var(--body)] leading-relaxed mb-6">
                    {director.message?.split("\n\n").map((para, i) => (
                      <p key={i} className={i > 0 ? "mt-4" : ""}>
                        {para}
                      </p>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-[var(--border)]">
                    <h4 className="font-semibold text-[var(--foreground)]">
                      {director.name}
                    </h4>
                    <p className="text-sm text-[var(--muted)]">
                      {director.role}, TSHM &amp; TF
                    </p>
                    {director.qualification && (
                      <p className="text-xs text-[var(--muted)] mt-1">
                        {director.qualification}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* R&D Head Message */}
      {rdHead && (
        <section className="py-20 lg:py-28 bg-[var(--canvas)]">
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <SectionTitle
              overline="RESEARCH & DEVELOPMENT"
              title="From Our Head of R&amp;D"
            />
            <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[var(--border)] overflow-hidden">
              <div className="md:flex flex-row-reverse">
                {/* Initials circle */}
                <div className="md:w-1/3 bg-[var(--foreground)] flex items-center justify-center p-10 lg:p-12">
                  <div className="w-28 h-28 rounded-full border-2 border-white/20 flex items-center justify-center">
                    <span className="text-white text-3xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                      SG
                    </span>
                  </div>
                </div>
                {/* Message */}
                <div className="md:w-2/3 p-8 lg:p-10">
                  <div className="text-[var(--body)] leading-relaxed mb-6">
                    {rdHead.message?.split("\n\n").map((para, i) => (
                      <p key={i} className={i > 0 ? "mt-4" : ""}>
                        {para}
                      </p>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-[var(--border)]">
                    <h4 className="font-semibold text-[var(--foreground)]">
                      {rdHead.name}
                    </h4>
                    <p className="text-sm text-[var(--muted)]">
                      {rdHead.role}, TSHM &amp; TF
                    </p>
                    {rdHead.qualification && (
                      <p className="text-xs text-[var(--muted)] mt-1">
                        {rdHead.qualification}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Full Team */}
      <section className="py-20 lg:py-28 bg-[var(--elevated)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <SectionTitle
            overline="OUR PEOPLE"
            title="Our Team"
            subtitle="Meet the dedicated professionals behind TSHM & TF"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-[var(--accent-soft)] rounded-full flex items-center justify-center">
                  <span className="text-base font-semibold text-[var(--accent)]">
                    {getInitials(member.name)}
                  </span>
                </div>
                <h4 className="font-semibold text-[var(--foreground)] text-sm">
                  {member.name}
                </h4>
                <p className="text-xs text-[var(--accent)] font-medium mt-1">
                  {member.role}
                </p>
                {member.qualification && (
                  <p className="text-xs text-[var(--muted)] mt-1 line-clamp-2">
                    {member.qualification}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
