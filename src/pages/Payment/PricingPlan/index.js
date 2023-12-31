import { useContext } from "react";
import "./styles.scss";
import { AuthContext } from "context/auth.context";
import { useNavigate } from "react-router-dom";

function Payment(props) {
  const { subscription } = useContext(AuthContext);
  const navigate = useNavigate();

  const purchaseMonthly = () => {
    navigate(`/checkout/${subscription.monthly.id}`)
  }

  const purchaseYearly= () => {
    navigate(`/checkout/${subscription.yearly.id}`)
  }

  return (
    <main>
    <div className="container">
      {/* <h1 className="text-center pricing-table-title">Pricing Plan</h1> */}
      <h1 className="text-center page-title-header_title m-6">Pricing Table</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card pricing-card pricing-plan-basic">
            <div className="card-body">
              <i className="fas fa-cube pricing-plan-icon"></i>
              <p className="pricing-plan-title">Basic</p>
              <h3 className="pricing-plan-cost ml-auto">FREE</h3>
              <ul className="pricing-plan-features">
                <li>With our Free Plan</li>
                <li>access to 5 recipes as your DietPlan</li>
                <li>5 workouts for daily practise</li>
                {/* <li></li>
                <li>10 participants max</li> */}
              </ul>
              <a href="#!" className="btn pricing-plan-purchase-btn">Free</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card pricing-card pricing-card-highlighted  pricing-plan-pro">
            <div className="card-body">
                <i className="fas fa-trophy pricing-plan-icon"></i>
              <p className="pricing-plan-title">Monthly</p>
              <h3 className="pricing-plan-cost ml-auto">19 Euros</h3>
              <ul className="pricing-plan-features">
                <li>Assistance of our personal Trainer</li>
                <li>access to 25 recipes as your DietPlan</li>
                <li>15 workouts for daily practise</li>
                {/* <li>10 participants max</li> */}
              </ul>
              <button onClick={purchaseMonthly} className="btn pricing-plan-purchase-btn">Purchase</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card pricing-card pricing-plan-enterprise">
            <div className="card-body">
              <i className="fas fa-gift pricing-plan-icon"></i>
              <p className="pricing-plan-title">Yearly</p>
              <h3 className="pricing-plan-cost ml-auto">240 Euros</h3>
              <ul className="pricing-plan-features">
                <li>Assistance of our personal Trainer</li>
                <li>access to 50 recipes as your DietPlan</li>
                <li>35 workouts for daily practise</li>
                {/* <li>10 participants max</li> */}
              </ul>
              <button onClick={purchaseYearly} className="btn pricing-plan-purchase-btn">Purchase</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  );
}

export default Payment;
