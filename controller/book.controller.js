const bookSchema = require("../schema/books.schema");

const getallbooks = async (req, res) => {
  try {
    const book = await bookSchema.find();

    res.status(200).json(book);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const getonebook = async (req, res) => {
  try {
    const { id } = req.params;

    const foundedbook = await bookSchema.findById(id);
    if (!foundedbook) {
      return res.status(404).json({
        message: "book not found",
      });
    }

    res.status(200).json(foundedbook);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const addbook = async (req, res) => {
  
  try {
    const {
      title,
      pages,
      publishedyear,
      publishedhome,
      description,
      period,
      genre,
      imageurl,
    } = req.body;
    await bookSchema.create({
      title,
      pages,
      publishedyear,
      publishedhome,
      description,
      period,
      genre,
      imageurl,
    });
    res.status(201).json({
      messsage: "added new book",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const updatebook = async (req, res) => {
  try {
    const { title,
      pages,
      publishedyear,
      publishedhome,
      description,
      period,
      genre,
      imageurl, } =
      req.body;
    const { id } = req.params;

    const foundedbook = await bookSchema.findById(id);
    if (!foundedbook) {
      return res.status(404).json({
        message: "book not found",
      });
    }
    await bookSchema.findByIdAndUpdate(id, {
      title,
      pages,
      publishedyear,
      publishedhome,
      description,
      period,
      genre,
      imageurl,
    });

    res.status(200).json({
      message: "updated book",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const deletebook = async (req, res) => {
  try {
    const { id } = req.params;

    const foundedbook = await bookSchema.findById(id);
    if (!foundedbook) {
      return res.status(404).json({
        message: "book not found",
      });
    }
    await bookSchema.findByIdAndDelete(id);

    res.status(200).json({
      message: "deleted book",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
    getallbooks,
    getonebook,
    addbook,
    updatebook,
    deletebook
};
