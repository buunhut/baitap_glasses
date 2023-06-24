import React, { Component } from "react";

import data from "../dataGlasses.json";

export default class MyBody extends Component {
  myArr = data;

  state = {
    maukinh: "",
    ten: "",
    mota: "",
    gia: "",
  };

  reset = () => {
    document.getElementById("kinh").classList.add("none");
    document.getElementById("gia").classList.add("none");
    document.getElementById("nen").classList.add("none");
    let allItems = document.querySelectorAll(".main .mauKinh .item");
    allItems.forEach((item) => {
      item.classList.remove("chon");
    });

    this.setState({
      maukinh: "",
      ten: "",
      mota: "",
      gia: "",
    });
  };

  chonKinh = (id) => {
    document.getElementById("kinh").classList.remove("none");
    document.getElementById("gia").classList.remove("none");
    document.getElementById("nen").classList.remove("none");
    this.setState({
      maukinh: this.myArr[id].url,
      ten: this.myArr[id].name,
      mota: this.myArr[id].desc,
      gia: this.myArr[id].price,
    });
    document.querySelector(".nguoiMau .matKinh").classList.remove("deoKinh");
    document.querySelector(".nguoiMau .matKinh").classList.add("chonKinh");

    setInterval(() => {
      document.querySelector(".nguoiMau .matKinh").classList.add("deoKinh");
    }, 800);

    let allItems = document.querySelectorAll(".main .mauKinh .item");
    allItems.forEach((item) => {
      item.classList.remove("chon");
    });
    allItems[id].classList.add("chon");

    this.toTop();
  };

  toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  render() {
    return (
      <>
        <h1>TRY GLASSES APP ONLINE</h1>

        <div className="main">
          <div className="nguoiMau">
            <div id="kinh" className="matKinh none">
              <img src={this.state.maukinh} alt="" />
            </div>
            <img src="./glassesImage/model.jpg" alt="" />
            <div id="nen" className="nen none">
              <h3 id="ten">{this.state.ten}</h3>
              <h3 id="gia" className="none">
                ${this.state.gia}
              </h3>
              <p id="moTa">{this.state.mota}</p>
            </div>
            <img src="" alt="" />
          </div>
          <div className="mauKinh">
            <div className="content">
              {this.myArr.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="item"
                    onClick={() => this.chonKinh(index)}
                  >
                    <img src={item.url} alt="" />
                  </div>
                );
              })}

              <div>
                <button id="reset" onClick={this.reset}>
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
