const { addRecipe, getAllRecipes } = require("../middlewares/recipe.middle");

const router = require("express").Router();

router.post("/addRecipe", addRecipe);
router.get("/getAllRecipes", getAllRecipes);
module.exports = router;
