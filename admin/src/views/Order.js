import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

function Tables({ type }) {
  const [listorder, setOrder] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`http://localhost:8888/api/order/`);
      const data = await res.json();
      console.log(data);
      setOrder(data);
    };
    getData();
  }, []);

  const handleDelete = async (orderId) => {
    try {
      await fetch(`http://localhost:8888/api/order/delete/${orderId}`, {
        method: "DELETE",
      });

      // Cập nhật lại danh sách sau khi xoá
      const updatedList = listorder.filter((order) => order._id !== orderId);
      setOrder(updatedList);
      alert("xoá thành công đơn")
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">{type}</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Tên khách</th>
                      <th>Tên tour</th>
                      <th>Trạng thái</th>
                      <th className="text-center">Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listorder &&
                      listorder.map((value) => (
                        <tr key={value._id}>
                          <td>
                            {value.customerInfo
                              ? value.customerInfo[0].full_name
                              : "Đang cập nhật"}
                          </td>
                          {/* Thêm logic để hiển thị các thông tin khác trong bảng */}
                          <td>
                            {value.cart &&
                              value.cart.length > 0 &&
                              value.cart[0].tour.title}
                          </td>
                          <td>
                            {value.status ? "Đã thanh toán" : "Chưa thanh toán"}
                          </td>
                          <td className="text-center">
                            <Link to={`/detailorder/${value._id}`} className="btn btn-success mx-2">
                              Xem chi tiết
                            </Link>
                            <button
                              onClick={() => handleDelete(value._id)}
                              className="btn btn-danger mx-2"
                            >
                              Xoá
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
