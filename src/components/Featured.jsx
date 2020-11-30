import React, { Component } from "react";

export default class Featured extends Component {
  render() {
    return (
      <div>
        <section className="featured">
          <h2 className="featured-text">Featured</h2>
          <div className="featured-description">
            <div className="featured-description-text">
              <strong>Showcase your work </strong>
              <span>
                by featuring your best posts, documents, media, and websites.
              </span>
            </div>
            <div className="featured-description-close"></div>
          </div>
        </section>
      </div>
    );
  }
}
