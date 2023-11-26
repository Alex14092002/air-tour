import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../assets/css/main.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

function Point({ type }) {
  console.log(type);
  const Delete = async (id) => {
    // Create the DELETE request
    const request = new Request(
      `http://localhost:8888/api/${type}/delete/${id}`,
      {
        method: "DELETE",
      }
    );

    // Send the request
    const response = await fetch(request);

    // Check the response status
    if (response.ok) {
      // Show a success message
      alert("Xóa người dùng thành công!");
    } else {
      // Show an error message
      alert("Có lỗi xảy ra!");
    }
  };

  const [listdata, setListdata] = useState([]);
  console.log(listdata);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`http://localhost:8888/api/${type}`);
      const data = await res.json();

      setListdata(data);
    };
    getData();
  }, [type]);

  return (
    <>
      <div className="content">
        <Row>
          <div>
            <Link to={`/addlocation/${type}`} className="btn btn-danger">
              Thêm điạ điểm
            </Link>
          </div>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">{type}</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  {/* <thead className="text-primary">
                    <tr>
                      <th>Tên</th>
                      
                      <th className="text-center">Hành động</th>
                    </tr>
                  </thead> */}
                  <div class='row'>
                    {listdata &&
                      listdata.map((value, id) => {
                        return (
                          <>
                            <div class="card col-md-4">
                              <img
                                src={value.img}
                                class="card-img-top"
                                width="100%"
                                height="200px"
                              />
                              <div class="card-body">
                                <h5 class="card-title">{value.name}</h5>
                                <p class="card-text des">
                                  {value.des}
                                </p>
                                <button onClick={() => Delete(value._id)} className="btn btn-danger mx-2">
                                    Xoá
                                  </button>
                              </div>
                            </div>
                           
                          </>
                        );
                      })}
                  </div>
                
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
export default Point;
