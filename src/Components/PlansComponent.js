import React, { useState } from "react";

export default function PlansComponent() {
  const [currentPlan, setCurrentPlan] = useState("12");
  const monthPriceMap = {
    12: "179",
    6: "149",
    3: "99",
  };
  return (
    <div className="box-2">
      <div className="lane1">
        <div className="step-indicator">
          <button class="btn btn-primary rounded-circle">1</button>
          <p>Sign Up</p>
        </div>
        <div className="step-indicator">
          <button class="btn btn-primary rounded-circle">2</button>
          <p>Subscribe</p>
        </div>
      </div>
      <div className="lane2">
        <p style={{ fontSize: "24px", color: "#3C4852;", fontWeight: "600", fontFamily:'Roboto' }}>
          Select your subcription plan
        </p>
      </div>
      <button className="redbtn">Offer expired</button> 
      <div className="lane3">
        <div className="checkbox">
          
          <img src='Radio Button.png' alt=''/>
          <label class="text-secondary" style={{ fontSize: "1rem" , fontFamily:'Roboto'}}>
            12 Months Subscription
          </label>
        </div>
        <div class="text-secondary">
          <span class="text-secondary">
            <h5 class="text-secondary" style={{ fontSize: "1rem" }}>
              <span style={{ fontSize: "12px" }}>Total</span> ₹179
            </h5>
          </span>
          <p style={{ fontSize: "10px" }}>
            ₹15 <span class="text-secondary"> /mo</span>
          </p>
        </div>
      </div>
      <button className="upperbtn">Recommended</button>
      <div
        className={`clickable ${
          currentPlan === "12" ? "selected-plan" : "plan"
        }`}
        onClick={() => setCurrentPlan("12")}
      >
         
        <div className="checkbox">
       
          <img
            src={`${currentPlan === "12" ? "checked.png" : "unchecked.png"}`}
            alt="icon4"
          />
          <label for="flexRadioDefault1" class="text-dark">
            12 Months Subscription
          </label>
        </div>
        <div className="lane4_2">
          <span>
            <h5 class="text-dark" style={{ fontSize: "1rem" }}>
              <span style={{ fontSize: "12px" }}>Total</span> ₹179
            </h5>
          </span>
          <p style={{ fontSize: "10px" }}>
            ₹15 <span style={{ color: "#BEBEBE" }}> /mo</span>
          </p>
        </div>
      </div>
      <div
        className={`clickable ${
          currentPlan === "6" ? "selected-plan" : "plan"
        }`}
        onClick={() => setCurrentPlan("6")}
      >
        <div className="gap">
          <img
            src={`${currentPlan === "6" ? "checked.png" : "unchecked.png"}`}
            alt="icon4"
          />
          <label for="flexRadioDefault1">6 Months Subscription</label>
        </div>
        <div>
          <span>
            <h5 class="text-dark" style={{ fontSize: "1rem" }}>
              <span style={{ fontSize: "12px" }}>Total</span> ₹149
            </h5>
          </span>
          <p style={{ fontSize: "10px" }}>
            ₹25 <span style={{ color: "#BEBEBE" }}> /mo</span>
          </p>
        </div>
      </div>
      <div
        className={`lane6 clickable ${
          currentPlan === "3" ? "selected-plan" : "plan"
        }`}
        onClick={() => setCurrentPlan("3")}
      >
        <div className="gap">
          <img
            src={`${currentPlan === "3" ? "checked.png" : "unchecked.png"}`}
            alt="icon4"
          />
          <label for="flexRadioDefault1">3 Months Subscription</label>
        </div>
        <div>
          <span>
            <h5 class="text-dark" style={{ fontSize: "1rem" }}>
              <span style={{ fontSize: "12px" }}>Total</span> ₹99
            </h5>
          </span>
          <p style={{ fontSize: "10px" }}>
            ₹33 <span style={{ color: "#BEBEBE" }}> /mo</span>
          </p>
        </div>
      </div>
      <div className="lane7">
        <div className="lane7_1">
          <p class="text-secondary">Subscription Fee</p>
          <p class="text-dark">₹18,500</p>
        </div>
        <div className="brd">
          <div className="lane7_2">
            <p style={{fontWeight:"bold"}} class="text-danger">Limited time offer</p>
            <h5 class="text-dark">
              -₹{18500 - parseInt(monthPriceMap[currentPlan])}
            </h5>
          </div>
          <div className="lane7_3">
            <img src="orangecircle.png" alt="" className="imgclrchng" />
            <p style={{ color: "#DE4313", fontSize: "1rem" }}>
              Offer valid till 25th March 2023
            </p>
          </div>
          <div className="lane7_4">
            <p>
              <span>Total</span> (Incl. of 18% GST)
            </p>
            <h5>₹{monthPriceMap[currentPlan]}</h5>
          </div>
        </div>
      </div>
      <div className="lane8">
        <div>
          <button className="btn1">CANCEL</button>
        </div>
        <div>
          <button className="btn2">PROCEED TO PAY</button>
        </div>
      </div>
      <div className="lane9">
        <img src="Frame 12537.png" alt="razorpay" />
      </div>
    </div>
  );
}
