import skills from "../data/skills";

function Skills() {
  return (
    <section className="py-16 sm:py-20 bg-dark-900" id="skills">
      <div className="w-[90%] max-w-[1150px] mx-auto">
        <p className="text-center text-xs text-gray-500 tracking-[2px] mb-2.5">
          TECHNICAL EXPERTISE
        </p>
        <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-3">
          Front-End Skills
        </h2>
        <p className="text-center text-gray-400 text-sm max-w-md mx-auto mb-10">
          The front-end technologies I use to build modern, responsive web
          experiences.
        </p>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
          {skills.map((skill, index) => (
            <div key={index} className="text-center">
              <div
                className="w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] rounded-full flex items-center justify-center mx-auto mb-3 relative"
                style={{
                  background: `conic-gradient(${skill.color} ${skill.percent}%, #222 0)`,
                }}
              >
                <div className="absolute w-[78px] h-[78px] sm:w-[85px] sm:h-[85px] bg-dark-900 rounded-full"></div>
                <span className="relative z-10 text-lg font-bold">
                  {skill.percent}%
                </span>
              </div>
              <p className="text-sm text-gray-400">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
