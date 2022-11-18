import { useCallback, useEffect, useState } from "react";
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

const Categories = () => {
  const [categories, setCategories] = useState<string[]>([]);

  const fetchCategories = useCallback(async () => {
    try {
      const response = await axios.get("/api/categories");
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <Box>
      <Typography>Categories</Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {categories.map((category) => (
          <Link href={`/recipes/categories/${category}`} key={category}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={category} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
};

export default Categories;
