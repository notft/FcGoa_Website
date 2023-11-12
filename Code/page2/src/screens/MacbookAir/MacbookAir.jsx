import React from "react";
import "./style.css";

export const MacbookAir = () => {
  return (
    <div className="macbook-air">
      <div className="overlap-wrapper">
        <div className="overlap">
          <button className="learn-more-button">
            <div className="overlap-group">
              <div className="rectangle" />
              <div className="text-wrapper">LEARN MORE</div>
            </div>
          </button>
          <div className="merch-shop-button">
            <div className="overlap-group">
              <div className="rectangle" />
              <div className="text-wrapper">MERCH SHOP</div>
            </div>
          </div>
          <div className="matches-button">
            <div className="div">
              <div className="rectangle-2" />
              <div className="text-wrapper-2">MATCHES</div>
            </div>
          </div>
          <div className="timeline">
            <div className="overlap-2">
              <img className="line" alt="Line" src="/img/line-2.png" />
              <img className="img" alt="Line" src="/img/line-3.png" />
              <img className="line-2" alt="Line" src="/img/line-4.png" />
              <img className="line-3" alt="Line" src="/img/line-1.png" />
            </div>
            <div className="text-wrapper-3">27 Nov, 8:30 Pm</div>
            <div className="text-wrapper-4">03 Dec, 8:00 Pm</div>
            <div className="text-wrapper-5">12 Dec, 8:00 Pm</div>
            <div className="text-wrapper-6">Victory Stamps</div>
          </div>
        </div>
      </div>
    </div>
  );
};
