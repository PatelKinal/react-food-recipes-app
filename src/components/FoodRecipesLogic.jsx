const FoodRecipesLogic = (props) => {
  return (
        <div className="wrapper">
          <a href={props.source_url} target="_blank">
            <img
                src={props.image_url} alt="Pizza Dough" 
                className="recipe_img"
            />
            <p className="recipe_name">Title: {props.title}</p>
            <p className="recipe_pub">Publisher: {props.publisher}</p>
          </a>
        </div>
  ) 
}

export default FoodRecipesLogic
