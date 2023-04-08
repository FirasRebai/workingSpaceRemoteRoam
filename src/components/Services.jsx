import React, {Component} from "react";
import {
  FaWifi,
  FaChair,
  FaCoffee,
  FaPagelines,
} from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaWifi />,
        title: "free wifi",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ullam.",
      },
      {
        icon: <FaPagelines />,
        title: "community",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ullam.",
      },
      {
        icon: <FaChair />,
        title: "orthopedic chair",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ullam.",
      },
      {
        icon: <FaCoffee />,
        title: "Coffee machines",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ullam.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
