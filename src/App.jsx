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

          {cardData.map(data => 
            <Card 
              key={'card-' + Math.random()}
              img={data.coverImg}
              rating={data.stats.rating}
              reviewCount={data.stats.reviewCount}
              location={data.location}
              title={data.title}
              price={data.price}
            />
          )}
          {/* <Card 
              img="katie-zaferes.png"
              rating="5.0"
              reviewCount={6}
              location="USA"
              title="Life Lessons with Katie Zaferes"
              price={136}
          /> */}
      </div>
    )
}
