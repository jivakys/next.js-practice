import Link from "next/link";

const ErrorPage = () => {
  return (
    <>
      <nav>
        <ul className="menu-bar">
          <li>
            <Link href="/">Index</Link>
          </li>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div id="notfound">
        <div className="notgound">
          <div className="notfound404">
            <h1>404</h1>
          </div>
          <h2>We are Sorry, Page not Found</h2>
          <p>
            The Page You are looking for might have been removed had it's name
            changed or is Tempararily unavailable.
          </p>
          <a href="#">Back To Home Page</a>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
