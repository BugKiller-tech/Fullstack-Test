import { useEffect, useState } from "react";
import { AppBar, Container, Toolbar, Box, Typography } from "@mui/material";
import { MenuModel } from "models/ui";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "styles/Header.module.scss";
import classNames from "classnames";

const mainMenus: MenuModel[] = [
  {
    label: "SHOP",
    slug: "/shop",
    subMenu: ["shop1", "shop2", "shop3"],
  },
  {
    label: "RECIPES",
    slug: "/recipes",
    subMenu: ["categories", "collections", "resources"],
  },
  {
    label: "LEARN",
    slug: "/learn",
    subMenu: ["learn1", "learn2", "learn3"],
  },
  {
    label: "ABOUT",
    slug: "/about",
    subMenu: ["about1", "about2", "about3"],
  },
  {
    label: "BLOG",
    slug: "/blog",
    subMenu: ["blogsub1", "blogsub2", "blogsub3"],
  },
];

const Header = () => {
  const router = useRouter();

  const [selectedMenu, setSelectedMenu] = useState<MenuModel | undefined>(
    mainMenus[0]
  );

  useEffect(() => {
    const currentMenu = mainMenus.find((menu) =>
      router.asPath.startsWith(menu.slug)
    );
    setSelectedMenu(currentMenu);
  }, [router.asPath]); // use router.asPath asintead of router.pathname because pathname will be '/_error' in case 404

  console.log("RRRRR", router);

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{ boxShadow: "none", minHeight: "120px" }}
      className={styles.header}
    >
      <Box>
        <Container maxWidth="lg" sx={{ position: "relative" }}>
          <Box sx={{ position: "absolute", left: 0, top: 0 }}>
            <Link href="/">
              <Image
                alt="logo"
                width={100}
                height={100}
                src="https://seeklogo.com/images/G/gorilla-face-logo-6AC0FFCF5A-seeklogo.com.png"
              />
            </Link>
          </Box>

          <Toolbar disableGutters sx={{ ml: "120px" }}>
            {mainMenus.map((menu) => (
              <Link
                href={menu.slug}
                key={menu.label}
                className={classNames({
                  "main-menu-item": true,
                  active: router.asPath.startsWith(menu.slug),
                })}
              >
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  {menu.label}
                </Typography>
              </Link>
            ))}
          </Toolbar>
        </Container>
      </Box>
      {selectedMenu && (
        <Box sx={{ backgroundColor: "headerBg" }}>
          <Container maxWidth="lg">
            <Toolbar
              disableGutters
              sx={{ ml: "120px", minHeight: "50px !important" }}
            >
              {selectedMenu.subMenu.map((label) => (
                <Link
                  href={`${selectedMenu.slug}/${label.toLowerCase()}`}
                  key={label}
                  className={classNames({
                    "main-menu-item": true,
                  })}
                >
                  <Typography
                    variant="body2"
                    sx={{ mr: 3, textTransform: "uppercase" }}
                  >
                    {label}
                  </Typography>
                </Link>
              ))}
            </Toolbar>
          </Container>
        </Box>
      )}
    </AppBar>
  );
};

export default Header;
