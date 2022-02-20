import React, { Component } from "react";

export default class SanPhamChiTiet extends Component {
  renderTablePhone = () => {
    let {
      tenSP,
      manHinh,
      heDieuHanh,
      cameraTruoc,
      cameraSau,
      ram,
      rom,
      giaBan,
      hinhAnh,
    } = this.props.phoneDetail;
    return (
      <tr>
        <td className="col-3">
          <img src={hinhAnh} alt="" style={{ height: "10em" }} />
          <p>
            Tên Sản Phẩm <b>{tenSP}</b>
          </p>
        </td>
        <td className="col-9 d-flex">
          <p>Màn hình: {manHinh}</p>
        </td>
        <td className="col-9 d-flex">
          <p>Hệ điều hành: {heDieuHanh}</p>
        </td>
        <td className="col-9 d-flex">
          <p>Camera trước: {cameraTruoc}</p>
        </td>
        <td className="col-9 d-flex">
          <p>Camera sau: {cameraSau}</p>
        </td>
        <td className="col-9 d-flex">
          <p>RAM: {ram}</p>
        </td>
        <td className="col-9 d-flex">
          <p>ROM: {rom}</p>
        </td>
        <td className="col-9 d-flex">
          <p>Giá bán: {giaBan}</p>
        </td>
      </tr>
    );
  };
  render() {
    return (
      <div className="container">
        <h2>Chi tiết sản phẩm</h2>
        <table className="table">
          <thead>
            <tr>
              <th className="col-3">Hình ảnh</th>
              <th className="col-9">Thông số kỹ thuật</th>
            </tr>
          </thead>
          <tbody>{this.renderTablePhone()}</tbody>
        </table>
      </div>
    );
  }
}
