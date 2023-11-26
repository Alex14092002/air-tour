import { useState, useEffect } from "react";
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

function AddLocation({}) {
  
  const { type } = useParams();
  const [data, setData] = useState({
    name: "",
    img : "",
    des : ""
  });



  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setData((prevState) => ({
      ...prevState, // Create a copy of the existing state
      [name]: value, // Update the specific property
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Send the updated data to the backend
    try {
      const response = await fetch(`http://localhost:8888/api/${type}/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        alert("thêm địa điểm thành công!");
        console.log(data);
      } else {
        alert("Có lỗi xảy ra, vui lòng thử lại sau!");
      }
    } catch (error) {
      console.error(error);
      alert("Có lỗi xảy ra, vui lòng thử lại sau!");
    }
  };



  
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h5 className="title">Thêm địa điểm</h5>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <Row>
                  <Col className="px-md-1" md="3">
                      <FormGroup>
                        <label>Tên điạ điểm</label>
                        <Input
                          name="name"
                          value={data.name}
                          onChange={handleInputChange}  
                          placeholder="Tên địa điểm"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="3">
                      <FormGroup>
                        <label>URL ảnh Địa Điểm</label>
                        <Input
                          name="img"
                          
                          value={data.img}
                          onChange={handleInputChange}  
                          placeholder="url ảnh địa điểm"
                          type="text"
                        />
                        
                      </FormGroup>
                    </Col>  
                    <Col className="px-md-1" md="12">
                      <FormGroup>
                        <label>Mô tả địa điểm</label>
                        <Input
                          name="des"
                          value={data.des}
                          onChange={handleInputChange}  
                          placeholder="Mô tả địa điểm"
                          type="text"
                        />
                        
                      </FormGroup>
                    </Col>  
                  </Row>
                  <Button className="btn-fill" color="primary" type="submit">
                    Save
                  </Button>
                </Form>
              </CardBody>
              <CardFooter></CardFooter>
            </Card>
          </Col>
        </Row>
       
      </div>

    
    </>
  );
}

export default AddLocation;
