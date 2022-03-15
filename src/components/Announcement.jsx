import styled from '@emotion/styled';

const Container = styled.div`
  height: 40px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:16px;
  font-weight: 600;
`;

const Announcement = () => {
  return <Container>Announcement Free shipping</Container>;
};

export default Announcement;
