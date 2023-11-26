import { Link } from "react-router-dom";
import { useState, useEffect  } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

function Tour() {

  const Update = async (id) => {
    // Create the DELETE request
    const request = new Request(`http://localhost:8888/api/tour/${id}`, {
      method: "PUT",
    });

    // Send the request
    const response = await fetch(request);

    // Check the response status
    if (response.ok) {
      // Show a success message
      alert("Xóa đơn thành công!");
    } else {
      // Show an error message
      alert("Có lỗi xảy ra!");
    }
  };

  const [listdata, setListdata] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`http://localhost:8888/api/tour`);
      const data = await res.json();

      setListdata(data);
    };
    getData();
  }, []);


  const Delete = async (id) => {
    const userConfirmed = window.confirm("Bạn có chắc chắn xoá ?");
    console.log(userConfirmed);
    // Create the DELETE request
    if (userConfirmed) {
      const request = new Request(
        `http://localhost:8888/api/tour/delete/${id}`,
        {
          method: "DELETE",
        }
      );

      // Send the request
      const response = await fetch(request);

      // Check the response status
      if (response.ok) {
        console.log("Xoá thành công");
      } else {
        // Show an error message
        alert("Có lỗi xảy ra!");
      }
    } else {
      return;
    }
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <div>
              <Link to="/addtour" className="btn btn-danger">
                Thêm tour
              </Link>
            </div>
            <Card>
              <CardBody>
                <div className="row">
                  {listdata &&
                    listdata.map((value, id) => {
                      return (
                        <>
                          <div class="card col-md-4">
                            <img
                              src={value.imgDetail[0]}
                              class="card-img-top"
                              width="100%"
                              height="200px"
                            />
                            <div class="card-body">
                              <h5 class="card-title">{value.name}</h5>
                              <p class="card-text des">
                                {value.des}
                              </p>
                              <h5> {value.oldPrice.toLocaleString("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              })}</h5>
                              <Link
                                to={`/edittour/${value._id}`}
                                className="btn mx-2"
                              >
                                Sửa
                              </Link>
                              <button
                                onClick={() => Delete(value._id)}
                                className="btn btn-danger mx-2"
                              >
                                Xoá
                              </button>
                            </div>
                          </div>
                         
                        </>
                      );
                    })}
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
export default Tour;
