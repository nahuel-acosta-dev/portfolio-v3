export type Project = {
  id: string;
  title: string;
  category: "logo" | "web" | "mobile";
  image: string;
  link: string;
};

export const projects: Project[] = [
  {
    id: "p1",
    title: "erickMagne",
    category: "web",
    image: "/project1.jpg",
    link: "https://landing-cst-production.up.railway.app/",
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
