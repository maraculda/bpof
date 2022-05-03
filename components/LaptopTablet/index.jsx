import React from "react";
import styled from "styled-components";
import "./LaptopTablet.css";

function LaptopTablet(props) {
  const { overlapGroup } = props;

  return (
    <div className="container-center-horizontal">
      <div className="laptop-tablet screen">
        <OverlapGroup style={{ backgroundImage: `url(${overlapGroup})` }}>
          <Frame2 src="/img/frame-2@2x.svg" />
          <Group1 src="/img/group-1@2x.svg" />
          <MaskGroup src="/img/mask-group@2x.svg" />
        </OverlapGroup>
        <a href="https://discord.gg/BDWgpaxA8N" target="_blank">
          <CONTACT>
            <FindUsOn src="/img/find-us-on@2x.svg" />
            <Vector src="/img/vector@2x.svg" />
            <a href="https://instagram.com/bpofgaming?igshid=YmMyMTA2M2Y" target="_blank">
              <IconInstagram src="/img/vector-1@2x.svg" />
            </a>
            <a href="https://twitter.com/bpofgaming?s=11&t=faJOTbiby4fD8Z6L209ZCMMOH2joq-SaB31fRybQFM8" target="_blank">
              <IconInstagram src="/img/vector-2@2x.svg" />
            </a>
          </CONTACT>
        </a>
      </div>
    </div>
  );
}

const OverlapGroup = styled.div`
  width: 1287px;
  z-index: 1;
  margin-top: -6.53px;
  display: flex;
  flex-direction: column;
  padding: 215.5px 372.4px;
  align-items: flex-start;
  min-height: 920px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Frame2 = styled.img`
  width: 541px;
  height: 111px;
  align-self: flex-end;
  margin-top: 45px;
`;

const Group1 = styled.img`
  width: 359px;
  height: 105px;
  align-self: center;
  margin-top: 42px;
  margin-left: 2px;
`;

const MaskGroup = styled.img`
  width: 36px;
  height: 66px;
  margin-top: 120px;
  margin-left: 24.07px;
`;

const CONTACT = styled.div`
  position: fixed;
  width: 55px;
  top: 222px;
  left: 1188px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 476px;
  transform: rotate(180deg);
  cursor: pointer;
`;

const FindUsOn = styled.img`
  width: 11px;
  height: 219px;
  margin-top: -15px;
  margin-left: 2.45px;
  transform: rotate(-180deg);
`;

const Vector = styled.img`
  width: 52px;
  height: 53px;
  margin-top: 52px;
  margin-left: 3px;
  transform: rotate(-180deg);
`;

const IconInstagram = styled.img`
  width: 52px;
  height: 53px;
  margin-top: 30px;
  margin-left: 3px;
  transform: rotate(-180deg);
  cursor: pointer;
`;

export default LaptopTablet;
