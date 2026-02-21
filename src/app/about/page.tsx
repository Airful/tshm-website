import SectionTitle from "@/components/common/SectionTitle";
import { teamMembers } from "@/data/team";

export const metadata = {
  title: "About Us - TSHM & Technical Foundation",
  description:
    "Learn about Tarakeswar School of Hotel Management & Technical Foundation - our mission, vision, objectives, and dedicated team.",
};

export default function AboutPage() {
  const director = teamMembers.find((m) => m.id === "pinaki-adak");
  const rdHead = teamMembers.find((m) => m.id === "sudipta-ghosh");
  const allMembers = teamMembers;

  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]">
        <div className="container mx-auto px-5 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Us
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Tarakeswar School of Hotel Management & Technical Foundation
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-lg p-10 border-t-4 border-[var(--color-accent)]">
              <div className="w-16 h-16 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl text-[var(--color-accent)]">&#9733;</span>
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                Our Mission
              </h3>
              <p className="text-[var(--color-text-light)] leading-relaxed">
                Tarakeswar School of Hotel Management & Technical Foundation
                provides a positive, vibrant and inspiring culture where students
                are encouraged to succeed as an active and supportive member of
                own family as well as the society.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-10 border-t-4 border-[var(--color-gold)]">
              <div className="w-16 h-16 bg-[var(--color-gold)]/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl text-[var(--color-gold)]">&#9786;</span>
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                Our Vision
              </h3>
              <p className="text-[var(--color-text-light)] leading-relaxed">
                Tarakeswar School of Hotel Management & Technical Foundation
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
      <section className="py-20 bg-[var(--color-bg-section)]">
        <div className="container mx-auto px-5">
          <SectionTitle
            title="Our Objectives"
            subtitle="What we are committed to achieving for our students"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Developing students\u2019 curiosity and creativity through educational programs",
              "Creating responsible and engaged learners",
              "Fostering care for others",
              "Building student responsibility and self-esteem",
              "Providing relevant curriculum enabling all students to succeed",
              "Promoting strong partnerships between institution and community",
              "Maintaining high expectations of themselves and others",
            ].map((obj, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-4"
              >
                <span className="text-[var(--color-accent)] font-bold text-lg mt-0.5">
                  &#10003;
                </span>
                <p className="text-[var(--color-text)] text-sm leading-relaxed">
                  {obj}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-5">
          <SectionTitle
            title="Why Choose TSHM?"
            subtitle="What makes us the preferred choice for vocational education"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
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
            ].map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-[var(--color-success)] font-bold mt-0.5">
                  &#10003;
                </span>
                <p className="text-sm text-[var(--color-text)]">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director's Message - Pinaki Adak */}
      {director && (
        <section className="py-20 bg-[var(--color-bg-section)]">
          <div className="container mx-auto px-5">
            <SectionTitle title="Director&apos;s Speech" />
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center p-10">
                  <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">PA</span>
                  </div>
                </div>
                <div className="md:w-2/3 p-10">
                  <div className="text-4xl text-[var(--color-accent)]/20 mb-4 font-serif">
                    &ldquo;
                  </div>
                  <div className="text-[var(--color-text)] leading-relaxed mb-6">
                    {director.message?.split("\n\n").map((para, i) => (
                      <p key={i} className={i > 0 ? "mt-4" : ""}>
                        {para}
                      </p>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-primary)]">
                      {director.name}
                    </h4>
                    <p className="text-sm text-[var(--color-text-light)]">
                      {director.role}, TSHM & TF
                    </p>
                    <p className="text-xs text-[var(--color-text-light)] mt-1">
                      {director.qualification}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* R&D Head Message - Sudipta Ghosh */}
      {rdHead && (
        <section className="py-20">
          <div className="container mx-auto px-5">
            <SectionTitle title="From Our Head of R&D" />
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="md:flex flex-row-reverse">
                <div className="md:w-1/3 bg-gradient-to-br from-[var(--color-accent)] to-[#c0392b] flex items-center justify-center p-10">
                  <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">SG</span>
                  </div>
                </div>
                <div className="md:w-2/3 p-10">
                  <div className="text-4xl text-[var(--color-accent)]/20 mb-4 font-serif">
                    &ldquo;
                  </div>
                  <div className="text-[var(--color-text)] leading-relaxed mb-6">
                    {rdHead.message?.split("\n\n").map((para, i) => (
                      <p key={i} className={i > 0 ? "mt-4" : ""}>
                        {para}
                      </p>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-primary)]">
                      {rdHead.name}
                    </h4>
                    <p className="text-sm text-[var(--color-text-light)]">
                      {rdHead.role}, TSHM & TF
                    </p>
                    <p className="text-xs text-[var(--color-text-light)] mt-1">
                      {rdHead.qualification}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Full Team */}
      <section className="py-20 bg-[var(--color-bg-section)]">
        <div className="container mx-auto px-5">
          <SectionTitle
            title="Our Team"
            subtitle="Meet the dedicated professionals behind TSHM & TF"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {allMembers.map((member) => (
              <div key={member.id} className="text-center group">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
                  <span className="text-white text-2xl font-bold">
                    {member.name
                      .replace(/Mr\.\s*/, "")
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h4 className="font-bold text-[var(--color-primary)] text-sm">
                  {member.name}
                </h4>
                <p className="text-xs text-[var(--color-accent)] font-medium mt-1">
                  {member.role}
                </p>
                {member.qualification && (
                  <p className="text-xs text-[var(--color-text-light)] mt-1 line-clamp-2">
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
