const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const tagData = await Tag.findAll({ include: [{ model: Product }] })
  } catch (err) {
    res.status(500).json(err)
  }
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const tagData = await Tag.findByPk({ include: [{ model: Product }] })
  } catch (err) {
    res.status(500).json(err)
  }
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create({ tag_name: req.body.tag_name })

    res.status(200).json(newTag)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updatedTagData = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(updatedTagData)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {

  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
