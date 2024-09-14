import React from 'react'

export default function AdminSidebar() {
  return (
    <section id="dashboard-content">
  <div className="container-fluid m-0 p-0">
    <div className="row">
      <div className="admin-sidebar bg-dark col-md-3 m-0 p-3">
        <ul className="sidebar-link m-0 p-0">
          <li>
            <a href="#">
              <img
                src="https://icon-library.com/images/admin-login-icon/admin-login-icon-11.jpg"
                className="img-fluid w-50 "
              />
            </a>
          </li>
          <li>
            <a href="#">
              <span className="bi bi-person" /> Manage Customers
            </a>
          </li>
          <li className="dropdown">
            <a className="dropdown-toggle" data-bs-toggle="dropdown" href="#">
              <span className="bi bi-cart" /> Add Category
            </a>
            <ul className="dropdown-menu bg-white text-dark">
              <li>
                <a href="#">
                  <span className="bi bi-cart" /> Add Category
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="bi bi-cart" /> Manage Category
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a className="dropdown-toggle" data-bs-toggle="dropdown" href="#">
              <span className="bi bi-cart" /> Add SubCategory
            </a>
            <ul className="dropdown-menu bg-white text-dark">
              <li>
                <a href="#">
                  <span className="bi bi-cart" /> Add SubCategory
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="bi bi-cart" /> Manage SubCategory
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a className="dropdown-toggle" data-bs-toggle="dropdown" href="#">
              <span className="bi bi-cart" /> Add Products
            </a>
            <ul className="dropdown-menu bg-white text-dark">
              <li>
                <a href="#">
                  <span className="bi bi-cart" /> Add Products
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="bi bi-cart" /> Manage Products
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <span className="bi bi-bell" /> Manage Orders
            </a>
          </li>
          <li>
            <a href="#">
              <span className="bi bi-phone" /> Manage Contacts
            </a>
          </li>
          <li>
            <a href="#">
              <span className="bi bi-command" /> Manage Reviews
            </a>
          </li>
          {/* <li><a href="#" class="btn btn-sm btn-danger text-white" onclick="return confirm('Are you sure to Logout ?')"><span class="bi bi-power"></span> Logout ?</a></li> */}
          <li>
            <a
              href="#"
              className="btn btn-sm btn-danger text-white"
              data-bs-toggle="modal"
              data-bs-target="#lg"
            >
              <span className="bi bi-power" /> Logout ?
            </a>
          </li>
        </ul>
      </div>
      {/* admin dashboard content */}
      <div className="admin-dashboard col-md-9 p-3">
        <h2 className="ms-3 p-4 mt-3">Welcome to Admin dashboard</h2>
        <hr className="border border-1 border-dark w-50 ms-5" align="left" />
        <div className="row">
          <div className="col-md-3 ms-5 p-3 mt-2 bg-success">
            <p className="text-center fs-4">Total Customers</p>
            <p className="text-center">
              <button
                type="button"
                className="btn btn-sm btn-danger border border-0"
              >
                <span className="badge badge-danger start-0 top-0">
                  <i className="bi bi-person" />
                  100
                </span>
              </button>
            </p>
          </div>
          <div className="col-md-3 ms-5 p-3 mt-2 bg-danger">
            <p className="text-center fs-4">Total Subcategory</p>
            <p className="text-center">
              <button
                type="button"
                className="btn btn-sm btn-danger border border-0"
              >
                <span className="badge badge-danger start-0 top-0">
                  <i className="bi bi-person" />
                  100
                </span>
              </button>
            </p>
          </div>
          <div className="col-md-3 ms-5 p-3 mt-2 bg-primary">
            <p className="text-center fs-4">Total Orders</p>
            <p className="text-center">
              <button
                type="button"
                className="btn btn-sm btn-danger border border-0"
              >
                <span className="badge badge-danger start-0 top-0">
                  <i className="bi bi-person" />
                  100
                </span>
              </button>
            </p>
          </div>
          <div className="col-md-3 ms-5 p-3 mt-2 bg-success">
            <p className="text-center fs-4">Total Contacts</p>
            <p className="text-center">
              <button
                type="button"
                className="btn btn-sm btn-danger border border-0"
              >
                <span className="badge badge-danger start-0 top-0">
                  <i className="bi bi-person" />
                  100
                </span>
              </button>
            </p>
          </div>
          <div className="col-md-3 ms-5 p-3 mt-2 bg-danger">
            <p className="text-center fs-4">Total Category</p>
            <p className="text-center">
              <button
                type="button"
                className="btn btn-sm btn-danger border border-0"
              >
                <span className="badge badge-danger start-0 top-0">
                  <i className="bi bi-person" />
                  100
                </span>
              </button>
            </p>
          </div>
          <div className="col-md-3 ms-5 p-3 mt-2 bg-primary">
            <p className="text-center fs-4">Total Reviews</p>
            <p className="text-center">
              <button
                type="button"
                className="btn btn-sm btn-danger border border-0"
              >
                <span className="badge badge-danger start-0 top-0">
                  <i className="bi bi-person" />
                  100
                </span>
              </button>
            </p>
          </div>
        </div>
        <h2 className="ms-3 p-4 mt-3">Monthly growth</h2>
        <hr className="border border-1 border-dark w-25 ms-5" align="left" />
        <div id="chart_div" style={{ width: "90%", height: 350 }} />
      </div>
    </div>
  </div>
</section>

  )
}
