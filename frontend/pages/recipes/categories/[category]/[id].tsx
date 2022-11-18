import { GetServerSideProps } from "next";
import axios from "axios";
import {
  Avatar,
  Box,
  Breadcrumbs,
  Grid,
  Typography,
  Divider,
  Stack,
  Button,
} from "@mui/material";
// import AccessTimeIcon from "@mui/icons-material";
import Image from "next/image";
import {
  AccessTime as AccessTimeIcon,
  GroupWorkOutlined as GroupWorkOutlinedIcon,
  ArrowForwardIos as ArrowForwardIosIcon,
} from "@mui/icons-material";
import { Add as AddIcon, Print as PrintIcon } from "@mui/icons-material";
import Link from "next/link";
import { Recipe } from "models/data";
import { useRouter } from "next/router";

interface PropsType {
  recipe: Recipe | null;
}

const RecipeComp = ({ recipe }: PropsType) => {
  const router = useRouter();

  const breadCumbs = router.asPath.split("/").slice(1, -1);

  return (
    <Box>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={
          <ArrowForwardIosIcon fontSize="small" sx={{ color: "mainColor" }} />
        }
        sx={{ textTransform: "uppercase" }}
      >
        {breadCumbs.map((item, idx) => (
          <Link
            key={idx}
            href={"/" + breadCumbs.slice(0, idx + 1).join("/")}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography fontWeight="bold">{item}</Typography>
          </Link>
        ))}
        <Typography color="text.primary"></Typography>
      </Breadcrumbs>

      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" component="h1">
            {recipe?.name}
          </Typography>

          <Typography variant="body1" sx={{ mt: 10 }} color="gray">
            {recipe?.description}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 5,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTimeIcon fontSize="large" sx={{ mr: 1 }} />
              <Box>
                <Typography variant="body2" fontWeight="bold">
                  PREP
                </Typography>
                <Typography variant="h5">{recipe?.preparation}</Typography>
              </Box>
            </Box>
            <Box>
              <Typography variant="body2" fontWeight="bold">
                BAKE
              </Typography>
              <Typography variant="h5">{recipe?.bake}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" fontWeight="bold">
                TOTAL
              </Typography>
              <Typography variant="h5">{recipe?.total}</Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex" }}>
              <GroupWorkOutlinedIcon fontSize="large" sx={{ mr: 1 }} />
              <Box>
                <Typography variant="body2" fontWeight="bold">
                  YIELD
                </Typography>
                <Typography variant="h5">{recipe?.yield}</Typography>
              </Box>
            </Box>
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" startIcon={<AddIcon />}>
                Delete
              </Button>
              <Button variant="outlined" startIcon={<PrintIcon />}>
                Send
              </Button>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* <Image
            src={recipe?.image || ""}
            width="500"
            height="500"
            alt="No Image."
          ></Image> */}
          <div
            style={{
              width: "100%",
              paddingTop: "75%",
              backgroundImage: `url(${recipe?.image || ""})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps<PropsType> = async (
  context
) => {
  // To demonstrate server side rendering..

  const id = (context.params?.id || "") as string;

  let recipe: Recipe | null = null;
  try {
    const response = await axios.get(
      `${process.env.SERVER_URL}/api/recipes/${id}`
    );
    recipe = response.data;
  } catch (error) {
    console.log(error);
  }

  if (!recipe) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        recipe,
      },
    };
  }
};

export default RecipeComp;
