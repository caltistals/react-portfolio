import React from 'react'
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa"
import { IconContext } from 'react-icons'
const Header = () => {
  return (
    <header>
        <div className="logo">
            <h3>Portfolio</h3>
            <h3>by caltistals</h3>
        </div>
        <nav>
            <ul>
                <li>
                    <Link to = "/">ホーム</Link>
                </li>
                <li>
                <Link to = "/skills">スキル</Link>
                </li>
                <li>
                    <IconContext.Provider value = {{size: "30px"}}>
                        <a class = "githubicon" href="https://github.com/caltistals" target="_blank" rel="noopener"><FaGithub/></a>
                    </IconContext.Provider>
                </li>
                
            </ul>
        </nav>
    </header>
    
  )
}

export default Header