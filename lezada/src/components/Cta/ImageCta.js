import { Container, Row, Col } from "react-bootstrap";
import Anchor from "../anchor";

const ImageCta = ({ image, tags, title, url }) => {
  return (
    <div className="image-cta text-center space-mb--r100">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            {/*=======  image  =======*/}
            <div className="image-cta__image space-mb--35">
              <img
                src={process.env.PUBLIC_URL + image}
                className="img-fluid"
                alt=""
              />
            </div>
            {/*=======  tags  =======*/}
            <div className="image-cta__tags space-mb--35">
              <ul>
                {tags &&
                  tags.map((tag, i) => {
                    return (
                      <li key={i}>
                        <Anchor path={url}>
                          #{tag}
                        </Anchor>
                      </li>
                    );
                  })}
              </ul>
            </div>

            {/*=======  content  =======*/}
            <div className="image-cta__content">
              <h2
                className="space-mb--30"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <Anchor path={url} className="lezada-button lezada-button--medium">
                shop now
              </Anchor>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ImageCta;
