import React, { useState } from "react";
import "./project.scss";

export default function Project() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/web1.png",
      title: "Self Portfolio",
      desc: "This is a portfolio website. by using this wrebsite you can see my all Project and detail. ",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
      pro: "Project",
    },
    {
      id: "2",
      icon: "./assets/edit.png",
      title: "Jewellery Gallery",
      desc: "This is a WebSite. by using this website you can contact from shop and view all work and designs photos.",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
      href: "https://akhilmundra.com/",
      pro: "Project",
    },
    {
      id: "3",
      icon: "./assets/desktop.png",
      title: "Hotel Manageement",
      desc: " This is a Windows Application. by Using this application you Managing and book Room Detail, Customer Information, Customer CheckIn and CheckOut Detail etc.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      pro: "Project",
    },
    {
      id: "4",
      icon: "./assets/desktop.png",
      title: "Travel and Turisam Managemnt",
      desc: " This is a Windows Application.By using this application you can book hotel, holiday package, lunch, dinner etc.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      href: "https://www.google.co.in/",
      pro: "Project",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="project" id="project">
      <div className="pro">Projects</div>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href={d.href}>{d.pro}</a>
                  {/* <a href={d.href} target ="_blank" rel="nofollow">{d.pro}</a> */}
                </div>
              </div>
              <div className="right">
                {
                  <img
                    src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                    alt=""
                  />
                }
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
