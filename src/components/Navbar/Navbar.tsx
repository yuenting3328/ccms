import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import { NavBarContainer } from "../../globalStyle";
import FontIconButton from "../Button/FontIconButton";
import { ReactComponent as FontSmallIcon } from "../../assets/Font Size Small.svg"; 
import { ReactComponent as FontMediumIcon } from "../../assets/Font Size Medium.svg";
import { ReactComponent as FontLargeIcon } from "../../assets/Font Size.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import SelectField from "../Select/SelectField";
import { useFormik } from "formik";
import * as Yup from "yup";

const StyledLogoIcon = styled(Logo)`
  position: flex;
`;

const data = [
  {
    name: "SIP TEAM K1A CAPO K",
    value: 1,
  },
  {
    name: "Test Title 2",
    value: 2,
  },
  {
    name: "Test Title 3",
    value: 3,
  },
  {
    name: "Test Title 4",
    value: 4,
  },
];

const Nav = styled.nav`
  background: #FCFCFC;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;
 margin-bottom: 3%;
 position: "sticky";
`;

// const h1 = styled.h1`
//   font-color: #333D47;
//   font-family: "inter";
//   font-weigh: 700;
//   justify-content: center;
//   align-items: center;
//   font-size: 1rem;
//   top: 0;
//   z-index: 999;
//   /* margin-bottom: %; //TEMP style */
// `;

const NavbarContainer = styled(NavBarContainer)`
  display: flex;
  justify-content: space-between;
  height: 52px;
  position: "sticky";
  z-index:2000;

  ${NavBarContainer}
`;

const NavbarTitle = styled.h1`
  font-color: #333D47;
  font-family: "inter";
  font-weigh: 700;
  justify-content: left;
  align-items: left;
  font-size: 1rem;
// `;

// const date = new Date();

const StyledTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

`

const StyledContainer = styled.div`
  display: flex;
`

const StyledStroke = styled.div`
  display: flex;
  width: 1px;
  background-color: #FFF;
  margin: 10px;
  position: "sticky";
  z-index:2000;
`

const StyledAccountContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px;
  gap: 1rem;
  
`
// const ServerDate = styled.div`
//   display: flex;
//   align-items: center;
//   color: #fff;
// `;

const Navbar = () => {
  const formik = useFormik ({
    initialValues: {
      refNo: "",
      ApplicationType: "",
      date: null,
      scheme: null,
      filterProps: [],
    },
    validationSchema: Yup.object({
      refNo: Yup.string().min(5, "Must be 5 characters at least"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Nav>
      <NavbarContainer>
      <StyledTitleContainer>
      <StyledLogoIcon/>
        <NavbarTitle>
        CAPO Case Management System (CCMS)
        </NavbarTitle>
        </StyledTitleContainer>
        <StyledContainer>
        <StyledStroke />
        <StyledAccountContainer>
        <NavbarTitle>
        SIP 45678 LAW
        </NavbarTitle>
        <SelectField
                    name={"ApplicationType"}
                    id={"appl-type"}
                    // label={"Application Type"}
                    placeholder={"Please Input"}
                    value={formik.values.ApplicationType}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.ApplicationType &&
                      Boolean(formik.errors.ApplicationType)
                    }
                    data={data}
                  />
        <FontIconButton
            id={"fontsmall"}
            ariaLabel="fontsmall"
            onClick={() => console.log("fontsmall")}
          >
            <FontSmallIcon/>
          </FontIconButton>

          <FontIconButton
            id={"fontmedium"}
            ariaLabel="fontmedium"
            onClick={() => console.log("fontmedium")}
          >
            <FontMediumIcon/>
          </FontIconButton>

          <FontIconButton
            id={"fontlarge"}
            ariaLabel="fontlarge"
            onClick={() => console.log("fontlarge")}
          >
            <FontLargeIcon/>
          </FontIconButton>
          </StyledAccountContainer>
        {/* <ServerDate>
          {date.getDate() +
            "/" +
            (date.getMonth() + 1) +
            "/" +
            date.getFullYear()}
        </ServerDate> */}
        </StyledContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
