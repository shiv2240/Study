const Recipe = require("../models/recipe.model.js");
const User = require("../models/user.model.js");

module.exports.addRecipe = async (req, res) => {
  try {
    const {
      title,
      description,
      ingredients,
      instructions,
      author,
      views,    
      createdAt,
    } = req.body;

    if (!title || !description || !ingredients || !instructions || !author) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    const user = await User.findById(author);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const recipe = await Recipe.create({
      title,
      description,
      ingredients,
      instructions,
      author,
      views: views || 0,
      createdAt: createdAt || Date.now(),
    });

    res.status(201).json({ message: "Recipe added successfully", recipe });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.getAllRecipes = async(req,res)=>{
  try{
    const recipes = await Recipe.find();
    if(!recipes || recipes.length ===0){
      return res.status(404).json({message:"No recipes found"});
    }
    res.status(200).json({message:"All recipes", recipes})
  }catch(err){
    res.status(500).json({ message: err.message });
  }
}