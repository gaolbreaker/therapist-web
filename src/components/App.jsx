import React from 'react';
import Navbar from './Navbar.jsx';
import bgImg from './../assets/bambooforest.png';

const heroStyle = {
  background: `rgba(0,0,0,.35) url(${bgImg})`,
  backgroundBlendMode: 'darken',
  backgroundSize: 'cover',
  height: '100vh',
  backgroundRepeat: 'no-repeat',
}

const App = () => {
  return (
    <>
      <div className="hero" style={heroStyle}>
        <Navbar />
        <div className="hero-blurb">
          <h2>Neurodivergent autistic female BIPOC Asian therapist <em>for you</em>.</h2>
          <p>Explore how meeting with a neurodivergent, as opposed to neurotypical, therapist can benefit you as a neurodivergent human.</p>
          <div className="round-btn">Get in touch</div>
        </div>
      </div>
      <section className="narrative">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto soluta quia saepe, cupiditate quam consequatur nostrum itaque explicabo corporis numquam harum dolores doloremque quis id eaque quidem commodi dicta ex?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto soluta quia saepe, cupiditate quam consequatur nostrum itaque explicabo corporis numquam harum dolores doloremque quis id eaque quidem commodi dicta ex?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto soluta quia saepe, cupiditate quam consequatur nostrum itaque explicabo corporis numquam harum dolores doloremque quis id eaque quidem commodi dicta ex?</p>
      </section>
      <section className="testimonials">
        <h1>What People Are Saying</h1>
        <section className="quotes-container">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime suscipit explicabo voluptatibus aliquam, similique deserunt numquam quos quis asperiores omnis minima, nihil earum, quibusdam perferendis. Perferendis repellat recusandae eum fugit!<br /><br />-Therapy Client</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit nisi molestiae saepe praesentium deserunt iste! Molestias ex saepe veniam ullam repellendus a enim, tempora nobis amet nihil libero facere inventore?<br /><br />-Therapy Client</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatum quidem praesentium sunt a necessitatibus, natus nobis, corrupti in adipisci quis soluta, eaque earum ducimus? Quam dolorum quisquam quaerat a!<br /><br />-Therapy Client</p>
        </section>
      </section>
      <section className="quick-about-me">
        <div className="quick-about-me-container">
          <div className="quick-about-me-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur accusantium aperiam cupiditate asperiores doloremque ad alias omnis, dignissimos, id corporis esse cumque explicabo possimus rem unde consequatur voluptate ducimus aliquid?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur accusantium aperiam cupiditate asperiores doloremque ad alias omnis, dignissimos, id corporis esse cumque explicabo possimus rem unde consequatur voluptate ducimus aliquid?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur accusantium aperiam cupiditate asperiores doloremque ad alias omnis, dignissimos, id corporis esse cumque explicabo possimus rem unde consequatur voluptate ducimus aliquid?
          </div>
          <div className="quick-about-me-pic">

          </div>
        </div>
      </section>
    </>
  );
}

export default App;