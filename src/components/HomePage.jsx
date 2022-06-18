import React from 'react'
import reactImage from "../Images/react.png";
import javaImage from "../Images/java.svg";
import jsImage from "../Images/js.png";
import firebaseImage from "../Images/firebase.jpg";
import profileImage from "../Images/caltistals_icon.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
        <div className="container text-center">
        <h1>caltistals</h1>

        <img src={profileImage} className="profileImage" />

        <p>
        caltistalsです。大学の授業や趣味でプログラミングを学んでいます。
        </p>
        <p>
        主にHTML/CSS/JavaScript/React/Javaについて学習しています。
        </p>

        <section class="page-section" id="services">
        <div className="service">
            <div class="text-center">
            <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
            <h3 class="section-subheading text-muted mb-5">
                私が作った作品一覧です
            </h3>
            </div>
            <div class="row text-center">
            <div class="col-md-4">
                <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-dumbbell fa-stack-1x fa-inverse"></i>
                </span>
                <a href="https://github.com/caltistals/workout-memo-react-firebase" target="_blank" rel="noopener">
                <h4 class="my-3">ワークアウト記録アプリ</h4>
                </a>
                <p class="text-muted">
                日々のトレーニングを記録できます。
                </p>
                <p class="text-muted">
                React + Firebaseで開発
                </p>
            </div>
            <div class="col-md-4">
                <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
                </span>
                <a href="https://github.com/caltistals/react-portfolio" target="_blank" rel="noopener">
                <h4 class="my-3">ポートフォリオサイト</h4>
                </a>               
                <p class="text-muted">
                Reactで開発したポートフォリオサイトです。
                </p>
                <p class="text-muted">
                （当サイト）
                </p>
            </div>
            <div class="col-md-4">
                <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-umbrella fa-stack-1x fa-inverse"></i>
                </span>
                <a href="https://github.com/Kissa0330/rain_reminder" target="_blank" rel="noopener">
                <h4 class="my-3">傘知らせるくん</h4>
                </a>      
                <p class="text-muted">
                移動を検知して、現時点での傘の必要性を通知するWebアプリケーションです。
                </p>
                <p className="text-muted">
                1週間のハッカソンで共同開発
                </p>
            </div>
            </div>
        </div>
        </section>

        <section id="skill">
        <div class="text-center">
            <h1 class="title">SKILLS</h1>
            <h3 class="section-subheading text-muted mb-5">
                私が使用している開発言語
            </h3>
            <div class="row text-center">
            <div class="col-md-4 services">
                <img src={javaImage} />
                <h4>Java</h4>
            </div>
            <div class="col-md-4 services">
                <img src={jsImage} />
                <h4>JavaScript</h4>
             </div>
            <div class="col-md-4 services">
                <img src={reactImage} />
                <h4>React</h4>
            </div>
            </div>
            <Link to = "/skills">
            <button type="button" class="btn btn-primary">
            スキル一覧
            </button>
            </Link>
        </div>
        </section>
    </div>
  </div>
  )
}

export default HomePage