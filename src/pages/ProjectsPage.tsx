import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { Card } from "@/components/ui/card";

// Institution logo full paths (keep order consistent with usage):
const LOGOS = {
  "Aarhus University": "/lovable-uploads/063a8e35-8ae4-4fd8-8d62-3835544b993f.png",
  "Mount Sinai": "/lovable-uploads/34d9ee11-9d7e-4963-b661-3631da80e50d.png",
  "Yale": "/lovable-uploads/13889375-65af-49c8-87bd-904f7afc799f.png",
  "Tübingen": "/lovable-uploads/7120f1d4-d5ab-478e-bbc1-40247a598f6e.png",
};

// Add URL mapping for each university
const LOGO_LINKS = {
  "Aarhus University": "https://www.the-ecg.org/",
  "Yale": "https://medicine.yale.edu/psychiatry/",
  "Mount Sinai": "https://icahn.mssm.edu/research/center-for-computational-psychiatry",
  "Tübingen": "https://devcompsy.org/",
};

// Logo placeholder component
function InstLogos({ institutions }: { institutions: string[] }) {
  return (
    <div className="flex flex-row gap-2 mt-2 items-end justify-center">
      {institutions.map((name) => {
        const url = LOGO_LINKS[name];
        // Wrap the logo in a link if a url is present
        return (
          <div
            key={name}
            className="bg-white shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center justify-center"
            style={{
              minWidth: 56,
              minHeight: 40,
              height: 42,
              padding: '2px 8px',
              background: "#fff",
            }}
          >
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} department or lab`}
                className="focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
                tabIndex={0}
              >
                <img
                  src={LOGOS[name]}
                  alt={name + " logo"}
                  className="object-contain"
                  style={{
                    maxHeight: 36,
                    maxWidth: 90,
                    width: "auto",
                    height: "36px"
                  }}
                />
              </a>
            ) : (
              <img
                src={LOGOS[name]}
                alt={name + " logo"}
                className="object-contain"
                style={{
                  maxHeight: 36,
                  maxWidth: 90,
                  width: "auto",
                  height: "36px"
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// Ongoing Projects
const ongoingProjects = [
  {
    title:
      "Distinct Alterations of Reward- and Effort-Based Learning in Anhedonia Versus Apathy",
    authors: "Loosen, A.M., Gu, X.* & Hauser, T.U.*",
    description:
      "A large-scale investigation into how anhedonia and apathy differentially modulate reward- and effort-based neural learning pathways, revealing their unique and intertwined impact on behavior.",
    institutions: ["Mount Sinai", "Yale", "Tübingen"],
  },
  {
    title:
      "Decoding Neural Signatures of Reward- and Effort-Based Learning Using Intracranial EEG",
    authors: "Loosen, A.M., Saez, I., Hauser, T.U.*, & Gu, X.*",
    description:
      "This project aims to elucidate the unique and independent neural correlates underlying reward and effort-based learning by leveraging high-resolution intracranial EEG recordings during human decision-making.",
    institutions: ["Mount Sinai", "Yale", "Tübingen"],
  },
  {
    title:
      "Cannabis Consumption and its Differential Impact on Reward- and Effort-Based Learning",
    authors: "Vejlø, M., Loosen, A.M., Gu, X., Hauser, T.U., & Allen, M.",
    description:
      "A comprehensive investigation exploring how cannabis usage in the general population can shape the neural and behavioral mechanisms underpinning both reward- and effort-based learning.",
    institutions: ["Aarhus University", "Yale", "Tübingen"],
  },
];

// Selected Publications
const projects = [
  {
    title: "The Metacognitive Paradox of OCD: Confidence is Globally Reduced but Shows Increased Sensitivity to Local Evidence",
    journal: "Under Revision at Translational Psychiatry",
    year: "2025",
    authors: "Loosen, A.M., Zaboski, B. A., Moore, A., Bohner, Pushkarskaya, H., C., Pittenger, C.*, & Hauser, T.U.*",
    description: "Using a novel rule-shifting task we show that patients with OCD display persistently lowered confidence but update their confidence ratings more in line with decision evidence and nearer to Bayes-optimality",
    tags: ["Computational Modeling", "OCD", "Decision-making"],
    link: "https://www.researchsquare.com/article/rs-7609740/latest",
    image: "/lovable-uploads/fd6e0a68-413e-4958-8915-92f64241617f.png"
  },
  {
    title: "Revisiting the Role of Computational Neuroimaging in the Era of Integrative Neuroscience",
    journal: "Neuropsychopharmacology",
    year: "2024",
    authors: "Loosen, A.M.*, Kato, A.*, & Gu, X.",
    description: "Review paper for Neuropsychopharmacology (Nature Publishing Group) on computational neuroimaging approaches.",
    tags: ["Computational Psychiatry", "Neuroimaging", "Review"],
    link: "https://www.nature.com/articles/s41386-024-01946-8",
    image: "/lovable-uploads/de21c4ef-14ed-4d5c-950f-9c5c8854f68f.png"
  },
  {
    title: "Consistency Within Change: Evaluating the Psychometric Properties of a Widely used Predictive-Inference Task",
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
    title: "Towards a Computational Psychiatry of Juvenile Obsessive-Compulsive Disorder",
    journal: "Neuroscience & Biobehavioral Reviews",
    year: "2020",
    authors: "Loosen, A.M., & Hauser, T.U.",
    description: "Review paper on computational approaches to juvenile OCD.",
    tags: ["Computational Psychiatry", "Juvenile OCD", "Review"],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S014976342030484X",
    image: "/lovable-uploads/f4d0b0a4-1d4f-4ed7-bdc9-18e00ec64f6f.png"
  },
  {
    title: "Confidence Drives a Neural Confirmation Bias",
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

const sortedProjects = [...projects].sort(
  (a, b) => getSortValue(b) - getSortValue(a)
);

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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
    {/* Ongoing Projects Section */}
    <motion.div variants={item} className="mb-12">
      <SectionTitle>Ongoing Projects</SectionTitle>
      <p className="text-lg mb-8">
        My research focuses on computational approaches to understanding psychiatric disorders,
        particularly obsessive-compulsive disorder (OCD), with a focus on decision-making,
        uncertainty processing, and learning mechanisms.
      </p>
      <div className="grid gap-6">
        {ongoingProjects.map((project, i) => (
          <Card
            key={i}
            className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white flex flex-col"
          >
            {/* CARD HEADER: mimic research card header layout */}
            <div className="w-full px-4 pt-4 pb-3 sm:px-6 sm:pt-6 sm:pb-4">
              <div className="flex flex-row justify-between items-start w-full gap-3">
                {/* Left: title, authors, and logos */}
                <div className="flex flex-col flex-1 min-w-0">
                  <h3 className="text-xl font-light text-blue mb-0 sm:text-xl">
                    {project.title}
                  </h3>
                  <span className="text-xs text-muted-foreground mt-1">
                    {project.authors}
                  </span>
                  <div className="flex flex-col mt-2 items-start">
                    {/* Only show "Collaboration:" label for projects other than the first one */}
                    {i > 0 && (
                      <span className="block text-xs text-muted-foreground mb-1 font-semibold pl-[2px]">
                        Collaboration:
                      </span>
                    )}
                    <InstLogos institutions={project.institutions} />
                  </div>
                </div>
              </div>
            </div>
            {/* BODY: description below header */}
            <div className="flex flex-row items-stretch pl-4 pr-4 pt-2 pb-5 sm:pb-7 sm:pt-4 sm:pl-6 sm:pr-6">
              <div className="flex-1 flex flex-col justify-center">
                <p className="mb-0">{project.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </motion.div>

    {/* Selected Publications Section */}
    <motion.div variants={item} className="mb-8">
      <div className="w-[99%] mx-auto border-t border-foreground mb-8"></div>
      <SectionTitle>Selected Publications</SectionTitle>
    </motion.div>
    <motion.div variants={container} className="grid gap-6">
      {sortedProjects.map((project, index) => (
        <motion.div key={index} variants={item}>
          <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 relative bg-white flex flex-col">
            {/* HEADER: Title & Authors (left), Journal/Year (right) */}
            <div className="w-full px-4 pt-4 pb-3 sm:px-6 sm:pt-6 sm:pb-4">
              <div className="flex flex-row justify-between items-start w-full gap-3">
                {/* Left: title and authors */}
                <div className="flex flex-col">
                  <h3 className="text-xl font-light text-blue mb-0">
                    {project.title}
                  </h3>
                  <span className="text-xs text-muted-foreground mt-1">
                    {project.authors}
                  </span>
                </div>
                {/* Right: journal/year */}
                <div className="flex flex-col items-end justify-center min-w-[172px]">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded bg-sage/20 hover:bg-sage/30 text-sage-800 inline-block transition-colors text-sm font-medium mb-1"
                    >
                      {project.journal} {project.year && `(${project.year})`}
                    </a>
                  ) : (
                    <span className="px-3 py-1 rounded bg-sage/20 text-sage-800 inline-block text-sm font-medium mb-1">
                      {project.journal} {project.year && `(${project.year})`}
                    </span>
                  )}
                </div>
              </div>
            </div>
            {/* Card Body: description/tags (left), image (right, with padded bottom) */}
            <div className="flex flex-row items-stretch justify-between gap-2 pl-0 pr-0 pt-0 bg-white">
              <div className="flex-1 flex flex-col justify-center pl-4 pt-2 pb-7 sm:pb-10 sm:pt-4 sm:pl-6">
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
              <div className="flex-shrink-0 flex flex-col justify-end items-end pr-4 sm:pr-6">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} figure`}
                    className="object-contain w-36 h-36 max-h-44 shadow-md bg-white mt-2 mb-8"
                    style={{ maxWidth: "180px" }}
                  />
                ) : (
                  <div className="w-36 h-36 bg-muted flex items-center justify-center rounded-md text-muted-foreground text-xs mt-2 mb-8">
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
