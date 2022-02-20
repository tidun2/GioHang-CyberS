import React, { Component } from "react";

export default class PhoneDetail extends Component {
  render() {
    let { tenSP, hinhAnh } = this.props.phone;
    return (
      <div className="card" style={{ width: "100%", height: "100%" }}>
        <img className="card-img-top" src={hinhAnh} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{tenSP}</h5>
          <p className="card-text">Wá xịn</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              this.props.renderDetail(this.props.phone);
            }}
          >
            Chi Tiết sản phẩm
          </button>
          <button
            type="button"
            className="btn btn-danger ml-2"
            onClick={() => {
              this.props.addPhone(this.props.phone);
            }}
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
