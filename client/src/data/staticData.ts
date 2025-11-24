import type {
  Service,
  Testimonial,
  Stats,
} from "@shared/schema";

export const services: Service[] = [
  {
    id: "1",
    title: "Web Security",
    description: "As a cybersecurity researcher, I specialize in Web VAPT (Vulnerability Assessment and Penetration Testing), focusing on uncovering and addressing vulnerabilities in web applications to protect against cyber threats. Most of my discoveries involve CVEs and server-side bugs.",
    icon: "shield",
  },
  {
    id: "2",
    title: "Cyber Security Tool Development",
    description: "Cybersecurity tool development, I create tools for open-source communities, corporate environments, and clients, aiming to secure applications and support red teaming efforts. Check out my GitHub for open-source projects and explore my contributions to the cybersecurity ecosystem.",
    icon: "code",
  },
  {
    id: "3",
    title: "Mobile App Pentesting",
    description: "Mobile app penetration testing is one of my specialties and a personal favorite. I've successfully identified significant vulnerabilities, including a notable bug in Android OS that earned me a $5,000 reward from the Android team in 2020.",
    icon: "smartphone",
  },
  {
    id: "4",
    title: "Robotics and IoT",
    description: "Developing futuristic robots and smart systems with IoT is one of my core skills. I'm not only focused on innovation but also on security, ensuring these systems are built to withstand cyber threats. As both a developer and an IoT penetration tester, I'm dedicated to creating secure IoT products that meet the demands of the future.",
    icon: "cpu",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sanjay Patel",
    image: "https://i.ibb.co/9r2M8L5/testimonial-1.jpg",
    rating: 5,
    text: "Udhayakumar's web penetration testing workshop completely changed my perspective on cybersecurity. His hands-on approach to vulnerability discovery and ethical hacking made complex concepts incredibly easy to understand. I've already identified critical vulnerabilities in our company's infrastructure and helped secure our applications. Highly recommended!",
  },
  {
    id: "2",
    name: "Shreya Nair",
    image: "https://i.ibb.co/MVpyXF2/testimonial-2.jpg",
    rating: 5,
    text: "As a student with zero hacking experience, I was nervous about Geetorus's cybersecurity training. But Udhayakumar's teaching style is exceptional! The practical labs on Kali Linux, Metasploit, and penetration testing tools have given me real-world skills. I now feel confident pursuing a career in cybersecurity. Thank you for inspiring me!",
  },
  {
    id: "3",
    name: "Rohan Gupta",
    image: "https://i.ibb.co/K5h3nQ1/testimonial-3.jpg",
    rating: 5,
    text: "Working with Udhayakumar on our application security audit was eye-opening. His ability to identify critical vulnerabilities and propose effective mitigation strategies saved us from potential breaches. The detailed reporting and consultancy provided by Geetorus is professional and thorough. A true expert in the field!",
  },
  {
    id: "4",
    name: "Meera Iyer",
    image: "https://i.ibb.co/6FxK89P/testimonial-4.jpg",
    rating: 5,
    text: "I attended Udhayakumar's cybersecurity awareness program at our college, and it was transformative. He explained real-world cyber threats, attack vectors, and defense mechanisms in such an engaging way. Over 700 students have benefited from his workshops, and I'm proud to be one of them. Geetorus is doing incredible work!",
  },
];

export const stats: Stats = {
  experience: "3",
  projects: "70",
  completed: "100",
  clients: "700",
};
