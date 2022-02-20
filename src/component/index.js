import React, { Component } from "react";
import DanhSachDienThoai from "./DanhSachDienThoai";
import SanPhamChiTiet from "./SanPhamChiTiet";
import { dataPhone } from "./dataPhone";
import ModalGioHang from "./ModalGioHang";

export default class BaitapGioHang extends Component {
  state = {
    phoneDetail: {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
    gioHang: [],
  };
  renderDetail = (phone) => {
    this.setState({
      phoneDetail: phone,
    });
  };
  thayDoiSoLuong = (index, action) => {
    let newPhoneArr = [...this.state.gioHang];
    let indexSP = this.state.gioHang.findIndex((item) => {
      return item.maSP === index;
    });
    if (indexSP !== -1 && action == "+") {
      newPhoneArr[indexSP].soLuong++;
    }
    if (indexSP !== -1 && action == "-") {
      if (newPhoneArr[indexSP].soLuong === 1) {
        newPhoneArr.splice(indexSP, 1);
      } else {
        newPhoneArr[indexSP].soLuong--;
      }
    }
    this.setState({
      gioHang: newPhoneArr,
    });
  };

  addPhone = (phone) => {
    let newPhoneArr = [...this.state.gioHang];
    let indexSP = this.state.gioHang.findIndex((item) => {
      return item.maSP === phone.maSP;
    });
    if (indexSP == -1) {
      phone.soLuong = 1;
      newPhoneArr.push(phone);
    }
    if (indexSP !== -1) {
      newPhoneArr[indexSP].soLuong++;
    }
    this.setState({
      gioHang: newPhoneArr,
    });
  };
  xoaSP = (indexSP) => {
    this.setState({
      gioHang: this.state.gioHang.filter((item) => {
        return item.maSP !== indexSP;
      }),
    });
  };
  render() {
    return (
      <div className="p-3">
        <ModalGioHang
          gioHang={this.state.gioHang}
          thayDoiSoLuong={this.thayDoiSoLuong}
          xoaSP={this.xoaSP}
        />
        <DanhSachDienThoai
          dataPhone={dataPhone}
          renderDetail={this.renderDetail}
          addPhone={this.addPhone}
        />
        <SanPhamChiTiet phoneDetail={this.state.phoneDetail} />
      </div>
    );
  }
}
