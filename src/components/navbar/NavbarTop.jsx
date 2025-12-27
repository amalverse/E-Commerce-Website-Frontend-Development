import { Link } from "react-router-dom";

const NavbarTop = () => {
  return (
    <div className="hidden md:block border-b border-slate-300 text-sm">
      <div className="mx-auto flex max-w-11/12 items-center justify-between py-2 text-slate-600 ">
        <span>📞 Call: +0123 456 789</span>

        <div className="flex items-center gap-6">
          <select className="bg-transparent outline-none">
            <option>USD</option>
            <option>INR</option>
          </select>

          <select className="bg-transparent outline-none">
            <option value="en">English</option>
            <option value="hi">Hindi</option>
          </select>

          <Link to="/login" className="hover:text-rose-600">
            Sign in / Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
