import skills from "../data/skills";

function Skills() {
  return (
    <section className="py-5 pb-12">
      <div className="w-[90%] max-w-[1100px] mx-auto">
        <div className="bg-dark-800 rounded-2xl p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl sm:text-[26px] font-semibold mb-8">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`bg-dark-700 border border-dark-400 rounded-xl p-5 sm:p-6 text-center transition-all duration-300 hover:border-dark-300 hover:-translate-y-1 ${
                  index === skills.length - 1 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <i className={`${skill.icon} text-3xl text-gray-300 mb-3 block`}></i>
                <span className="text-sm text-gray-400">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
