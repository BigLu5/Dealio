import React from "react";
import Form from "../components/Form";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function FormPage() {
  const [deals, setDeals] = useState([]);
  const { isAuthenticated } = useAuth0();
  const [selectedDeal, setSelectedDeal] = useState(null);

  useEffect(() => {
    async function fetchDeals() {
      try {
        const response = await axios.get("http://localhost:8080/results");
        setDeals(response.data);
      } catch (error) {
        console.error("Error fetching deals:", error);
      }
    }

    fetchDeals();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/results/${id}`);
      setDeals((prevDeals) => prevDeals.filter((deal) => deal._id !== id));
      setSelectedDeal(null);
    } catch (error) {
      console.error("Error deleting deal:", error);
    }
  };

  const handleDealSelect = (id) => {
    setSelectedDeal(id === selectedDeal ? null : id);
  };

  return (
    <>
      <div className="form-text" id="discount">
        <h2>Add a discount!</h2>
        <h3>Control Your Deals, Control Your Brand</h3>
        <p>
          Offering a seamless deal and discount management platform. The
          simplest way to expand your customer base and efficiently manage your
          restaurant deals. Trust Dealio to provide all the tools you need.
        </p>
      </div>
      <img id="form-img" src="/assets/unsplash/staff1.png" />
      <div className="discount" id="formpagediscount"></div>

      {isAuthenticated && <Form deals={deals} setDeals={setDeals} />}

      {deals.length > 0 && (
        <div>
          <h2>Your Vouchers</h2>
          <select
            onChange={(e) => handleDealSelect(e.target.value)}
            value={selectedDeal || ""}
          >
            <option value="" disabled>
              Select a Voucher
            </option>
            {deals.map((deal) => (
              <option key={deal._id} value={deal._id}>
                {deal.businessName}
              </option>
            ))}
          </select>
          {selectedDeal && (
            <div>
              <p>
                <strong>Business Name:</strong>{" "}
                {deals.find((deal) => deal._id === selectedDeal).businessName}
              </p>
              <p>
                <strong>Offer:</strong>{" "}
                {deals.find((deal) => deal._id === selectedDeal).offer}
              </p>
              <p>
                <strong>Location:</strong>{" "}
                {deals.find((deal) => deal._id === selectedDeal).location}
              </p>
              <button onClick={() => handleDelete(selectedDeal)}>Delete</button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
