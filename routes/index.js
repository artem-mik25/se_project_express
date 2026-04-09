const router = require("express").Router();
const usersRouter = require("./users");
const clothingItemsRouter = require("./clothingItems");
const { createUser, login } = require("../controllers/users");
const auth = require("../middlewares/auth");
const NotFoundError = require("../errors/NotFoundError");
const { validateSignin, validateSignup } = require("../middlewares/validation");

router.post("/signin", validateSignin, login);

router.post("/signup", validateSignup, createUser);

router.use("/users", auth, usersRouter);
router.use("/items", clothingItemsRouter);

router.use((req, res, next) => {
  next(new NotFoundError("Requested resource not found"));
});

module.exports = router;
