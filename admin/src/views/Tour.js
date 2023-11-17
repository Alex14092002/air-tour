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
  }, [listdata]);
  console.log(listdata);

  const Delete = async (id) => {
    const confirm = confirm('Bạn có chắc chắn xoá ?')
    console.log(confirm); 
    // Create the DELETE request
    if(confirm){
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
        console.log('Xoá thành công');
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
            <Link to='/addtour' className="btn btn-danger">Thêm tour</Link>
          </div>
            <Card>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Tên tour </th>
                      <th>Giá cơ bản</th>
                      <th>Ảnh đại diện</th>
                      <th>Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listdata &&
                      listdata.map((value, id) => {
                        
                        return (
                          <>
                            <tr>
                              <td>{value.name.slice(0, 20) + "..."}</td>
                              <td>
                                {value.price.toLocaleString("vi-VN", {
                                  style: "currency",
                                  currency: "VND",
                                })}
                              </td>
                              <td>
                                <img src={value.imgDetail[0]} width={50} />
                              </td>
                              <td className="d-flex ">
                                <Link to={`/edittour/${value._id}`} className="btn mx-2">Sửa</Link>
                                <button onClick={()=>Delete(value._id)} className="btn btn-danger mx-2">
                                  Xoá
                                </button>
                              </td>
                            </tr>
                          </>
                        );
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
export default Tour;
