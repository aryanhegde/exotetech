import { PrismaClient } from "@prisma/client";

const prisma: any = new PrismaClient();

const posts = [
  {
    category: "Tech",
    title: "The Future of Space Exploration",
    content:
      "<h1>Exploring the <em>Final Frontier</em> with <strong>Advanced Technology</strong></h1><p>Space exploration has come a long way since the first satellite was launched into orbit in 1957. Today, we have a variety of sophisticated spacecraft and technologies that allow us to study our solar system and beyond in greater detail than ever before.</p><h2>The Role of AI in Space Exploration</h2><p>One of the most exciting areas of space exploration is the use of artificial intelligence (AI) to enhance our capabilities. AI can be used to analyze vast amounts of data from space-based instruments, such as telescopes and satellites, and help identify patterns and make predictions that would be impossible for humans to discern.</p><h3>The Future of Space Travel</h3><p>In addition to its applications in data analysis, AI is also being used to develop new propulsion systems and space-based robots that could make space travel more efficient and sustainable. These advancements could pave the way for manned missions to places like Mars and beyond. <h2>The Challenges of Space Exploration</h2><p>While the advancements in AI and technology are exciting, space exploration also comes with its own set of challenges. One of the biggest challenges is the cost. Space missions are extremely expensive and require significant funding from government agencies and private companies. Additionally, space exploration also poses significant risks to human life and equipment, and requires careful planning and execution to minimize those risks. </p><h3>International Collaboration</h3><p>Another challenge is the need for international collaboration. Space exploration is a global endeavor and requires the cooperation of multiple countries and organizations to achieve success. This can be difficult to coordinate and maintain, but is essential for the advancement of space exploration as a whole.</p><h2>Conclusion</h2><p>Overall, space exploration is an exciting field with many opportunities for advancement, thanks in large part to the incorporation of AI and other technologies. However, it also comes with its own set of challenges that must be overcome in order to continue pushing the boundaries of what is possible. By working together and utilizing advanced technology, we can continue to explore and understand our universe like never before.</p>",
    author: "Jane Smith",
    image: "/assets/ai-2.jpg",
    snippet:
      "Exploring the Final Frontier with Advanced Technology Space exploration has come a long way since the first satellite was launched into orbit in 1957. Today, we have a variety of sophisticated spacecraft and technologies that allow us to study our solar system and beyond in greater detail than ever before. The Role of AI in Space Exploration...",
  },
];

async function main() {
  console.log(`Start seeding`);
  for (const post of posts) {
    await prisma.post.create({ data: post });
  }
  console.log(`Finished seeding`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
