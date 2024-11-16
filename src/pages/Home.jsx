import { Hero } from "../components/UI/Hero";
import { About } from "../pages/About";
import { Service } from "../pages/Service";
import { Testimonial } from "../pages/Testimonial";
import { Contact } from "../pages/Contact";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Testimonial />
      <Contact />
    </>
  );
};
