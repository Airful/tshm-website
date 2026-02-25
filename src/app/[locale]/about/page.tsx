import type { Metadata } from "next";
import Image from "next/image";
import { getPageTranslations, type Locale } from "@/app/lib/i18n";
import SectionTitle from "@/components/common/SectionTitle";
import { teamMembers } from "@/data/team";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { about } = await getPageTranslations(locale as Locale, ["about"]);
  const meta = about.meta as Record<string, string>;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://tshm.co.in/${locale}/about`,
    },
    alternates: {
      canonical: `https://tshm.co.in/${locale}/about`,
      languages: { en: "/en/about", bn: "/bn/about", "x-default": "/en/about" },
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { about } = await getPageTranslations(locale as Locale, ["about"]);

  const hero = about.hero as { title: string; subtitle: string };
  const mission = about.mission as { title: string; text: string };
  const vision = about.vision as { title: string; text: string };
  const objectives = about.objectives as { overline: string; title: string; subtitle: string; items: string[] };
  const whyChoose = about.whyChoose as { overline: string; title: string; subtitle: string; items: string[] };
  const directorMessage = about.directorMessage as { overline: string; title: string };
  const rdMessage = about.rdMessage as { overline: string; title: string };
  const team = about.team as { overline: string; title: string; subtitle: string };

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
            {hero.title}
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-[var(--canvas)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-[var(--border)] border-t-2 border-t-[var(--accent)] p-8 lg:p-10">
              <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-4">{mission.title}</h3>
              <p className="text-[var(--body)] leading-relaxed">{mission.text}</p>
            </div>
            <div className="bg-white rounded-2xl border border-[var(--border)] border-t-2 border-t-[var(--accent)] p-8 lg:p-10">
              <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-4">{vision.title}</h3>
              <p className="text-[var(--body)] leading-relaxed">{vision.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 lg:py-28 bg-[var(--elevated)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <SectionTitle overline={objectives.overline} title={objectives.title} subtitle={objectives.subtitle} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {objectives.items.map((obj, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[var(--border)] p-6 flex items-start gap-4 hover:shadow-md transition-all duration-300">
                <span className="text-[var(--success)] font-bold text-sm mt-0.5 shrink-0">&#10003;</span>
                <p className="text-sm text-[var(--body)] leading-relaxed">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-[var(--canvas)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <SectionTitle overline={whyChoose.overline} title={whyChoose.title} subtitle={whyChoose.subtitle} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {whyChoose.items.map((point, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl border border-[var(--border)] p-5 hover:shadow-md transition-all duration-300">
                <span className="text-[var(--success)] font-bold text-sm mt-0.5 shrink-0">&#10003;</span>
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
            <SectionTitle overline={directorMessage.overline} title={directorMessage.title} />
            <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[var(--border)] overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 relative min-h-[280px]">
                  <Image src={director.image} alt={director.name} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="md:w-2/3 p-8 lg:p-10">
                  <div className="text-[var(--body)] leading-relaxed mb-6">
                    {director.message?.split("\n\n").map((para, i) => (
                      <p key={i} className={i > 0 ? "mt-4" : ""}>{para}</p>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-[var(--border)]">
                    <h4 className="font-semibold text-[var(--foreground)]">{director.name}</h4>
                    <p className="text-sm text-[var(--muted)]">{director.role}, TSHM &amp; TF</p>
                    {director.qualification && <p className="text-xs text-[var(--muted)] mt-1">{director.qualification}</p>}
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
            <SectionTitle overline={rdMessage.overline} title={rdMessage.title} />
            <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[var(--border)] overflow-hidden">
              <div className="md:flex flex-row-reverse">
                <div className="md:w-1/3 relative min-h-[280px]">
                  <Image src={rdHead.image} alt={rdHead.name} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="md:w-2/3 p-8 lg:p-10">
                  <div className="text-[var(--body)] leading-relaxed mb-6">
                    {rdHead.message?.split("\n\n").map((para, i) => (
                      <p key={i} className={i > 0 ? "mt-4" : ""}>{para}</p>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-[var(--border)]">
                    <h4 className="font-semibold text-[var(--foreground)]">{rdHead.name}</h4>
                    <p className="text-sm text-[var(--muted)]">{rdHead.role}, TSHM &amp; TF</p>
                    {rdHead.qualification && <p className="text-xs text-[var(--muted)] mt-1">{rdHead.qualification}</p>}
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
          <SectionTitle overline={team.overline} title={team.title} subtitle={team.subtitle} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[var(--border)]">
                  <Image src={member.image} alt={member.name} width={80} height={80} className="object-cover w-full h-full" />
                </div>
                <h4 className="font-semibold text-[var(--foreground)] text-sm">{member.name}</h4>
                <p className="text-xs text-[var(--accent)] font-medium mt-1">{member.role}</p>
                {member.qualification && <p className="text-xs text-[var(--muted)] mt-1 line-clamp-2">{member.qualification}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
