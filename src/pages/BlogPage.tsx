
import { motion } from "framer-motion";
import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const BlogPage = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  const blogPosts = [
    {
      title: "Computational Approaches to Understanding OCD",
      date: "April 15, 2024",
      excerpt: "Exploring how computational models can help us understand the cognitive mechanisms underlying obsessive-compulsive disorder.",
      tags: ["Computational Psychiatry", "OCD", "Research"],
      timeToRead: "5 min read",
    },
    {
      title: "The Role of Uncertainty in Decision-Making",
      date: "March 2, 2024",
      excerpt: "How does the brain process uncertainty when making decisions? This post explores the neural mechanisms behind uncertainty processing.",
      tags: ["Decision-Making", "Neuroscience", "Uncertainty"],
      timeToRead: "8 min read",
    },
    {
      title: "Reflections on Combining Clinical Work with Computational Research",
      date: "January 20, 2024",
      excerpt: "Personal reflections on the challenges and rewards of bridging clinical practice with computational modeling approaches.",
      tags: ["Personal", "Clinical Work", "Research"],
      timeToRead: "4 min read",
    },
    {
      title: "Using Bayesian Models to Understand Psychiatric Disorders",
      date: "December 5, 2023",
      excerpt: "An introduction to how Bayesian computational models can provide insights into the mechanisms of psychiatric disorders.",
      tags: ["Bayesian Modeling", "Psychiatry", "Research"],
      timeToRead: "7 min read",
    },
  ];

  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));
  
  const filteredPosts = selectedTag 
    ? blogPosts.filter(post => post.tags.includes(selectedTag))
    : blogPosts;

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
        <SectionTitle>Blog</SectionTitle>
        <p className="text-lg mb-6">
          Thoughts, insights, and discussions about computational psychiatry, neuroscience, and research.
        </p>
        
        <div className="mb-8">
          <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">Filter by tag:</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`text-sm px-3 py-1 rounded-full transition-colors ${
                selectedTag === null
                  ? "bg-blue text-white"
                  : "bg-sage/20 text-muted-foreground hover:bg-sage/30"
              }`}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`text-sm px-3 py-1 rounded-full transition-colors ${
                  selectedTag === tag
                    ? "bg-blue text-white"
                    : "bg-sage/20 text-muted-foreground hover:bg-sage/30"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div variants={container} className="grid gap-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <motion.div key={index} variants={item} className="card-hover">
              <Card className="h-full border-sage/30 hover:border-sage">
                <CardHeader>
                  <CardTitle className="text-xl text-blue hover:text-rust transition-colors duration-200">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-sage/20 text-sage-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t border-sage/20 pt-4 text-sm text-muted-foreground">
                  <span>{post.date}</span>
                  <span>{post.timeToRead}</span>
                </CardFooter>
              </Card>
            </motion.div>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No posts found with the selected tag.</p>
            <button
              onClick={() => setSelectedTag(null)}
              className="mt-4 text-blue hover:text-rust transition-colors"
            >
              View all posts
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default BlogPage;
