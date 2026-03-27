export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tag: string;
  tagColor: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'securing-the-future-cybersecurity-journey',
    title: 'Securing the Future: My Journey into Cybersecurity',
    excerpt: 'Transitioning from a general IT background to specialised threat detection and network security — what I have learned so far.',
    content: `
Cybersecurity is no longer just for large corporations. As our lives move increasingly online, every individual, business, and government institution becomes a potential target.

My journey into cybersecurity began during my Information Technology studies when I realised that building good software is only half the problem. The other half is making sure it cannot be broken.

**What I Have Been Learning**

- Threat modelling and vulnerability assessment
- Understanding common attack vectors: SQL injection, XSS, phishing, man-in-the-middle attacks
- How firewalls, intrusion detection systems (IDS), and VPNs work together
- Best practices for secure software development (OWASP Top 10)

**Why This Matters in Africa**

West Africa is experiencing rapid digital adoption — from mobile money to cloud services. But this also means new attack surfaces. My goal is to build the skills to help organisations in Sierra Leone and beyond protect their digital assets.

**What is Next**

I am working toward certifications like CompTIA Security+ and CEH, while also integrating security thinking into the applications I build.

If you are interested in cybersecurity, the best time to start learning is today. The threats are real, but so are the opportunities for defenders.
    `.trim(),
    date: 'March 24, 2026',
    readTime: '6 min read',
    tag: 'Cybersecurity',
    tagColor: 'bg-red-50 text-red-600',
  },
  {
    id: 2,
    slug: 'ai-integration-in-modern-it-infrastructure',
    title: 'AI Integration in Modern IT Infrastructure',
    excerpt: 'How artificial intelligence is transforming system analysis, predictive maintenance, and intelligent decision-making in tech organisations.',
    content: `
Artificial Intelligence is no longer a futuristic concept — it is actively reshaping how IT systems are designed, monitored, and maintained.

**Where AI is Making an Impact**

1. **Predictive Maintenance**: AI models can predict hardware failures before they happen by analysing usage patterns and system metrics.
2. **Intelligent Monitoring**: Instead of manually reviewing logs, AI-powered tools surface anomalies automatically.
3. **Automated IT Support**: Chatbots and LLMs are handling Tier-1 helpdesk queries, reducing response time dramatically.
4. **Security**: AI is used in threat detection — identifying abnormal behaviour in network traffic in real time.

**My Experience with AI**

Building LeoneAI, a trading assistant that analyses market trends using machine learning models, gave me hands-on experience integrating AI APIs (OpenAI) into production applications. I learned how to manage context windows, handle latency, and design AI-first user interfaces.

**Looking Forward**

The IT professionals who will thrive in the next decade are those who understand how to work alongside AI — not just use it as a tool, but understand its limitations and design systems around them.

AI is a powerful accelerator. The key is knowing when and how to apply it.
    `.trim(),
    date: 'March 10, 2026',
    readTime: '8 min read',
    tag: 'AI & Technology',
    tagColor: 'bg-purple-50 text-purple-600',
  },
  {
    id: 3,
    slug: 'building-a-professional-portfolio-with-nextjs',
    title: 'Building a Professional Portfolio with Next.js',
    excerpt: 'How I architected this portfolio using Next.js, TypeScript, and Tailwind CSS — technical decisions, lessons learned, and what I would do differently.',
    content: `
A portfolio is more than a collection of projects — it is your professional identity on the internet.

**Why Next.js?**

Next.js offers server-side rendering, static generation, and a file-based routing system that makes it easy to build fast, SEO-friendly websites. For a portfolio, performance and discoverability are critical.

**The Stack**

- **Framework**: Next.js (Pages Router) with TypeScript for type safety
- **Styling**: Tailwind CSS v4 with a custom Red & White design system
- **Animation**: Framer Motion for smooth page transitions and scroll reveals
- **Deployment**: Vercel (zero-configuration, automatic deployments from GitHub)

**Challenges I Encountered**

1. **ESM vs CommonJS**: Migrating to ES Modules required updating all config files to use `export default` syntax.
2. **Tailwind v4 Breaking Changes**: The new `@theme` directive replaced the old `tailwind.config.js` approach.
3. **Open Graph Meta Tags**: Getting WhatsApp/social previews to show the correct image and title required careful management of `<Head>` meta tags.

**Key Lessons**

- Start with mobile-first design — it is much harder to make a desktop design responsive than the reverse.
- Performance is a feature. Optimise images, lazy-load components, and measure with Lighthouse.
- Accessibility matters. High-contrast text, keyboard navigation, and meaningful alt tags are not optional.

This portfolio is an ongoing project. I update it as I build new things and learn new skills.
    `.trim(),
    date: 'February 15, 2026',
    readTime: '5 min read',
    tag: 'Software Engineering',
    tagColor: 'bg-blue-50 text-blue-600',
  },
];
