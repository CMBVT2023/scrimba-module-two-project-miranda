import React from "react"
import {Navbar} from "./components/Navbar.jsx"
import {Hero} from "./components/Hero.jsx"
import {Card} from "./components/Card.jsx"
import cardData from './data.js';
import './style.css';

export function App() {
    return (
      <div>
          <Navbar />
          <Hero />

          <section className="cards-list">
            {cardData.map(data => 
              <Card 
                key={'card-' + Math.random()}
                openSpots={data.openSpots}
                img={data.coverImg}
                rating={data.stats.rating}
                reviewCount={data.stats.reviewCount}
                location={data.location}
                title={data.title}
                price={data.price}
              />
            )}
          </section>
      </div>
    )
}
