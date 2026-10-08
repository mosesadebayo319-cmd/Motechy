export const company = {
  name: "MoTechy",
  email: "motechy123@gmail.com",
  phone: "+234 812 432 8229",
  whatsapp: "https://wa.me/2348124328229",
  location: "Abuja, Nigeria",
  founder: "Moses Adebayo",
};
export const services = [
  {
    id: "social",
    title: "Social media management",
    brief: "A consistent presence, with a clear reason behind every post.",
    detail:
      "We bring your calendar, captions, design and community management together around your business goals.",
    items: [
      "Content planning and calendars",
      "Social design and copywriting",
      "Publishing and community management",
      "Performance reviews",
    ],
  },
  {
    id: "branding",
    title: "Brand strategy & identity",
    brief: "Make it easier for the right people to recognise and choose you.",
    detail:
      "We help you clarify your positioning, sharpen your message and build a visual identity that feels like your business.",
    items: [
      "Brand positioning",
      "Visual identity and direction",
      "Brand voice and messaging",
      "Practical brand guidelines",
    ],
  },
  {
    id: "content",
    title: "Content strategy",
    brief: "Useful content that gives your audience a reason to pay attention.",
    detail:
      "We turn customer questions and business priorities into a practical plan for what to publish, where and why.",
    items: [
      "Audience and content review",
      "Content pillars and formats",
      "Editorial planning",
      "Offers and calls to action",
    ],
  },
  {
    id: "ads",
    title: "Paid advertising",
    brief: "Put the right message in front of people who may need your offer.",
    detail:
      "We plan and manage Meta campaigns, test creative and review performance against the goals agreed with you.",
    items: [
      "Campaign planning",
      "Creative testing",
      "Audience targeting and retargeting",
      "Lead generation and reporting",
    ],
  },
  {
    id: "growth",
    title: "Digital growth consulting",
    brief: "A clear view of what to improve next.",
    detail:
      "For founders who need a practical marketing direction, we review your positioning, customer journey and measurement.",
    items: [
      "Digital presence audit",
      "Conversion journey review",
      "Marketing priorities",
      "Measurement planning",
    ],
  },
  {
    id: "design",
    title: "Creative design",
    brief: "Thoughtful design for the places your brand shows up.",
    detail:
      "Social campaigns, carousels and brand assets designed around your message and your own visual identity.",
    items: [
      "Social media campaigns",
      "Carousels and editorial design",
      "Advertising creative",
      "Brand and campaign assets",
    ],
  },
];
export const serviceOptions = [
  "Social Media Management",
  "Branding",
  "Content Strategy",
  "Paid Ads",
  "Digital Growth",
  "Creative Design",
  "Starter package",
  "Growth package",
  "Scale package",
  "Not sure — need advice",
];
export const work = [
  {
    id: "brand-campaign",
    image: "work-1",
    title: "Be the brand",
    type: "Brand communication",
    description:
      "A bold campaign layout using a focused headline, high-contrast photography and a clear visual hierarchy.",
    alt: "Be the Brand campaign design with bold typography and black and white portrait photography",
  },
  {
    id: "content-direction",
    image: "work-2",
    title: "Clarity changes the story",
    type: "Content strategy",
    description:
      "A social creative exploring how a clearer content direction changes the way a brand presents itself.",
    alt: "Colourful MoTechy social creative about clarity and strategy",
  },
  {
    id: "content-system",
    image: "work-5",
    title: "A plan for every post",
    type: "Educational content",
    description:
      "An educational carousel that breaks content planning into useful, easy-to-follow steps.",
    alt: "MoTechy Build Your Content Strategy educational carousel cover",
  },
  {
    id: "weekly-creative",
    image: "work-3",
    title: "A fresh start",
    type: "Social creative",
    description:
      "An expressive weekly social design built around colour, energy and a single message.",
    alt: "New week social media creative",
  },
  {
    id: "weekend-creative",
    image: "work-4",
    title: "Weekend energy",
    type: "Social creative",
    description:
      "A campaign-style social post using a strong image and a concise headline.",
    alt: "MoTechy TGIF weekend social design",
  },
  {
    id: "audience",
    image: "work-6",
    title: "Know your audience",
    type: "Carousel design",
    description:
      "A simple educational slide helping business owners think about who their content serves.",
    alt: "MoTechy educational carousel slide about the audience",
  },
  {
    id: "frequency",
    image: "work-7",
    title: "Find your rhythm",
    type: "Carousel design",
    description:
      "A clear typographic treatment for practical guidance on posting frequency.",
    alt: "MoTechy educational design about posting frequency",
  },
  {
    id: "momentum",
    image: "work-8",
    title: "Consistency over time",
    type: "Brand communication",
    description:
      "A restrained quotation layout focused on one idea: providing useful content consistently.",
    alt: "MoTechy quotation design about consistency",
  },
].filter((item) =>
  ["work-5", "work-6", "work-7", "work-8"].includes(item.image),
);
export const packages = [
  {
    name: "Starter",
    price: "₦150,000",
    unit: "/ month",
    intro: "Build a consistent foundation.",
    features: [
      "Brand and content audit",
      "Monthly content calendar",
      "12 designed posts",
      "Captions and hashtag guidance",
      "Basic performance review",
    ],
  },
  {
    name: "Growth",
    price: "₦350,000",
    unit: "/ month",
    intro: "Give your social presence more attention.",
    features: [
      "Everything in Starter",
      "20–24 posts and carousels",
      "Community management",
      "Stories and Reels direction",
      "Monthly strategy session",
      "Growth reporting",
    ],
  },
  {
    name: "Scale",
    price: "Let’s talk",
    unit: "",
    intro: "Bring content, brand and advertising together.",
    features: [
      "Everything in Growth",
      "Paid ads management",
      "Lead generation planning",
      "Advanced campaign creative",
      "Priority support",
      "Quarterly brand review",
    ],
  },
];
export const faqs = [
  [
    "Who do you work with?",
    "We work with founders, small businesses and growing brands in Nigeria, including businesses in Abuja, Lagos and Port Harcourt. We can collaborate remotely across the country.",
  ],
  [
    "Can I start with one service?",
    "Yes. You can enquire about branding, content, design or advertising on its own. We’ll recommend a scope based on your goals and what you already have in place.",
  ],
  [
    "What happens after I get in touch?",
    "We review your enquiry and usually respond within one business day. We’ll arrange a conversation, understand your priorities and prepare a proposed scope. Sending an enquiry does not commit you to a package.",
  ],
  [
    "What is included in the price?",
    "The packages show starting monthly fees. Your proposal will confirm platforms, deliverables, revisions, production requirements, contract terms and any advertising spend before work begins.",
  ],
  [
    "When should I expect results?",
    "Timing depends on your starting point, offer, audience and scope. We agree goals and review points with you at the start. We do not guarantee a particular number of leads or sales.",
  ],
];
