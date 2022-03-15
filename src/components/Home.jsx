import React from 'react';
import Navbar from './Navbar.jsx';
import bgImg from './../assets/bambooforest.png';
import therapistImg from './../assets/therapist.png';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link, Router } from 'react-router-dom';

const heroStyle = {
  background: `rgba(0,0,0,.35) url(${bgImg})`,
  backgroundBlendMode: 'darken',
  backgroundSize: 'cover',
  height: '100vh',
  backgroundRepeat: 'no-repeat',
}

const Home = () => {
  return (
    <>
      <div className="hero" style={heroStyle}>
        <Navbar />
        <div className="hero-blurb">
          <h2>
            Neurodivergent autistic female BIPOC Asian therapist{" "}
            <em>for you</em>.
          </h2>
          <p>
            Explore how meeting with a neurodivergent, as opposed to
            neurotypical, therapist can benefit you as a neurodivergent human.
          </p>
          <div className="round-btn">Get in touch</div>
        </div>
      </div>
      <section className="narrative">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
          soluta quia saepe, cupiditate quam consequatur nostrum itaque
          explicabo corporis numquam harum dolores doloremque quis id eaque
          quidem commodi dicta ex?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
          soluta quia saepe, cupiditate quam consequatur nostrum itaque
          explicabo corporis numquam harum dolores doloremque quis id eaque
          quidem commodi dicta ex?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
          soluta quia saepe, cupiditate quam consequatur nostrum itaque
          explicabo corporis numquam harum dolores doloremque quis id eaque
          quidem commodi dicta ex?
        </p>
      </section>
      <section className="testimonials">
        <h1>What People Are Saying</h1>
        <section className="quotes-container">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
            suscipit explicabo voluptatibus aliquam, similique deserunt numquam
            quos quis asperiores omnis minima, nihil earum, quibusdam
            perferendis. Perferendis repellat recusandae eum fugit!
            <br />
            <br />
            -Therapy Client
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            nisi molestiae saepe praesentium deserunt iste! Molestias ex saepe
            veniam ullam repellendus a enim, tempora nobis amet nihil libero
            facere inventore?
            <br />
            <br />
            -Therapy Client
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            voluptatum quidem praesentium sunt a necessitatibus, natus nobis,
            corrupti in adipisci quis soluta, eaque earum ducimus? Quam dolorum
            quisquam quaerat a!
            <br />
            <br />
            -Therapy Client
          </p>
        </section>
      </section>
      <section className="quick-about-me">
        <div className="quick-about-me-container">
          <div className="quick-about-me-text">
            <h1>Hi, I'm Shelly!</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur accusantium aperiam cupiditate asperiores doloremque
              ad alias omnis, dignissimos, id corporis esse cumque explicabo
              possimus rem unde consequatur voluptate ducimus aliquid?
            </p>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur accusantium aperiam cupiditate asperiores doloremque
              ad alias omnis, dignissimos, id corporis esse cumque explicabo
              possimus rem unde consequatur voluptate ducimus aliquid?
            </p>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur accusantium aperiam cupiditate asperiores doloremque
              ad alias omnis, dignissimos, id corporis esse cumque explicabo
              possimus rem unde consequatur voluptate ducimus aliquid?
            </p>

            <div className="round-btn-green">Learn About Me</div>
          </div>
          <img className="quick-about-me-pic" src={therapistImg}>
            {/* <img src={therapistImg} /> */}
          </img>
        </div>
      </section>
      <section className="product-brochure">
        <h1>Neurodiversity-Centered Therapy</h1>
        <div className="product-brochure-fold-container">
          <div className="product-brochure-fold">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              reprehenderit, exercitationem repellendus quia dolor laborum
              dolorum voluptate sapiente. Eveniet, sed ipsa et tenetur
              voluptatem impedit doloribus nesciunt soluta expedita harum?
            </p>
            <div className="round-btn-green">Learn More</div>
          </div>
          <div className="product-brochure-fold">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              reprehenderit, exercitationem repellendus quia dolor laborum
              dolorum voluptate sapiente. Eveniet, sed ipsa et tenetur
              voluptatem impedit doloribus nesciunt soluta expedita harum?
            </p>
            <div className="round-btn-green">Learn More</div>
          </div>
          <div className="product-brochure-fold">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              reprehenderit, exercitationem repellendus quia dolor laborum
              dolorum voluptate sapiente. Eveniet, sed ipsa et tenetur
              voluptatem impedit doloribus nesciunt soluta expedita harum?
            </p>
            <div className="round-btn-green">Learn More</div>
          </div>
        </div>
        <div className="round-btn-green">
          Schedule a call to explore how therapy can help you
        </div>
      </section>
      <section className="testimonial-single testimonials">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque ullam
          cupiditate necessitatibus officia. Nihil earum sit, perspiciatis
          beatae eaque vel, voluptatibus repudiandae aliquam iure labore hic
          officiis reiciendis reprehenderit. Eligendi?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque ullam
          cupiditate necessitatibus officia. Nihil earum sit, perspiciatis
          beatae eaque vel, voluptatibus repudiandae aliquam iure labore hic
          officiis reiciendis reprehenderit. Eligendi?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque ullam
          cupiditate necessitatibus officia. Nihil earum sit, perspiciatis
          beatae eaque vel, voluptatibus repudiandae aliquam iure labore hic
          officiis reiciendis reprehenderit. Eligendi?
        </p>
        <p className="attribution">- Therapy Participant</p>
      </section>
      <section className="subscribe-newsletter">
        <h1>Subscribe to our newsletter</h1>
        <div className="subscribe-box">
          <h2>Shelly Kwong, LCSW</h2>
          <p>Sign up for our newsletter, events, announcements, and more!</p>
          <input type="email" placeholder="Email" />
          <button>Subscribe</button>
          <p className="fine-text">
            You can unsubscribe anytime. For more details, review our Privacy
            Policy
          </p>
        </div>
        <div className="marquee">
          <p>
            Decolonize ~ Dream ~ Abolish ~ Rest ~Heal ~ Relax ~ Decolonize ~
            Dream ~ Abolish ~ Rest ~Heal ~ Relax ~ Decolonize ~ Dream ~ Abolish
            ~ Rest ~Heal ~ Relax ~ Decolonize ~ Dream ~ Abolish ~ Rest ~Heal ~
            Relax ~ Decolonize ~ Dream ~ Abolish ~ Rest ~Heal ~ Relax ~
            Decolonize ~ Dream ~ Abolish ~ Rest ~Heal ~ Relax ~{" "}
          </p>
        </div>
      </section>
      <footer>
        <nav className="footer-container">
          <div
            className="footer-left nav-btn"
            onClick={() =>
              window.scroll({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            Shelly Kwong, LCSW
          </div>
          <div className="footer-right nav-btn">&copy; 2022 Shelly Kwong</div>
        </nav>
      </footer>
    </>
  );
}

export default Home;
