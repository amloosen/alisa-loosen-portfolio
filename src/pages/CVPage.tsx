
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";

const CVPage = () => {
  const educationData = [
    {
      period: "12/2018 – 12/2022",
      location: "London, UK & New Haven, USA",
      degree: "PhD in Computational Psychiatry & Neuroscience (non-degree)",
      institution: "University College London (UCL) & Yale School of Medicine, Yale University",
      details: [
        "Supervisors: Prof. Tobias Hauser (primary), Prof. Raymond Dolan (secondary), Prof. Christopher Pittenger (at Yale University)",
        "Thesis: \"Complex Decision Making & Uncertainty in Obsessive-Compulsive Disorder (OCD)\"",
      ],
    },
    {
      period: "09/2017 – 10/2018",
      location: "London, UK",
      degree: "MSc Brain and Mind Sciences",
      institution: "University College London",
      details: [
        "Supervisors: Dr. Max Rollwage and Prof. Steve Fleming",
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
        "Thesis: \"The Strategic Use of Emotions in Intergroup Conflicts\" (Supervisor: Prof. Julia Sasse)",
      ],
    },
  ];

  const positionsData = [
    {
      period: "07/2025",
      location: "New Haven, USA",
      title: "Research Fellow",
      organization: "Yale Department of Psychiatry, Yale University",
      details: [],
      note: "Starting 07/2025"
    },
    {
      period: "06/2023 – Present",
      location: "New York City, USA",
      title: "Postdoctoral Researcher",
      organization: "Center for Computational Psychiatry, Icahn School of Medicine at Mount Sinai",
      details: [
        "(PI: Prof. Xiaosi Gu)",
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
        "(PI: Prof. Tobias Hauser)",
        "Researched neurocomputational mechanisms underlying obsessive-compulsive disorder (OCD)",
        "Methods and data formats: Analyzed patient and control data using Bayesian modeling methods",
      ],
    },
    {
      period: "10/2021 – 01/2023",
      location: "New Haven, USA",
      title: "PhD Researcher",
      organization: "Yale OCD Research Clinic, Yale School of Medicine",
      details: [
        "(PI: Prof. Christopher Pittenger)",
        "Designed, ran and analyzed cognitive studies and conducted clinical assessments of patients with OCD",
      ],
    },
    {
      period: "12/2018 – 12/2022",
      location: "London, UK",
      title: "PhD Researcher",
      organization: "Max Planck UCL Centre for Computational Psychiatry and Ageing Research & Wellcome Centre for Human Neuroimaging, UCL",
      details: [
        "(PI: Prof. Tobias Hauser & Prof. Raymond Dolan)",
        "Designed, ran and analyzed large-scale cognitive studies with the general public",
      ],
    },
    {
      period: "11/2017 – 08/2018",
      location: "London, UK",
      title: "Graduate Student Researcher",
      organization: "Wellcome Centre for Human Neuroimaging, UCL",
      details: [
        "(PI: Prof. Stephen Fleming)",
        "Ran and analyzed cognitive experiments investigating the influence of confidence on changes of mind using computational models and magnetoencephalography (MEG)",
      ],
    },
    {
      period: "04/2017 – 06/2017",
      location: "Groningen, NL",
      title: "Research Intern",
      organization: "University Medical Centre Groningen",
      details: [
        "(PI: Prof. Sander Martens)",
        "Supported two research teams running experiments using pupillometry investigating the attentional blink",
      ],
    },
    {
      period: "08/2016 – 02/2017",
      location: "Munich & Cologne, DE",
      title: "Junior Communication Consultant",
      organization: "Gauly Advisors GmbH and Avantgarde Experts",
      details: [
        "Created innovative communication channels and gamification tools for phone-based data collection",
        "Project manager for different communication and change-management processes",
      ],
    },
    {
      period: "12/2012 – 05/2013",
      location: "Munich, DE",
      title: "Mental Health Counselling Intern",
      organization: "House for Mother and Child",
      details: [
        "Assisted in psychological counselling for women fleeing domestic violence and human trafficking",
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
      period: "09/2017",
      title: "Full MSc Scholarship",
      details: "German Academic Scholarship Foundation/ Studienstiftung des Deutschen Volkes"
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

  const publicationsData = [
    "Loosen, A.M., Zaboski, B. A., Pushkarskaya, H., Pittenger*, C., Hauser, T.U*. (in preparation) Rule-shifting and Uncertainty in OCD.",
    "Loosen, A.M.*, Kato, A.*, Gu, X., (2024) Revisiting the role of computational neuroimaging in the era of integrative neuroscience. Invited Review for Neuropsychopharmacology. Nature Publishing Group",
    "Loosen, A. M., Skvortsova, V., & Hauser, T. U. (2021). Obsessive-compulsive Symptoms and Information Seeking During the COVID-19 Pandemic. Translational Psychiatry",
    "Loosen, A.M. & Hauser, T.U. (2020) Towards a computational psychiatry of juvenile obsessive-compulsive disorder. Neuroscience & Biobehavioral Reviews",
    "Rollwage, M., Loosen, A.M., Hauser, T.U., Moran, R., Dolan, R.J. & Fleming, S.M. (2020) Confidence drives a neural confirmation bias. Nature Communications"
  ];

  const postersData = [
    "Loosen, A.M., Zaboski, B. A., Pushkarskaya, H., Pittenger*, C., Hauser, T.U*. Altered Confidence Adaptation During Set-Shifting in OCD. Annual Meeting of the Society of Biological Psychiatry (SOBP); 04/2023, San Diego (USA).",
    "Loosen, A.M., Seow, T.X.F., Hauser, T.U. Consistently changing: Evaluating the psychometric properties of the predictive-inference task. Symposium on the computational properties of the prefrontal cortex; 03/2022, University of Oxford (UK).",
    "Loosen, A.M., Seow, T.X.F., Hauser, T.U. Consistently changing: Evaluating the psychometric properties of the predictive-inference task. The Annual Society for NeuroEconomics meeting; 2021; 09/2021, online.",
    "Loosen, A.M., Rollwage, M., Fleming, S.M. The influence of subjective confidence on post-decision evidence integration and changes of mind. 19th Queen Square Symposium of the Institute of Neurology UCL; 05/2018; London (UK)."
  ];

  const teachingData = [
    {
      period: "04/2023 - Present",
      description: "Acted as the co-director of the Summer Program in Computational Education (SPICE), Icahn School of Medicine at Mount Sinai. This program focuses on providing early computational training for students from groups underrepresented in STEM."
    },
    {
      period: "06/2023 – 08/2023",
      description: "Lectured Neuroscience & Computational Psychiatry at the Icahn School of Medicine at Mount Sinai for the Summer Program in Computational Education"
    },
    {
      period: "11/2021 – 02/2022",
      description: "Supervision of PhD-Rotation Student Sarah Bühler, Institute of Neurology, UCL"
    },
    {
      period: "09/2021 – 02/2023",
      description: "Supervised and marked statistics and research methods examinations and papers, UCL"
    },
    {
      period: "09/2021",
      description: "Collaborative workshop on computational modelling at the Flux 2020 Virtual Congress, Society for Developmental Cognitive Neuroscience"
    }
  ];

  const engagementData = [
    {
      period: "11/2021 – Present",
      description: "Public engagement project in collaboration with adolescents living with OCD and their parents to develop OCD-related communication tools (project website: https://ocdandthebrain.com). Funding: Wellcome Trust Research Enrichment Grant"
    },
    {
      period: "03/2021 – 12/2023",
      description: "Course Representative of the IMPRS COMP2PSYCH PhD program at the International Max Planck Research School on Computational Methods in Psychiatry and Ageing Research"
    },
    {
      period: "09/2018 - 03/2019",
      description: "Public engagement projects involving art-science collaborations and tablet-based data collection for the Wellcome Trust Centre for Human Neuroimaging"
    },
    {
      period: "09/2017 – 09/2018",
      description: "Academic representative of the Dual-MSc Brain and Mind Sciences, UCL"
    },
    {
      period: "09/2017 – 08/2018",
      description: "Queen Square Student Committee member at the Institute of Neurology, UCL"
    },
    {
      period: "09/2014 – 06/2017",
      description: "Committee chair of the Amnesty International Student Group & Social Erasmus Student Committee Groningen (NL)"
    }
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
      className="max-w-4xl mx-auto"
    >
      <motion.div variants={item} className="mb-8">
        <h1 className="text-4xl font-serif font-semibold mb-6 text-rust">Curriculum Vitae</h1>
        <div className="mb-6">
          <h2 className="text-2xl font-serif mb-2">Alisa M. Loosen, PhD</h2>
          <p className="text-muted-foreground">Center for Computational Psychiatry, Icahn School of Medicine at Mount Sinai</p>
          <div className="flex flex-wrap items-center gap-2 text-muted-foreground mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="space-x-1">
              <a href="mailto:alisa.loosen@mssm.edu" className="hover:text-rust transition-colors">alisa.loosen@mssm.edu</a>
              <span>;</span>
              <a href="mailto:a.m.loosen@gmail.com" className="hover:text-rust transition-colors">a.m.loosen@gmail.com</a>
            </span>
            <span className="mx-2">|</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <a href="https://github.com/amloosen" target="_blank" rel="noopener noreferrer" className="hover:text-rust transition-colors">
              github.com/amloosen
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div variants={item} className="mb-12">
        <SectionTitle>Academic Positions</SectionTitle>
        <div className="space-y-8">
          {positionsData.map((position, index) => (
            <div
              key={index}
              className="border-l-4 border-blue pl-6 py-2 hover:border-sage transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="font-medium text-xl">{position.title}</h3>
                <div className="text-muted-foreground text-sm">
                  {position.period} | {position.location}
                  {position.note && <span className="ml-2 text-blue">{position.note}</span>}
                </div>
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
              className="border-l-4 border-blue pl-6 py-2 hover:border-sage transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="font-medium text-xl">{education.degree}</h3>
                <div className="text-muted-foreground text-sm">{education.period} | {education.location}</div>
              </div>
              <p className="text-blue font-medium mb-2">{education.institution}</p>
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

      <motion.div variants={item} className="mb-12">
        <SectionTitle>Invited Talks & Reviews</SectionTitle>
        <div className="space-y-4">
          {invitedTalksData.map((talk, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:items-start gap-2 border-b border-muted pb-4">
              <div className="text-muted-foreground text-sm whitespace-nowrap">{talk.period}</div>
              <div>
                <h4 className="font-medium">{talk.title}</h4>
                <p className="text-muted-foreground">{talk.organization}</p>
              </div>
            </div>
          ))}
          <div className="pt-4">
            <h4 className="font-medium mb-2">Reviewed for:</h4>
            <p className="text-muted-foreground">Proceedings of the National Academy of Sciences of the United States of America (PNAS), Nature Scientific Reports, BMC Psychiatry, Journal of Anxiety Disorders, Journal of Clinical Psychiatry, Mental Health Review Journal; Computational Psychiatry Conference</p>
          </div>
        </div>
      </motion.div>

      <motion.div variants={item} className="mb-12">
        <SectionTitle>Selected Publications & Posters</SectionTitle>
        <Card>
          <CardContent className="p-6">
            <h4 className="font-medium mb-4">Publications</h4>
            <ul className="space-y-3">
              {publicationsData.map((pub, index) => (
                <li key={index} className="text-muted-foreground">{pub}</li>
              ))}
            </ul>
            
            <h4 className="font-medium mt-8 mb-4">Posters</h4>
            <ul className="space-y-3">
              {postersData.map((poster, index) => (
                <li key={index} className="text-muted-foreground">{poster}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
      
      <motion.div variants={item} className="mb-12">
        <SectionTitle>Teaching Experience</SectionTitle>
        <div className="space-y-4">
          {teachingData.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:items-start gap-2 border-b border-muted pb-4">
              <div className="text-muted-foreground text-sm whitespace-nowrap sm:w-1/4">{item.period}</div>
              <div className="sm:w-3/4">
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      
      <motion.div variants={item} className="mb-12">
        <SectionTitle>Public Engagement & Activities</SectionTitle>
        <div className="space-y-4">
          {engagementData.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:items-start gap-2 border-b border-muted pb-4">
              <div className="text-muted-foreground text-sm whitespace-nowrap sm:w-1/4">{item.period}</div>
              <div className="sm:w-3/4">
                <p className="text-muted-foreground">{item.description}</p>
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
