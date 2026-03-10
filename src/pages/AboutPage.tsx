
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import ProfileImage from "@/components/ProfileImage";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  FileText, 
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
      <motion.div variants={item} className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-8">
          <div className="md:col-span-1">
            <ProfileImage size="lg" />
          </div>
          <div className="md:col-span-2 flex flex-col justify-center">
            <h1 className="text-2xl md:text-4xl font-light mb-4 text-foreground leading-tight tracking-wide">
              Alisa M. Loosen, PhD
            </h1>
            <p className="text-base md:text-lg text-foreground/70 mb-4 font-light leading-relaxed">
              Researcher in Computational Psychiatry & Developmental Neuroscience
            </p>
            <div className="text-foreground/60 text-sm font-light">
              <span>
                <a 
                  href="https://medicine.yale.edu/profile/alisa-loosen/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Yale School of Medicine
                </a>
                , Yale Department of Psychiatry
              </span>
            </div>

            <p className="text-base md:text-lg mb-4 font-light leading-relaxed mt-6">
              I study how decision-making under uncertainty shapes mental health across development. Much of my current work focuses on information seeking and processing, reassurance-seeking in OCD, and increasingly on human–AI interaction and the safety of AI chatbots for people with mental health disorders and minors.
            </p>
            <p className="text-base md:text-lg mb-6 font-light leading-relaxed">
              I draw on social and computational psychiatry, developmental psychopathology, and clinical assessment across ages to understand how digital environments affect cognition and mental health in children, adolescents, and adults.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div variants={item} className="mb-16">
        <div className="w-[99%] mx-auto border-t border-foreground mb-8"></div>
        <SectionTitle>Research Focus</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 shadow-lg hover:shadow-xl transition-all bg-white">
            <h3 className="text-lg font-light mb-4">Neuroscience</h3>
            <p className="text-sm font-light leading-relaxed text-foreground/70">
              I integrate cognitive and fundamental neuroscience with patient-focused research to investigate how the brain supports learning, resolves uncertainty, and drives decision-making. My work leverages intracranial recordings and clinical studies, with a particular focus on obsessive-compulsive disorder (OCD).
            </p>
          </div>
          
          <div className="p-6 shadow-lg hover:shadow-xl transition-all bg-white">
            <h3 className="text-lg font-light mb-4">Computational Modeling</h3>
            <p className="text-sm font-light leading-relaxed text-foreground/70">
              I develop and apply neuroscientifically-plausible computational models based on Reinforcement Learning and Bayes' Theorem to gain better insights into cognitive processes and behavior, and to make sense of complex neuroscientific data.
            </p>
          </div>
          
          <div className="p-6 shadow-lg hover:shadow-xl transition-all bg-white">
            <h3 className="text-lg font-light mb-4">Human–AI Interaction & Digital Assessment</h3>
            <p className="text-sm font-light leading-relaxed text-foreground/70">
              I investigate how human–chatbot interactions shape cognition and mental health. I also design digital cognitive tasks and app-based assessments, and study the safety of AI systems for vulnerable and developing populations.
            </p>
          </div>
          
          <div className="p-6 shadow-lg hover:shadow-xl transition-all bg-white">
            <h3 className="text-lg font-light mb-4">Real-World Impact</h3>
            <p className="text-sm font-light leading-relaxed text-foreground/70">
              Across clinical cohorts and large-scale public datasets, I translate research into intuitive tools and gamified mobile app games that make tracking behavior and psychiatric symptoms effortless.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div variants={item}>
        <div className="w-[99%] mx-auto border-t border-foreground mb-8"></div>
        <SectionTitle>Outreach & Science Communication</SectionTitle>
        <p className="mb-8 text-base font-light leading-relaxed text-foreground/70">
          I believe science should be fun and accessible! I am passionate about demystifying neuroscientific and mental health research and empowering people with information.
        </p>
        <div className="space-y-6">
          <a 
            href="https://www.neurocpu.org/spice" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block p-6 shadow-lg hover:shadow-xl transition-all bg-white"
          >
            <h3 className="text-base font-light mb-3">SPICE Summer Program in Computational Education</h3>
            <p className="text-sm font-light text-foreground/60 leading-relaxed">
              The NYC-based Summer Program in Computational Psychiatry Education immerses high-school and college students in cutting-edge basic and clinical research through direct collaboration with scientists at the Icahn School of Medicine at Mount Sinai.
            </p>
          </a>
          
          <a 
            href="https://ocdandthebrain.com/en" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block p-6 shadow-lg hover:shadow-xl transition-all bg-white"
          >
            <h3 className="text-base font-light mb-3">OCD and the Brain</h3>
            <p className="text-sm font-light text-foreground/60 leading-relaxed">
              A collaborative public engagement project focused on the neuroscience of OCD. Working alongside adolescents with OCD and their parents, we developed communication tools designed to clearly convey how the disorder relates to brain function.
            </p>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;
