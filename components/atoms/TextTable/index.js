import styled from "styled-components";

export const Table = styled.table`
  background: transparent;
  margin-top: 18px;
  margin-left: 30px;
`;

export const Files = styled.tr`
  background: transparent;
`;

export const Row = styled.td`
  background: transparent;
  color: #607b96;
  font-family: Fira Code;
  font-size: 18px;
  font-style: normal;
  font-weight: 450;
  line-height: 150%;
`;

export const RowNumber = styled.td`
  padding-right: 30px;
  background: transparent;
  color: #607b96;
  font-family: Fira Code;
  font-size: 18px;
  font-style: normal;
  font-weight: 450;
  line-height: 150%;
  text-align: right;
`;

export const RowSymbol = styled.td`
  padding-right: 12px;
  background: transparent;
  color: #607b96;
  font-family: Fira Code;
  font-size: 18px;
  font-style: normal;
  font-weight: 450;
  line-height: 150%;
`;

export const Body = styled.tbody`
  background: transparent;
`;

export const TextTable = ({ data }) => {
  return (
    <Table>
      <Body>
        {data &&
          data?.map((item) => (
            <Files>
              <RowNumber>{item.number}</RowNumber>
              <RowSymbol>{item.symbol}</RowSymbol>
              <Row>{item.text}</Row>
            </Files>
          ))}
      </Body>
    </Table>
  );
};

export default TextTable;
