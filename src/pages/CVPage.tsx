
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";

const CVPage = () => {
  const educationData = [
    {
      period: "12/2018 – 12/2022",
      location: "London, UK & New Haven, USA",
      degree: "PhD in Computational Psychiatry & Neuroscience",
      institution: "University College London (UCL)",
      details: [
        "Supervisors: Prof. Tobias Hauser (primary) & Prof. Raymond Dolan (secondary)",
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
        "Supervisors: Dr. Max Rollwage & Prof. Steve Fleming",
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
        "Thesis: \"The Strategic Use of Emotions in Intergroup Conflicts\" (Supervisor: Prof. Julia Sasse)",
      ],
    },
  ];

  const positionsData = [
    {
      periods: [
        { period: "07/2025 – Present", location: "New Haven, CT, USA" },
        { period: "06/2023 – 06/2025", location: "New York, NY, USA" }
      ],
      title: "Postdoctoral Researcher",
      organization: "Yale Department of Psychiatry, Yale University",
      suborganizations: ["prev: Centre for Computational Psychiatry, Icahn School of Medicine at Mount Sinai"],
      details: [
        "PI: Prof. Xiaosi Gu",
        "Investigated neurocomputational mechanisms of effort and reward learning",
        "Methods and data formats: Intracranial recordings, large-scale online testing, and reinforcement learning–based modeling",
      ],
    },
    {
      period: "12/2018 – 06/2023",
      location: "London, UK",
      title: "PhD Researcher",
      organization: "Max Planck UCL Centre for Computational Psychiatry and Ageing Research & Wellcome Centre for Human Neuroimaging, UCL",
      details: [
        "PI: Prof. Tobias Hauser",
        "Designed, ran and analyzed large-scale cognitive studies with the general public",
      ],
    },
    {
      period: "10/2021 – 01/2023",
      location: "New Haven, CT, USA",
      title: "PhD Researcher",
      organization: "Yale OCD Research Clinic, Yale School of Medicine",
      details: [
        "PI: Prof. Christopher Pittenger",
        "Designed, ran and analyzed cognitive studies and conducted clinical assessments of patients with OCD",
      ],
    },
    {
      period: "11/2017 – 08/2018",
      location: "London, UK",
      title: "Postgraduate Researcher",
      organization: "Wellcome Centre for Human Neuroimaging, UCL",
      details: [
        "PI: Prof. Stephen Fleming",
        "Ran and analyzed cognitive experiments investigating the influence of confidence on changes of mind using computational models and magnetoencephalography (MEG)",
      ],
    },
    {
      period: "04/2017 – 06/2017",
      location: "Groningen, NL",
      title: "Research Intern",
      organization: "University Medical Centre Groningen",
      details: [
        "PI: Prof. Sander Martens",
        "Supported two research teams running experiments using pupillometry investigating the attentional blink",
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
    {
      period: "09/2018",
      title: "Travel Award",
      details: "German Academic Scholarship Foundation/ Studienstiftung des Deutschen Volkes"
    },
    {
      period: "02/2018",
      title: "Travel Award",
      details: "Humboldt University of Berlin & Bernstein Computational Centre Berlin"
    },
    {
      period: "09/2017",
      title: "Full MSc Scholarship",
      details: "German Academic Scholarship Foundation/ Studienstiftung des Deutschen Volkes"
    }
  ];

  const invitedTalksData = [
    {
      period: "12/2023",
      title: "Brain Meeting",
      organization: "Wellcome Centre for Human Neuroimaging Institute of Neurology"
    },
    {
      period: "06/2022",
      title: "Invited Talk",
      organization: "Center for Computational Psychiatry, Icahn School of Medicine at Mount Sinai"
    },
    {
      period: "11/2021",
      title: "Invited Talk",
      organization: "Action, Computation, & Thinking (ACT) Lab, Department of Psychology, Yale University"
    },
    {
      period: "10/2021",
      title: "Invited Talk",
      organization: "Rutledge Lab Department of Psychology, Yale University"
    },
  ];

  const teachingData = [
    {
      period: "01/2026 - Present",
      description: <>Co-organiser of <a href="https://medicine.yale.edu/psychiatry/education/programs-and-initiatives/map/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">MAPs: Methods And Primers for Computational Psychiatry and Neuroeconomics</a>, Yale Department of Psychiatry</>
    },
    {
      period: "04/2023 - 06/2025",
      description: "Acted as the co-director of the Summer Program in Computational Education (SPICE), Icahn School of Medicine at Mount Sinai. This program focuses on providing early computational training for students from groups underrepresented in STEM."
    },
    {
      period: "06/2023 – 08/2023",
      description: "Lectured Neuroscience & Computational Psychiatry at the Icahn School of Medicine at Mount Sinai for the Summer Program in Computational Education"
    },
    {
      period: "09/2021",
      description: "Collaborative workshop on computational modelling at the Flux 2020 Virtual Congress, Society for Developmental Cognitive Neuroscience"
    }
  ];

  const skillsData = [
    {
      category: "Data Science",
      skills: "Reinforcement learning, Bayesian analysis, generalized/hierarchical linear models, factor analysis"
    },
    {
      category: "Programming",
      skills: "Python, R, MATLAB, JavaScript, React, Git"
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
      skills: "German (native), English (full professional proficiency)"
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
      className="max-w-4xl mx-auto font-sans"
    >
      <motion.div variants={item} className="mb-8">
        <SectionTitle>Curriculum Vitae <span className="text-lg text-muted-foreground">(Short Version)</span></SectionTitle>
      </motion.div>

      <motion.div variants={item} className="mb-12">
        <div className="w-[99%] mx-auto border-t border-foreground mb-8"></div>
        <SectionTitle>Academic Positions</SectionTitle>
        <div className="shadow-lg hover:shadow-xl transition-all duration-300 bg-white p-6 space-y-8">
          {positionsData.map((position, index) => (
            <div
              key={index}
              className="pl-6 py-2"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-2">
                <h3 className="font-light text-lg tracking-wide">{position.title}</h3>
                <div className="text-muted-foreground text-sm font-light md:text-right">
                  {position.periods ? (
                    position.periods.map((p, idx) => (
                      <div key={idx}>{p.period} | {p.location}</div>
                    ))
                  ) : (
                    <div>{position.period} | {position.location}</div>
                  )}
                </div>
              </div>
              <p className="text-blue font-light mb-2">{position.organization}</p>
              {position.suborganizations && position.suborganizations.map((sub, idx) => (
                <p key={idx} className="text-blue font-light mb-2">{sub}</p>
              ))}
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
        <div className="w-[99%] mx-auto border-t border-foreground mb-8"></div>
        <SectionTitle>Education</SectionTitle>
        <div className="shadow-lg hover:shadow-xl transition-all duration-300 bg-white p-6 space-y-8">
          {educationData.map((education, index) => (
            <div
              key={index}
              className="pl-6 py-2"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="font-light text-lg tracking-wide">{education.degree}</h3>
                <div className="text-muted-foreground text-sm font-light">{education.period} | {education.location}</div>
              </div>
              <p className="text-blue font-light mb-2">{education.institution}</p>
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
        <div className="w-[99%] mx-auto border-t border-foreground mb-8"></div>
        <SectionTitle>Grants & Awards</SectionTitle>
        <div className="shadow-lg hover:shadow-xl transition-all duration-300 bg-white p-6 space-y-4">
          {awardsData.map((award, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:items-start gap-2 pb-4">
              <div className="text-muted-foreground text-sm whitespace-nowrap sm:w-1/4 font-light">{award.period}</div>
              <div className="sm:w-3/4">
                <h4 className="font-light tracking-wide">{award.title}</h4>
                {award.details && <p className="text-muted-foreground font-light">{award.details}</p>}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={item} className="mb-12">
        <div className="w-[99%] mx-auto border-t border-foreground mb-8"></div>
        <SectionTitle>Invited Talks & Reviews</SectionTitle>
        <div className="shadow-lg hover:shadow-xl transition-all duration-300 bg-white p-6 space-y-4">
          {invitedTalksData.map((talk, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:items-start gap-2 pb-4">
              <div className="text-muted-foreground text-sm whitespace-nowrap sm:w-1/4 font-light">{talk.period}</div>
              <div className="sm:w-3/4">
                <h4 className="font-light tracking-wide">{talk.title}</h4>
                <p className="text-muted-foreground font-light">{talk.organization}</p>
              </div>
            </div>
          ))}
          <div className="pt-4 pb-4">
            <h4 className="font-light tracking-wide mb-2">Reviewed for:</h4>
            <p className="text-muted-foreground font-light">Proceedings of the National Academy of Sciences of the United States of America (PNAS), Nature Scientific Reports, BMC Psychiatry, Translational Psychiatry, PLOS Computational Biology, Journal of Anxiety Disorders, Journal of Clinical Psychiatry, Mental Health Review Journal; Computational Psychiatry Conference</p>
          </div>
        </div>
      </motion.div>
      
      <motion.div variants={item} className="mb-12">
        <div className="w-[99%] mx-auto border-t border-foreground mb-8"></div>
        <SectionTitle>Selected Teaching Experience</SectionTitle>
        <div className="shadow-lg hover:shadow-xl transition-all duration-300 bg-white p-6 space-y-4">
          {teachingData.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:items-start gap-2 pb-4">
              <div className="text-muted-foreground text-sm whitespace-nowrap sm:w-1/4 font-light">{item.period}</div>
              <div className="sm:w-3/4">
                <p className="text-muted-foreground font-light">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={item}>
        <div className="w-[99%] mx-auto border-t border-foreground mb-8"></div>
        <SectionTitle>Skills</SectionTitle>
        <div className="shadow-lg hover:shadow-xl transition-all duration-300 bg-white p-6 space-y-4">
          {skillsData.map((skill, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-2 pb-4">
              <div className="sm:w-1/4 font-light tracking-wide">{skill.category}</div>
              <div className="sm:w-3/4 text-muted-foreground font-light">{skill.skills}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CVPage;
