import  styled  from 'styled-components';
import CatergoriesItem from './CatergoriesItem';
import { categories } from '../data';
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding:20px;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;

const Categories = () => {
  return (
    <Container>

      {categories.map(item=>(
      <CatergoriesItem item={item} key={item.id} />
      ))}

    </Container>
  );
};

export default Categories;
