
import React from "react";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
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

function Tables({type}) {

  const [listorder , setOrder ] = useState([])
  useEffect(()=>{
    const getData = async () =>{
      const res = await fetch(`http://localhost:8888/api/order/`)
      const data = await res.json()
      console.log(data);
    }
    getData()
  })
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
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-center">
                        <Link className='btn btn-success mx-2'>Cập nhật</Link>
                        <button className='btn btn-danger mx-2'>Xoá</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-center">
                        <Link className='btn btn-success mx-2'>Cập nhật</Link>
                        <button className='btn btn-danger mx-2'>Xoá</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-center">
                        <Link className='btn btn-success mx-2'>Cập nhật</Link>
                        <button className='btn btn-danger mx-2'>Xoá</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-center">
                        <Link className='btn btn-success mx-2'>Cập nhật</Link>
                        <button className='btn btn-danger mx-2'>Xoá</button>
                      </td>
                    </tr>
                    
                   
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
