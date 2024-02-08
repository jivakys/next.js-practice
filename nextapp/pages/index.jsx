import Link from "next/link";

function index() {
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
            <Link href="/about">about</Link>
          </li>
          <li>
            <Link href="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default index;
