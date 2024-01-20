import Link from "next/link";
import "./styles/globals.scss";

const Home = () => (
  <div className="home">
    <h1 className="title">Landing Page</h1>

    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
      <Link href="/subscription">Visit</Link>
    </button>
  </div>
);

export default Home;
