
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import ProfileImage from "@/components/ProfileImage";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Brain, 
  FileText, 
  Globe, 
  Smartphone, 
  Cog, 
  MessageSquare
} from "lucide-react";

const AboutPage = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="max-w-4xl mx-auto"
    >
      <motion.div variants={item} className="mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
          <ProfileImage size="lg" />
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-rust">
              Alisa M. Loosen, PhD
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Researcher in Computational Psychiatry & Neuroscience
            </p>
            <div className="text-muted-foreground">
              <span>
                <a 
                  href="https://medicine.yale.edu/profile/alisa-loosen/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-rust transition-colors"
                >
                  Yale Department of Psychiatry
                </a>
                , Yale Medical School, Yale University
              </span>
            </div>

            <div className="mt-4 flex gap-3">
              <Button asChild variant="outline" className="flex gap-2 rounded-none">
                <Link to="/cv">
                  <FileText className="w-4 h-4" />
                  View CV
                </Link>
              </Button>
              <Button asChild variant="default" className="flex gap-2 bg-rust hover:bg-rust/80 rounded-none">
                <Link to="/contact">
                  <MessageSquare className="w-4 h-4" />
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            I am a researcher investigating cognition and mental health with neuroscientific, computational and digital tools.
          </p>
        </div>
      </motion.div>

      <motion.div variants={item} className="mb-12">
        <SectionTitle>Research Focus</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-l-2 border-rust p-6 hover:border-l-4 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <Brain className="text-rust h-6 w-6" />
              <h3 className="text-xl font-medium">Neuroscience</h3>
            </div>
            <p>
              I integrate cognitive and fundamental neuroscience with patient-focused research to investigate how the brain supports learning, resolves uncertainty, and drives decision-making. My work leverages intracranial recordings and clinical studies, with a particular focus on obsessive-compulsive disorder (OCD).            </p>
          </div>
          
          <div className="border-l-2 border-rust p-6 hover:border-l-4 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <Cog className="text-rust h-6 w-6" />
              <h3 className="text-xl font-medium">Computational Modeling</h3>
            </div>
            <p>
              I develop and apply neuroscientifically-plausible computational models (e.g., based on Reinforcement Learning and Bayes' Theorem) to gain better insights into cognitive processes and behavior, and to make sense of complex neuroscientific data.
            </p>
          </div>
          
          <div className="border-l-2 border-rust p-6 hover:border-l-4 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <Smartphone className="text-rust h-6 w-6" />
              <h3 className="text-xl font-medium">Digital Assessment</h3>
            </div>
            <p>
              I design and implement digital cognitive tasks and web/mobile app assessments to capture decision-making, learning, and mental health symptom patterns.
            </p>
          </div>
          
          <div className="border-l-2 border-rust p-6 hover:border-l-4 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <Globe className="text-rust h-6 w-6" />
              <h3 className="text-xl font-medium">Real-World Impact</h3>
            </div>
            <p>
              Across clinical cohorts and large-scale public datasets, I translate research into intuitive tools and gamified mobile app games that make tracking behavior and psychiatric symptoms effortless.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div variants={item}>
        <SectionTitle>Outreach & Science Communication</SectionTitle>
        <p className="mb-6 text-lg">
          I believe science should be fun and accessible! I am passionate about demystifying neuroscientific and mental health research and empowering people with information.
        </p>
        <div className="space-y-4">
          <a 
            href="https://www.neurocpu.org/spice" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block p-5 border-l-2 border-sage hover:border-l-4 transition-all"
          >
            <h3 className="text-xl font-medium mb-2">SPICE Summer Program in Computational Education</h3>
            <p className="text-muted-foreground">
              The NYC-based Summer Program in Computational Psychiatry Education immerses high-school and college students in cutting-edge basic and clinical research through direct collaboration with scientists at the Icahn School of Medicine at Mount Sinai.
            </p>
          </a>
          
          <a 
            href="https://ocdandthebrain.com/en" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block p-5 border-l-2 border-sage hover:border-l-4 transition-all"
          >
            <h3 className="text-xl font-medium mb-2">OCD and the Brain</h3>
            <p className="text-muted-foreground">
              A collaborative public engagement project focused on the neuroscience of OCD. Working alongside adolescents with OCD and their parents, we developed communication tools designed to clearly convey how the disorder relates to brain function.
            </p>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;
