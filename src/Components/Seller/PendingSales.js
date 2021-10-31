import React from "react";
import { useEffect, useState } from "react";

function PendingSales() {
  const [date, setDate] = useState(Date());
  useEffect(() => {
    setDate(Date());
  }, []);
  return (
    <div>
      <div className=" border border-primary col-6 mt-2">
        <div className="row">
          <h3 className="text-danger text-center mt-2 mb-3">Sale</h3>
          <h5>{date}</h5>
        </div>
        <div className="row table-responsive">
          <table className="table h-75">
            <thead>
              <tr>
                <th scope="col">num_facture</th>
                <th scope="col">product_code</th>
                <th scope="col">reference</th>
                <th scope="col">selling_price</th>
                <th scope="col">release_stock</th>
                <th scope="col">total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>1Z3E</td>
                <td>adfr43</td>
                <td>1000F</td>
                <td>2</td>
                <td>2000F</td>
                <td>
                  <button type="submit" className="btn btn-danger offset-1">
                    remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row m-3">
          <h4>Total : 2000 F</h4>
          <h4>cash : 2000 F</h4>
          <h4>left to pay : 0 F</h4>
        </div>
        <div className="row m-3">
          <button type="submit" className="btn btn-success m-3">
            Valid an print
          </button>
          <button type="submit" className="btn btn-success m-3">
            continue
          </button>
          <button type="submit" className="btn btn-danger m-3">
            Cancel Sale
          </button>
        </div>
      </div>
    </div>
  );
}

export default PendingSales;
