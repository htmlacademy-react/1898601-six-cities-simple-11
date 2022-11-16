type HeaderNavigationProps = {
  userEmail?: string;
};

export const HeaderNavigation = ({ userEmail }: HeaderNavigationProps): JSX.Element => (
  <nav className="header__nav">
    <ul className="header__nav-list">
      {userEmail ?
        <>
          <li className="header__nav-item user">
            <div className="header__nav-profile">
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__user-name user__name">{userEmail}</span>
            </div>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="#">
              <span className="header__signout">Sign out</span>
            </a>
          </li>
        </>
        :
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile" href="#">
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__login">Sign in</span>
          </a>
        </li>}

    </ul>
  </nav>
);
