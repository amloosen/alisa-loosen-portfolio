import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { Card } from "@/components/ui/card";

// List of projects and images as before
const projects = [
  {
    title: "Rule-shifting and Uncertainty in OCD",
    journal: "In Preparation",
    year: "",
    authors: "Loosen, A.M., Zaboski, B. A., Pushkarskaya, H., Moore, A., Bohner, C., Pittenger*, C., & Hauser*, T.U.",
    description: "Investigating how patients with OCD adapt to changing rules and handle uncertainty compared to healthy controls.",
    tags: ["Computational Modeling", "OCD", "Decision-making"],
    link: "",
    image: "/lovable-uploads/fd6e0a68-413e-4958-8915-92f64241617f.png"
  },
  {
    title: "Revisiting the role of computational neuroimaging in the era of integrative neuroscience",
    journal: "Neuropsychopharmacology",
    year: "2024",
    authors: "Loosen, A.M.*, Kato, A.*, & Gu, X.",
    description: "Review paper for Neuropsychopharmacology (Nature Publishing Group) on computational neuroimaging approaches.",
    tags: ["Computational Psychiatry", "Neuroimaging", "Review"],
    link: "https://www.nature.com/articles/s41386-024-01946-8",
    image: "/lovable-uploads/f4d0b0a4-1d4f-4ed7-bdc9-18e00ec64f6f.png"
  },
  {
    title: "Consistency within change: Evaluating the psychometric properties of a widely used predictive-inference task.",
    journal: "Behavior Research Methods",
    year: "2024",
    authors: "Loosen, A.M., Seow, T.X.F., & Hauser, T.U.",
    description: "Investigation of the psychometric properties of measures of a widely-used predictive-inference paradigm.",
    tags: ["Bayes-Optimal Learner", "Psychometric Qualities", "Test-retest Reliability", "Internal Consistency"],
    link: "https://link.springer.com/article/10.3758/s13428-024-02427-y",
    image: "/lovable-uploads/6b0dc64a-cac3-4cdf-93b3-fa6c1f07c395.png"
  },
  {
    title: "Obsessive-compulsive Symptoms and Information Seeking During the COVID-19 Pandemic",
    journal: "Translational Psychiatry",
    year: "2021",
    authors: "Loosen, A. M., Skvortsova, V., & Hauser, T. U.",
    description: "Examined how individuals with obsessive-compulsive symptoms sought information during the COVID-19 pandemic.",
    tags: ["OCD", "Information Seeking", "COVID-19"],
    link: "https://www.nature.com/articles/s41398-021-01410-x",
    image: "/lovable-uploads/88e2f5b0-ff15-48e7-ac29-988db8aadc57.png"
  },
  {
    title: "Towards a computational psychiatry of juvenile obsessive-compulsive disorder",
    journal: "Neuroscience & Biobehavioral Reviews",
    year: "2020",
    authors: "Loosen, A.M., & Hauser, T.U.",
    description: "Review paper on computational approaches to juvenile OCD.",
    tags: ["Computational Psychiatry", "Juvenile OCD", "Review"],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S014976342030484X",
    image: "/lovable-uploads/de21c4ef-14ed-4d5c-950f-9c5c8854f68f.png"
  },
  {
    title: "Confidence drives a neural confirmation bias",
    journal: "Nature Communications",
    year: "2020",
    authors: "Rollwage, M., Loosen, A.M., Hauser, T.U., Moran, R., Dolan, R.J., & Fleming, S.M.",
    description: "Investigation of how confidence affects information processing.",
    tags: ["Confirmation Bias", "Confidence", "Neuroscience", "Magnetoencephalography (MEG)", "Support-Vector Machine (SVM)"],
    link: "https://www.nature.com/articles/s41467-020-16278-6",
    image: "/lovable-uploads/b76e5773-501a-420b-aa42-b7d308812a38.png"
  }
];

// For sorting: parse years, "In Preparation" at the top
const getSortValue = (p: typeof projects[0]) => {
  if (p.journal === "In Preparation") return Infinity;
  if (p.year) return parseInt(p.year);
  return 0;
};

// Sort descending by year (In Preparation first)
const sortedProjects = [...projects].sort((a, b) => getSortValue(b) - getSortValue(a));

// Animation variants (unchanged)
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectsPage = () => (
  <motion.div
    initial="hidden"
    animate="show"
    variants={container}
    className="max-w-4xl mx-auto"
  >
    <motion.div variants={item} className="mb-8">
      <SectionTitle>Research Projects</SectionTitle>
      <p className="text-lg mb-8">
        My research focuses on computational approaches to understanding psychiatric disorders,
        particularly obsessive-compulsive disorder (OCD), with a focus on decision-making,
        uncertainty processing, and learning mechanisms.
      </p>
    </motion.div>
    <motion.div variants={container} className="grid gap-6">
      {sortedProjects.map((project, index) => (
        <motion.div key={index} variants={item}>
          <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300 border-sage/30 hover:border-sage relative bg-white">
            {/* Full-width header background and all writing/citation inside */}
            <div className="relative z-10 w-full">
              <div className="w-full bg-gradient-to-r from-sage/10 to-blue/5 px-4 pt-4 pb-3 sm:px-6 sm:pt-6 sm:pb-4">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                  <h3 className="text-xl font-serif font-semibold text-rust">{project.title}</h3>
                  <div>
                    {project.link ? (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-3 py-1 rounded bg-sage/20 hover:bg-sage/30 text-sage-800 inline-block transition-colors text-sm font-medium"
                      >
                        {project.journal} {project.year && `(${project.year})`}
                      </a>
                    ) : (
                      <span className="px-3 py-1 rounded bg-sage/20 text-sage-800 inline-block text-sm font-medium">
                        {project.journal} {project.year && `(${project.year})`}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2 mb-2">{project.authors}</p>
                <p className="mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-blue/10 text-blue"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {/* Project image aligned lower right, with consistent gap from the header */}
            <div className="w-full flex justify-end">
              <div className="sm:w-52 flex-shrink-0 flex items-start justify-center sm:justify-end p-4 pt-2">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} figure`}
                    className="object-contain w-full h-36 max-h-44 rounded-md border border-muted bg-[#f9fafb]"
                    style={{ maxWidth: "180px" }}
                  />
                ) : (
                  <div className="w-full h-36 bg-muted flex items-center justify-center rounded-md text-muted-foreground text-xs">
                    No image available
                  </div>
                )}
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
);

export default ProjectsPage;
