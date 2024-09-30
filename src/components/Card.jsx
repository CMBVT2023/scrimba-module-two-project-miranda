import React from "react"
import starImage from "../assets/star.png";

/**
 * Card Component
 * @component
 * @param {string} img - Directory location of Card Photo.
 * @param {number} rating - Card's Rating.
 * @param {number} reviewCount - Card's Review Count.
 * @param {string} location - Card's Location.
 * @param {string} title - Card's Title.
 * @param {number} price - Card's Price.
 */
export function Card(props) {
    // The issue that the instructor was explaining in the Scrimba video is caused by the file location of the actual DOM or webpage, index.html, not being the same as the elements that make up the webpage
    // even though the webpage has a Card element, it is being injected and thus the file location is not within src once it is loaded in the actual DOM so attempting to reference any files in the src
    // directory was having it point the outer most project directory instead.
    // To fix this importing the current url of the web project using import.meta.url and appending the location of the assets folder relative to the Card component fixes this issue since no
    // matter where the component gets loaded, the reference to the asset file is now dynamic.
    let photoImage = new URL(`../assets/${props.img}`, import.meta.url);

    return (
        <div className="card">
            <img src={photoImage} className="card--image" />
            <div className="card--stats">
                <img src={starImage} className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}