const router = require("express").Router();
const { celebrate, Joi } = require("celebrate");
const {
  getItems,
  createItem,
  deleteItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingItems");
const auth = require("../middlewares/auth");

const itemIdSchema = celebrate({
  params: Joi.object().keys({
    itemId: Joi.string().hex().length(24).required(),
  }),
});

router.get("/", getItems);

router.post(
  "/",
  auth,
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required().min(2).max(30),
      weather: Joi.string().required().valid("hot", "warm", "cold"),
      imageUrl: Joi.string().required().uri(),
    }),
  }),
  createItem,
);

router.delete("/:itemId", auth, itemIdSchema, deleteItem);
router.put("/:itemId/likes", auth, itemIdSchema, likeItem);
router.delete("/:itemId/likes", auth, itemIdSchema, dislikeItem);

module.exports = router;
