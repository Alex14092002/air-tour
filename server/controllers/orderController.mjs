import Order from "../models/Order.mjs";

const orderController = {
  getAllOrders: async (req, res) => {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error: "Lỗi khi lấy danh sách đơn hàng" });
    }
  },
  getOrderById: async (req, res) => {
    try {
      const order = await Order.findById(req.params.id);
      if (!order) {
        return res.status(404).json({ error: "Đơn hàng không tồn tại" });
      }
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ error: "Lỗi khi lấy đơn hàng" });
    }
  },
  updateOrderStatus: async (req, res) => {
    try {
      const { status } = req.body;

      if (status === undefined || typeof status !== "boolean") {
        return res.status(400).json({ error: "Trạng thái không hợp lệ" });
      }

      const order = await Order.findByIdAndUpdate(
        req.params.id,
        { status },
        { new: true }
      );
      if (!order) {
        return res.status(404).json({ error: "Đơn hàng không tồn tại" });
      }
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ error: "Lỗi khi cập nhật trạng thái đơn hàng" });
    }
  },
  deleteOrder : async (req, res) => { 
    try {
        const order = await Order.findByIdAndRemove(req.params.id);
        if (!order) {
            return res.status(404).json({ error: 'Đơn hàng không tồn tại' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Lỗi khi xóa đơn hàng' });
    }
  },
  registerTour : async (req , res) =>{
    try {
      const newTour = new Order({
        idUser : req.body.idUser,
        nameUser : req.body.nameUser,
        nameTour : req.body.nameTour,
        phoneUser : req.body.phoneUser,
        quatityOld : req.body.quatityOld,
        quatityChild : req.body.quatityChild,
        quatityNormal : req.body.quatityNormal,
        dateRegister : req.body.dateRegister,
        total : req.body.total
      })
  
      const order = await newTour.save();
      res.status(200).json(order)
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error });
    }

  },
  getOrderByIdUser: async (req, res) => {
    try {
      const userId = req.params.userId; // Giả sử bạn truyền userId qua tham số đường dẫn, bạn có thể điều chỉnh tùy vào cách bạn truyền dữ liệu.
  
      const orders = await Order.find({ idUser: userId });
      
      if (!orders || orders.length === 0) {
        return res.status(404).json({ error: "Không tìm thấy đơn hàng cho người dùng này" });
      }
  
      res.status(200).json(orders);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Lỗi khi lấy đơn hàng của người dùng" });
    }
  },
  
};
export default orderController