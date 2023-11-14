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
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function UpdateTour() {
  const { id } = useParams();
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
    role: "",
  });

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    console.log(data);
  };

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`http://localhost:8888/api/tour/detail/${id}`);
      const dataAPI = await res.json();

      setData(dataAPI.tour);
    };

    getData();
  }, []);
  console.log(data);

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
      const response = await fetch(
        `http://localhost:8888/api/tour/update/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.status === 200) {
        alert("Cập nhật thông tin thành công!");
      } else {
        alert("Có lỗi xảy ra, vui lòng thử lại sau!");
      }
    } catch (error) {
      console.error(error);
      alert("Có lỗi xảy ra, vui lòng thử lại sau!");
    }
  };
  const editorConfiguration = {
    toolbar: [
      'heading',
      'bold',
      'italic',
      'link',
      'bulletedList',
      'numberedList',
      'blockQuote',
      'imageUpload',
      'undo',
      'redo',
      // ...
      'textAlign',
    ],
  };
  

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h5 className="title">Cập nhật thông tin tour</h5>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col className="px-md-1" md="3">
                      <FormGroup>
                        <label>Tên tour</label>
                        <Input
                          name="username"
                          value={data.name}
                          onChange={handleInputChange}
                          placeholder="Tên tour"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">Gía cơ bản</label>
                        <Input
                          name="price"
                          value={data.price}
                          onChange={handleInputChange}
                          placeholder="Giá cơ bản"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="d-flex ">
                    <FormGroup className="mx-2">
                      <label>Giá người già</label>
                      <Input
                        name="text"
                        value={data.oldPrice}
                        onChange={handleInputChange}
                        placeholder="Giá người già"
                        type="text"
                      />
                    </FormGroup>

                    <FormGroup>
                      <label>Giá trẻ em</label>
                      <Input
                        name="username"
                        value={data.childrenPrice}
                        onChange={handleInputChange}
                        placeholder="tên tài khoản"
                        type="text"
                      />
                    </FormGroup>
                  </Row>
                  <Row>
                    <Col className="px-md-1" md="3">
                      <FormGroup>
                        <label>Mô tả</label>
                        <Input
                          name="username"
                          value={data.des}
                          onChange={handleInputChange}
                          placeholder="Mô tả"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="3">
                      <FormGroup>
                        <label>Hướng dẫn viên nhận tour</label>
                        <Input
                          name="idGuide"
                          onChange={handleInputChange}
                          placeholder="Hướng dẫn viên"
                          type="text"
                        />
                      </FormGroup>
                    </Col>

                    <Col className="px-md-1 my-4" md="3">
                      <button className="btn btn-danger">
                        Thiết lập hướng dẫn viên cho tour
                      </button>
                    </Col>
                  </Row>
                  <Col md="6">
                    <label>Trạng thái</label> <br />
                    <select
                      name="role"
                      value={data.role}
                      onChange={handleInputChange}
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option value="pedding">Chưa bắt đầu</option>
                      <option value="start">Đang bắt đầu</option>
                      <option value="middle">Hoàn thành 1/2 tour</option>
                      <option value="completed">Thành hoàn</option>
                      <option value="cancelled">Đã huỷ</option>
                    </select>
                  </Col>

                  <div className="">
                    <h2 className="py-4">Chi tiết tour</h2>
                    <CKEditor
                      editor={ClassicEditor}
                      data={data.detail}
                      config={ editorConfiguration }
                      onReady={(editor) => {
                        editor.editing.view.change((writer) => {});
                      }}
                      onChange={(event, editor) => {
                        const dataCKE = editor.getData();
                        setData((prevState) => ({
                          ...prevState,
                          detail: dataCKE,
                        }));
                      }}
                    />
                  </div>
                  <button type="submit" className="btn btn-danger">
                    Lưu
                  </button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default UpdateTour;
