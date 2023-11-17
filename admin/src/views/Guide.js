import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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

  const Delete = async (id) => {
    // Create the DELETE request
    const request = new Request(
      `http://localhost:8888/api/user/delete/${id}`,
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
      const res = await fetch(`http://localhost:8888/api/user`);
      const data = await res.json();

      setListdata(data);
    };
    getData();
  }, [listdata]);


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
                      <th>Tên tài khoản</th>
                      <th>Email</th>
                      <th>Vai trò</th>
                      <th className="text-center">Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listdata && 
                      listdata.map((value, id) => {
                        console.log(value);
                        if(value.role == 'guide'){
                          return (
                            <>
                              <tr>
                                <td>{value.username}</td>
                                <td>{value.email}</td>
                                <td>{value.role}</td>
                                <td className="text-center">
                                  <Link
                                    to={`/uploaduser/${value._id}`}
                                    className="btn btn-primary mx-2"
                                  >
                                    Sửa
                                  </Link>
                                  <button onClick={() => Delete(value._id)} className="btn btn-danger mx-2">
                                    Xoá
                                  </button>
                                </td>
                              </tr>
                            </>
                          );
                        }
                      
                      })}
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
