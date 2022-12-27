import { Grid, Card, Text, Row, Col, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const MovieItem = (props) => {
  const { movieData } = props;

  return (
    <Grid md={3} sm={4} xs={6}>
      <Card css={{ w: "100%", h: "400px" }}>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${movieData.poster_path}`}
            objectFit="cover"
            width="100%"
            height="100%"
            alt={movieData.title}
          />
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: "absolute",
            bgBlur: "#0f111466",
            borderTop: "$borderWeights$light solid $gray800",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row>
            <Col>
              <Row>
                <Text color="#d1d1d1" size={24}>
                  {movieData.title}
                </Text>
              </Row>
              <Row>
                <Text color="#d1d1d1" size={12}>
                  {movieData.release_date}
                </Text>
              </Row>
            </Col>
            <Col>
              <Row justify="flex-end">
                <Button
                  flat
                  auto
                  rounded
                  css={{ color: "#94f9f0", bg: "#94f9f026" }}
                >
                  <Link to={`/detail/${movieData.id}`}>
                    <Text
                      css={{ color: "inherit" }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      Xem chi tiết
                    </Text>
                  </Link>
                </Button>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default MovieItem;
