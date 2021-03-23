import { Layout } from "antd";
import "./App.css";
import HeaderComponent from "./layouts/HeaderComponent";
import ContentComponent from "./layouts/ContentComponent";
import FooterComponent from "./layouts/FooterComponent";
import { BrowserRouter as Router } from "react-router-dom";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Router>
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            boxShadow: "0px 0px 10px 0px",
          }}
        >
          <HeaderComponent />
        </Header>
        <Content
          style={{
            padding: "0 50px",
            minHeight: "calc(100vh - 70px - 64px)",
            marginTop: 64,
          }}
        >
          <ContentComponent />
        </Content>
        <Footer
          style={{
            textAlign: "center",
            bottom: 0,
            width: "100%",
            boxShadow: "0px 5px 12px 0px",
          }}
        >
          <FooterComponent />
        </Footer>
      </Router>
    </Layout>
  );
}

export default App;
