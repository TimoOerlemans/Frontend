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
    <img alt='' src={"./assets/play-store.png"}></img>
    </a>
    <a href="https://www.apple.com/nl/app-store/">
    <img alt='' src="./assets/app-store.png"></img>
    </a>
    </div>
    </div>
    <div className="footer-col-2">
    <img alt='' src="./assets/Pizza-logo.png"></img>
    <p>Our goal is to give everyone the change to enjoy pizza.</p>
    </div>
    <div className="footer-col-3">
    <h3>Useful Links</h3>
    <ul>
    <li>Privacy</li>
    <li>Term and Conditions</li>
    <li>Coupons</li>
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
    <p className="copyright"> Copyright 2022 </p>
    </div>
    </div>
  )
}

export default Footer