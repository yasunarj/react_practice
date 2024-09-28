import { Link } from "react-router-dom"
const Header = () => {
  return (
    <header>
      <nav>
      <nav className="p-2 mb-12">
          <ul className="flex justify-between">
            <li className="hover:text-blue-900 border-2 border-blue-500 px-2 py-1 bg-blue-200 text-sm">
              <Link to="/lesson1">Lesson1</Link>
            </li>
            <li className="hover:text-blue-900 border-2 border-blue-500 px-2 py-1 bg-blue-200 text-sm">
              <Link to="/lesson2">Lesson2</Link>
            </li>
            <li className="hover:text-blue-900 border-2 border-blue-500 px-2 py-1 bg-blue-200 text-sm">
              <Link to="/lesson3">Lesson3</Link>
            </li>
            <li className="hover:text-blue-900 border-2 border-blue-500 px-2 py-1 bg-blue-200 text-sm">
              <Link to="/lesson4">Lesson4</Link>
            </li>
            <li className="hover:text-blue-900 border-2 border-blue-500 px-2 py-1 bg-blue-200 text-sm">
              <Link to="/lesson5">Lesson5</Link>
            </li>
            <li className="hover:text-blue-900 border-2 border-blue-500 px-2 py-1 bg-blue-200 text-sm">
              <Link to="/lesson6">Lesson6</Link>
            </li>
            <li className="hover:text-blue-900 border-2 border-blue-500 px-2 py-1 bg-blue-200 text-sm">
              <Link to="/lesson7">Lesson7</Link>
            </li>
            <li className="hover:text-blue-900 border-2 border-blue-500 px-2 py-1 bg-blue-200 text-sm">
              <Link to="/lesson8">Lesson8</Link>
            </li>
          </ul>
        </nav>
      </nav>
    </header>
  )
}

export default Header;