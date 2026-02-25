const authorSchema = require("../schema/author.schema");

const getallauthors = async (req, res) => {
  try {
    const authors = await authorSchema.find();

    res.status(200).json(authors);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


const search = async (req, res) => {
  try {
    const { searchingValue } = req.query
    const search = await authorSchema.find({
      fulname: { $regex: searchingValue, $options: "i" },
      birthdate: { $req: searchingValue }
    })

    res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

}








const getoneauthor = async (req, res) => {
  try {
    const { name } = req.parms

    const foundedauthor = await authorSchema.findOne({ name })
    if (!foundedauthor) {
      return res.status(404).json({
        message: "author not found"
      })
    }

    res.status(200).json(foundedauthor)
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const addauthor = async (req, res) => {
  try {
    const { fulname, birthdate, deathdate, bio, work, period, imageurl, phone } = req.body;
    await authorSchema.create({
      fulname,
      birthdate,
      deathdate,
      bio,
      work,
      period,
      imageurl,
    });
    res.status(201).json({
      messsage: "added new author",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const updateauthor = async (req, res) => {
  try {
    const { fulname, birthdate, deatdate, bio, work, period, imageurl } = req.body
    const { id } = req.params

    const foundedauthor = await authorSchema.findById(id)
    if (!foundedauthor) {
      return res.status(404).json({
        message: "author not found"
      })
    }
    await authorSchema.findByIdAndUpdate(id, { fulname, birthdate, deatdate, bio, work, period, imageurl })

    res.status(200).json({
      message: "updated auhtor"
    })
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const deleteauthor = async (req, res) => {
  try {

    const { id } = req.params

    const foundedauthor = await authorSchema.findById(id)
    if (!foundedauthor) {
      return res.status(404).json({
        message: "author not found"
      })
    }
    await authorSchema.findByIdAndDelete(id)

    res.status(200).json({
      message: "deleted auhtor"
    })
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getallauthors,
  getoneauthor,
  addauthor,
  updateauthor,
  deleteauthor,
  search
};