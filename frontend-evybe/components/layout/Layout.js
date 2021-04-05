export const Layout = (props) => {
  const nav = () => {
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link" href="">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="">
          Login
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="">
          Register
        </a>
      </li>
    </ul>;
  };

  return <React.Fragment>{nav()} (props.children)</React.Fragment>;
};
