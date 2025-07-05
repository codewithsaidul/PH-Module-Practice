import { Link } from "react-router";
import { ModeToggle } from "../ThemeToggle/ModeToggle";

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto h-16 py-6 px-5">
      <div className="flex justify-between items-center">
        <div>
          <Link to="/" className="text-3xl font-bold text-red-500">
            Task Manager
          </Link>
        </div>
  
        <div className="flex items-center gap-20">
          <div className="flex items-center gap-7">
            <Link to="/users" className="text-3xl font-bold">
              User
            </Link>
            <Link to="/" className="text-3xl font-bold">
              Task
            </Link>
          </div>
  
          <div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
