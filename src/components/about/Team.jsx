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
      <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6 sm:mt-10 sm:gap-6 lg:mt-12 lg:grid-cols-4 lg:gap-5">
        {team.members.map((member, index) => (
          <li
            key={member.name}
            data-reveal
            data-reveal-delay={index * 70}
            className={index % 4 === 1 || index % 4 === 2 ? 'mt-8 sm:mt-10' : undefined}
          >
            <Picture src={images[member.image]} alt={member.name} ratio="aspect-[3/4]" radius="rounded-md rounded-tr-[42px] sm:rounded-lg sm:rounded-tr-[64px]" zoom />
            <h3 className="mt-3 font-body text-[0.92rem] font-semibold leading-tight text-forest sm:mt-4 sm:text-body">{member.name}</h3>
            <p className="mt-1 text-[0.78rem] leading-tight text-muted sm:text-small">{member.role}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
