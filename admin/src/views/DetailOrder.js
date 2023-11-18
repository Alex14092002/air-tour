import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

function DetailOrder() {
  const [detailOrder, setDetailOrder] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`http://localhost:8888/api/order/${id}`);
      const data = await res.json();
      setDetailOrder(data);
    };
    getData();
  }, [detailOrder , id]);


  const handleUpdateStatus = async () => {
    try {
      // Gọi API để cập nhật trạng thái đơn hàng
      const res = await fetch(`http://localhost:8888/api/order/update/${id}`, {
        method: "PATCH", // Phương thức PUT cho việc cập nhật
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: true, // Trạng thái mới (true là đã duyệt)
        }),
      });

      // Kiểm tra nếu cập nhật thành công
      if (res.ok) {
        // Hiển thị thông báo cập nhật thành công hoặc thực hiện các thao tác khác nếu cần
        console.log("Cập nhật trạng thái thành công!");
        alert("cập nhật trạng thái thành công!")
        // Thực hiện các thao tác khác nếu cần
      } else {
        // Hiển thị thông báo cập nhật không thành công hoặc thực hiện các thao tác khác nếu cần
        console.log("Cập nhật trạng thái không thành công!");
        // Thực hiện các thao tác khác nếu cần
      }
    } catch (error) {
      console.error("Lỗi khi cập nhật trạng thái đơn hàng", error);
    }
  };


  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h5 className="title">Xem chi tiết đơn hàng</h5>
              </CardHeader>
              <CardBody>
                {detailOrder && (
                  <Form>
                    <Row>
                      <Col className="px-md-1" md="3">
                        <FormGroup>
                          <label>ID tài khoản</label>
                          <Input
                            defaultValue={detailOrder.idUser}
                            disabled
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label>Email</label>
                          <Input
                            defaultValue={
                              detailOrder.customerInfo[0]
                                ? detailOrder.customerInfo[0].email
                                : ""
                            }
                            disabled
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Họ và tên</label>
                          <Input
                            defaultValue={
                              detailOrder.customerInfo[0]
                                ? detailOrder.customerInfo[0].full_name
                                : ""
                            }
                            disabled
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label>Số điện thoại</label>
                          <Input
                            defaultValue={
                              detailOrder.customerInfo[0]
                                ? detailOrder.customerInfo[0].phone
                                : ""
                            }
                            disabled
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Địa chỉ</label>
                          <Input
                            defaultValue={
                              detailOrder.customerInfo[0]
                                ? detailOrder.customerInfo[0].address
                                : ""
                            }
                            disabled
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Trạng thái</label>
                          <Input
                            defaultValue={detailOrder.status ? "Đã duyệt" : "Chưa duyệt" }
                            disabled
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    
                    <Row>
                      <Col md="12">
                        <CardText>
                          <strong>Thông tin đơn hàng:</strong>
                        </CardText>
                      </Col>
                    </Row>
                    {detailOrder.cart &&
                      detailOrder.cart.map((item) => (
                        <Row key={item.id}>
                          <Col md="12">
                            <CardText>
                              <strong>{item.tour.title}</strong>
                            </CardText>
                            <FormGroup>
                              <label>Số lượng người lớn</label>
                              <Input
                                defaultValue={item.quantityAdult}
                                disabled
                                type="text"
                              />
                            </FormGroup>
                            <FormGroup>
                              <label>Số lượng trẻ em</label>
                              <Input
                                defaultValue={item.quantityChild}
                                disabled
                                type="text"
                              />
                            </FormGroup>
                            <FormGroup>
                              <label>Tổng giá</label>
                              <Input
                                defaultValue={item.total_price}
                                disabled
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      ))}
                  </Form>
                )}
              </CardBody>
              <CardFooter>
              
                <Button className="btn-fill"  onClick={handleUpdateStatus} color="danger" type="submit">
                  Cập nhật trạng thái
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default DetailOrder;
