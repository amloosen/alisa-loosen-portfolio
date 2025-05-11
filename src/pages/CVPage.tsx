
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";

const CVPage = () => {
  const educationData = [
    {
      period: "12/2018 – 12/2022",
      location: "London, UK & New Haven, USA",
      degree: "PhD in Computational Psychiatry & Neuroscience",
      institution: "University College London (UCL) & Yale School of Medicine, Yale University",
      details: [
        "Supervisors: Prof. Tobias Hauser (primary), Prof. Raymond Dolan, Prof. Christopher Pittenger",
        "Thesis: \"Complex Decision Making & Uncertainty in Obsessive-Compulsive Disorder (OCD)\"",
      ],
    },
    {
      period: "09/2017 – 10/2018",
      location: "London, UK",
      degree: "MSc Brain and Mind Sciences",
      institution: "University College London",
      details: [
        "Graduated with distinction",
        "Thesis: \"The influence of confidence on post-decision evidence processing and changes of mind\"",
      ],
    },
    {
      period: "09/2013 – 07/2016",
      location: "Groningen, NL",
      degree: "BSc Psychology",
      institution: "University of Groningen",
      details: [
        "Graduated in the top 10% of the cohort",
        "Thesis: \"The Strategic Use of Emotions in Intergroup Conflicts\"",
      ],
    },
  ];

  const positionsData = [
    {
      period: "07/2025 – Future",
      location: "New Haven, USA",
      title: "Faculty",
      organization: "Yale Department of Psychiatry, Yale University",
      details: [
        "Starting July 2025"
      ],
    },
    {
      period: "06/2023 – Present",
      location: "New York City, USA",
      title: "Postdoctoral Researcher",
      organization: "Center for Computational Psychiatry, Icahn School of Medicine at Mount Sinai",
      details: [
        "Investigate neurocomputational mechanisms of effort and reward learning",
        "Methods and data formats: Intracranial recordings, large-scale online testing, and reinforcement learning–based modeling",
      ],
    },
    {
      period: "01/2023 – 06/2023",
      location: "Tübingen, DE",
      title: "Postdoctoral Researcher",
      organization: "University of Tübingen & Max Planck Institute for Biological Cybernetics",
      details: [
        "Researched neurocomputational mechanisms underlying obsessive-compulsive disorder (OCD)",
        "Methods and data formats: Analyzed patient and control data using Bayesian modeling methods",
      ],
    },
    {
      period: "12/2018 – 12/2022",
      location: "London, UK",
      title: "PhD Researcher",
      organization: "Max Planck UCL Centre for Computational Psychiatry and Ageing Research & Wellcome Centre for Human Neuroimaging, UCL",
      details: [
        "Designed, ran and analyzed large-scale cognitive studies with the general public",
      ],
    },
    {
      period: "10/2021 – 01/2023",
      location: "New Haven, USA",
      title: "PhD Researcher",
      organization: "Yale OCD Research Clinic, Yale School of Medicine",
      details: [
        "Designed, ran and analyzed cognitive studies and conducted clinical assessments of patients with OCD",
      ],
    },
  ];

  const awardsData = [
    {
      period: "08/2024",
      title: "Dana Foundation Funding",
      details: "Secured ~$40,000 for the Summer Program in Computational Education, Icahn School of Medicine at Mount Sinai"
    },
    {
      period: "06/2023",
      title: "Public Engagement Award",
      details: "Wellcome Centre for Human Neuroimaging Institute of Neurology"
    },
    {
      period: "04/2023",
      title: "Guarantors of Brain Travel Grant",
      details: ""
    },
    {
      period: "04/2021",
      title: "Yale & UCL PhD Collaborative Award",
      details: "Yale University & UCL"
    },
    {
      period: "05/2020",
      title: "Public Engagement Award",
      details: "Wellcome Centre for Human Neuroimaging Institute of Neurology"
    },
    {
      period: "12/2018",
      title: "Full PhD Scholarship (COMP2PSYCH)",
      details: "Max-Planck-Society"
    },
  ];

  const skillsData = [
    {
      category: "Data Science",
      skills: "Reinforcement learning, Bayesian analysis, generalized/hierarchical linear models, factor analysis"
    },
    {
      category: "Programming",
      skills: "MATLAB, R, Python, JavaScript, CSS, React, Git"
    },
    {
      category: "Human Data",
      skills: "Experimental design, Multi-Modal Data Collection & Analysis (Clinical and Healthy Populations)"
    },
    {
      category: "Software",
      skills: "SPSS, Excel, Adobe Illustrator"
    },
    {
      category: "Languages",
      skills: "German (native), English (full professional proficiency), French (elementary proficiency)"
    }
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
        <h1 className="text-4xl font-serif font-semibold mb-6 text-rust">Curriculum Vitae</h1>
        <div className="flex items-center gap-2 text-muted-foreground mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <a href="mailto:alisa.loosen@yale.edu" className="hover:text-rust transition-colors">
            alisa.loosen@yale.edu
          </a>
          <span className="mx-2">|</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          <a href="https://github.com/amloosen" target="_blank" rel="noopener noreferrer" className="hover:text-rust transition-colors">
            github.com/amloosen
          </a>
        </div>
      </motion.div>

      <motion.div variants={item} className="mb-12">
        <SectionTitle>Academic Positions</SectionTitle>
        <div className="space-y-8">
          {positionsData.map((position, index) => (
            <div
              key={index}
              className="border-l-4 border-sage pl-6 py-2 hover:border-blue transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="font-medium text-xl">{position.title}</h3>
                <div className="text-muted-foreground text-sm">{position.period} | {position.location}</div>
              </div>
              <p className="text-blue font-medium mb-2">{position.organization}</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                {position.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={item} className="mb-12">
        <SectionTitle>Education</SectionTitle>
        <div className="space-y-8">
          {educationData.map((education, index) => (
            <div
              key={index}
              className="border-l-4 border-sand pl-6 py-2 hover:border-rust transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="font-medium text-xl">{education.degree}</h3>
                <div className="text-muted-foreground text-sm">{education.period} | {education.location}</div>
              </div>
              <p className="text-rust font-medium mb-2">{education.institution}</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                {education.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={item} className="mb-12">
        <SectionTitle>Grants & Awards</SectionTitle>
        <div className="space-y-4">
          {awardsData.map((award, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-2 border-b border-muted pb-4">
              <div className="text-muted-foreground text-sm whitespace-nowrap">{award.period}</div>
              <div>
                <h4 className="font-medium">{award.title}</h4>
                {award.details && <p className="text-muted-foreground">{award.details}</p>}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={item}>
        <SectionTitle>Skills</SectionTitle>
        <div className="space-y-4">
          {skillsData.map((skill, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-2 border-b border-muted pb-4">
              <div className="sm:w-1/4 font-medium">{skill.category}</div>
              <div className="sm:w-3/4 text-muted-foreground">{skill.skills}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CVPage;
