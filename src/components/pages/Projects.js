import React from "react";
import "../../styles/projects.css";

const projectCards = [
  {
    title: "Wishlist: Holiday party manager",
    description:
      "Allows a user to create or join groups with customization for party details, add to their personal wishlist, and set reminders for parties. Helps people manage holiday parties for friends, family, or work that's easy to use.",
    github: "https://github.com/PhalenH/gift-exchange-manager",
    deployedLink: "https://wishlistmanager.herokuapp.com/",
    src: "finished-homepage",
    alt: "Wishlist-screenshot",
    id: 1,
  },
  {
    title: "A Maze Game",
    description:
      " A mobile responsive maze game where a user traverses a series of mazes as fast as they can. Fun to stay busy, can work as memory training, or simply play against friends.",
    github: "https://github.com/PhalenH/MazeGen",
    deployedLink: "https://isaacjcarnes.github.io/MazeGen/",
    src: "maze-runner-screenshot",
    alt: "Maze-screenshot",
    id: 2,
  },
  {
    title: "Tech Blog",
    description:
      "A tech related blog site where users can create/read/edit posts, read other user's posts, leave comments all in one place.",
    github: "https://github.com/PhalenH/tech-blog",
    deployedLink: "https://afternoon-everglades-02639.herokuapp.com/",
    src: "tech-blog",
    alt: "tech-blog-screenshot",
    id: 3,
  },
  {
    title: "Weather Dashboard",
    description:
      "Check the weather and get the 5 day forecast anywhere in the United states. Allows previous searched cities to be saved for easy access when returning to site.",
    github: "https://github.com/PhalenH/weather-dashboard",
    deployedLink: "https://phalenh.github.io/weather-dashboard/index.html",
    src: "weather-dashboard",
    alt: "weather-dashboard-screenshot",
    id: 4,
  },
];

export default function Projects() {
  return (
    <section className="project-container">
      <h1 id="projects">My work</h1>
      {projectCards.map((project) => (
        <div key={project.id} className="project-card float-left">
          <div className="outer-image-container small-left">
            <img
              src={require(`../../assets/${project.src}.png`)}
              className="card-img-top"
              alt={project.alt}
              //   id="wishlist-img"
            />
          </div>
          <div className="project-info-left">
        <h2 className="card-title">{project.title}</h2>
        <p className="card-text">
          {project.description}
        </p>
        <a
          href={project.deployedLink}
          className="btn"
          target="_blank"
          >Deployed App</a
        >
        <a
          href={project.github}
          className="btn"
          target="_blank"
          >Project Repo</a
        >
      </div>
        </div>
      ))}
    </section>
  );
}
