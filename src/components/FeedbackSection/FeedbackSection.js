import React from "react";
import "./FeedbackSection.css";

function FeedbackSection() {
  return (
    <div className="feedback-section">
      <h1 className="section-title">Creating Moments of Genuine Happiness</h1>
      <div className="feedback-container">
        <div className="feedback-item">
          <div className="feedback-content">
            <p className="feedback-text">
              "The tours were amazing! The guides were knowledgeable and
              friendly. I had a fantastic time exploring the beautiful
              landscapes. Highly recommend!"
            </p>
            <div className="feedback-info">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="User"
                className="feedback-avatar"
              />
              <div className="feedback-details">
                <h4 className="feedback-author">John Doe</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="feedback-item">
          <div className="feedback-content">
            <p className="feedback-text">
              "The team at Natours is simply exceptional. They went above and
              beyond. Can't wait to book another adventure with them!"
            </p>
            <div className="feedback-info">
              <img
                src="https://randomuser.me/api/portraits/women/2.jpg"
                alt="User"
                className="feedback-avatar"
              />
              <div className="feedback-details">
                <h4 className="feedback-author">Jane Smith</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="feedback-item">
          <div className="feedback-content">
            <p className="feedback-text">
              "I've been on multiple tours with Natours, and each one has been
              fantastic. The level of service, attention to detail, Highly
              recommended!"
            </p>
            <div className="feedback-info">
              <img
                src="https://randomuser.me/api/portraits/men/3.jpg"
                alt="User"
                className="feedback-avatar"
              />
              <div className="feedback-details">
                <h4 className="feedback-author">Alex Johnson</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackSection;
