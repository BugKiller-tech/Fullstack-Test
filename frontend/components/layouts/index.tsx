import { Container } from "@mui/material";
import Header from "components/layouts/header";
import { ReactNode } from "react";

interface PropsType {
  children: ReactNode;
}

const Layout = ({ children }: PropsType) => {
  return (
    <div>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 3 }}>
        {children}
      </Container>
    </div>
  );
};

export default Layout;
