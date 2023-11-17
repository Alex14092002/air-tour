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
import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useDropzone } from "react-dropzone";
function UpdateTour() {
  const { id } = useParams();
  const [guideData, setGuideData] = useState([]);
  const [startpoint, setStartPoint] = useState([]);
  const [endpoint, setEndPoint] = useState([]);
  const [category, setCategory] = useState([]);
  const [uploadedImage, setUploadedImage] = useState(null)
  const [data, setData] = useState({});
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  const handleChange = (value) => {
    setData((prevState) => ({
      ...prevState,
      detail: value,
    }));
  };
  

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`http://localhost:8888/api/tour/detail/${id}`);
      const dataAPI = await res.json();

      setData(dataAPI.tour);
    };

    getData();

    const getGuide = async () => {
      const res = await fetch(`http://localhost:8888/api/user`);
      const dataAPI = await res.json();
      setGuideData(dataAPI);
    };
    getGuide();

    const getStartPoint = async () => {
      const res = await fetch(`http://localhost:8888/api/pointstart`);
      const dataAPI = await res.json();
      setStartPoint(dataAPI);
    };
    getStartPoint();

    const getEndPoint = async () => {
      const res = await fetch(`http://localhost:8888/api/pointend`);
      const dataAPI = await res.json();
      setEndPoint(dataAPI);
    };
    getEndPoint();

    const getCategory = async () => {
      const res = await fetch(`http://localhost:8888/api/category`);
      const dataAPI = await res.json();
      setCategory(dataAPI);
    };
    getCategory();
  }, []);

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
                          name="name"
                          value={data.name}
                          onChange={handleInputChange}
                          placeholder="Tên tour"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="3">
                      <FormGroup>
                        <label>Thời gian tour</label>
                        <Input
                          name="time"
                          value={data.time}
                          onChange={handleInputChange}
                          placeholder="Thời gian "
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="3">
                      <FormGroup>
                        <label>Ngày bắt đầu</label>
                        <Input
                          name="dateStart"
                          value={data.dateStart}
                          onChange={handleInputChange}
                          type="text"
                        />
                      </FormGroup>
                    </Col>

                    <Col className="px-md-1" md="3">
                      <FormGroup>
                        <label>Địa điểm bắt đầu</label>
                        <Input
                          type="select"
                          name="locationStart"
                          onChange={handleInputChange}
                          value={data.locationStart}
                          id="exampleSelect"
                        >
                          <option>Chọn địa điểm bắt đầu</option>
                          {startpoint &&
                            startpoint.map((value) => {
                              return (
                                <>
                                  <option value={value.name}>
                                    {value.name}
                                  </option>
                                </>
                              );
                            })}
                        </Input>
                      </FormGroup>
                    </Col>

                    <Col className="px-md-1" md="3">
                      <FormGroup>
                        <label>Địa điểm kết thúc</label>
                        <Input
                          type="select"
                          name="locationEnd"
                          value={data.locationEnd}
                          onChange={handleInputChange}
                          id="exampleSelect"
                        >
                          <option>Chọn địa điểm kết thúc</option>
                          {endpoint &&
                            endpoint.map((value) => {
                              return (
                                <>
                                  <option value={value.name}>
                                    {value.name}
                                  </option>
                                </>
                              );
                            })}
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="d-flex ">
                    <FormGroup className="mx-2">
                      <label>Giá người lớn</label>
                      <Input
                        name="oldPrice"
                        value={data.oldPrice}
                        onChange={handleInputChange}
                        placeholder="Giá người già"
                        type="text"
                      />
                    </FormGroup>

                    <FormGroup>
                      <label>Giá trẻ em</label>
                      <Input
                        name="childrenPrice"
                        value={data.childrenPrice}
                        onChange={handleInputChange}
                        placeholder="tên tài khoản"
                        type="text"
                      />
                    </FormGroup>
                    <Col className="px-md-1" md="3">
                      <FormGroup>
                        <label>Phương tiện</label>
                        <Input
                          name="plant"
                          value={data.plant}
                          onChange={handleInputChange}
                          placeholder="Phương tiện"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="3">
                      <FormGroup>
                        <label>Số lượng khách</label>
                        <Input
                          name="maxGuest"
                          value={data.maxGuest}
                          onChange={handleInputChange}
                          placeholder="Số khách tối đa"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="3">
                      <FormGroup>
                        <label>Số khách người lớn</label>
                        <Input
                          name="oldGuest"
                          value={data.oldGuest}
                          onChange={handleInputChange}
                          placeholder="Số khách người lớn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="3">
                      <FormGroup>
                        <label>Số khách trẻ em</label>
                        <Input
                          name="childGuest"
                          value={data.childGuest}
                          onChange={handleInputChange}
                          placeholder="Số khách người lớn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-md-1" md="3">
                      <FormGroup>
                        <label>Mô tả</label>
                        <Input
                          name="des"
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
                          type="select"
                          name="idGuide"
                          onChange={handleInputChange}
                          value={data.idGuide}
                        >
                          <option>Chọn hướng dẫn viên</option>
                          {guideData &&
                            guideData.map((value) => {
                              if (value.role === "guide") {
                                return (
                                  <>
                                    <option value={value._id}>
                                      {value.name}
                                    </option>
                                  </>
                                );
                              }
                            })}
                        </Input>
                      </FormGroup>
                    </Col>

                    <Col className="px-md-1" md="3">
                      <FormGroup>
                        <label>Chọn ảnh cho tour</label>
                        <Input
                          name="imgDetail"
                          value={data.imgDetail}
                          onChange={handleInputChange}
                          placeholder="ảnh"
                          type="text"
                        />
                      </FormGroup>
                    </Col>

                    <Col className="px-md-1" md="3">
                      <FormGroup>
                        <label>Chọn các địa điểm cho tour</label>
                        <Input
                          name="detailLocation"
                          value={data.detailLocation}
                          onChange={handleInputChange}
                          placeholder="các địa điểm"
                          type="text"
                        />
                      </FormGroup>
                    </Col>

                    <Col className="px-md-1" md="3">
                      <FormGroup>
                        <label>Danh mục</label>
                        <Input
                          type="select"
                          name="category"
                          onChange={handleInputChange}
                          value={data.category}
                        >
                          <option>chọn danh mục</option>
                          {category &&
                            category.map((value) => {
                              return (
                                <>
                                  <option value={value._id}>
                                    {value.name}
                                  </option>
                                </>
                              );
                            })}
                        </Input>
                      </FormGroup>
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
                    <Editor
                     onInit={(evt, editor) => (editorRef.current = editor)}
                     initialValue={data.detail}
                      init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                          "advlist autolink lists link image charmap print preview anchor",
                          "searchreplace visualblocks code fullscreen",
                          "insertdatetime media table paste code help wordcount",
                        ],
                        toolbar:
                          "undo redo | formatselect | " +
                          "bold italic backcolor | alignleft aligncenter " +
                          "alignright alignjustify | bullist numlist outdent indent | " +
                          "removeformat | help image" ,
                        content_style:
                          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                      }}

                      onEditorChange={(content, editor) => {
                        setData((prevState) => ({
                          ...prevState,
                          detail: content,
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
