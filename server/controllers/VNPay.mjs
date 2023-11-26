import moment from "moment";
import crypto from "crypto";
import querystring from "qs";

// Hàm sắp xếp các thuộc tính của đối tượng theo thứ tự từ điển
const sortObject = (obj) => {
  let sorted = {};
  let str = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      str.push(encodeURIComponent(key));
    }
  }

  str.sort();

  for (let key = 0; key < str.length; key++) {
    sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, "+");
  }

  return sorted;
};

// Hàm tạo đơn hàng
const createOrder = async (req, res, next) => {
  try {
    process.env.TZ = "Asia/Ho_Chi_Minh";
    const date = new Date();
    const createDate = moment(date).format("YYYYMMDDHHmmss");
    const orderId = moment(date).format("DDHHmmss");

    const ipAddr =
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress;
    const tmnCode = process.env.VNP_TMN_CODE;
    const secretKey = process.env.VNP_HASH_SECRET;
    const vnpUrl = process.env.VNP_API_URL;
    const returnUrl = "http://localhost:3000/checkout";
    const amount = req.body.amount;
    const locale = req.body.language || "vn";

    let vnp_Params = {
      vnp_Version: "2.1.0",
      vnp_Command: "pay",
      vnp_TmnCode: tmnCode,
      vnp_Locale: locale,
      vnp_CurrCode: "VND",
      vnp_TxnRef: orderId,
      vnp_OrderInfo: "Thanh toan cho ma GD:" + orderId,
      vnp_OrderType: "other",
      vnp_Amount: amount * 100 ,
      vnp_ReturnUrl: returnUrl,
      vnp_IpAddr: ipAddr,
      vnp_CreateDate: createDate,
    };

    vnp_Params = sortObject(vnp_Params);

    const signData = querystring.stringify(vnp_Params, { encode: false });
    const hmac = crypto.createHmac("sha512", secretKey);
    const signed = hmac.update(Buffer.from(signData, "utf-8")).digest("hex");
    vnp_Params["vnp_SecureHash"] = signed;

    const VNpayUrl =
      vnpUrl + "?" + querystring.stringify(vnp_Params, { encode: false });

    res.json({
      success: true,
      VNpayUrl: VNpayUrl,
    });
  } catch (err) {
    return next(err);
  }
};

// Hàm xử lý callback từ VNPAY
const dataBack = async (req, res, next) => {
  try {
    let vnp_Params = req.query;

    const secureHash = vnp_Params["vnp_SecureHash"];
    const orderId = vnp_Params["vnp_TxnRef"];
    const rspCode = vnp_Params["vnp_ResponseCode"];

    delete vnp_Params["vnp_SecureHash"];
    delete vnp_Params["vnp_SecureHashType"];

    vnp_Params = sortObject(vnp_Params);

    const secretKey = process.env.VNP_HASH_SECRET;

    const signData = querystring.stringify(vnp_Params, { encode: false });
    const hmac = crypto.createHmac("sha512", secretKey);
    const signed = hmac.update(Buffer.from(signData, "utf-8")).digest("hex");

    let paymentStatus = "0"; // Trạng thái khởi tạo

    let checkOrderId = true; // Kiểm tra mã đơn hàng tồn tại
    let checkAmount = true; // Kiểm tra số tiền trùng khớp

    if (secureHash === signed) {
      if (checkOrderId) {
        if (checkAmount) {
          if (paymentStatus == "0") {
            if (rspCode == "00") {
              res.status(200).json({ RspCode: "00", Message: "Success" });
            } else {
              res.status(200).json({ RspCode: "00", Message: "Fail" });
            }
          } else {
            res.status(200).json({
              RspCode: "02",
              Message: "This order has been updated to the payment status",
            });
          }
        } else {
          res.status(200).json({ RspCode: "04", Message: "Amount invalid" });
        }
      } else {
        res.status(200).json({ RspCode: "01", Message: "Order not found" });
      }
    } else {
      res.status(200).json({ RspCode: "97", Message: "Checksum failed" });
    }
  } catch (err) {
    return next(err);
  }
};

export { createOrder, dataBack };
