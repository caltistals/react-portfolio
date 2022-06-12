import React from 'react'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
        <div className="logo">
            <h3>ポートフォリオ by React</h3>
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
                    <a href="#">ポートフォリオ</a>
                </li>
            </ul>
        </nav>
    </header>
    
  )
}

export default Header