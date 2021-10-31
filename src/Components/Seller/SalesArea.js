import React from "react";
import { useEffect, useState } from "react";

function SalesArea() {
  const [date, setDate] = useState(Date());
  useEffect(() => {
    setDate(Date());
  }, []);
  /*const month = date.getDate();
    const day = date.getDay();
    const hour = date.getHours();
    const minutes= date.getMinutes();
    const year = date.getYear();
    const moment = month+' '+year+' '+day+' ' +hour+' '+minutes;*/
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6 mt-2">
          <div className="row col-10 h-25">
            <h6>Search by category</h6>
            <div class="form-group m-2">
              <label for="sel1">choose category:</label>
              <select className="form-control bg-light text-dark" id="sel1">
                <option>product_code</option>
                <option>_ref</option>
                <option>Designation</option>
                <option>Price</option>
              </select>
              <input
                type="text"
                placeholder="search product"
                className="bg-white text-dark mt-1"
              />
              <input
                type="number"
                placeholder="quantity"
                className="bg-white text-dark mt-1"
              />
              <button type="submit" className="btn btn-success offset-1">
                search
              </button>
            </div>

            <div className="table-responsive row offset-1">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">product_code</th>
                    <th scope="col">_ref</th>
                    <th scope="col">Designation</th>
                    <th scope="col">storage</th>
                    <th scope="col">Price</th>
                    <th scope="col">Stock</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1Z3E</td>
                    <td>adfr43</td>
                    <td>Presséa</td>
                    <td>113</td>
                    <td>1000F</td>
                    <td>10</td>
                    <td>
                      <button
                        type="submit"
                        className="btn btn-success offset-1"
                      >
                        Add to sale
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>2W4R</td>
                    <td>74fefger</td>
                    <td>Riz_50kg</td>
                    <td>123</td>
                    <td>20.000F</td>
                    <td>30</td>
                    <td>
                      <button
                        type="submit"
                        className="btn btn-success offset-1"
                      >
                        Add to sale
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>4EDV</td>
                    <td>74fefger</td>
                    <td>Blé_1kg</td>
                    <td>431</td>
                    <td>500F</td>
                    <td>50</td>
                    <td>
                      <button
                        type="submit"
                        className="btn btn-success offset-1"
                      >
                        Add to sale
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>6RG5</td>
                    <td>74fefget</td>
                    <td>Cérélac</td>
                    <td>652</td>
                    <td>1500F</td>
                    <td>5</td>
                    <td>
                      <button
                        type="submit"
                        className="btn btn-success offset-1"
                      >
                        Add to sale
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
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
            <button type="submit" className="btn btn-warning m-3">
              Add to pending
            </button>
            <button type="submit" className="btn btn-danger m-3">
              Cancel Sale
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesArea;
