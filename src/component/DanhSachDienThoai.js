import React, { Component } from "react";
import PhoneDetail from "./PhoneDetail";

export default class DanhSachDienThoai extends Component {
  renderPhones = () => {
    return this.props.dataPhone.map((item, index) => {
      return (
        <div className="col-4" key={index}>
          <PhoneDetail
            phone={item}
            renderDetail={this.props.renderDetail}
            addPhone={this.props.addPhone}
          />
        </div>
      );
    });
  };
  render() {
    return <div className="row">{this.renderPhones()}</div>;
  }
}
