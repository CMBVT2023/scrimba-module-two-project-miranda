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
                {...data}
              />
            )}
          </section>
      </div>
    )
}
