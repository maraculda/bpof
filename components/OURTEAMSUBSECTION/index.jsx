import React from "react";
import styled from "styled-components";
import { CourierBoldWhite45px } from "../../styledMixins";


function OURTEAMSUBSECTION(props) {
  const { ourTeam, className } = props;

  return (
    <OURTEAMSUBSECTION1 className={`our-team-subsection ${className || ""}`} id="our-team-subsection">
      <Frame className="frame-4">
        <OverlapGroup3 className="overlap-group3-2">
          <Group className="group-10" src="/img/group-2@1x.svg" />
          <Vector className="vector-612" src="/img/vector-10@2x.svg" />
          <Vector1 className="vector-613" src="/img/vector-11@2x.svg" />
          <Vector2 className="vector-614" src="/img/vector-12@2x.svg" />
          <Vector3 className="vector-615" src="/img/vector-13@2x.svg" />
          <Vector4 className="vector-616" src="/img/vector-14@2x.svg" />
          <Vector5 className="vector-617" src="/img/vector-15@2x.svg" />
          <ROADMAPTITLE className="roadmap-title-1">
            <LineContainer className="line-container-4">
              <Line6 className="line-6-4" src="/img/line-6-2@2x.svg" />
              <Line7 className="line-7-4" src="/img/line-7-2@2x.svg" />
            </LineContainer>
            <OverlapGroup2 className="overlap-group2-2">
              <OURTEAM className="our-team-1">{ourTeam}</OURTEAM>
              <LineContainer1 className="line-container-5">
                <Line6 className="line-6-5" src="/img/line-6-3@2x.svg" />
                <Line7 className="line-7-5" src="/img/line-7-3@2x.svg" />
              </LineContainer1>
            </OverlapGroup2>
          </ROADMAPTITLE>
        </OverlapGroup3>
      </Frame>
    </OURTEAMSUBSECTION1>
  );
}

const OURTEAMSUBSECTION1 = styled.div`
  display: flex;
  width: 1489px;
  height: 132px;
  align-self: flex-end;
  margin-top: 59px;
  margin-right: 1px;
  align-items: flex-start;
  justify-content: space-around;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  background-color: var(--black);

  &.our-team-subsection.faq-subsection {
    height: 116px;
    margin-top: 98px;
  }
`;

const Frame = styled.div`
  height: 97px;
  width: 597px;
  display: flex;
  padding: 2.3px 0;
  align-items: flex-start;
  overflow: hidden;
`;

const OverlapGroup3 = styled.div`
  width: 602px;
  height: 91px;
  position: relative;
  margin-left: -2px;
`;

const Group = styled.img`
  position: absolute;
  width: 591px;
  height: 76px;
  top: 9px;
  left: 5px;
`;

const Vector = styled.img`
  position: absolute;
  width: 19px;
  height: 48px;
  top: 22px;
  left: 582px;
`;

const Vector1 = styled.img`
  position: absolute;
  width: 20px;
  height: 48px;
  top: 22px;
  left: 0;
`;

const Vector2 = styled.img`
  position: absolute;
  width: 37px;
  height: 15px;
  top: 0;
  left: 115px;
`;

const Vector3 = styled.img`
  position: absolute;
  width: 37px;
  height: 15px;
  top: 77px;
  left: 113px;
`;

const Vector4 = styled.img`
  position: absolute;
  width: 37px;
  height: 15px;
  top: 77px;
  left: 449px;
`;

const Vector5 = styled.img`
  position: absolute;
  width: 37px;
  height: 15px;
  top: 2px;
  left: 450px;
`;

const ROADMAPTITLE = styled.div`
  position: absolute;
  height: 47px;
  top: 17px;
  left: 56px;
  display: flex;
  align-items: flex-start;
  min-width: 483px;
`;

const LineContainer = styled.div`
  width: 52px;
  height: 38px;
  position: relative;
  margin-left: -3px;
  align-self: flex-end;
  margin-bottom: -0.81px;
`;

const Line6 = styled.img`
  position: absolute;
  width: 50px;
  height: 37px;
  top: 0;
  left: 0;
`;

const Line7 = styled.img`
  position: absolute;
  width: 50px;
  height: 37px;
  top: 1px;
  left: 2px;
`;

const OverlapGroup2 = styled.div`
  width: 423px;
  height: 47px;
  position: relative;
  margin-left: 10px;
`;

const OURTEAM = styled.div`
  ${CourierBoldWhite45px}
  position: absolute;
  width: 372px;
  top: 0;
  left: 0;
  text-align: center;
  letter-spacing: 13.5px;
`;

const LineContainer1 = styled.div`
  position: absolute;
  width: 52px;
  height: 38px;
  top: 9px;
  left: 371px;
`;

export default OURTEAMSUBSECTION;
