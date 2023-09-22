import styled from "styled-components";
import CheckBox from "../../molecules/CheckBox";

const Layout = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: transparent;
  margin-left: ${(props) => props.isNoMobile && "22px"};
  padding-top: ${(props) => props.isNoMobile && "8px"};
`;

export const MenuProjects = ({
  valueFpay,
  valueLandings,
  valueB2C,
  valueLabels,
  valueLapzo,
  valueAus,
  valueDillon,
  valueNidit,
  onChangeFpay,
  onChangeLandings,
  onChangeB2C,
  onChangeLabels,
  onChangeLapzo,
  onChangeAus,
  onChangeDillon,
  onChangeNidit,
  valueColombia,
  onChangeColombia,
  valueVeti,
  onChangeVeti,
  valueUverified,
  onChangeUverified,
  valueClara,
  onChangeClara,
  valueCustom,
  onChangeCustom,
  valueKualiti,
  onChangeKualiti,
  isNoMobile,
}) => {
  return (
    <Layout isNoMobile={isNoMobile}>
      <CheckBox
        label="Portal Fpay - Falabella"
        value={valueFpay}
        checked={valueFpay}
        onChange={onChangeFpay}
      />
      <CheckBox
        label="Landings - Skydropx"
        value={valueLandings}
        checked={valueLandings}
        onChange={onChangeLandings}
      />
      <CheckBox
        label="B2C - Skydropx"
        value={valueB2C}
        checked={valueB2C}
        onChange={onChangeB2C}
      />
      <CheckBox
        label="Labels - Skydropx"
        value={valueLabels}
        checked={valueLabels}
        onChange={onChangeLabels}
      />
      <CheckBox
        label="HomePage - Skydropx"
        value={valueColombia}
        checked={valueColombia}
        onChange={onChangeColombia}
      />
      <CheckBox
        label="Lapzo by lernit"
        value={valueLapzo}
        checked={valueLapzo}
        onChange={onChangeLapzo}
      />
      <CheckBox
        label="aUshuaia.com - custom-xs"
        value={valueAus}
        checked={valueAus}
        onChange={onChangeAus}
      />
      <CheckBox
        label="estudio-dillon.com"
        value={valueDillon}
        checked={valueDillon}
        onChange={onChangeDillon}
      />
      <CheckBox
        label="nidit!"
        value={valueNidit}
        checked={valueNidit}
        onChange={onChangeNidit}
      />
      <CheckBox
        label="Vetinsure - Kinsper"
        value={valueVeti}
        checked={valueVeti}
        onChange={onChangeVeti}
      />
      <CheckBox
        label="Uverified - Kinsper"
        value={valueUverified}
        checked={valueUverified}
        onChange={onChangeUverified}
      />
      <CheckBox
        label="Clara Muzzio - custom-xs"
        value={valueClara}
        checked={valueClara}
        onChange={onChangeClara}
      />
      <CheckBox
        label="custom-xs"
        value={valueCustom}
        checked={valueCustom}
        onChange={onChangeCustom}
      />
      <CheckBox
        label="Grupo Kualiti - custom-xs"
        value={valueKualiti}
        checked={valueKualiti}
        onChange={onChangeKualiti}
      />
    </Layout>
  );
};

export default MenuProjects;
