import React from "react";
import styled from "styled-components";
import { CourierBoldWhite20px, CourierBoldBlueberry30px } from "../../styledMixins";


function FirstQ(props) {
  const { className } = props;

  return (
    <FirstQ1 className={`first-q ${className || ""}`}>
      <X1WhenCanIStartMinting className="x1-when-can-i-start-minting">
        <Span015 className="span0-15">1.W</Span015>
        <Span015 className="span1-15">hen </Span015>
        <Span015 className="span2-15">can </Span015>
        <Span015 className="span3">I start minting?</Span015>
      </X1WhenCanIStartMinting>
      <TheDateForTheUpc className="the-date-for-the-upc">
        The date for the upcoming mint is available when pushing the mint button at the top of the page
      </TheDateForTheUpc>
    </FirstQ1>
  );
}

const FirstQ1 = styled.div`
  width: 1145px;
  height: 103px;
  margin-top: 101px;
  margin-left: 9px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.first-q.second-q {
    margin-top: 26px;
  }

  &.first-q.third-q {
    margin-top: 26px;
  }

  &.first-q.fourth-q {
    margin-top: 26px;
  }

  &.first-q.fifth-q {
    margin-top: 26px;
  }
`;

const X1WhenCanIStartMinting = styled.div`
  ${CourierBoldBlueberry30px}
  min-height: 34px;
  min-width: 721px;
  text-align: center;
  letter-spacing: 9px;
`;

const Span015 = styled.span`
  ${CourierBoldBlueberry30px}
  letter-spacing: 2.70px;
`;

const TheDateForTheUpc = styled.div`
  ${CourierBoldWhite20px}
  width: 1145px;
  min-height: 46px;
  margin-top: 23px;
  text-align: center;
  letter-spacing: 6px;
`;

export default FirstQ;
