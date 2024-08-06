import { Link } from "gatsby"
import { SideMenue } from "./SideMenue"
import { RxHamburgerMenu } from "react-icons/rx"
import { useState } from "react"
export const Navbar = () => {
  const [openMenue, setOpenMenue] = useState(false)
  const onClickHamburger = () => {
    setOpenMenue(!openMenue)
  }
  return (
    <>
      <div
        id="NavBar"
        className="shadow-md p-6 sticky top-0 z-30 bg-opacity-90 backdrop-blur navbar  font-semibold overflow-x-hidden h-20  "
      >
        <div className="flex-1 md:text-base text-xs">
          <ul className=" md:flex menu menu-horizontal p-0">
            <Link to="/blogIndex">AugusTaroの館</Link>
          </ul>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 bg-opacity-0">
            <RxHamburgerMenu size={25} onClick={onClickHamburger} />
          </ul>
        </div>
      </div>
      <SideMenue openMenue={openMenue} setOpenMenue={setOpenMenue} />
    </>
  )
}
