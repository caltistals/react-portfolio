import React from 'react'
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import firebaseImage from "../Images/firebase.jpg";
import javaImage from "../Images/java.svg";
import clangImage from "../Images/c.svg"; 

const SkillPage = () => {
  return (
    <div>
        <div className="container text-center">
        <section id="skill">
        <div class="text-center">
            <h1 class="title">スキル一覧</h1>
            <div class="row text-center">
                <div class="col-md-4 services">
                    <img src={javaImage} />
                    <h4>Java</h4>
                    <p className="text-muted">2020/5 ~</p>
                    <p className="text-muted">主に大学の授業で使用</p>
                    <p className="text-muted">現在は簡易的なコンパイラを開発中</p>
                </div>
                <div class="col-md-4 services">
                    <img src={jsImage} />
                    <h4>JavaScript</h4>
                    <p className="text-muted">2022/4 ~</p>
                    <p className="text-muted">主に独学でのWebアプリケーション開発に使用</p>
                </div>
                <div class="col-md-4 services">
                    <img src={reactImage} />
                    <h4>React</h4>
                    <p className="text-muted">2022/4 ~</p>
                    <p className="text-muted">主に独学でのWebアプリケーション開発に使用</p>
                </div>
                <div class="col-md-4 services">
                    <img src={firebaseImage} />
                    <h4>Firebase</h4>
                    <p className="text-muted">2022/5 ~</p>
                    <p className="text-muted">Webアプリのユーザ認証・DB・デプロイに使用</p>
                </div>
                <div class="col-md-4 services">
                    <img src={clangImage} />
                    <h4>C言語</h4>
                    <p className="text-muted">2020/4 ~</p>
                    <p className="text-muted">最初に触ったプログラミング言語です</p>
                    <p className="text-muted">主に大学の授業で使用</p>
                </div>
            </div>
        </div>
        </section>
    </div>
  </div>
  )
}

export default SkillPage