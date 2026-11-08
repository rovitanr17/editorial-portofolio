type SkillGroupProps = {
  title: string;
  skills: string[];
};

export default function SkillGroup({
  title,
  skills,
}: SkillGroupProps) {
  return (
    <div className="mb-12">
      <h3 className="mb-5 text-2xl font-semibold tracking-tight">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-[#CDE8FC] px-3 py-1 text-sm text-[#45566B] transition-colors hover:bg-[#EDF7FF]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
