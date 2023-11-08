import Tour from "../models/Tour.mjs";

const categoryController = {
  getAllTours: async (req, res) => {
    try {
      const tours = await Tour.find();
      res.status(200).json(tours);
    } catch (error) {
      res.status(500).json({ error: "Lỗi khi lấy danh sách tour" });
    }
  },
  getTourById: async (req, res) => {
    try {
      const Tour = await Tour.findById(req.params.id);
      if (!tour) {
        return res.status(404).json({ error: "Tour không tồn tại" });
      }
      res.status(200).json(tour);
    } catch (error) {
      res.status(500).json({ error: "Lỗi khi lấy tour" });
    }
  },
  createTour: async (req, res) => {
    try {
      const tour = new Tour(req.body);
      await tour.save();
      res.status(201).json(tour);
    } catch (error) {
      res.status(500).json({ error: "Lỗi khi tạo tour mới" });
    }
  },
  updateTour: async (req, res) => {
    try {
      const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!tour) {
        return res.status(404).json({ error: "Tour không tồn tại" });
      }
      res.status(200).json(tour);
    } catch (error) {
      res.status(500).json({ error: "Lỗi khi cập nhật tour" });
    }
  },
  deleteTour: async (req, res) => {
    try {
      const tour = await Tour.findByIdAndRemove(req.params.id);
      if (!tour) {
        return res.status(404).json({ error: "Tour không tồn tại" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Lỗi khi xóa tour" });
    }
  },
};
export default categoryController;
