import { GetServerSideProps } from "next";
import axios from "axios";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import Link from "next/link";
import { Recipe } from "models/data";

interface PropsType {
  category: string;
  recipes: Recipe[];
}

const Category = ({ category, recipes }: PropsType) => {
  return (
    <Box>
      <Typography>Category: {category}</Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {recipes.map((recipe) => (
          <Link
            href={`/recipes/categories/${category}/${recipe.id}`}
            key={recipe.name}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={recipe.name}
                secondary={`Bake: ${recipe.bake}`}
              />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps<PropsType> = async (
  context
) => {
  // To demonstrate server side rendering..

  const category = (context.params?.category || "") as string;

  let recipes = [];
  try {
    const response = await axios.get(
      `${process.env.SERVER_URL}/api/recipes/?category=${category}`
    );
    recipes = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      category,
      recipes,
    },
  };
};

export default Category;
