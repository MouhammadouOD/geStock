import React from "react";

function Users() {
  return (
    <div className="container m-4">
      <div className="container border p-4 text-center">
        <h4>Add User</h4>
        <br />
        <form className="">
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Password"
                aria-label="Password"
              />
            </div>
            <div className="col ">
              <button type="submit" className="btn btn-success offset-3">
                New User
              </button>
            </div>
          </div>
        </form>
      </div>
      <br />
      <br />

      <div className='container text-center'>
        <h3>Users list</h3>
        <hr />
        <table class="table m-5">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Username</th>
              <th scope="col">Password</th>
              <th scope="col">Role</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>toto</td>
              <td>@passertoto</td>
              <td>Admin</td>
              <td>
                <button type="submit" className="btn btn-success offset-3">
                  Delete
                </button>
                <button type="submit" className="btn btn-success offset-3">
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>tata</td>
              <td>@passertata</td>
              <td>Manager</td>
              <td>
                <button type="submit" className="btn btn-success offset-3">
                  Delete
                </button>
                <button type="submit" className="btn btn-success offset-3">
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>titi</td>
              <td>@passertiti</td>
              <td>Seller</td>
              <td>
                <button type="submit" className="btn btn-success offset-3">
                  Delete
                </button>
                <button type="submit" className="btn btn-success offset-3">
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

export default Users;
