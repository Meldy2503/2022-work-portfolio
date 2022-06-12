import styled from "styled-components";
import bg1 from "../../assests/bgimg1.jpeg";
import bg2 from "../../assests/bgimg2.jpeg";
export const Container = styled.section``;
export const DisplayContents = styled.div``;
export const Col1 = styled.div`
  height: 100vh;
  background-image: url(${bg1});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  filter: contrast(110%) brightness(115%);
`;
export const Col2 = styled(Col1)`
  background-image: url(${bg2});
`;
