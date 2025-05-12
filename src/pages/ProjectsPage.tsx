
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Rule-shifting and Uncertainty in OCD",
      journal: "In Preparation",
      year: "",
      authors: "Loosen, A.M., Zaboski, B. A., Pushkarskaya, H., Pittenger*, C., & Hauser*, T.U.",
      description: "Investigating how patients with OCD adapt to changing rules and handle uncertainty compared to healthy controls.",
      tags: ["Computational Modeling", "OCD", "Decision-making"],
      link: "",
    },
    {
      title: "Revisiting the role of computational neuroimaging in the era of integrative neuroscience",
      journal: "Neuropsychopharmacology",
      year: "2024",
      authors: "Loosen, A.M.*, Kato, A.*, & Gu, X.",
      description: "Review paper for Neuropsychopharmacology (Nature Publishing Group) on computational neuroimaging approaches.",
      tags: ["Computational Psychiatry", "Neuroimaging", "Review"],
      link: "https://www.nature.com/articles/s41386-024-01946-8",
    },
    {
      title: "Consistency within change: Evaluating the psychometric properties of a widely used predictive-inference task.",
      journal: "Behavior Research Methods",
      year: "2024",
      authors: "Loosen, A.M., Seow, T.X.F., & Hauser, T.U.",
      description: "Investigation of the psychometric properties of measures of a widely-used predictive-inference paradigm.",
      tags: ["Bayes-Optimal Learner", "Psychometric Qualities", "Test-retest Reliability", "Internal Consistency"],
      link: "https://link.springer.com/article/10.3758/s13428-024-02427-y",
    },
    {
      title: "Obsessive-compulsive Symptoms and Information Seeking During the COVID-19 Pandemic",
      journal: "Translational Psychiatry",
      year: "2021",
      authors: "Loosen, A. M., Skvortsova, V., & Hauser, T. U.",
      description: "Examined how individuals with obsessive-compulsive symptoms sought information during the COVID-19 pandemic.",
      tags: ["OCD", "Information Seeking", "COVID-19"],
      link: "https://www.nature.com/articles/s41398-021-01410-x",
    },
    {
      title: "Towards a computational psychiatry of juvenile obsessive-compulsive disorder",
      journal: "Neuroscience & Biobehavioral Reviews",
      year: "2020",
      authors: "Loosen, A.M. & Hauser, T.U.",
      description: "Review paper on computational approaches to juvenile OCD.",
      tags: ["Computational Psychiatry", "Juvenile OCD", "Review"],
      link: "https://www.sciencedirect.com/science/article/abs/pii/S014976342030484X",
    },
    {
      title: "Confidence drives a neural confirmation bias",
      journal: "Nature Communications",
      year: "2020",
      authors: "Rollwage, M., Loosen, A.M., Hauser, T.U., Moran, R., Dolan, R.J. & Fleming, S.M.",
      description: "Investigation of how confidence affects information processing.",
      tags: ["Confirmation Bias", "Confidence", "Neuroscience"],
      link: "https://www.nature.com/articles/s41467-020-16278-6",
    },
  ];

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

  return (
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
        {projects.map((project, index) => (
          <motion.div key={index} variants={item}>
            <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300 border-sage/30 hover:border-sage">
              <CardHeader className="bg-gradient-to-r from-sage/10 to-blue/5 pb-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <CardTitle className="text-xl text-rust">{project.title}</CardTitle>
                  <div className="text-sm font-medium">
                    {project.link ? (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-3 py-1 rounded bg-sage/20 hover:bg-sage/30 text-sage-800 inline-block transition-colors"
                      >
                        {project.journal} {project.year && `(${project.year})`}
                      </a>
                    ) : (
                      <span className="px-3 py-1 rounded bg-sage/20 text-sage-800 inline-block">
                        {project.journal} {project.year && `(${project.year})`}
                      </span>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground mb-3">{project.authors}</p>
                <p className="mb-4">{project.description}</p>
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
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProjectsPage;
