import React from 'react'
import "./About.css"
const About = (props) => {
  return (
    <div className={`text-${props.Mode === "dark" ? "light" : "dark"}`}>
      <h1>About Us</h1>
      <section className=" body-font">
        <div className="container  py-24 mx-auto flex flex-col">
          <div className="lg:w-1/2 mx-auto ">
            <div className=" flex-col mx-auto  mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8 float-left">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bgimg">
                  {/* <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg> */}
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4  text-lg">
                    Mehak Bahar
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    Full-stack web developer skilled in MERN, TypeScript,
                    Python, Radix, and Next.js. Eager to contribute and create
                    innovative digital solutions, open to tech opportunities.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center flex-col sm:w-2/3 sm:pl-8 float-right px-auto sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed w-7 text-lg mb-4">
                  As an aspiring web developer, I am immersed in the dynamic
                  landscape of full-stack web development, specializing in the
                  MERN stack, TypeScript, and Python. My journey includes
                  delving into cutting-edge technologies like Radix and Next.js,
                  providing me with a versatile skill set to tackle various
                  aspects of web development. Eager to contribute and grow, I am
                  open to opportunities in the tech industry, ready to leverage
                  my proficiency in these technologies to create seamless and
                  innovative digital solutions. Whether it's crafting responsive
                  front-end interfaces or optimizing server-side functionality,
                  I am committed to delivering high-quality services and adding
                  value to any tech project.
                </p>
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About
