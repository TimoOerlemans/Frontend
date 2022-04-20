import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Components/Footer.css'


function Footer() {
  return (
    <div className="footer">
    <div className="container">
    <div className="row">
    <div className="footer-col-1">
    <h3>Download our App</h3>
    <p>Download App for Android and ios mobile phone.</p>
    <div className="app-logo">
    <a href="https://play.google.com/store/apps?hl=nl&gl=US">
    <img src={"./assets/play-store.png"}></img>
    </a>
    <a href="https://www.apple.com/nl/app-store/">
    <img src="./assets/app-store.png"></img>
    </a>
    </div>
    </div>
    <div className="footer-col-2">
    <img src="./assets/logo-philips.png"></img>
    <p>Our Purpose Is To Sustainably Make the Pleasure and Benefits of Sports Accessible to the Many.</p>
    </div>
    <div className="footer-col-3">
    <h3>Useful Links</h3>
    <ul>
    <li>Coupons</li>
    <li>Blog Post</li>
    <li>Return Policy</li>
    <li>Join Affiliate</li>
    </ul>
    </div>
    <div className="footer-col-4">
    <h3>Follow me</h3>
    <ul>
    <li>Facebook</li>
    <li>Twitter</li>
    <li>Instagram</li>
    <li>Youtube</li>
    </ul>
    </div>
    </div>
    <hr></hr>
    <p className="copyright"> Copyright 2022 - NetMatch</p>
    </div>
    </div>
  )
}

export default Footer


