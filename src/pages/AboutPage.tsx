
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
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light mb-6 text-foreground leading-tight">
              alisa m. loosen, phd
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 mb-6 font-light">
              researcher in computational psychiatry & neuroscience
            </p>
            <div className="text-foreground/60 text-sm font-light">
              <span>
                <a 
                  href="https://medicine.yale.edu/profile/alisa-loosen/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  yale department of psychiatry
                </a>
                , yale medical school, yale university
              </span>
            </div>

            <div className="mt-6 flex gap-3">
              <Button asChild variant="outline" className="flex gap-2 rounded-none font-light">
                <Link to="/cv">
                  <FileText className="w-4 h-4" />
                  view cv
                </Link>
              </Button>
              <Button asChild variant="default" className="flex gap-2 rounded-none font-light">
                <Link to="/contact">
                  <MessageSquare className="w-4 h-4" />
                  contact
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="prose max-w-none">
          <p className="text-base md:text-lg mb-6 font-light leading-relaxed">
            i am a researcher investigating cognition and mental health with neuroscientific, computational and digital tools.
          </p>
        </div>
      </motion.div>

      <motion.div variants={item} className="mb-16">
        <SectionTitle>research focus</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 hover:bg-accent/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="text-foreground h-5 w-5" strokeWidth={1.5} />
              <h3 className="text-lg font-light">neuroscience</h3>
            </div>
            <p className="text-sm font-light leading-relaxed text-foreground/70">
              i integrate cognitive and fundamental neuroscience with patient-focused research to investigate how the brain supports learning, resolves uncertainty, and drives decision-making. my work leverages intracranial recordings and clinical studies, with a particular focus on obsessive-compulsive disorder (ocd).
            </p>
          </div>
          
          <div className="p-6 hover:bg-accent/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Cog className="text-foreground h-5 w-5" strokeWidth={1.5} />
              <h3 className="text-lg font-light">computational modeling</h3>
            </div>
            <p className="text-sm font-light leading-relaxed text-foreground/70">
              i develop and apply neuroscientifically-plausible computational models (e.g., based on reinforcement learning and bayes' theorem) to gain better insights into cognitive processes and behavior, and to make sense of complex neuroscientific data.
            </p>
          </div>
          
          <div className="p-6 hover:bg-accent/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Smartphone className="text-foreground h-5 w-5" strokeWidth={1.5} />
              <h3 className="text-lg font-light">digital assessment</h3>
            </div>
            <p className="text-sm font-light leading-relaxed text-foreground/70">
              i design and implement digital cognitive tasks and web/mobile app assessments to capture decision-making, learning, and mental health symptom patterns.
            </p>
          </div>
          
          <div className="p-6 hover:bg-accent/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="text-foreground h-5 w-5" strokeWidth={1.5} />
              <h3 className="text-lg font-light">real-world impact</h3>
            </div>
            <p className="text-sm font-light leading-relaxed text-foreground/70">
              across clinical cohorts and large-scale public datasets, i translate research into intuitive tools and gamified mobile app games that make tracking behavior and psychiatric symptoms effortless.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div variants={item}>
        <SectionTitle>outreach & science communication</SectionTitle>
        <p className="mb-8 text-base font-light leading-relaxed text-foreground/70">
          i believe science should be fun and accessible! i am passionate about demystifying neuroscientific and mental health research and empowering people with information.
        </p>
        <div className="space-y-6">
          <a 
            href="https://www.neurocpu.org/spice" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block p-6 hover:bg-accent/30 transition-all"
          >
            <h3 className="text-base font-light mb-3">spice summer program in computational education</h3>
            <p className="text-sm font-light text-foreground/60 leading-relaxed">
              the nyc-based summer program in computational psychiatry education immerses high-school and college students in cutting-edge basic and clinical research through direct collaboration with scientists at the icahn school of medicine at mount sinai.
            </p>
          </a>
          
          <a 
            href="https://ocdandthebrain.com/en" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block p-6 hover:bg-accent/30 transition-all"
          >
            <h3 className="text-base font-light mb-3">ocd and the brain</h3>
            <p className="text-sm font-light text-foreground/60 leading-relaxed">
              a collaborative public engagement project focused on the neuroscience of ocd. working alongside adolescents with ocd and their parents, we developed communication tools designed to clearly convey how the disorder relates to brain function.
            </p>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;
