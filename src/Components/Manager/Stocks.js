import React from "react";

function Stocks() {
  return (
    <div>
      <div className="container text-center">
        <form className="form-inline m-4" action="#">
          <div className="col-3">
            <input
              className="form-control mr-sm-2 bg-light text-dark"
              type="text"
              placeholder="Search a product"
            />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </div>
        </form>

        <h3 className='text-danger'>These Products are out of stock</h3>
        <hr />
        <table className="table m-5">
          <thead>
            <tr>
              <th scope="col">product_code</th>
              <th scope="col">_ref</th>
              <th scope="col">Designation</th>
              <th scope="col">storage</th>
              <th scope="col">Supplier</th>
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
              <td>Kiréne</td>
              <td>1000F</td>
              <td>10</td>
              <td>
                <button type="submit" className="btn btn-success offset-1">
                  Edit stock
                </button>
              </td>
            </tr>
            <tr>
              <td>6RG5</td>
              <td>74fefget</td>
              <td>Cérélac</td>
              <td>652</td>
              <td>Babylac</td>
              <td>1500F</td>
              <td>5</td>
              <td>
                <button type="submit" className="btn btn-success offset-1">
                  Edit stock
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Stocks;
