
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
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4 bg-gradient-to-r from-rust to-olive bg-clip-text text-transparent">
              Alisa M. Loosen, PhD
            </h1>
            <p className="text-xl text-blue mb-4">
              Researcher & Computational Scientist
            </p>
            <div className="flex items-center text-muted-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>
                Center for Computational Psychiatry, Icahn School of Medicine at Mount Sinai
              </span>
            </div>

            <div className="mt-4 flex gap-3">
              <Button asChild variant="outline" className="flex gap-2 border-blue hover:bg-blue/10 hover:text-blue">
                <Link to="/cv">
                  <FileText className="w-4 h-4" />
                  View CV
                </Link>
              </Button>
              <Button asChild variant="default" className="flex gap-2 bg-rust hover:bg-rust/80">
                <a href="mailto:alisa.loosen@mssm.edu">
                  <MessageSquare className="w-4 h-4" />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6 p-4 bg-sage/10 rounded-lg border-l-4 border-sage">
            I am a researcher & computational scientist investigating cognition and mental health with neuroscientific, computational and digital tools! I combine cognitive neuroscience, computational psychiatry, and real-world applications to create fun, gamified cognitive tasks and symptom assessments that enable us to research the general public and specific patient groups.
          </p>
        </div>
      </motion.div>

      <motion.div variants={item} className="mb-12">
        <SectionTitle>Research Focus</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-rust colorful-card p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Brain className="text-rust h-6 w-6" />
              <h3 className="text-xl font-medium text-rust">Cognitive Neuroscience</h3>
            </div>
            <p>
              Investigating how the brain processes uncertainty and makes decisions, especially in the context of psychiatric conditions like obsessive-compulsive disorder (OCD).
            </p>
          </div>
          
          <div className="card-blue colorful-card p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Cog className="text-blue h-6 w-6" />
              <h3 className="text-xl font-medium text-blue">Computational Methods</h3>
            </div>
            <p>
              Developing reinforcement learning and Bayesian models to understand cognitive processes and analyze complex neuroscientific data.
            </p>
          </div>
          
          <div className="card-sage colorful-card p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Smartphone className="text-sage h-6 w-6" />
              <h3 className="text-xl font-medium text-sage">Digital Assessment</h3>
            </div>
            <p>
              Designing and implementing digital cognitive tasks and web/mobile app assessments to capture decision-making, learning, and mental health symptom patterns.
            </p>
          </div>
          
          <div className="card-sand colorful-card p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Globe className="text-sand h-6 w-6" />
              <h3 className="text-xl font-medium text-sand">Real-World Impact</h3>
            </div>
            <p>
              From clinical samples to large-scale public datasets, turning research into accessible tools, including tracking psychiatric symptoms during global events like COVID-19.
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
            className="block p-5 bg-gradient-to-br from-white to-blue/10 border-l-4 border-blue rounded-lg hover:shadow-md transition-all transform hover:-translate-y-1 duration-300"
          >
            <h3 className="text-xl font-medium mb-2 text-blue">SPICE Summer Program in Computational Education</h3>
            <p className="text-muted-foreground">
              The NYC-based Summer Program in Computational Psychiatry Education immerses high-school and college students in cutting-edge basic and clinical research through direct collaboration with Icahn Mount Sinai scientists.
            </p>
          </a>
          
          <a 
            href="https://ocdandthebrain.com/en" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block p-5 bg-gradient-to-br from-white to-olive/10 border-l-4 border-olive rounded-lg hover:shadow-md transition-all transform hover:-translate-y-1 duration-300"
          >
            <h3 className="text-xl font-medium mb-2 text-olive">OCD and the Brain</h3>
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
