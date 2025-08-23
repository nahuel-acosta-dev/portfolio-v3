export type Project = {
  id: string;
  title: string;
  category: "logo" | "web" | "mobile";
  image: string;
};

export const projects: Project[] = [
  {
    id: "p1",
    title: "Ecommerce site Website Template",
    category: "web",
    image: "/project1.jpg",
  },
  {
    id: "p2",
    title: "CryptoCode Crypto currency template",
    category: "logo",
    image: "/project2.jpg",
  },
  {
    id: "p3",
    title: "Modish Fashion Store Website",
    category: "web",
    image: "/project3.jpg",
  },
  {
    id: "p4",
    title: "DashLite Admin dashboard Figma",
    category: "logo",
    image: "/project4.jpg",
  },
  {
    id: "p5",
    title: "Beanie Coffee shop Redesign",
    category: "mobile",
    image: "/project5.jpg",
  },
  {
    id: "p6",
    title: "Chris lee brand designer portfolio",
    category: "mobile",
    image: "/project6.jpg",
  },
];

export const testimonials = [
  {
    id: "t1",
    quote:
      "Kiwi’s designs completely transformed our branding. Her attention to detail and creativity were incredible!",
    name: "Emma Brown",
    country: "United States",
    avatar: "/commentor3.jpg",
  },
  {
    id: "t2",
    quote:
      "Kiwi’s designs completely transformed our branding. Her attention to detail and creativity were incredible!",
    name: "Emma Brown",
    country: "United States",
    avatar: "/commentor2.jpg",
  },
  {
    id: "t3",
    quote:
      "Kiwi’s designs completely transformed our branding. Her attention to detail and creativity were incredible!",
    name: "Emma Brown",
    country: "United States",
    avatar: "/commentor1.jpg",
  },
];
