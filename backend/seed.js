import mongoose from "mongoose";
import connectDB from "./db.js";
import Blog from "./models/Blog.js";

const seedBlogs = async () => {
  try {
    await connectDB();

    // Clear existing blogs
    await Blog.deleteMany({});

    // Sample blog data
    const sampleBlogs = [
      {
        title: "Wings Of Fire",
        description: "An inspiring autobiography of Dr. A.P.J. Abdul Kalam that motivates youth.",
        content: `Wings of Fire is an inspiring autobiography that highlights the journey of a young boy who rises from humble beginnings to become one of India's greatest scientists and leaders. It teaches the values of hard work, dedication, and dreaming big.

The book chronicles Dr. Kalam's early life in Rameswaram and his path to becoming a renowned aerospace scientist. His dreams of becoming a pilot and his pursuit of scientific excellence serve as an inspiration to millions of readers worldwide.

Through his personal experiences, Dr. Kalam demonstrates that with determination and hard work, anyone can overcome obstacles and achieve their goals. His story is a testament to the power of positive thinking and perseverance.`,
        author: "Dr. A.P.J. Abdul Kalam",
        readTime: "8 min",
        tags: ["Inspiration", "Biography", "Motivation"],
        cover: "https://images.unsplash.com/photo-1507842217343-583f7270bfba?auto=format&fit=crop&w=1350&q=80",
      },
      {
        title: "Power of Consistency",
        description: "Consistency is the key to long-term success. Small efforts repeated daily can lead to massive achievements.",
        content: `Consistency is the key to long-term success. Small efforts repeated daily can lead to massive achievements over time. This blog explores how discipline and persistence shape personal and professional growth.

Many people start with great enthusiasm but lose momentum after a few weeks. The key to sustained success is maintaining consistency even when motivation wanes. Building habits that compound over time is more powerful than sporadic bursts of effort.

Whether it's fitness, learning, or business growth, the principle remains the same: small daily actions lead to remarkable results when maintained consistently over time.`,
        author: "James Clear",
        readTime: "6 min",
        tags: ["Self-improvement", "Productivity", "Success"],
        cover: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1350&q=80",
      },
      {
        title: "Learning Through Failure",
        description: "Failure is not the opposite of success, but a part of it. Every setback carries valuable lessons.",
        content: `Failure is not the opposite of success, but a part of it. Every setback carries valuable lessons that help refine skills and strengthen mindset. Embracing failure leads to innovation and confidence.

Throughout history, the most successful people have experienced multiple failures. Thomas Edison failed thousands of times before inventing the light bulb. J.K. Rowling faced numerous rejections before Harry Potter became a bestseller.

The difference between successful people and others is not the absence of failure, but their attitude toward it. They view failures as learning opportunities rather than defeats.`,
        author: "Carol Dweck",
        readTime: "7 min",
        tags: ["Growth Mindset", "Learning", "Resilience"],
        cover: "https://images.unsplash.com/photo-1516321318423-f06f70991c94?auto=format&fit=crop&w=1350&q=80",
      },
      {
        title: "Technology and the Future",
        description: "Technology is rapidly transforming the way we live and work. From AI to cloud computing.",
        content: `Technology is rapidly transforming the way we live and work. From artificial intelligence to cloud computing, modern innovations are opening new opportunities and redefining industries across the globe.

Artificial Intelligence is revolutionizing fields like healthcare, finance, and education. Machine learning algorithms can now predict diseases, detect fraud, and personalize learning experiences. The future of work will increasingly involve collaboration between humans and AI systems.

Cloud computing has enabled businesses of all sizes to scale globally without massive infrastructure investments. The technology landscape continues to evolve, creating exciting opportunities for those who embrace continuous learning and adaptation.`,
        author: "Tech Visionary",
        readTime: "9 min",
        tags: ["Technology", "AI", "Cloud Computing", "Future"],
        cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1350&q=80",
      },
    ];

    // Insert sample blogs
    const insertedBlogs = await Blog.insertMany(sampleBlogs);
    console.log(`Successfully inserted ${insertedBlogs.length} blogs`);
   
  } catch (error) {
    console.error("Error seeding database:", error);
   
  }
};

export default seedBlogs;
