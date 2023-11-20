import React from "react";
import { BiTimeFive } from "react-icons/bi";

const Data = [
  {
    id: 1,
    title: "Web Developer Intern",
    time: "Full-time",
    location: "Remote",
    desc: "Web Developer is in charge of ensuring websites look good and function properly. Web developers collaborate with website and graphic designers, monitor website traffic, troubleshoot website problems when they arise, and update websites as necessary.",
    Salary: "800000 INR",
  },

  {
    id: 2,
    title: "Creative Graphics Designer Intern",
    time: "Full-time",
    location: "Onsite-Hyderabad",
    desc: "Graphic Designer plans and illustrates concepts by designing rough layouts of art and copy regarding arrangement, size, type size and style, and related aesthetics. Coordinates with internal teams, including marketing, in the design concept phase through completion of a project.",
    Salary: "700000 INR",
  },

  {
    id: 3,
    title: "Event Management Intern",
    time: "Full-time",
    location: "NA",
    desc: "Event managers plan and organise promotional, business and social events. They're responsible for running a range of events, ensuring the target audience is engaged and the message of the event is marketed properly. Events play a huge part in the success of a brand or an organisation.",
    Salary: "1000000 INR",
  },

  {
    id: 4,
    title: "Software Engineer Intern",
    time: "Full-time",
    location: "Remote",
    desc: "Software engineers apply engineering principles and knowledge of programming languages to build software solutions for end users. Software engineers design and develop computer games, business applications, operating systems, network control systems, and middleware—to name just a few of the many career paths available.",
    Salary: "800000 INR",
  },

  {
    id: 5,
    title: "App Developer Intern",
    time: "Full-time",
    location: "Remote",
    desc: "Application developers write software programs for use across mobile operating systems, including Apple, Android, and Windows devices. Once applications are created, application developers are also responsible for testing the application and providing updates whenever necessary.",
    Salary: "850000 INR",
  },

  {
    id: 6,
    title: "Canva/Photoshop Intern",
    time: "Part-time",
    location: "Remote",
    desc: "Canva and Photoshop are both graphic design platforms that offer a range of tools and features for creating graphics, videos, and animations.",
    Salary: "400000 INR",
  },

  {
    id: 7,
    title: "Social Media Marketing",
    time: "Part-time",
    location: "Remote",
    desc: "Social media marketing uses social media and social networks—like Facebook, X platform (formerly Twitter), and Instagram—to market products and services, engage with existing customers, and reach new ones.",
    Salary: "500000 INR",
  },

  {
    id: 8,
    title: "SEO Marketing Intern",
    time: "Part-time",
    location: "Remote",
    desc: "Define, prioritize, and manage the execution of key SEO tactical initiatives, including keyword analysis, on-site optimizations, content development, site auditing, link-building, and competitive analyses. Provide on-page SEO recommendations pertaining to both technical and performance aspects.",
    Salary: "400000 INR",
  },

  {
    id: 9,
    title: "Email Marketing Intern:",
    time: "Part-time",
    location: "Remote",
    desc: "An email marketing specialist is a digital marketer that focuses on building email lists, creating emails, and nurturing leads through written communications.",
    Salary: "400000 INR",
  },

  {
    id: 10,
    title: "Content Marketing Intern",
    time: "Part-time",
    location: "Remote",
    desc: "You will be responsible for creating, improving and maintaining content to achieve our business goals. Your duties will also include sharing content to raise brand awareness and monitoring web traffic and metrics to identify best practices.",
    Salary: "500000 INR",
  },

  {
    id: 11,
    title: "CRM Admin",
    time: "Part-time",
    location: "Remote",
    desc: "The job of a CRM administrator is to maintain and streamline this entire process. CRM administrators implement and manage customer database and communication records. Among other tasks, they transfer data, make sure the data is up-to-date and “clean,” and also train other staff members in using the system.",
    Salary: "1000000 INR",
  },

  {
    id: 12,
    title: "Operations Executive Intern",
    time: "Part-time",
    location: "Remote",
    desc: "This involves managing inventory levels, ingredient and material requirements, transportation operations, and personnel systems, as well as planning production schedules and distribution patterns. The Intern may also be assigned one or more projects involving various subject matters.",
    Salary: "400000 INR",
  },

  {
    id: 13,
    title: "Digital Marketing Intern",
    time: "Full-time",
    location: "Remote",
    desc: "What Does a Digital Marketing Intern Do? Digital marketing is the practice of using online channels to promote a company or brand. As a digital marketing intern, you often work at a marketing firm in an entry-level capacity. You gain hands-on experience researching marketing trends and running campaigns.",
    Salary: "600000 INR",
  },

  {
    id: 14,
    title: "Technical Writer for Documentation Intern",
    time: "Full-time",
    location: "Remote",
    desc: "As a technical writing intern, when you start you'll likely be briefed on current projects your manager has on their plate. You'll get to know the companies you're working with and then settle into researching and creating content for those projects.",
    Salary: "300000 INR",
  },

  {
    id: 15,
    title: "Sales Executive",
    time: "Full-time",
    location: "Remote",
    desc: "A sales executive is a professional who manages a company's sales strategy.",
    Salary: "800000 INR",
  },
];

const Jobs = () => {
  return (
    <div className="jobBody">
      <div className="jobsmain">
        {Data.map(({ id, title, time, location, desc, Salary }) => {
          return (
            <div className="singleJob group" key={id}>
              <span className="jobContainer group">
                <h1 className="jobHeading group">{title}</h1>
                <span className="jobContent group">
                  <BiTimeFive />
                  {time}
                </span>
              </span>
              <h6>{location}</h6>
              <p className="jobDesc group">{desc}</p>
              <div className="jobSalary group">Salary: {Salary}</div>
              <button className="jobButton">Apply Now</button>
            </div>
          );
        })}
      </div>
      <div className="loadDiv">
        <button className="loadButton">Load more...</button>
      </div>
    </div>
  );
};

export default Jobs;
