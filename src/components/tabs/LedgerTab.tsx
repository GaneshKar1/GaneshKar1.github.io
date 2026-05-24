type Course = {
  code: string;
  name: string;
  description: string;
  color: string;
};

type Semester = {
  term: string;
  status?: "in-progress" | "planned";
  courses: Course[];
};

const semesters: Semester[] = [
  {
    term: "Fall 2024",
    courses: [
      { code: "MATH 53",  name: "Multivariable Calculus",             color: "#aa44ee", description: "Optimization, multiple integration, and vector calculus via Green's & Stokes' theorems." },
    ],
  },
  {
    term: "Spring 2025",
    courses: [
      { code: "CS 61A",  name: "Structure & Interpretation of Computer Programs", color: "#5599ff", description: "Core concepts of software engineering and functional programming in Python." },
      { code: "MATH 54", name: "Linear Algebra & Differential Equations",         color: "#aa44ee", description: "Matrix operations, eigenvalues, and solving systems of differential equations." },
      { code: "DATA 8",  name: "Foundations of Data Science",                     color: "#dd2222", description: "Statistical inference, hypothesis testing, and empirical distributions." },
      { code: "ECON 2",  name: "Introduction to Economics",                       color: "#22bb22", description: "Supply and demand, market equilibria, and introductory macro/microeconomics." },
    ],
  },
  {
    term: "Fall 2025",
    courses: [
      { code: "CS 61B",   name: "Data Structures",                    color: "#5599ff", description: "Advanced implementation of graphs, trees, hashing, and sorting algorithms in Java." },
      { code: "MATH 55",  name: "Discrete Mathematics",               color: "#aa44ee", description: "Combinatorics, logic, graph theory, and proof techniques for computer science." },
      { code: "ECON 141", name: "Econometrics (Quantitative)",        color: "#22bb22", description: "Statistical tools for isolating causal economic relationships from observational data." },
      { code: "IEOR 198", name: "Intro to Quantitative Finance",      color: "#22bb22", description: "Derivatives pricing, asset management, portfolio theory, and algorithmic trading." },
    ],
  },
  {
    term: "Spring 2026",
    courses: [
      { code: "EECS 126", name: "Probability & Random Processes",              color: "#5599ff", description: "Rigorous probability theory, Markov chains, estimation, and information theory." },
      { code: "MATH 104", name: "Introduction to Analysis",                    color: "#aa44ee", description: "Rigorous real analysis — limits, continuity, sequences, and metric space topology." },
      { code: "DATA 100", name: "Principles & Techniques of Data Science",     color: "#dd2222", description: "End-to-end ML pipelines: cleaning, modeling, regularization, and evaluation." },
      { code: "ECON 143", name: "Econometrics: Advanced Methods",              color: "#22bb22", description: "Quantile regression, IV estimation, panel data, and econometric inference." },
    ],
  },
  {
    term: "Summer 2026",
    status: "in-progress",
    courses: [
      { code: "CS 188",   name: "Introduction to Artificial Intelligence", color: "#5599ff", description: "Search, CSPs, Bayes nets, ML, MDPs, and reinforcement learning." },
      { code: "MATH 110", name: "Abstract Linear Algebra",                 color: "#aa44ee", description: "Abstract vector spaces, linear maps, dual spaces, inner products, and spectral theory." },
    ],
  },
  {
    term: "Fall 2026",
    status: "planned",
    courses: [
      { code: "MATH 113", name: "Introduction to Abstract Algebra", color: "#aa44ee", description: "Groups, rings, fields, homomorphisms, and an introduction to Galois theory." },
    ],
  },
];

export default function CourseworkTab() {
  return (
    <div className="pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {semesters.map(semester => (
          <div key={semester.term} className="flex flex-col gap-3">
            <div className="border-b pb-2 flex items-center gap-2" style={{ borderColor: "#2a2a2a" }}>
              <div className="text-[#777] text-xs uppercase tracking-widest">{semester.term}</div>
              {semester.status === "in-progress" && (
                <div className="text-[10px] border border-[#22bb22]/40 text-[#22bb22] px-1.5 py-0.5">
                  in progress
                </div>
              )}
              {semester.status === "planned" && (
                <div className="text-[10px] border border-[#555]/40 text-[#555] px-1.5 py-0.5">
                  planned
                </div>
              )}
            </div>

            {semester.courses.map(course => (
              <div
                key={course.code}
                className="border p-4"
                style={{
                  borderColor: course.color + (semester.status ? "22" : "33"),
                  opacity: semester.status === "planned" ? 0.6 : 1,
                }}
              >
                <div className="font-bold text-xs tracking-tight mb-1" style={{ color: course.color }}>
                  {course.code}
                </div>
                <div className="text-white text-xs font-medium mb-2 leading-tight">
                  {course.name}
                </div>
                <div
                  className="text-[10px] text-[#666] leading-relaxed pt-2 mt-2"
                  style={{ borderTop: "1px solid #1e1e1e" }}
                >
                  {course.description}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
