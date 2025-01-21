import { describe } from "node:test";

export const projects = [
  {
    id: 1,
    title: "Hotel Booking App",
    description: [
      "Users can book rooms, make payments, and leave reviews, while hotel owners can create, update, and manage their listings.",
      "Secure payment processing with automatic email receipts and downloadable options for users.",
      "Role-based access control and secure authentication to ensure safe and personalized user experiences.",
    ],
    img: "/projects/hotel-booking.png",
    iconLists: ["/react.svg", "/next.svg", "/ts.svg", "/mongodb.svg"],
    link: "https://github.com/Hasibul-Islam-Shanto/hotel-booking",
  },
  {
    id: 2,
    title: "E-commerce",
    description: [
      "It’s a full-stack E-Commerce web application.",
      "Provides different features like proper authentication, buying and selling products etc.",
      "Implemented proper banking system for transactions between sellers and buyers.",
    ],
    img: "/projects/ecommerce.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/spring.svg",
      "/postgres.svg",
    ],
    link: "https://github.com/smalhasib/ecommerce",
  },
  {
    id: 3,
    title: "Ticketing System with Web3",
    description: [
      "Developed a decentralized ticketing system using React.js, Ether.js, Solidity, and IPFS database, enabling secure and transparent transactions.",
      "Integrated features for buying, selling, and tracking tickets with robust location tracking capabilities.",
      "Leveraged blockchain for enhanced data integrity and decentralized storage solutions.",
    ],
    img: "/projects/online-ticketing.png",
    iconLists: ["/react.svg", "/sass.svg", "/js.svg", "/solidity.svg"],
    link: "https://github.com/Hasibul-Islam-Shanto/project350",
  },
  {
    id: 4,
    title: "Chat-Application",
    description: [
      "Created a social app, Share, with Next.js, Firebase, Tailwind CSS, and Google OAuth for user authentication.",
      "Enabled features for creating, deleting, liking, and commenting on posts.",
      "Used Firebase for real-time data handling and secure user interactions.",
    ],
    img: "/projects/chatapp.png",
    iconLists: ["/react.svg", "/nodejs.svg", "/js.svg", "/mongodb.svg"],
    link: "https://github.com/Hasibul-Islam-Shanto/chat-app",
  },
];
