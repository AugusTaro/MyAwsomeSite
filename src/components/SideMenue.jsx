import { AiOutlineCloseSquare } from "react-icons/ai"
import React from "react"
import { Link } from "gatsby"
export const SideMenue = props => {
  //   const [openMenue, setOpenMenue] = useState(false)
  //   const onClickHamburger = () => {
  //     setOpenMenue(!openMenue)
  //   }
  const { openMenue, setOpenMenue } = props
  const onClickClose = () => {
    setOpenMenue(false)
  }
  return (
    <nav
      className={`fixed top-0 right-0 w-10/12 h-screen glass flex flex-col justify-start pt-8 px-3 transition-transform duration-300 ease-in-out z-40 ${
        openMenue ? "transform translate-x-0" : "transform translate-x-full"
      }`}
    >
      <div className="flex-row">
        <div className="flex justify-end">
          <AiOutlineCloseSquare
            className="hover:cursor-pointer"
            size={30}
            onClick={onClickClose}
          />
        </div>
        <ul className="menu  bg-base-100 rounded-box shadow-md ">
          <li>
            <Link to="/">作成者について</Link>
          </li>
          <li>
            <Link to="/blogIndex">ブログ</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
