{
  localStorage.getItem("role") != "" ? (
    <div>
      <button
        className="w-48 h-14 bg-gradient-to-r from-blue-500 to-violet-600 text-white hover:text-black uppercase text-sm font-semibold rounded-md hover:bg-darkRed duration-300"
        onClick={() => navigate("/login")}
      >
        Login
      </button>
    </div>
  ) : (
    <div className="navbar-end pr-10">
      <div className="z-50 drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-primary"
          >
            <FaBell />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <div>
                <img
                  className="w-20 h-20 rounded-full"
                  src="https://images.unsplash.com/photo-1706354924674-0304751469e8?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <div>
                  <p className="pl-2">
                    Lorem ipsum dolor sit amet consectetur{" "}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1706354924674-0304751469e8?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
}
