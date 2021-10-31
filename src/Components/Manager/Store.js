import React from "react";

function Store() {
  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <div className="col-3">
            <form className="form-inline m-4" action="#">
              <input
                className="form-control mr-sm-2 bg-light text-dark"
                type="text"
                placeholder="Search a product"
              />
              <button className="btn btn-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="col-3"></div>
          <div className="col-6 mt-3">
              <h6>Add Product</h6>
            <form className="form-inline m-4" action="#">
              <input
                className="form-control mr-sm-2 bg-light text-dark"
                type="text"
                placeholder="Product code"
              />
              <input
                className="form-control mr-sm-2 bg-light text-dark"
                type="text"
                placeholder="Product Ref"
              />
              <input
                className="form-control mr-sm-2 bg-light text-dark"
                type="text"
                placeholder="Designation"
              />
              <input
                className="form-control mr-sm-2 bg-light text-dark"
                type="text"
                placeholder="Storage"
              />
              <input
                className="form-control mr-sm-2 bg-light text-dark"
                type="text"
                placeholder="Supplier"
              />
              <input
                className="form-control mr-sm-2 bg-light text-dark"
                type="number"
                placeholder="Price"
              />
              <input
                className="form-control mr-sm-2 bg-light text-dark"
                type="number"
                placeholder="Stock"
              />
              <button className="btn btn-success mt-2" type="submit">
                Create Product
              </button>
            </form>
          </div>
        </div>


        <h3 className="">All Products</h3>
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
                <button type="submit" className="btn btn-danger offset-1">
                  Delete
                </button>
                <button type="submit" className="btn btn-success offset-1">
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td>2W4R</td>
              <td>74fefger</td>
              <td>Riz_50kg</td>
              <td>123</td>
              <td>Niang&frere</td>
              <td>20.000F</td>
              <td>30</td>
              <td>
                <button type="submit" className="btn btn-danger offset-1">
                  Delete
                </button>
                <button type="submit" className="btn btn-success offset-1">
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td>4EDV</td>
              <td>74fefger</td>
              <td>Blé_1kg</td>
              <td>431</td>
              <td>Diouf_Blé</td>
              <td>500F</td>
              <td>50</td>
              <td>
                <button type="submit" className="btn btn-danger offset-1">
                  Delete
                </button>
                <button type="submit" className="btn btn-success offset-1">
                  Edit
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
                <button type="submit" className="btn btn-danger offset-1">
                  Delete
                </button>
                <button type="submit" className="btn btn-success offset-1">
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Store;
