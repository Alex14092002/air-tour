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
  }
};
export default orderController