
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Rule-shifting and Uncertainty in OCD",
      status: "In Preparation",
      authors: "Loosen, A.M., Zaboski, B. A., Pushkarskaya, H., Pittenger*, C., Hauser, T.U*.",
      description: "Investigating how patients with OCD adapt to changing rules and handle uncertainty compared to healthy controls.",
      tags: ["Computational Modeling", "OCD", "Decision-making"],
      color: "rust"
    },
    {
      title: "Revisiting the role of computational neuroimaging in the era of integrative neuroscience",
      status: "Invited Review (2024)",
      authors: "Loosen, A.M.*, Kato, A.*, Gu, X.",
      description: "Review paper for Neuropsychopharmacology (Nature Publishing Group) on computational neuroimaging approaches.",
      tags: ["Computational Psychiatry", "Neuroimaging", "Review"],
      color: "blue"
    },
    {
      title: "Obsessive-compulsive Symptoms and Information Seeking During the COVID-19 Pandemic",
      status: "Published (2021)",
      authors: "Loosen, A. M., Skvortsova, V., & Hauser, T. U.",
      description: "Examined how individuals with obsessive-compulsive symptoms sought information during the COVID-19 pandemic.",
      tags: ["OCD", "Information Seeking", "COVID-19"],
      color: "sage"
    },
    {
      title: "Towards a computational psychiatry of juvenile obsessive-compulsive disorder",
      status: "Published (2020)",
      authors: "Loosen, A.M. & Hauser, T.U.",
      description: "Review paper in Neuroscience & Biobehavioral Reviews on computational approaches to juvenile OCD.",
      tags: ["Computational Psychiatry", "Juvenile OCD", "Review"],
      color: "sand"
    },
    {
      title: "Confidence drives a neural confirmation bias",
      status: "Published (2020)",
      authors: "Rollwage, M., Loosen, A.M., Hauser, T.U., Moran, R., Dolan, R.J. & Fleming, S.M.",
      description: "Investigation of how confidence affects information processing, published in Nature Communications.",
      tags: ["Confirmation Bias", "Confidence", "Neuroscience"],
      color: "olive"
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

  const getCardClass = (color) => {
    switch(color) {
      case 'rust': return 'card-rust';
      case 'blue': return 'card-blue';
      case 'sage': return 'card-sage';
      case 'sand': return 'card-sand';
      case 'olive': return 'card-olive';
      default: return 'card-sage';
    }
  };

  const getTagClass = (color) => {
    switch(color) {
      case 'rust': return 'bg-rust/20 text-rust';
      case 'blue': return 'bg-blue/20 text-blue';
      case 'sage': return 'bg-sage/20 text-sage';
      case 'sand': return 'bg-sand/20 text-sand';
      case 'olive': return 'bg-olive/20 text-olive';
      default: return 'bg-blue/10 text-blue';
    }
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
        <p className="text-lg mb-8 p-4 bg-blue/10 rounded-lg border-l-4 border-blue">
          My research focuses on computational approaches to understanding psychiatric disorders,
          particularly obsessive-compulsive disorder (OCD), with a focus on decision-making,
          uncertainty processing, and learning mechanisms.
        </p>
      </motion.div>

      <motion.div variants={container} className="grid gap-6">
        {projects.map((project, index) => (
          <motion.div key={index} variants={item}>
            <Card className={`overflow-hidden hover:shadow-md transition-shadow duration-300 border-0 ${getCardClass(project.color)} colorful-card`}>
              <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <CardTitle className={`text-xl text-${project.color}`}>{project.title}</CardTitle>
                  <span className={`text-sm font-medium px-3 py-1 rounded bg-${project.color}/20 text-${project.color} inline-block`}>
                    {project.status}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground mb-3">{project.authors}</p>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2 py-1 rounded-full ${getTagClass(project.color)}`}
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
