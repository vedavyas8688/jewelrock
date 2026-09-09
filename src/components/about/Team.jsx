import { about } from '../../data/content';
import { images } from '../../data/images';
import { Picture } from '../ui/Picture';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export function Team() {
  const { team } = about;

  return (
    <Section>
      <SectionHeading title={team.title} text={team.text} align="center" size="md" />
      <ul className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
        {team.members.map((member, index) => (
          <li key={member.name} data-reveal data-reveal-delay={index * 70} className={index % 2 === 1 ? 'lg:mt-10' : undefined}>
            <Picture src={images[member.image]} alt={member.name} ratio="aspect-[3/4]" radius="rounded-lg rounded-tr-[64px]" zoom />
            <h3 className="mt-4 font-body text-body font-semibold text-forest">{member.name}</h3>
            <p className="text-small text-muted">{member.role}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
