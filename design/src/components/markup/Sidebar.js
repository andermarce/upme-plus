const Sidebar = () => (
  <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
  {/* Sidebar */}

    {/* <!-- Sidebar - Brand  --> */}
    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
      <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink"></i>
      </div>
      <div className="sidebar-brand-text mx-3">Instagram yourself</div>
    </a>

    {/* <!-- Divider  --> */}
    <hr className="sidebar-divider my-0" />

    {/* <!-- Nav Item - Dashboard  --> */}
    <li className="nav-item active">
      <a className="nav-link" href="index.html">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></a>
    </li>

    {/* <!-- Divider  --> */}
    <hr className="sidebar-divider" />

    {/* <!-- Heading  --> */}
    <div className="sidebar-heading">
      Actions
    </div>

    {/* <!-- Nav Item - Pages Collapse Menu  --> */}
    <li className="nav-item">
      <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
        <i className="fas fa-fw fa-heart"></i>
        <span>Like</span>
      </a>
      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
          {/* <!-- <h6 className="collapse-header">Custom Components:</h6>  --> */}
          <a className="collapse-item" href="like/hashtag.html">Hashtag</a>
          <a className="collapse-item" href="like/user-medias.html">User Medias</a>
        </div>
      </div>
    </li>

    {/* <!-- Nav Item - Utilities Collapse Menu  --> */}
    <li className="nav-item">
      <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
        <i className="fas fa-fw fa-user-friends"></i>
        <span>Follow</span>
      </a>
      <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
          {/* <!-- <h6 className="collapse-header">Custom Utilities:</h6>  --> */}
          <a className="collapse-item" href="follow/followers.html">Followers of</a>
          <a className="collapse-item" href="follow/followings.html">Followees of</a>
        </div>
      </div>
    </li>

    {/* <!-- Divider  --> */}
    <hr className="sidebar-divider" />

    {/* <!-- Heading  --> */}
    <div className="sidebar-heading">
      Useful links
    </div>

    {/* <!-- Nav Item -   --> */}
    <li className="nav-item">
      <a className="nav-link" href="https://t.me/instabotproject">
        <i className="fab fa-fw fa-telegram"></i>
        <span>Telegram</span></a>
    </li>

    {/* <!-- Nav Item -   --> */}
    <li className="nav-item">
      <a className="nav-link" href="https://github.com/caffeinum/instaweb">
        <i className="fab fa-fw fa-github"></i>
        <span>GitHub</span></a>
    </li>

    {/* <!-- Nav Item -   --> */}
    <li className="nav-item">
        <a className="nav-link" href="https://github.com/caffeinum/instaweb#installing-extension">
          <i className="fas fa-fw fa-question"></i>
          <span>FAQ</span></a>
      </li>

    {/* <!-- Divider  --> */}
    <hr className="sidebar-divider d-none d-md-block" />

    {/* <!-- Sidebar Toggler (Sidebar)  --> */}
    <div className="text-center d-none d-md-inline">
      <button className="rounded-circle border-0" id="sidebarToggle"></button>
    </div>

    {/* <!-- End of Sidebar  --> */}
  </ul>
)
