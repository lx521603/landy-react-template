import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps } from "./types";
import Block from "../Block"; // ✅ 注意是 ../Block
import { ContactContainer } from "./styles";

const Contact = ({ title, content, id, t }: ContactProps) => {
  return (
    <ContactContainer id={id}>
      <Row justify="center" align="middle">
        <Col
          lg={16}
          md={18}
          sm={22}
          xs={24}
          style={{
            wordWrap: "break-word",
            wordBreak: "break-word",
            overflow: "visible",
            whiteSpace: "normal",
          }}
        >
          <Slide
            direction="left"
            triggerOnce
            style={{ overflow: "visible" }}
          >
            <Block title={title} content={content} />
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
