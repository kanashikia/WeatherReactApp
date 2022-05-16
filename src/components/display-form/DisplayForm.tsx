import "./DisplayForm.css";
import { Button, Form, Input, Spin } from "antd";
import { SendOutlined } from "@ant-design/icons";
import OpenWeatherApiService from "../../services/openWeatherApiService";
import { UseRootDispatch } from "../../hooks/root.hooks";
import { actions } from "../../reducers";

let displayLoader: boolean = false;

function DisplayForm() {
  const dispatch = UseRootDispatch();

  const onFinish = async (values: any) => {
    const openWeatherApiService = new OpenWeatherApiService();
    const data = await openWeatherApiService.getDataByCity(values.city);

    dispatch(actions.addData(data));
    displayLoader = false;
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    displayLoader = false;
  };

  return (
    <div className="container">
      <Form
        name="basic"
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 20 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="inline"
      >
        <Form.Item
          label="City"
          name="city"
          rules={[{ required: true, message: "Please input your city" }]}
        >
          <Input size="large" placeholder="Please input your city" />
        </Form.Item>

        <Form.Item>
          <Button
            className="sendButton"
            type="primary"
            shape="round"
            icon={<SendOutlined />}
            size="middle"
            htmlType="submit"
            onClick={() => {
              displayLoader = true;
            }}
          />
        </Form.Item>
        {displayLoader ? <Spin /> : null}
      </Form>
    </div>
  );
}

export default DisplayForm;
