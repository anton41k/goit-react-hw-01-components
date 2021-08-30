import styled from "@emotion/styled/";

export const Section = styled.section`
  width: 350px;
  background-color: var(--color-white);
  border-radius: 5px;
  margin: 10px auto;
  box-shadow: var(--box-shadow-item);
`;

export const StatsUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

export const StatsItem = styled.li`
  background-color: ${(props) => props.color()};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(68px, 1fr));
  align-items: center;
  border: 1px solid var(--color-bgc-avatar);
  padding: 5px 0;
`;

export const ItemSpan = styled.span`
  text-align: center;
  color: var(--color-white);
`;

export const Title = styled.h2`
  width: 150px;
  margin: 0 auto;
  padding: 20px 0 50px;
`;
