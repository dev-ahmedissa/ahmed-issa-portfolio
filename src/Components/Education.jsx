function Education() {
  return (
    <section className="py-5 pb-10">
      <div className="w-[90%] max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-dark-800 rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-semibold mb-5">Education</h3>
          <ul className="space-y-3">
            <li className="text-gray-400 text-sm relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-gray-500">
              Bachelor's Degree in Management Information Systems
            </li>
            <li className="text-gray-400 text-sm relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-gray-500">
              Al-Aqsa University (2022 - 2026)
            </li>
          </ul>
        </div>

        <div className="bg-dark-800 rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-semibold mb-5">
            Certifications & Courses
          </h3>
          <ul className="space-y-3">
            <li className="text-gray-400 text-sm relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-gray-500">
              Front-end Web Development Diploma (React JS) – SEF Academy
            </li>
            <li className="text-gray-400 text-sm relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-gray-500">
              Full Stack Web Development Diploma (MERN Stack) – SEF Academy
            </li>
            <li className="text-gray-400 text-sm relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-gray-500">
              Back-end Web Development Diploma (Node JS) – SEF Academy
            </li>
            <li className="text-gray-400 text-sm relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-gray-500">
              ICDL Certificate
            </li>
            <li className="text-gray-400 text-sm relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-gray-500">
              International Computer Driving License
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Education;
