import React, { useState, useEffect} from "react";
import TeamCard from "./TeamCard";

const AboutUs = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setTeam([
        { id: 1, name: "Rahul Sharma", role: "CEO", image: "https://www.livemint.com/lm-img/img/2024/12/09/600x338/dalemanish_1733749401479_1733760692549.jpeg" },
        { id: 2, name: "Vansh Mehta", role: "CTO", image: "https://inc42.com/wp-content/uploads/2023/04/Dale-Vaz-Swiggy-CTO-social.png" },
        { id: 3, name: "Amit Verma", role: "COO", image: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6736fabb2cd5fcc197f93de8_1668165421025.jpeg" },
      ]);
    }, 1000);
  }, []);

  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About FoodKart</h1>
        <p>Delivering happiness at your doorstep.</p>
      </header>

      <section className="about-content">
        <h2>Who We Are</h2>
        <p>foodkart is India's leading on-demand delivery platform, revolutionizing how food and groceries reach millions of customers.</p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>To make ordering food and essentials easy, fast, and reliable.</p>
      </section>

      <section className="industry-pioneer">
        <h2>Industry Pioneer</h2>
        <p>
          Being one of the first few entrants, foodkart has pioneered the hyperlocal commerce industry in India. From launching food delivery in 2014 to introducing quick commerce in 2020, Swiggy has become synonymous with innovation.
        </p>
        <div className="stats">
          <div><strong>3 Billion+</strong> orders delivered</div>
          <div><strong>220k+</strong> restaurant partners</div>
          <div><strong>520k+</strong> delivery partners</div>
          <div><strong>680+</strong> cities in India</div>
        </div>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {team.length > 0 ? team.map(member => <TeamCard key={member.id} member={member} />) : <p>Loading team...</p>}
        </div>
      </section>

      <section className="careers">
        <div className="careers-text">
          <h2>🚀 Careers at FoodKart</h2>
          <p>
            Join a culture of innovation, teamwork, and endless possibilities. We empower our employees to make a real impact.
          </p>
          <p>Be a part of FoodKart and change the way people live.</p>
          <button className="btn-primary">Know More</button>
        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW63ouDT_FyZAoXu__oU0wUqSVfjnFENuRKg&s" alt="Swiggy Careers" className="careers-image" />
      </section>

      {/* Blog Section */}
      <section className="blog">
        <h2>📝 FoodKart Blog</h2>
        <div className="blog-grid">
          <div className="blog-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwzUVaworSmNogmjfi2qSE7azoCZk1TrzdVQ&s" alt="Blog 1" />
            <p><strong>October 12, 2024</strong></p>
            <p>Bridging cultures through cuisine: The Nasi and Mee Story</p>
            <button className="btn-secondary">Read More</button>
          </div>
          <div className="blog-card">
            <img src="https://deonde.co/blog/wp-content/uploads/2021/07/blog-Food-DeliveryMarketplaceWhy-It-Is-Popular.png" alt="Blog 2" />
            <p><strong>October 11, 2024</strong></p>
            <p>Hiring from 1x to 10x via FoodKart’s Future Proofing Strategy</p>
            <button className="btn-secondary">Read More</button>
          </div>
          <div className="blog-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx0pkV1STTHXf7imBtaez3ZrMgt_MMwKGmSw&s" alt="Blog 3" />
            <p><strong>October 5, 2024</strong></p>
            <p>Taking Local Campaigns to the National Stage</p>
            <button className="btn-secondary">Read More</button>
          </div>
        </div>
      </section>


      <section className="contact">
        <h2>Get in Touch</h2>
        <p><strong>Email:</strong> support@foodkart.in</p>
        <p><strong>Address:</strong> foodkart Limited, Bangalore, India</p>
        <iframe
          title="foodkart Location"
          src="https://www.google.com/maps/embed?..."
          width="100%"
          height="250"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default AboutUs;
