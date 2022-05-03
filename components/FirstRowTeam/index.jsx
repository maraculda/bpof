import React from "react";
import styled from "styled-components";
import { CourierRegularNormalWhite30px2 } from "../../styledMixins";


function FirstRowTeam(props) {
  const { className } = props;

  return (
    <FirstRowTeam1 className={`first-row-team ${className || ""}`}>
      <OverlapGroup8 className="overlap-group8">
        <Rectangle15 className="rectangle-15"></Rectangle15>
        <NameSurnameJobTi className="name-surname-job-ti">
          <span className="span0 courier-regular-normal-white-30px">
            Name Surname
            <br />
          </span>
          <span className="span1 courier-regular-normal-blueberry-20px">
            -job title-
            <br />
          </span>
          <span className="span2 courier-regular-normal-white-18px">
            BSc Computer Science student, software engineer and crypto enthusiast
          </span>
        </NameSurnameJobTi>
      </OverlapGroup8>
      <OverlapGroup12 className="overlap-group12">
        <Rectangle16 className="rectangle-16"></Rectangle16>
        <NameSurnameJobTi className="name-surname-job-ti-1">
          <span className="span0-1 courier-regular-normal-white-30px">
            Name Surname
            <br />
          </span>
          <span className="span1-1 courier-regular-normal-blueberry-20px">
            -job title-
            <br />
          </span>
          <span className="span2-1 courier-regular-normal-white-18px">
            BSc Computer Science student, software engineer and crypto enthusiast
          </span>
        </NameSurnameJobTi>
      </OverlapGroup12>
      <OverlapGroup9 className="overlap-group9">
        <Rectangle16 className="rectangle-17"></Rectangle16>
        <NameSurnameJobTi className="name-surname-job-ti-2">
          <span className="span0-2 courier-regular-normal-white-30px">
            Name Surname
            <br />
          </span>
          <span className="span1-2 courier-regular-normal-blueberry-20px">
            -job title-
            <br />
          </span>
          <span className="span2-2 courier-regular-normal-white-18px">
            BSc Computer Science student, software engineer and crypto enthusiast
          </span>
        </NameSurnameJobTi>
      </OverlapGroup9>
      <OverlapGroup10 className="overlap-group10">
        <Rectangle18 className="rectangle-18"></Rectangle18>
        <NameSurnameJobTi className="name-surname-job-ti-3">
          <span className="span0-3 courier-regular-normal-white-30px">
            Name Surname
            <br />
          </span>
          <span className="span1-3 courier-regular-normal-blueberry-20px">
            -job title-
            <br />
          </span>
          <span className="span2-3 courier-regular-normal-white-18px">
            BSc Computer Science student, software engineer and crypto enthusiast
          </span>
        </NameSurnameJobTi>
      </OverlapGroup10>
      <OverlapGroup11 className="overlap-group11">
        <Rectangle19 className="rectangle-19"></Rectangle19>
        <NameSurnameJobTi className="name-surname-job-ti-4">
          <span className="span0-4 courier-regular-normal-white-30px">
            Name Surname
            <br />
          </span>
          <span className="span1-4 courier-regular-normal-blueberry-20px">
            -job title-
            <br />
          </span>
          <span className="span2-4 courier-regular-normal-white-18px">
            BSc Computer Science student, software engineer and crypto enthusiast
          </span>
        </NameSurnameJobTi>
      </OverlapGroup11>
    </FirstRowTeam1>
  );
}

const FirstRowTeam1 = styled.div`
  width: 1388px;
  margin-top: 108px;
  margin-right: 12px;
  display: flex;
  align-items: flex-start;

  &.first-row-team.fourth-row-team {
    margin-top: 79px;
  }
`;

const OverlapGroup8 = styled.div`
  width: 257px;
  height: 323px;
  position: relative;
`;

const Rectangle15 = styled.div`
  position: absolute;
  width: 175px;
  height: 190px;
  top: 0;
  left: 47px;
  background-color: var(--mist-gray);
`;

const NameSurnameJobTi = styled.div`
  ${CourierRegularNormalWhite30px2}
  position: absolute;
  width: 257px;
  top: 184px;
  left: 0;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup12 = styled.div`
  width: 257px;
  height: 323px;
  position: relative;
  margin-left: 45px;
`;

const Rectangle16 = styled.div`
  position: absolute;
  width: 175px;
  height: 190px;
  top: 0;
  left: 39px;
  background-color: var(--mist-gray);
`;

const OverlapGroup9 = styled.div`
  width: 257px;
  height: 323px;
  position: relative;
  margin-left: 37px;
`;

const OverlapGroup10 = styled.div`
  width: 257px;
  height: 323px;
  position: relative;
  margin-left: 13px;
`;

const Rectangle18 = styled.div`
  position: absolute;
  width: 175px;
  height: 190px;
  top: 0;
  left: 42px;
  background-color: var(--mist-gray);
`;

const OverlapGroup11 = styled.div`
  width: 257px;
  height: 323px;
  position: relative;
  margin-left: 9px;
`;

const Rectangle19 = styled.div`
  position: absolute;
  width: 175px;
  height: 190px;
  top: 0;
  left: 46px;
  background-color: var(--mist-gray);
`;

export default FirstRowTeam;
