import React from "react";
import ROADBOXQ3 from "../ROADBOXQ3";
import OURTEAMSUBSECTION from "../OURTEAMSUBSECTION";
import FirstRowTeam from "../FirstRowTeam";
import SecondRowTeam from "../SecondRowTeam";
import FirstQ from "../FirstQ";
import styled from "styled-components";
import {
  CourierRegularNormalWhite25px,
  CourierBoldWhite25px,
  CourierRegularNormalWhite23px,
  CourierBoldWhite45px,
  Border2pxBlack,
} from "../../styledMixins";
import "./Desktop2.css";

function Desktop2(props) {
  const {
    logo,
    roadmap1,
    stacking1,
    ourTeam,
    faq,
    connectAWallet,
    emptyDarkRoomModernFuturisticSciFiB,
    title,
    subheading,
    roadmap2,
    group3,
    q1Text,
    price1,
    group5,
    q2Text,
    price2,
    stacking2,
    group7,
    phase1,
    phase2,
    phase3,
    stackingPhase1,
    stackingPhase2,
    stackingPhase3,
    stackingDetails,
    whitepaper,
    bpof2022AllRightsReserved,
    rOADBOXQ31Props,
    rOADBOXQ32Props,
    oURTEAMSUBSECTION1Props,
    secondRowTeam1Props,
    firstRowTeamProps,
    secondRowTeam2Props,
    oURTEAMSUBSECTION2Props,
    firstQ1Props,
    firstQ2Props,
    firstQ3Props,
    firstQ4Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-2 screen">
        <OverlapGroup23>
          <NAVBAR>
            <LOGO>
              <Logo>{logo}</Logo>
            </LOGO>
            <NAVBAR1>
              <a href="#roadmap-subsection">
                <ROADMAP>{roadmap1}</ROADMAP>
              </a>
              <a href="#stacking-subsection">
                <STACKING>{stacking1}</STACKING>
              </a>
              <a href="#our-team-subsection">
                <OURTEAM>{ourTeam}</OURTEAM>
              </a>
              <a href="#faq-subsection">
                <FAQ>{faq}</FAQ>
              </a>
              <CONNECTWALLETBUTTON>
                <Frame1>
                  <CONNECTAWALLET>{connectAWallet}</CONNECTAWALLET>
                </Frame1>
              </CONNECTWALLETBUTTON>
            </NAVBAR1>
          </NAVBAR>
          <EmptyDarkRoomModernFuturisticSciFiB src={emptyDarkRoomModernFuturisticSciFiB} />
          <FirstPage>
            <MINTBUTTON>
              <Title>{title}</Title>
            </MINTBUTTON>
            <SUBHEADING>{subheading}</SUBHEADING>
            <CONTACT>
              <FindUsOn src="/img/find-us-on@2x.svg" />
              <Vector src="/img/vector@2x.svg" />
              <Vector1 src="/img/vector-1@2x.svg" />
              <Vector1 src="/img/vector-2@2x.svg" />
              <Vector1 src="/img/vector-3@2x.svg" />
            </CONTACT>
          </FirstPage>
          <a href="#roadbox-q1">
            <ROADMAPSUBSECTION id="roadmap-subsection">
              <Frame>
                <OverlapGroup3>
                  <Group src="/img/group@1x.svg" />
                  <Vector2 src="/img/vector-4@2x.svg" />
                  <Vector3 src="/img/vector-5@2x.svg" />
                  <Vector4 src="/img/vector-6@2x.svg" />
                  <Vector5 src="/img/vector-7@2x.svg" />
                  <Vector6 src="/img/vector-8@2x.svg" />
                  <Vector7 src="/img/vector-9@2x.svg" />
                  <ROADMAPTITLE>
                    <LineContainer>
                      <Line6 src="/img/line-6@2x.svg" />
                      <Line7 src="/img/line-7@2x.svg" />
                    </LineContainer>
                    <OverlapGroup2>
                      <ROADMAP1>{roadmap2}</ROADMAP1>
                      <LineContainer1>
                        <Line6 src="/img/line-6-1@2x.svg" />
                        <Line7 src="/img/line-7-1@2x.svg" />
                      </LineContainer1>
                    </OverlapGroup2>
                  </ROADMAPTITLE>
                </OverlapGroup3>
              </Frame>
            </ROADMAPSUBSECTION>
          </a>
          <ROADBOXQ1 id="roadbox-q1">
            <OverlapGroup4>
              <Group1 src="/img/group-4@1x.svg" />
              <Vector8 src="/img/vector-22@2x.svg" />
              <Vector9 src="/img/vector-23@2x.svg" />
              <Vector10 src="/img/vector-24@2x.svg" />
              <Vector11 src="/img/vector-25@2x.svg" />
              <Vector12 src="/img/vector-26@2x.svg" />
              <Vector13 src="/img/vector-27@1x.svg" />
              <Vector14 src="/img/vector-28@2x.svg" />
              <Vector15 src="/img/vector-29@2x.svg" />
              <Vector16 src="/img/vector-30@1x.svg" />
              <Vector17 src="/img/vector-31@1x.svg" />
              <Vector18 src="/img/vector-32@1x.svg" />
              <Vector19 src="/img/vector-33@1x.svg" />
              <Vector20 src="/img/vector-34@1x.svg" />
              <Vector21 src="/img/vector-35@1x.svg" />
              <Vector22 src="/img/vector-36@1x.svg" />
              <Vector23 src="/img/vector-37@2x.svg" />
              <Vector24 src="/img/vector-38@2x.svg" />
              <Vector25 src="/img/vector-39@2x.svg" />
              <Vector26 src="/img/vector-40@2x.svg" />
              <Vector27 src="/img/vector-41@2x.svg" />
              <Vector28 src="/img/vector-42@2x.svg" />
              <Vector29 src="/img/vector-43@2x.svg" />
              <Vector30 src="/img/vector-44@2x.svg" />
              <Vector31 src="/img/vector-45@2x.svg" />
              <Vector32 src="/img/vector-46@2x.svg" />
              <Vector33 src="/img/vector-47@2x.svg" />
              <Vector34 src="/img/vector-48@2x.svg" />
              <Vector35 src="/img/vector-49@2x.svg" />
              <Vector36 src="/img/vector-50@2x.svg" />
              <Vector37 src="/img/vector-51@2x.svg" />
              <Vector38 src="/img/vector-52@2x.svg" />
              <Vector39 src="/img/vector-53@2x.svg" />
              <Vector40 src="/img/vector-54@2x.svg" />
              <Vector41 src="/img/vector-55@2x.svg" />
              <Vector42 src="/img/vector-56@2x.svg" />
              <Vector43 src="/img/vector-57@2x.svg" />
              <Vector44 src="/img/vector-58@2x.svg" />
              <Vector45 src="/img/vector-59@2x.svg" />
              <Vector46 src="/img/vector-60@2x.svg" />
              <Vector47 src="/img/vector-61@2x.svg" />
              <Vector48 src="/img/vector-62@2x.svg" />
              <Vector49 src="/img/vector-63@2x.svg" />
              <Vector50 src="/img/vector-64@2x.svg" />
              <Vector51 src="/img/vector-65@2x.svg" />
              <Vector52 src="/img/vector-66@2x.svg" />
              <Vector53 src="/img/vector-67@2x.svg" />
              <Vector54 src="/img/vector-68@2x.svg" />
              <Vector55 src="/img/vector-69@2x.svg" />
              <Vector56 src="/img/vector-70@2x.svg" />
              <Vector57 src="/img/vector-71@2x.svg" />
              <Vector58 src="/img/vector-72@2x.svg" />
              <Vector59 src="/img/vector-73@2x.svg" />
              <Vector60 src="/img/vector-74@2x.svg" />
              <Vector61 src="/img/vector-75@2x.svg" />
              <Vector62 src="/img/vector-76@1x.svg" />
              <Vector63 src="/img/vector-77@2x.svg" />
              <Vector64 src="/img/vector-78@2x.svg" />
              <Vector65 src="/img/vector-79@2x.svg" />
              <Vector66 src="/img/vector-80@2x.svg" />
              <Vector67 src="/img/vector-81@2x.svg" />
              <Vector68 src="/img/vector-82@2x.svg" />
              <Vector69 src="/img/vector-83@2x.svg" />
              <Vector70 src="/img/vector-84@2x.svg" />
              <Vector71 src="/img/vector-85@2x.svg" />
              <Vector72 src="/img/vector-86@2x.svg" />
              <Vector73 src="/img/vector-87@1x.svg" />
              <Vector73 src="/img/vector-88@1x.svg" />
              <Vector74 src="/img/vector-89@2x.svg" />
              <Vector75 src="/img/vector-90@2x.svg" />
              <Vector76 src="/img/vector-91@2x.svg" />
              <Vector77 src="/img/vector-92@2x.svg" />
              <Vector78 src="/img/vector-93@2x.svg" />
              <Vector79 src="/img/vector-94@2x.svg" />
              <Vector80 src="/img/vector-95@2x.svg" />
              <Vector81 src="/img/vector-96@2x.svg" />
              <Vector82 src="/img/vector-97@2x.svg" />
              <Vector83 src="/img/vector-98@2x.svg" />
              <Vector84 src="/img/vector-99@2x.svg" />
              <Vector85 src="/img/vector-100@2x.svg" />
              <Vector86 src="/img/vector-101@2x.svg" />
              <Vector87 src="/img/vector-102@2x.svg" />
              <Vector88 src="/img/vector-103@2x.svg" />
              <Vector89 src="/img/vector-104@2x.svg" />
              <Vector90 src="/img/vector-105@2x.svg" />
              <Vector91 src="/img/vector-106@2x.svg" />
              <Vector92 src="/img/vector-107@2x.svg" />
              <Vector93 src="/img/vector-108@2x.svg" />
              <Vector94 src="/img/vector-109@2x.svg" />
              <Vector95 src="/img/vector-110@2x.svg" />
              <Vector96 src="/img/vector-111@2x.svg" />
              <Vector97 src="/img/vector-112@2x.svg" />
              <Vector98 src="/img/vector-113@2x.svg" />
              <Vector99 src="/img/vector-114@2x.svg" />
              <Vector100 src="/img/vector-115@2x.svg" />
              <Vector101 src="/img/vector-116@2x.svg" />
              <Vector102 src="/img/vector-117@2x.svg" />
              <Vector103 src="/img/vector-118@2x.svg" />
              <Vector104 src="/img/vector-119@2x.svg" />
              <Vector105 src="/img/vector-120@2x.svg" />
              <Vector106 src="/img/vector-121@2x.svg" />
              <Vector107 src="/img/vector-122@2x.svg" />
              <Vector108 src="/img/vector-123@2x.svg" />
              <Vector109 src="/img/vector-124@2x.svg" />
              <Vector110 src="/img/vector-125@2x.svg" />
              <Vector111 src="/img/vector-126@2x.svg" />
              <Vector112 src="/img/vector-127@2x.svg" />
              <Vector113 src="/img/vector-128@2x.svg" />
              <Vector114 src="/img/vector-129@2x.svg" />
              <Vector115 src="/img/vector-130@2x.svg" />
              <Vector116 src="/img/vector-131@2x.svg" />
              <Group2 style={{ backgroundImage: `url(${group3})` }}></Group2>
              <Vector117 src="/img/vector-132@2x.svg" />
              <Vector118 src="/img/vector-133@2x.svg" />
              <Vector119 src="/img/vector-134@2x.svg" />
              <Vector120 src="/img/vector-135@2x.svg" />
              <Vector121 src="/img/vector-136@2x.svg" />
              <Vector122 src="/img/vector-137@2x.svg" />
              <Vector123 src="/img/vector-138@2x.svg" />
              <Vector124 src="/img/vector-139@2x.svg" />
              <Vector125 src="/img/vector-140@2x.svg" />
              <Vector126 src="/img/vector-141@2x.svg" />
              <Vector127 src="/img/vector-142@2x.svg" />
              <Vector128 src="/img/vector-143@2x.svg" />
              <Vector129 src="/img/vector-144@2x.svg" />
              <Vector130 src="/img/vector-145@2x.svg" />
              <Vector131 src="/img/vector-146@2x.svg" />
              <Vector132 src="/img/vector-147@2x.svg" />
              <Vector131 src="/img/vector-148@2x.svg" />
              <Vector132 src="/img/vector-149@2x.svg" />
              <Vector133 src="/img/vector-150@2x.svg" />
              <Vector29 src="/img/vector-151@2x.svg" />
              <Vector30 src="/img/vector-152@2x.svg" />
              <Vector31 src="/img/vector-153@2x.svg" />
              <Vector32 src="/img/vector-154@2x.svg" />
              <Vector57 src="/img/vector-155@2x.svg" />
              <Vector59 src="/img/vector-156@2x.svg" />
              <Vector60 src="/img/vector-157@2x.svg" />
              <Vector134 src="/img/vector-158@2x.svg" />
              <Vector58 src="/img/vector-159@2x.svg" />
              <Vector135 src="/img/vector-160@2x.svg" />
              <Q1Text>{q1Text}</Q1Text>
              <Price>{price1}</Price>
            </OverlapGroup4>
          </ROADBOXQ1>
          <Arrow1 src="/img/arrow-1@2x.svg" />
          <Arrow3 src="/img/arrow-3@2x.svg" />
          <OverlapGroup5>
            <Group3 src="/img/group-5@1x.svg" />
            <Vector136 src="/img/vector-161@2x.svg" />
            <Vector137 src="/img/vector-162@2x.svg" />
            <Vector138 src="/img/vector-163@2x.svg" />
            <Vector139 src="/img/vector-164@2x.svg" />
            <Vector140 src="/img/vector-165@2x.svg" />
            <Vector141 src="/img/vector-166@1x.svg" />
            <Vector142 src="/img/vector-167@2x.svg" />
            <Vector143 src="/img/vector-168@2x.svg" />
            <Vector144 src="/img/vector-169@1x.svg" />
            <Vector145 src="/img/vector-170@1x.svg" />
            <Vector146 src="/img/vector-171@1x.svg" />
            <Vector147 src="/img/vector-172@1x.svg" />
            <Vector148 src="/img/vector-173@1x.svg" />
            <Vector149 src="/img/vector-174@1x.svg" />
            <Vector150 src="/img/vector-175@1x.svg" />
            <Vector151 src="/img/vector-176@2x.svg" />
            <Vector152 src="/img/vector-177@2x.svg" />
            <Vector153 src="/img/vector-178@2x.svg" />
            <Vector154 src="/img/vector-179@2x.svg" />
            <Vector155 src="/img/vector-180@2x.svg" />
            <Vector156 src="/img/vector-181@2x.svg" />
            <Vector157 src="/img/vector-182@2x.svg" />
            <Vector158 src="/img/vector-183@2x.svg" />
            <Vector159 src="/img/vector-184@2x.svg" />
            <Vector160 src="/img/vector-185@2x.svg" />
            <Vector161 src="/img/vector-186@2x.svg" />
            <Vector162 src="/img/vector-187@2x.svg" />
            <Vector163 src="/img/vector-188@2x.svg" />
            <Vector164 src="/img/vector-189@2x.svg" />
            <Vector165 src="/img/vector-190@2x.svg" />
            <Vector166 src="/img/vector-191@2x.svg" />
            <Vector167 src="/img/vector-192@2x.svg" />
            <Vector168 src="/img/vector-193@2x.svg" />
            <Vector169 src="/img/vector-194@2x.svg" />
            <Vector170 src="/img/vector-195@2x.svg" />
            <Vector171 src="/img/vector-196@2x.svg" />
            <Vector172 src="/img/vector-197@2x.svg" />
            <Vector173 src="/img/vector-198@2x.svg" />
            <Vector174 src="/img/vector-199@2x.svg" />
            <Vector175 src="/img/vector-200@2x.svg" />
            <Vector176 src="/img/vector-201@2x.svg" />
            <Vector177 src="/img/vector-202@2x.svg" />
            <Vector178 src="/img/vector-203@2x.svg" />
            <Vector179 src="/img/vector-204@2x.svg" />
            <Vector180 src="/img/vector-205@2x.svg" />
            <Vector181 src="/img/vector-206@2x.svg" />
            <Vector182 src="/img/vector-207@2x.svg" />
            <Vector183 src="/img/vector-208@2x.svg" />
            <Vector184 src="/img/vector-209@2x.svg" />
            <Vector185 src="/img/vector-210@2x.svg" />
            <Vector186 src="/img/vector-211@2x.svg" />
            <Vector187 src="/img/vector-212@2x.svg" />
            <Vector188 src="/img/vector-213@2x.svg" />
            <Vector189 src="/img/vector-214@2x.svg" />
            <Vector190 src="/img/vector-215@1x.svg" />
            <Vector191 src="/img/vector-216@2x.svg" />
            <Vector192 src="/img/vector-217@2x.svg" />
            <Vector193 src="/img/vector-218@2x.svg" />
            <Vector194 src="/img/vector-219@2x.svg" />
            <Vector195 src="/img/vector-220@2x.svg" />
            <Vector196 src="/img/vector-221@2x.svg" />
            <Vector197 src="/img/vector-222@2x.svg" />
            <Vector198 src="/img/vector-223@2x.svg" />
            <Vector199 src="/img/vector-224@2x.svg" />
            <Vector200 src="/img/vector-225@2x.svg" />
            <Vector201 src="/img/vector-226@1x.svg" />
            <Vector201 src="/img/vector-227@1x.svg" />
            <Vector202 src="/img/vector-228@2x.svg" />
            <Vector203 src="/img/vector-229@2x.svg" />
            <Vector204 src="/img/vector-230@2x.svg" />
            <Vector205 src="/img/vector-231@2x.svg" />
            <Vector206 src="/img/vector-232@2x.svg" />
            <Vector207 src="/img/vector-233@2x.svg" />
            <Vector208 src="/img/vector-234@2x.svg" />
            <Vector209 src="/img/vector-235@2x.svg" />
            <Vector210 src="/img/vector-236@2x.svg" />
            <Vector211 src="/img/vector-237@2x.svg" />
            <Vector212 src="/img/vector-238@2x.svg" />
            <Vector213 src="/img/vector-239@2x.svg" />
            <Vector214 src="/img/vector-240@2x.svg" />
            <Vector215 src="/img/vector-241@2x.svg" />
            <Vector216 src="/img/vector-242@2x.svg" />
            <Vector217 src="/img/vector-243@2x.svg" />
            <Vector218 src="/img/vector-244@2x.svg" />
            <Vector219 src="/img/vector-245@2x.svg" />
            <Vector220 src="/img/vector-246@2x.svg" />
            <Vector221 src="/img/vector-247@2x.svg" />
            <Vector222 src="/img/vector-248@2x.svg" />
            <Vector223 src="/img/vector-249@2x.svg" />
            <Vector224 src="/img/vector-250@2x.svg" />
            <Vector225 src="/img/vector-251@2x.svg" />
            <Vector226 src="/img/vector-252@2x.svg" />
            <Vector227 src="/img/vector-253@2x.svg" />
            <Vector228 src="/img/vector-254@2x.svg" />
            <Vector229 src="/img/vector-255@2x.svg" />
            <Vector230 src="/img/vector-256@2x.svg" />
            <Vector231 src="/img/vector-257@2x.svg" />
            <Vector232 src="/img/vector-258@2x.svg" />
            <Vector233 src="/img/vector-259@2x.svg" />
            <Vector234 src="/img/vector-260@2x.svg" />
            <Vector235 src="/img/vector-261@2x.svg" />
            <Vector236 src="/img/vector-262@2x.svg" />
            <Vector237 src="/img/vector-263@2x.svg" />
            <Vector238 src="/img/vector-264@2x.svg" />
            <Vector239 src="/img/vector-265@2x.svg" />
            <Vector240 src="/img/vector-266@2x.svg" />
            <Vector241 src="/img/vector-267@2x.svg" />
            <Vector242 src="/img/vector-268@2x.svg" />
            <Vector243 src="/img/vector-269@2x.svg" />
            <Vector244 src="/img/vector-270@2x.svg" />
            <Group4 style={{ backgroundImage: `url(${group5})` }}></Group4>
            <Vector245 src="/img/vector-271@2x.svg" />
            <Vector246 src="/img/vector-272@2x.svg" />
            <Vector247 src="/img/vector-273@2x.svg" />
            <Vector248 src="/img/vector-274@2x.svg" />
            <Vector249 src="/img/vector-275@2x.svg" />
            <Vector250 src="/img/vector-276@2x.svg" />
            <Vector251 src="/img/vector-277@2x.svg" />
            <Vector252 src="/img/vector-278@2x.svg" />
            <Vector253 src="/img/vector-279@2x.svg" />
            <Vector254 src="/img/vector-280@2x.svg" />
            <Vector255 src="/img/vector-281@2x.svg" />
            <Vector256 src="/img/vector-282@2x.svg" />
            <Vector257 src="/img/vector-283@2x.svg" />
            <Vector258 src="/img/vector-284@2x.svg" />
            <Vector259 src="/img/vector-285@2x.svg" />
            <Vector260 src="/img/vector-286@2x.svg" />
            <Vector259 src="/img/vector-287@2x.svg" />
            <Vector260 src="/img/vector-288@2x.svg" />
            <Vector261 src="/img/vector-289@2x.svg" />
            <Vector157 src="/img/vector-290@2x.svg" />
            <Vector158 src="/img/vector-291@2x.svg" />
            <Vector159 src="/img/vector-292@2x.svg" />
            <Vector160 src="/img/vector-293@2x.svg" />
            <Vector185 src="/img/vector-294@2x.svg" />
            <Vector187 src="/img/vector-295@2x.svg" />
            <Vector188 src="/img/vector-296@2x.svg" />
            <Vector262 src="/img/vector-297@2x.svg" />
            <Vector186 src="/img/vector-298@2x.svg" />
            <Vector263 src="/img/vector-299@2x.svg" />
            <Q2Text>{q2Text}</Q2Text>
            <Price1>{price2}</Price1>
          </OverlapGroup5>
          <Arrow2 src="/img/arrow-2@2x.svg" />
          <ROADBOXQ3 price={rOADBOXQ31Props.price} />
          <Group11 src="/img/group-1@2x.svg" />
          <ROADBOXQ3 price={rOADBOXQ32Props.price} className={rOADBOXQ32Props.className} />
        </OverlapGroup23>
        <STACKINGSUBSECTION id="stacking-subsection">
          <Frame>
            <OverlapGroup3>
              <Group src="/img/group-7@1x.svg" />
              <Vector2 src="/img/vector-439@2x.svg" />
              <Vector3 src="/img/vector-440@2x.svg" />
              <Vector4 src="/img/vector-441@2x.svg" />
              <Vector5 src="/img/vector-442@2x.svg" />
              <Vector6 src="/img/vector-443@2x.svg" />
              <Vector7 src="/img/vector-444@2x.svg" />
              <STACKINGTITLE>
                <LineContainer2>
                  <Line6 src="/img/line-6-6@2x.svg" />
                  <Line7 src="/img/line-7-6@2x.svg" />
                </LineContainer2>
                <OverlapGroup21>
                  <STACKING1>{stacking2}</STACKING1>
                  <LineContainer3>
                    <Line6 src="/img/line-6-7@2x.svg" />
                    <Line7 src="/img/line-7-7@2x.svg" />
                  </LineContainer3>
                </OverlapGroup21>
              </STACKINGTITLE>
            </OverlapGroup3>
          </Frame>
        </STACKINGSUBSECTION>
        <STACKING2>
          <OverlapGroup7>
            <OverlapGroup1>
              <Vector264 src="/img/vector-445@2x.svg" />
              <Vector265 src="/img/vector-446@2x.svg" />
              <Vector266 src="/img/vector-447@2x.svg" />
              <Vector267 src="/img/vector-448@2x.svg" />
              <Vector268 src="/img/vector-449@2x.svg" />
              <Vector269 src="/img/vector-450@2x.svg" />
              <Vector270 src="/img/vector-451@2x.svg" />
              <Vector271 src="/img/vector-452@2x.svg" />
              <Vector272 src="/img/vector-453@2x.svg" />
              <Vector273 src="/img/vector-454@2x.svg" />
              <Vector274 src="/img/vector-455@2x.svg" />
              <Vector275 src="/img/vector-456@2x.svg" />
              <Vector276 src="/img/vector-457@2x.svg" />
              <Vector277 src="/img/vector-458@1x.svg" />
              <Vector278 src="/img/vector-459@1x.svg" />
              <Vector279 src="/img/vector-460@2x.svg" />
              <Vector280 src="/img/vector-461@2x.svg" />
              <Vector281 src="/img/vector-462@1x.svg" />
              <Vector282 src="/img/vector-463@1x.svg" />
              <Vector283 src="/img/vector-464@1x.svg" />
              <Vector284 src="/img/vector-465@1x.svg" />
              <Vector285 src="/img/vector-466@1x.svg" />
              <Vector286 src="/img/vector-467@1x.svg" />
              <Vector287 src="/img/vector-468@1x.svg" />
              <Vector288 src="/img/vector-469@1x.svg" />
              <Vector289 src="/img/vector-470@2x.svg" />
              <Vector290 src="/img/vector-471@2x.svg" />
              <Vector291 src="/img/vector-472@2x.svg" />
              <Vector292 src="/img/vector-473@2x.svg" />
              <Vector293 src="/img/vector-474@2x.svg" />
              <Vector294 src="/img/vector-475@2x.svg" />
              <Vector295 src="/img/vector-476@1x.svg" />
              <Vector296 src="/img/vector-477@2x.svg" />
              <Vector297 src="/img/vector-478@2x.svg" />
              <Vector298 src="/img/vector-479@2x.svg" />
              <Vector299 src="/img/vector-480@2x.svg" />
              <Vector300 src="/img/vector-481@2x.svg" />
              <Vector301 src="/img/vector-482@2x.svg" />
              <Vector302 src="/img/vector-483@2x.svg" />
              <Vector303 src="/img/vector-484@2x.svg" />
              <Vector304 src="/img/vector-485@2x.svg" />
              <Vector305 src="/img/vector-486@2x.svg" />
              <Vector306 src="/img/vector-487@2x.svg" />
              <Vector307 src="/img/vector-488@2x.svg" />
              <Vector308 src="/img/vector-489@2x.svg" />
              <Vector309 src="/img/vector-490@2x.svg" />
              <Vector310 src="/img/vector-491@2x.svg" />
              <Vector311 src="/img/vector-492@2x.svg" />
              <Vector312 src="/img/vector-493@2x.svg" />
              <Vector313 src="/img/vector-494@2x.svg" />
              <Vector314 src="/img/vector-495@2x.svg" />
              <Vector315 src="/img/vector-496@2x.svg" />
              <Vector316 src="/img/vector-497@2x.svg" />
              <Vector317 src="/img/vector-498@2x.svg" />
              <Vector318 src="/img/vector-499@2x.svg" />
              <Vector319 src="/img/vector-500@2x.svg" />
              <Vector320 src="/img/vector-501@2x.svg" />
              <Vector321 src="/img/vector-502@2x.svg" />
              <Vector322 src="/img/vector-503@2x.svg" />
              <Vector323 src="/img/vector-504@2x.svg" />
              <Vector324 src="/img/vector-505@2x.svg" />
              <Vector325 src="/img/vector-506@2x.svg" />
              <Vector326 src="/img/vector-507@2x.svg" />
              <Vector327 src="/img/vector-508@2x.svg" />
              <Vector328 src="/img/vector-509@2x.svg" />
              <Vector329 src="/img/vector-510@2x.svg" />
              <Vector330 src="/img/vector-511@2x.svg" />
              <Vector331 src="/img/vector-512@2x.svg" />
              <Vector332 src="/img/vector-513@2x.svg" />
              <Vector333 src="/img/vector-514@1x.svg" />
              <Vector334 src="/img/vector-515@1x.svg" />
              <Vector335 src="/img/vector-516@2x.svg" />
              <Vector336 src="/img/vector-517@2x.svg" />
              <Vector337 src="/img/vector-518@2x.svg" />
              <Vector338 src="/img/vector-519@2x.svg" />
              <Vector339 src="/img/vector-520@2x.svg" />
              <Vector340 src="/img/vector-521@2x.svg" />
              <Vector341 src="/img/vector-522@2x.svg" />
              <Vector342 src="/img/vector-523@2x.svg" />
              <Vector343 src="/img/vector-524@2x.svg" />
              <Vector344 src="/img/vector-525@2x.svg" />
              <Vector345 src="/img/vector-526@2x.svg" />
              <Vector346 src="/img/vector-527@2x.svg" />
              <Vector347 src="/img/vector-528@2x.svg" />
              <Vector348 src="/img/vector-529@2x.svg" />
              <Vector349 src="/img/vector-530@2x.svg" />
              <Vector350 src="/img/vector-531@2x.svg" />
              <Vector351 src="/img/vector-532@2x.svg" />
              <Vector352 src="/img/vector-533@2x.svg" />
              <Vector353 src="/img/vector-534@2x.svg" />
              <Vector354 src="/img/vector-535@2x.svg" />
              <Vector355 src="/img/vector-536@2x.svg" />
              <Vector356 src="/img/vector-537@2x.svg" />
              <Vector357 src="/img/vector-538@2x.svg" />
              <Vector358 src="/img/vector-539@2x.svg" />
              <Vector359 src="/img/vector-540@2x.svg" />
              <Vector360 src="/img/vector-541@2x.svg" />
              <Vector361 src="/img/vector-542@2x.svg" />
              <Vector362 src="/img/vector-543@2x.svg" />
              <Vector363 src="/img/vector-544@2x.svg" />
              <Vector364 src="/img/vector-545@2x.svg" />
              <Vector365 src="/img/vector-546@2x.svg" />
              <Vector366 src="/img/vector-547@2x.svg" />
              <Vector367 src="/img/vector-548@2x.svg" />
              <Vector368 src="/img/vector-549@2x.svg" />
              <Vector369 src="/img/vector-550@2x.svg" />
              <Vector370 src="/img/vector-551@2x.svg" />
              <Vector371 src="/img/vector-552@2x.svg" />
              <Vector372 src="/img/vector-553@2x.svg" />
              <Vector373 src="/img/vector-554@2x.svg" />
              <Vector374 src="/img/vector-555@2x.svg" />
              <OverlapGroup>
                <Vector375 src="/img/vector-561@2x.svg" />
                <Vector376 src="/img/vector-562@2x.svg" />
                <Vector377 src="/img/vector-563@2x.svg" />
                <Vector378 src="/img/vector-564@2x.svg" />
                <Vector379 src="/img/vector-565@2x.svg" />
                <Vector380 src="/img/vector-566@2x.svg" />
                <Vector381 src="/img/vector-567@2x.svg" />
                <Vector382 src="/img/vector-568@2x.svg" />
                <Vector383 src="/img/vector-569@2x.svg" />
                <Vector384 src="/img/vector-570@2x.svg" />
                <Vector385 src="/img/vector-571@2x.svg" />
                <Vector386 src="/img/vector-572@2x.svg" />
                <Vector387 src="/img/vector-573@2x.svg" />
                <Vector388 src="/img/vector-574@2x.svg" />
                <Vector389 src="/img/vector-575@2x.svg" />
                <Vector390 src="/img/vector-576@2x.svg" />
                <Vector391 src="/img/vector-577@2x.svg" />
                <Vector392 src="/img/vector-578@2x.svg" />
                <Vector393 src="/img/vector-579@2x.svg" />
                <Vector394 src="/img/vector-580@2x.svg" />
                <Vector395 src="/img/vector-581@2x.svg" />
                <Vector396 src="/img/vector-582@2x.svg" />
                <Vector397 src="/img/vector-583@2x.svg" />
                <Vector398 src="/img/vector-584@2x.svg" />
                <Vector399 src="/img/vector-585@2x.svg" />
                <Vector400 src="/img/vector-586@2x.svg" />
                <Vector401 src="/img/vector-587@2x.svg" />
                <Vector402 src="/img/vector-588@2x.svg" />
                <Vector403 src="/img/vector-589@2x.svg" />
                <Vector404 src="/img/vector-590@2x.svg" />
                <Vector405 src="/img/vector-591@2x.svg" />
                <Vector406 src="/img/vector-592@2x.svg" />
                <Vector407 src="/img/vector-593@2x.svg" />
                <Vector408 src="/img/vector-594@2x.svg" />
                <Vector409 src="/img/vector-595@2x.svg" />
                <Vector410 src="/img/vector-596@2x.svg" />
                <Vector411 src="/img/vector-597@2x.svg" />
                <Vector412 src="/img/vector-598@2x.svg" />
                <Vector413 src="/img/vector-599@2x.svg" />
                <Vector414 src="/img/vector-600@2x.svg" />
                <Vector415 src="/img/vector-601@2x.svg" />
                <Vector416 src="/img/vector-602@2x.svg" />
                <Vector417 src="/img/vector-603@2x.svg" />
                <Group5 style={{ backgroundImage: `url(${group7})` }}></Group5>
                <Vector418 src="/img/vector-604@2x.svg" />
                <Vector419 src="/img/vector-605@2x.svg" />
                <Vector420 src="/img/vector-606@2x.svg" />
                <Vector421 src="/img/vector-607@2x.svg" />
                <Vector422 src="/img/vector-608@2x.svg" />
                <Vector423 src="/img/vector-609@2x.svg" />
                <Vector424 src="/img/vector-610@2x.svg" />
                <Vector425 src="/img/vector-611@2x.svg" />
                <Vector426 src="/img/vector-612@2x.svg" />
                <Vector427 src="/img/vector-613@2x.svg" />
                <Vector428 src="/img/vector-614@2x.svg" />
                <Vector429 src="/img/vector-615@2x.svg" />
                <Vector430 src="/img/vector-616@2x.svg" />
                <Vector431 src="/img/vector-617@2x.svg" />
                <Vector432 src="/img/vector-618@2x.svg" />
                <Vector433 src="/img/vector-619@2x.svg" />
                <Vector432 src="/img/vector-620@2x.svg" />
                <Vector433 src="/img/vector-621@2x.svg" />
              </OverlapGroup>
              <Vector434 src="/img/vector-556@2x.svg" />
              <Vector435 src="/img/vector-557@2x.svg" />
              <Vector436 src="/img/vector-558@2x.svg" />
              <Vector437 src="/img/vector-559@2x.svg" />
              <Vector438 src="/img/vector-560@2x.svg" />
            </OverlapGroup1>
            <Phase1>{phase1}</Phase1>
            <Phase2>{phase2}</Phase2>
            <Phase3>{phase3}</Phase3>
            <StackingPhase1>{stackingPhase1}</StackingPhase1>
            <StackingPhase2>{stackingPhase2}</StackingPhase2>
            <StackingPhase3>{stackingPhase3}</StackingPhase3>
          </OverlapGroup7>
        </STACKING2>
        <StackingDetails>{stackingDetails}</StackingDetails>
        <OURTEAMSUBSECTION ourTeam={oURTEAMSUBSECTION1Props.ourTeam} />
        <FirstRowTeam />
        <SecondRowTeam />
        <SecondRowTeam className={secondRowTeam1Props.className} />
        <FirstRowTeam className={firstRowTeamProps.className} />
        <SecondRowTeam className={secondRowTeam2Props.className} />
        <OURTEAMSUBSECTION ourTeam={oURTEAMSUBSECTION2Props.ourTeam} className={oURTEAMSUBSECTION2Props.className} />
        <FirstQ />
        <FirstQ className={firstQ1Props.className} />
        <FirstQ className={firstQ2Props.className} />
        <FirstQ className={firstQ3Props.className} />
        <FirstQ className={firstQ4Props.className} />
        <Frame11>
          <OverlapGroup211>
            <Rectangle20 src="/img/rectangle-20@1x.svg" />
            <WHITEPAPERBUTTON>
              <WHITEPAPER>{whitepaper}</WHITEPAPER>
            </WHITEPAPERBUTTON>
            <Frame12>
              <Vector439 src="/img/vector-622@2x.svg" />
              <BPOF2022ALLRIGHTSRESERVED>{bpof2022AllRightsReserved}</BPOF2022ALLRIGHTSRESERVED>
            </Frame12>
          </OverlapGroup211>
        </Frame11>
      </div>
    </div>
  );
}

const OverlapGroup23 = styled.div`
  width: 1563px;
  height: 3634px;
  position: relative;
  align-self: flex-start;
`;

const NAVBAR = styled.div`
  display: flex;
  width: 1489px;
  height: 113px;
  position: absolute;
  top: 0;
  left: 5px;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  background-color: var(--black);
`;

const LOGO = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  width: 232px;
  min-height: 64px;
`;

const Logo = styled.div`
  font-family: var(--font-family-phosphate-solid);
  font-weight: 400;
  color: var(--white);
  font-size: var(--font-size-l);
  letter-spacing: 0;
`;

const NAVBAR1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  width: 976px;
  min-height: 66px;
`;

const ROADMAP = styled.div`
  ${CourierRegularNormalWhite25px}
  width: 125px;
  letter-spacing: 2.5px;
  height: 29px;
  cursor: pointer;
`;

const STACKING = styled.div`
  ${CourierRegularNormalWhite25px}
  width: 140px;
  letter-spacing: 2.5px;
  height: 29px;
  cursor: pointer;
`;

const OURTEAM = styled.div`
  ${CourierRegularNormalWhite25px}
  letter-spacing: 0;
  cursor: pointer;
`;

const FAQ = styled.div`
  ${CourierRegularNormalWhite25px}
  width: 46.45653533935547px;
  letter-spacing: 0;
  height: 29px;
  cursor: pointer;
`;

const CONNECTWALLETBUTTON = styled.div`
  height: 46px;
  display: flex;
  align-items: flex-start;
  min-width: 264px;
`;

const Frame1 = styled.div`
  ${Border2pxBlack}
  display: flex;
  width: 264px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  background-color: var(--white);
`;

const CONNECTAWALLET = styled.div`
  font-family: var(--font-family-courier-regular);
  font-weight: 400;
  color: var(--black);
  font-size: var(--font-size-xs);
  letter-spacing: 1.15px;
`;

const EmptyDarkRoomModernFuturisticSciFiB = styled.img`
  position: absolute;
  width: 1507px;
  height: 792px;
  top: 95px;
  left: 5px;
  object-fit: cover;
`;

const FirstPage = styled.div`
  position: absolute;
  height: 577px;
  top: 129px;
  left: 38px;
  display: flex;
  align-items: flex-end;
  min-width: 1442px;
`;

const MINTBUTTON = styled.div`
  ${Border2pxBlack}
  display: flex;
  width: 227px;
  height: 58px;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  background-color: var(--white);
  box-shadow: 0px 4px 4px #00000040;
`;

const Title = styled.h1`
  height: 57px;
  width: 166px;
  font-family: var(--font-family-courier-bold);
  font-weight: 700;
  color: var(--black);
  font-size: 50px;
  text-align: center;
  letter-spacing: 15px;
`;

const SUBHEADING = styled.div`
  width: 465px;
  min-height: 67px;
  margin-left: 248px;
  margin-bottom: 84px;
  -webkit-text-stroke: 1px var(--black);
  font-family: var(--font-family-phosphate-solid);
  font-weight: 400;
  color: var(--white);
  font-size: var(--font-size-m);
  text-align: center;
  letter-spacing: 9px;
`;

const CONTACT = styled.div`
  width: 52px;
  margin-left: 448px;
  display: flex;
  flex-direction: column;
  padding: 0.3px 0;
  align-items: center;
  min-height: 560px;
  transform: rotate(180deg);
`;

const FindUsOn = styled.img`
  width: 11px;
  height: 219px;
  margin-top: 3px;
  margin-right: 0.95px;
  transform: rotate(-180deg);
`;

const Vector = styled.img`
  width: 52px;
  height: 53px;
  margin-top: 34px;
  transform: rotate(-180deg);
`;

const Vector1 = styled.img`
  width: 52px;
  height: 53px;
  margin-top: 30px;
  transform: rotate(-180deg);
`;

const ROADMAPSUBSECTION = styled.div`
  display: flex;
  width: 1511px;
  height: 132px;
  position: absolute;
  top: 884px;
  left: 0;
  align-items: flex-start;
  justify-content: space-around;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  background-color: var(--black);
  cursor: pointer;
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

const Vector2 = styled.img`
  position: absolute;
  width: 19px;
  height: 48px;
  top: 22px;
  left: 582px;
`;

const Vector3 = styled.img`
  position: absolute;
  width: 20px;
  height: 48px;
  top: 22px;
  left: 0;
`;

const Vector4 = styled.img`
  position: absolute;
  width: 37px;
  height: 15px;
  top: 0;
  left: 115px;
`;

const Vector5 = styled.img`
  position: absolute;
  width: 37px;
  height: 15px;
  top: 77px;
  left: 113px;
`;

const Vector6 = styled.img`
  position: absolute;
  width: 37px;
  height: 15px;
  top: 77px;
  left: 449px;
`;

const Vector7 = styled.img`
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
  left: 54px;
  display: flex;
  align-items: flex-start;
  min-width: 503px;
`;

const LineContainer = styled.div`
  width: 54px;
  height: 38px;
  position: relative;
  margin-left: -3px;
  align-self: flex-end;
  margin-bottom: -0.73px;
`;

const Line6 = styled.img`
  position: absolute;
  width: 52px;
  height: 37px;
  top: 0;
  left: 0;
`;

const Line7 = styled.img`
  position: absolute;
  width: 52px;
  height: 37px;
  top: 1px;
  left: 2px;
`;

const OverlapGroup2 = styled.div`
  width: 441px;
  height: 47px;
  position: relative;
  margin-left: 11px;
  margin-top: 0;
`;

const ROADMAP1 = styled.div`
  ${CourierBoldWhite45px}
  position: absolute;
  width: 388px;
  top: 0;
  left: 0;
  text-align: center;
  letter-spacing: 13.5px;
`;

const LineContainer1 = styled.div`
  position: absolute;
  width: 54px;
  height: 38px;
  top: 9px;
  left: 386px;
`;

const ROADBOXQ1 = styled.div`
  position: absolute;
  height: 700px;
  top: 955px;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 650px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

const OverlapGroup4 = styled.div`
  width: 650px;
  height: 690px;
  position: relative;
  margin-top: -0.06px;
`;

const Group1 = styled.img`
  position: absolute;
  width: 650px;
  height: 348px;
  top: 222px;
  left: 0;
`;

const Vector8 = styled.img`
  position: absolute;
  width: 488px;
  height: 358px;
  top: 0;
  left: 82px;
`;

const Vector9 = styled.img`
  position: absolute;
  width: 21px;
  height: 79px;
  top: 483px;
  left: 41px;
`;

const Vector10 = styled.img`
  position: absolute;
  width: 21px;
  height: 79px;
  top: 230px;
  left: 41px;
`;

const Vector11 = styled.img`
  position: absolute;
  width: 21px;
  height: 79px;
  top: 483px;
  left: 587px;
`;

const Vector12 = styled.img`
  position: absolute;
  width: 21px;
  height: 79px;
  top: 230px;
  left: 587px;
`;

const Vector13 = styled.img`
  position: absolute;
  width: 539px;
  height: 515px;
  top: 139px;
  left: 56px;
`;

const Vector14 = styled.img`
  position: absolute;
  width: 8px;
  height: 5px;
  top: 139px;
  left: 56px;
`;

const Vector15 = styled.img`
  position: absolute;
  width: 5px;
  height: 4px;
  top: 143px;
  left: 62px;
`;

const Vector16 = styled.img`
  position: absolute;
  width: 528px;
  height: 4px;
  top: 650px;
  left: 62px;
`;

const Vector17 = styled.img`
  position: absolute;
  width: 524px;
  height: 4px;
  top: 646px;
  left: 64px;
`;

const Vector18 = styled.img`
  position: absolute;
  width: 21px;
  height: 507px;
  top: 143px;
  left: 41px;
`;

const Vector19 = styled.img`
  position: absolute;
  width: 5px;
  height: 504px;
  top: 144px;
  left: 581px;
`;

const Vector20 = styled.img`
  position: absolute;
  width: 5px;
  height: 504px;
  top: 144px;
  left: 62px;
`;

const Vector21 = styled.img`
  position: absolute;
  width: 21px;
  height: 507px;
  top: 143px;
  left: 587px;
`;

const Vector22 = styled.img`
  position: absolute;
  width: 524px;
  height: 4px;
  top: 143px;
  left: 64px;
`;

const Vector23 = styled.img`
  position: absolute;
  width: 7px;
  height: 5px;
  top: 648px;
  left: 585px;
`;

const Vector24 = styled.img`
  position: absolute;
  width: 5px;
  height: 4px;
  top: 646px;
  left: 581px;
`;

const Vector25 = styled.img`
  position: absolute;
  width: 8px;
  height: 5px;
  top: 648px;
  left: 56px;
`;

const Vector26 = styled.img`
  position: absolute;
  width: 5px;
  height: 4px;
  top: 646px;
  left: 62px;
`;

const Vector27 = styled.img`
  position: absolute;
  width: 7px;
  height: 5px;
  top: 139px;
  left: 585px;
`;

const Vector28 = styled.img`
  position: absolute;
  width: 5px;
  height: 4px;
  top: 143px;
  left: 581px;
`;

const Vector29 = styled.img`
  position: absolute;
  width: 58px;
  height: 5px;
  top: 170px;
  left: 197px;
`;

const Vector30 = styled.img`
  position: absolute;
  width: 34px;
  height: 25px;
  top: 598px;
  left: 516px;
`;

const Vector31 = styled.img`
  position: absolute;
  width: 5px;
  height: 71px;
  top: 435px;
  left: 549px;
`;

const Vector32 = styled.img`
  position: absolute;
  width: 52px;
  height: 85px;
  top: 170px;
  left: 98px;
`;

const Vector33 = styled.img`
  position: absolute;
  width: 11px;
  height: 35px;
  top: 252px;
  left: 46px;
`;

const Vector34 = styled.img`
  position: absolute;
  width: 5px;
  height: 28px;
  top: 256px;
  left: 48px;
`;

const Vector35 = styled.img`
  position: absolute;
  width: 9px;
  height: 5px;
  top: 252px;
  left: 48px;
`;

const Vector36 = styled.img`
  position: absolute;
  width: 11px;
  height: 6px;
  top: 281px;
  left: 46px;
`;

const Vector37 = styled.img`
  position: absolute;
  width: 5px;
  height: 26px;
  top: 256px;
  left: 46px;
`;

const Vector38 = styled.img`
  position: absolute;
  width: 3px;
  height: 35px;
  top: 252px;
  left: 54px;
`;

const Vector39 = styled.img`
  position: absolute;
  width: 11px;
  height: 35px;
  top: 505px;
  left: 46px;
`;

const Vector40 = styled.img`
  position: absolute;
  width: 5px;
  height: 28px;
  top: 509px;
  left: 48px;
`;

const Vector41 = styled.img`
  position: absolute;
  width: 9px;
  height: 5px;
  top: 535px;
  left: 48px;
`;

const Vector42 = styled.img`
  position: absolute;
  width: 11px;
  height: 6px;
  top: 505px;
  left: 46px;
`;

const Vector43 = styled.img`
  position: absolute;
  width: 5px;
  height: 26px;
  top: 510px;
  left: 46px;
`;

const Vector44 = styled.img`
  position: absolute;
  width: 3px;
  height: 35px;
  top: 505px;
  left: 54px;
`;

const Vector45 = styled.img`
  position: absolute;
  width: 11px;
  height: 35px;
  top: 252px;
  left: 592px;
`;

const Vector46 = styled.img`
  position: absolute;
  width: 5px;
  height: 28px;
  top: 256px;
  left: 595px;
`;

const Vector47 = styled.img`
  position: absolute;
  width: 9px;
  height: 5px;
  top: 252px;
  left: 592px;
`;

const Vector48 = styled.img`
  position: absolute;
  width: 11px;
  height: 6px;
  top: 281px;
  left: 592px;
`;

const Vector49 = styled.img`
  position: absolute;
  width: 5px;
  height: 26px;
  top: 256px;
  left: 598px;
`;

const Vector50 = styled.img`
  position: absolute;
  width: 3px;
  height: 35px;
  top: 252px;
  left: 592px;
`;

const Vector51 = styled.img`
  position: absolute;
  width: 11px;
  height: 35px;
  top: 505px;
  left: 592px;
`;

const Vector52 = styled.img`
  position: absolute;
  width: 5px;
  height: 28px;
  top: 509px;
  left: 595px;
`;

const Vector53 = styled.img`
  position: absolute;
  width: 9px;
  height: 5px;
  top: 535px;
  left: 592px;
`;

const Vector54 = styled.img`
  position: absolute;
  width: 11px;
  height: 6px;
  top: 505px;
  left: 592px;
`;

const Vector55 = styled.img`
  position: absolute;
  width: 5px;
  height: 26px;
  top: 510px;
  left: 598px;
`;

const Vector56 = styled.img`
  position: absolute;
  width: 3px;
  height: 35px;
  top: 505px;
  left: 592px;
`;

const Vector57 = styled.img`
  position: absolute;
  width: 79px;
  height: 4px;
  top: 167px;
  left: 479px;
`;

const Vector58 = styled.img`
  position: absolute;
  width: 8px;
  height: 28px;
  top: 575px;
  left: 77px;
`;

const Vector59 = styled.img`
  position: absolute;
  width: 8px;
  height: 28px;
  top: 178px;
  left: 550px;
`;

const Vector60 = styled.img`
  position: absolute;
  width: 4px;
  height: 59px;
  top: 394px;
  left: 91px;
`;

const Vector61 = styled.img`
  position: absolute;
  width: 409px;
  height: 47px;
  top: 95px;
  left: 121px;
`;

const Vector62 = styled.img`
  position: absolute;
  width: 528px;
  height: 47px;
  top: 95px;
  left: 62px;
`;

const Vector63 = styled.img`
  position: absolute;
  width: 330px;
  height: 40px;
  top: 99px;
  left: 160px;
`;

const Vector64 = styled.img`
  position: absolute;
  width: 319px;
  height: 32px;
  top: 103px;
  left: 165px;
`;

const Vector65 = styled.img`
  position: absolute;
  width: 275px;
  height: 5px;
  top: 104px;
  left: 187px;
`;

const Vector66 = styled.img`
  position: absolute;
  width: 315px;
  height: 3px;
  top: 131px;
  left: 167px;
`;

const Vector67 = styled.img`
  position: absolute;
  width: 64px;
  height: 26px;
  top: 106px;
  left: 167px;
`;

const Vector68 = styled.img`
  position: absolute;
  width: 64px;
  height: 26px;
  top: 106px;
  left: 418px;
`;

const Vector69 = styled.img`
  position: absolute;
  width: 328px;
  height: 4px;
  top: 135px;
  left: 160px;
`;

const Vector70 = styled.img`
  position: absolute;
  width: 31px;
  height: 37px;
  top: 100px;
  left: 458px;
`;

const Vector71 = styled.img`
  position: absolute;
  width: 274px;
  height: 4px;
  top: 99px;
  left: 188px;
`;

const Vector72 = styled.img`
  position: absolute;
  width: 31px;
  height: 37px;
  top: 100px;
  left: 160px;
`;

const Vector73 = styled.img`
  position: absolute;
  width: 517px;
  height: 499px;
  top: 147px;
  left: 67px;
`;

const Vector74 = styled.img`
  position: absolute;
  width: 126px;
  height: 31px;
  top: 634px;
  left: 172px;
`;

const Vector75 = styled.img`
  position: absolute;
  width: 122px;
  height: 28px;
  top: 636px;
  left: 174px;
`;

const Vector76 = styled.img`
  position: absolute;
  width: 117px;
  height: 25px;
  top: 637px;
  left: 177px;
`;

const Vector77 = styled.img`
  position: absolute;
  width: 112px;
  height: 2px;
  top: 634px;
  left: 180px;
`;

const Vector78 = styled.img`
  position: absolute;
  width: 109px;
  height: 1px;
  top: 636px;
  left: 181px;
`;

const Vector79 = styled.img`
  position: absolute;
  width: 109px;
  height: 1px;
  top: 662px;
  left: 181px;
`;

const Vector80 = styled.img`
  position: absolute;
  width: 112px;
  height: 2px;
  top: 663px;
  left: 180px;
`;

const Vector81 = styled.img`
  position: absolute;
  width: 9px;
  height: 15px;
  top: 650px;
  left: 172px;
`;

const Vector82 = styled.img`
  position: absolute;
  width: 8px;
  height: 14px;
  top: 650px;
  left: 174px;
`;

const Vector83 = styled.img`
  position: absolute;
  width: 9px;
  height: 15px;
  top: 634px;
  left: 172px;
`;

const Vector84 = styled.img`
  position: absolute;
  width: 8px;
  height: 14px;
  top: 636px;
  left: 174px;
`;

const Vector85 = styled.img`
  position: absolute;
  width: 9px;
  height: 15px;
  top: 650px;
  left: 290px;
`;

const Vector86 = styled.img`
  position: absolute;
  width: 8px;
  height: 14px;
  top: 650px;
  left: 288px;
`;

const Vector87 = styled.img`
  position: absolute;
  width: 9px;
  height: 15px;
  top: 634px;
  left: 290px;
`;

const Vector88 = styled.img`
  position: absolute;
  width: 8px;
  height: 14px;
  top: 636px;
  left: 288px;
`;

const Vector89 = styled.img`
  position: absolute;
  width: 99px;
  height: 1px;
  top: 663px;
  left: 186px;
`;

const Vector90 = styled.img`
  position: absolute;
  width: 126px;
  height: 31px;
  top: 634px;
  left: 351px;
`;

const Vector91 = styled.img`
  position: absolute;
  width: 122px;
  height: 28px;
  top: 636px;
  left: 353px;
`;

const Vector92 = styled.img`
  position: absolute;
  width: 117px;
  height: 25px;
  top: 637px;
  left: 355px;
`;

const Vector93 = styled.img`
  position: absolute;
  width: 112px;
  height: 2px;
  top: 634px;
  left: 358px;
`;

const Vector94 = styled.img`
  position: absolute;
  width: 109px;
  height: 1px;
  top: 636px;
  left: 360px;
`;

const Vector95 = styled.img`
  position: absolute;
  width: 109px;
  height: 1px;
  top: 662px;
  left: 360px;
`;

const Vector96 = styled.img`
  position: absolute;
  width: 112px;
  height: 2px;
  top: 663px;
  left: 358px;
`;

const Vector97 = styled.img`
  position: absolute;
  width: 9px;
  height: 15px;
  top: 650px;
  left: 351px;
`;

const Vector98 = styled.img`
  position: absolute;
  width: 8px;
  height: 14px;
  top: 650px;
  left: 353px;
`;

const Vector99 = styled.img`
  position: absolute;
  width: 9px;
  height: 15px;
  top: 634px;
  left: 351px;
`;

const Vector100 = styled.img`
  position: absolute;
  width: 8px;
  height: 14px;
  top: 636px;
  left: 353px;
`;

const Vector101 = styled.img`
  position: absolute;
  width: 9px;
  height: 15px;
  top: 650px;
  left: 468px;
`;

const Vector102 = styled.img`
  position: absolute;
  width: 8px;
  height: 14px;
  top: 650px;
  left: 466px;
`;

const Vector103 = styled.img`
  position: absolute;
  width: 9px;
  height: 15px;
  top: 634px;
  left: 468px;
`;

const Vector104 = styled.img`
  position: absolute;
  width: 8px;
  height: 14px;
  top: 636px;
  left: 466px;
`;

const Vector105 = styled.img`
  position: absolute;
  width: 99px;
  height: 1px;
  top: 663px;
  left: 365px;
`;

const Vector106 = styled.img`
  position: absolute;
  width: 292px;
  height: 71px;
  top: 614px;
  left: 179px;
`;

const Vector107 = styled.img`
  position: absolute;
  width: 282px;
  height: 64px;
  top: 617px;
  left: 184px;
`;

const Vector108 = styled.img`
  position: absolute;
  width: 272px;
  height: 57px;
  top: 621px;
  left: 189px;
`;

const Vector109 = styled.img`
  position: absolute;
  width: 258px;
  height: 3px;
  top: 614px;
  left: 196px;
`;

const Vector110 = styled.img`
  position: absolute;
  width: 251px;
  height: 3px;
  top: 617px;
  left: 199px;
`;

const Vector111 = styled.img`
  position: absolute;
  width: 251px;
  height: 3px;
  top: 678px;
  left: 199px;
`;

const Vector112 = styled.img`
  position: absolute;
  width: 258px;
  height: 3px;
  top: 682px;
  left: 196px;
`;

const Vector113 = styled.img`
  position: absolute;
  width: 20px;
  height: 36px;
  top: 650px;
  left: 179px;
`;

const Vector114 = styled.img`
  position: absolute;
  width: 18px;
  height: 32px;
  top: 650px;
  left: 184px;
`;

const Vector115 = styled.img`
  position: absolute;
  width: 20px;
  height: 36px;
  top: 614px;
  left: 179px;
`;

const Vector116 = styled.img`
  position: absolute;
  width: 18px;
  height: 32px;
  top: 617px;
  left: 184px;
`;

const Group2 = styled.div`
  position: absolute;
  width: 303px;
  height: 80px;
  top: 610px;
  left: 173px;
  background-size: 100% 100%;
`;

const Vector117 = styled.img`
  position: absolute;
  width: 20px;
  height: 36px;
  top: 650px;
  left: 450px;
`;

const Vector118 = styled.img`
  position: absolute;
  width: 18px;
  height: 32px;
  top: 650px;
  left: 446px;
`;

const Vector119 = styled.img`
  position: absolute;
  width: 20px;
  height: 36px;
  top: 614px;
  left: 450px;
`;

const Vector120 = styled.img`
  position: absolute;
  width: 18px;
  height: 32px;
  top: 617px;
  left: 446px;
`;

const Vector121 = styled.img`
  position: absolute;
  width: 245px;
  height: 3px;
  top: 621px;
  left: 202px;
`;

const Vector122 = styled.img`
  position: absolute;
  width: 17px;
  height: 29px;
  top: 621px;
  left: 189px;
`;

const Vector123 = styled.img`
  position: absolute;
  width: 245px;
  height: 3px;
  top: 675px;
  left: 202px;
`;

const Vector124 = styled.img`
  position: absolute;
  width: 17px;
  height: 29px;
  top: 650px;
  left: 189px;
`;

const Vector125 = styled.img`
  position: absolute;
  width: 17px;
  height: 29px;
  top: 621px;
  left: 443px;
`;

const Vector126 = styled.img`
  position: absolute;
  width: 17px;
  height: 29px;
  top: 650px;
  left: 443px;
`;

const Vector127 = styled.img`
  position: absolute;
  width: 228px;
  height: 1px;
  top: 623px;
  left: 211px;
`;

const Vector128 = styled.img`
  position: absolute;
  width: 16px;
  height: 23px;
  top: 627px;
  left: 189px;
`;

const Vector129 = styled.img`
  position: absolute;
  width: 16px;
  height: 23px;
  top: 627px;
  left: 444px;
`;

const Vector130 = styled.img`
  position: absolute;
  width: 228px;
  height: 1px;
  top: 681px;
  left: 211px;
`;

const Vector131 = styled.img`
  position: absolute;
  width: 262px;
  height: 25px;
  top: 624px;
  left: 194px;
`;

const Vector132 = styled.img`
  position: absolute;
  width: 262px;
  height: 25px;
  top: 650px;
  left: 194px;
`;

const Vector133 = styled.img`
  position: absolute;
  width: 475px;
  height: 459px;
  top: 167px;
  left: 88px;
`;

const Vector134 = styled.img`
  position: absolute;
  width: 282px;
  height: 6px;
  top: 101px;
  left: 183px;
`;

const Vector135 = styled.img`
  position: absolute;
  width: 271px;
  height: 1px;
  top: 99px;
  left: 189px;
`;

const Q1Text = styled.div`
  ${CourierRegularNormalWhite23px}
  position: absolute;
  width: 425px;
  top: 181px;
  left: 118px;
  text-align: center;
  letter-spacing: 6.9px;
`;

const Price = styled.div`
  ${CourierRegularNormalWhite25px}
  position: absolute;
  width: 217px;
  top: 636px;
  left: 233px;
  text-align: center;
  letter-spacing: 7.5px;
`;

const Arrow1 = styled.img`
  position: absolute;
  width: 326px;
  height: 309px;
  top: 1329px;
  left: 626px;
  object-fit: cover;
`;

const Arrow3 = styled.img`
  position: absolute;
  width: 326px;
  height: 309px;
  top: 2670px;
  left: 658px;
  object-fit: cover;
`;

const OverlapGroup5 = styled.div`
  position: absolute;
  width: 650px;
  height: 700px;
  top: 1609px;
  left: 853px;
`;

const Group3 = styled.img`
  position: absolute;
  width: 650px;
  height: 353px;
  top: 226px;
  left: 0;
`;

const Vector136 = styled.img`
  position: absolute;
  width: 486px;
  height: 363px;
  top: 0;
  left: 81px;
`;

const Vector137 = styled.img`
  position: absolute;
  width: 21px;
  height: 80px;
  top: 491px;
  left: 41px;
`;

const Vector138 = styled.img`
  position: absolute;
  width: 21px;
  height: 80px;
  top: 234px;
  left: 41px;
`;

const Vector139 = styled.img`
  position: absolute;
  width: 21px;
  height: 80px;
  top: 491px;
  left: 587px;
`;

const Vector140 = styled.img`
  position: absolute;
  width: 21px;
  height: 80px;
  top: 234px;
  left: 587px;
`;

const Vector141 = styled.img`
  position: absolute;
  width: 536px;
  height: 522px;
  top: 141px;
  left: 56px;
`;

const Vector142 = styled.img`
  position: absolute;
  width: 8px;
  height: 6px;
  top: 142px;
  left: 56px;
`;

const Vector143 = styled.img`
  position: absolute;
  width: 5px;
  height: 4px;
  top: 145px;
  left: 62px;
`;

const Vector144 = styled.img`
  position: absolute;
  width: 526px;
  height: 4px;
  top: 659px;
  left: 62px;
`;

const Vector145 = styled.img`
  position: absolute;
  width: 521px;
  height: 4px;
  top: 655px;
  left: 64px;
`;

const Vector146 = styled.img`
  position: absolute;
  width: 21px;
  height: 514px;
  top: 145px;
  left: 41px;
`;

const Vector147 = styled.img`
  position: absolute;
  width: 5px;
  height: 511px;
  top: 147px;
  left: 582px;
`;

const Vector148 = styled.img`
  position: absolute;
  width: 5px;
  height: 511px;
  top: 147px;
  left: 62px;
`;

const Vector149 = styled.img`
  position: absolute;
  width: 21px;
  height: 514px;
  top: 145px;
  left: 587px;
`;

const Vector150 = styled.img`
  position: absolute;
  width: 521px;
  height: 4px;
  top: 145px;
  left: 64px;
`;

const Vector151 = styled.img`
  position: absolute;
  width: 7px;
  height: 6px;
  top: 658px;
  left: 585px;
`;

const Vector152 = styled.img`
  position: absolute;
  width: 5px;
  height: 4px;
  top: 655px;
  left: 582px;
`;

const Vector153 = styled.img`
  position: absolute;
  width: 8px;
  height: 6px;
  top: 658px;
  left: 56px;
`;

const Vector154 = styled.img`
  position: absolute;
  width: 5px;
  height: 4px;
  top: 655px;
  left: 62px;
`;

const Vector155 = styled.img`
  position: absolute;
  width: 7px;
  height: 6px;
  top: 142px;
  left: 585px;
`;

const Vector156 = styled.img`
  position: absolute;
  width: 5px;
  height: 4px;
  top: 145px;
  left: 582px;
`;

const Vector157 = styled.img`
  position: absolute;
  width: 58px;
  height: 5px;
  top: 173px;
  left: 197px;
`;

const Vector158 = styled.img`
  position: absolute;
  width: 34px;
  height: 25px;
  top: 607px;
  left: 517px;
`;

const Vector159 = styled.img`
  position: absolute;
  width: 5px;
  height: 72px;
  top: 442px;
  left: 549px;
`;

const Vector160 = styled.img`
  position: absolute;
  width: 51px;
  height: 86px;
  top: 173px;
  left: 98px;
`;

const Vector161 = styled.img`
  position: absolute;
  width: 11px;
  height: 35px;
  top: 256px;
  left: 45px;
`;

const Vector162 = styled.img`
  position: absolute;
  width: 5px;
  height: 28px;
  top: 259px;
  left: 48px;
`;

const Vector163 = styled.img`
  position: absolute;
  width: 9px;
  height: 5px;
  top: 256px;
  left: 47px;
`;

const Vector164 = styled.img`
  position: absolute;
  width: 11px;
  height: 6px;
  top: 286px;
  left: 45px;
`;

const Vector165 = styled.img`
  position: absolute;
  width: 5px;
  height: 27px;
  top: 261px;
  left: 45px;
`;

const Vector166 = styled.img`
  position: absolute;
  width: 3px;
  height: 35px;
  top: 256px;
  left: 54px;
`;

const Vector167 = styled.img`
  position: absolute;
  width: 11px;
  height: 35px;
  top: 513px;
  left: 45px;
`;

const Vector168 = styled.img`
  position: absolute;
  width: 5px;
  height: 28px;
  top: 517px;
  left: 48px;
`;

const Vector169 = styled.img`
  position: absolute;
  width: 9px;
  height: 5px;
  top: 543px;
  left: 47px;
`;

const Vector170 = styled.img`
  position: absolute;
  width: 11px;
  height: 6px;
  top: 513px;
  left: 45px;
`;

const Vector171 = styled.img`
  position: absolute;
  width: 5px;
  height: 27px;
  top: 518px;
  left: 45px;
`;

const Vector172 = styled.img`
  position: absolute;
  width: 3px;
  height: 35px;
  top: 513px;
  left: 54px;
`;

const Vector173 = styled.img`
  position: absolute;
  width: 11px;
  height: 35px;
  top: 256px;
  left: 592px;
`;

const Vector174 = styled.img`
  position: absolute;
  width: 5px;
  height: 28px;
  top: 259px;
  left: 595px;
`;

const Vector175 = styled.img`
  position: absolute;
  width: 9px;
  height: 5px;
  top: 256px;
  left: 592px;
`;

const Vector176 = styled.img`
  position: absolute;
  width: 11px;
  height: 6px;
  top: 286px;
  left: 592px;
`;

const Vector177 = styled.img`
  position: absolute;
  width: 5px;
  height: 27px;
  top: 261px;
  left: 599px;
`;

const Vector178 = styled.img`
  position: absolute;
  width: 3px;
  height: 35px;
  top: 256px;
  left: 592px;
`;

const Vector179 = styled.img`
  position: absolute;
  width: 11px;
  height: 35px;
  top: 513px;
  left: 592px;
`;

const Vector180 = styled.img`
  position: absolute;
  width: 5px;
  height: 28px;
  top: 517px;
  left: 595px;
`;

const Vector181 = styled.img`
  position: absolute;
  width: 9px;
  height: 5px;
  top: 543px;
  left: 592px;
`;

const Vector182 = styled.img`
  position: absolute;
  width: 11px;
  height: 6px;
  top: 513px;
  left: 592px;
`;

const Vector183 = styled.img`
  position: absolute;
  width: 5px;
  height: 27px;
  top: 518px;
  left: 599px;
`;

const Vector184 = styled.img`
  position: absolute;
  width: 3px;
  height: 35px;
  top: 513px;
  left: 592px;
`;

const Vector185 = styled.img`
  position: absolute;
  width: 79px;
  height: 4px;
  top: 170px;
  left: 480px;
`;

const Vector186 = styled.img`
  position: absolute;
  width: 8px;
  height: 29px;
  top: 584px;
  left: 76px;
`;

const Vector187 = styled.img`
  position: absolute;
  width: 8px;
  height: 29px;
  top: 181px;
  left: 551px;
`;

const Vector188 = styled.img`
  position: absolute;
  width: 4px;
  height: 60px;
  top: 400px;
  left: 91px;
`;

const Vector189 = styled.img`
  position: absolute;
  width: 407px;
  height: 48px;
  top: 97px;
  left: 121px;
`;

const Vector190 = styled.img`
  position: absolute;
  width: 525px;
  height: 48px;
  top: 97px;
  left: 62px;
`;

const Vector191 = styled.img`
  position: absolute;
  width: 329px;
  height: 40px;
  top: 101px;
  left: 160px;
`;

const Vector192 = styled.img`
  position: absolute;
  width: 318px;
  height: 32px;
  top: 105px;
  left: 165px;
`;

const Vector193 = styled.img`
  position: absolute;
  width: 274px;
  height: 5px;
  top: 106px;
  left: 187px;
`;

const Vector194 = styled.img`
  position: absolute;
  width: 313px;
  height: 3px;
  top: 133px;
  left: 168px;
`;

const Vector195 = styled.img`
  position: absolute;
  width: 63px;
  height: 27px;
  top: 108px;
  left: 167px;
`;

const Vector196 = styled.img`
  position: absolute;
  width: 63px;
  height: 27px;
  top: 108px;
  left: 418px;
`;

const Vector197 = styled.img`
  position: absolute;
  width: 327px;
  height: 4px;
  top: 137px;
  left: 161px;
`;

const Vector198 = styled.img`
  position: absolute;
  width: 31px;
  height: 38px;
  top: 102px;
  left: 458px;
`;

const Vector199 = styled.img`
  position: absolute;
  width: 272px;
  height: 4px;
  top: 101px;
  left: 188px;
`;

const Vector200 = styled.img`
  position: absolute;
  width: 31px;
  height: 37px;
  top: 102px;
  left: 160px;
`;

const Vector201 = styled.img`
  position: absolute;
  width: 515px;
  height: 506px;
  top: 149px;
  left: 67px;
`;

const Vector202 = styled.img`
  position: absolute;
  width: 126px;
  height: 31px;
  top: 643px;
  left: 173px;
`;

const Vector203 = styled.img`
  position: absolute;
  width: 121px;
  height: 28px;
  top: 645px;
  left: 175px;
`;

const Vector204 = styled.img`
  position: absolute;
  width: 117px;
  height: 25px;
  top: 647px;
  left: 177px;
`;

const Vector205 = styled.img`
  position: absolute;
  width: 111px;
  height: 2px;
  top: 644px;
  left: 180px;
`;

const Vector206 = styled.img`
  position: absolute;
  width: 108px;
  height: 1px;
  top: 646px;
  left: 181px;
`;

const Vector207 = styled.img`
  position: absolute;
  width: 108px;
  height: 1px;
  top: 672px;
  left: 181px;
`;

const Vector208 = styled.img`
  position: absolute;
  width: 111px;
  height: 2px;
  top: 673px;
  left: 180px;
`;

const Vector209 = styled.img`
  position: absolute;
  width: 9px;
  height: 16px;
  top: 659px;
  left: 173px;
`;

const Vector210 = styled.img`
  position: absolute;
  width: 8px;
  height: 14px;
  top: 659px;
  left: 175px;
`;

const Vector211 = styled.img`
  position: absolute;
  width: 9px;
  height: 16px;
  top: 644px;
  left: 173px;
`;

const Vector212 = styled.img`
  position: absolute;
  width: 8px;
  height: 14px;
  top: 645px;
  left: 175px;
`;

const Vector213 = styled.img`
  position: absolute;
  width: 9px;
  height: 16px;
  top: 659px;
  left: 289px;
`;

const Vector214 = styled.img`
  position: absolute;
  width: 8px;
  height: 14px;
  top: 659px;
  left: 288px;
`;

const Vector215 = styled.img`
  position: absolute;
  width: 9px;
  height: 16px;
  top: 644px;
  left: 289px;
`;

const Vector216 = styled.img`
  position: absolute;
  width: 8px;
  height: 14px;
  top: 645px;
  left: 288px;
`;

const Vector217 = styled.img`
  position: absolute;
  width: 98px;
  height: 1px;
  top: 673px;
  left: 186px;
`;

const Vector218 = styled.img`
  position: absolute;
  width: 126px;
  height: 31px;
  top: 643px;
  left: 350px;
`;

const Vector219 = styled.img`
  position: absolute;
  width: 121px;
  height: 28px;
  top: 645px;
  left: 353px;
`;

const Vector220 = styled.img`
  position: absolute;
  width: 117px;
  height: 25px;
  top: 647px;
  left: 355px;
`;

const Vector221 = styled.img`
  position: absolute;
  width: 111px;
  height: 2px;
  top: 644px;
  left: 358px;
`;

const Vector222 = styled.img`
  position: absolute;
  width: 108px;
  height: 1px;
  top: 646px;
  left: 359px;
`;

const Vector223 = styled.img`
  position: absolute;
  width: 108px;
  height: 1px;
  top: 672px;
  left: 359px;
`;

const Vector224 = styled.img`
  position: absolute;
  width: 111px;
  height: 2px;
  top: 673px;
  left: 358px;
`;

const Vector225 = styled.img`
  position: absolute;
  width: 9px;
  height: 16px;
  top: 659px;
  left: 350px;
`;

const Vector226 = styled.img`
  position: absolute;
  width: 8px;
  height: 14px;
  top: 659px;
  left: 353px;
`;

const Vector227 = styled.img`
  position: absolute;
  width: 9px;
  height: 16px;
  top: 644px;
  left: 350px;
`;

const Vector228 = styled.img`
  position: absolute;
  width: 8px;
  height: 14px;
  top: 645px;
  left: 353px;
`;

const Vector229 = styled.img`
  position: absolute;
  width: 9px;
  height: 16px;
  top: 659px;
  left: 467px;
`;

const Vector230 = styled.img`
  position: absolute;
  width: 8px;
  height: 14px;
  top: 659px;
  left: 466px;
`;

const Vector231 = styled.img`
  position: absolute;
  width: 9px;
  height: 16px;
  top: 644px;
  left: 467px;
`;

const Vector232 = styled.img`
  position: absolute;
  width: 8px;
  height: 14px;
  top: 645px;
  left: 466px;
`;

const Vector233 = styled.img`
  position: absolute;
  width: 98px;
  height: 1px;
  top: 673px;
  left: 364px;
`;

const Vector234 = styled.img`
  position: absolute;
  width: 291px;
  height: 72px;
  top: 623px;
  left: 179px;
`;

const Vector235 = styled.img`
  position: absolute;
  width: 281px;
  height: 65px;
  top: 627px;
  left: 184px;
`;

const Vector236 = styled.img`
  position: absolute;
  width: 271px;
  height: 58px;
  top: 630px;
  left: 189px;
`;

const Vector237 = styled.img`
  position: absolute;
  width: 257px;
  height: 4px;
  top: 624px;
  left: 196px;
`;

const Vector238 = styled.img`
  position: absolute;
  width: 250px;
  height: 4px;
  top: 627px;
  left: 199px;
`;

const Vector239 = styled.img`
  position: absolute;
  width: 250px;
  height: 4px;
  top: 689px;
  left: 199px;
`;

const Vector240 = styled.img`
  position: absolute;
  width: 257px;
  height: 4px;
  top: 692px;
  left: 196px;
`;

const Vector241 = styled.img`
  position: absolute;
  width: 20px;
  height: 36px;
  top: 659px;
  left: 179px;
`;

const Vector242 = styled.img`
  position: absolute;
  width: 18px;
  height: 33px;
  top: 660px;
  left: 184px;
`;

const Vector243 = styled.img`
  position: absolute;
  width: 20px;
  height: 36px;
  top: 623px;
  left: 179px;
`;

const Vector244 = styled.img`
  position: absolute;
  width: 18px;
  height: 33px;
  top: 627px;
  left: 184px;
`;

const Group4 = styled.div`
  position: absolute;
  width: 301px;
  height: 81px;
  top: 619px;
  left: 173px;
  background-size: 100% 100%;
`;

const Vector245 = styled.img`
  position: absolute;
  width: 20px;
  height: 36px;
  top: 659px;
  left: 449px;
`;

const Vector246 = styled.img`
  position: absolute;
  width: 18px;
  height: 33px;
  top: 660px;
  left: 446px;
`;

const Vector247 = styled.img`
  position: absolute;
  width: 20px;
  height: 36px;
  top: 623px;
  left: 449px;
`;

const Vector248 = styled.img`
  position: absolute;
  width: 18px;
  height: 33px;
  top: 627px;
  left: 446px;
`;

const Vector249 = styled.img`
  position: absolute;
  width: 244px;
  height: 4px;
  top: 631px;
  left: 202px;
`;

const Vector250 = styled.img`
  position: absolute;
  width: 17px;
  height: 29px;
  top: 630px;
  left: 189px;
`;

const Vector251 = styled.img`
  position: absolute;
  width: 244px;
  height: 4px;
  top: 685px;
  left: 202px;
`;

const Vector252 = styled.img`
  position: absolute;
  width: 17px;
  height: 29px;
  top: 659px;
  left: 189px;
`;

const Vector253 = styled.img`
  position: absolute;
  width: 17px;
  height: 29px;
  top: 630px;
  left: 443px;
`;

const Vector254 = styled.img`
  position: absolute;
  width: 17px;
  height: 29px;
  top: 659px;
  left: 443px;
`;

const Vector255 = styled.img`
  position: absolute;
  width: 227px;
  height: 1px;
  top: 633px;
  left: 211px;
`;

const Vector256 = styled.img`
  position: absolute;
  width: 16px;
  height: 23px;
  top: 636px;
  left: 189px;
`;

const Vector257 = styled.img`
  position: absolute;
  width: 16px;
  height: 23px;
  top: 636px;
  left: 444px;
`;

const Vector258 = styled.img`
  position: absolute;
  width: 227px;
  height: 1px;
  top: 690px;
  left: 211px;
`;

const Vector259 = styled.img`
  position: absolute;
  width: 261px;
  height: 25px;
  top: 634px;
  left: 194px;
`;

const Vector260 = styled.img`
  position: absolute;
  width: 261px;
  height: 25px;
  top: 660px;
  left: 194px;
`;

const Vector261 = styled.img`
  position: absolute;
  width: 473px;
  height: 465px;
  top: 169px;
  left: 88px;
`;

const Vector262 = styled.img`
  position: absolute;
  width: 281px;
  height: 6px;
  top: 103px;
  left: 184px;
`;

const Vector263 = styled.img`
  position: absolute;
  width: 270px;
  height: 1px;
  top: 100px;
  left: 189px;
`;

const Q2Text = styled.div`
  ${CourierRegularNormalWhite23px}
  position: absolute;
  width: 420px;
  top: 212px;
  left: 113px;
  text-align: center;
  letter-spacing: 6.9px;
`;

const Price1 = styled.div`
  ${CourierRegularNormalWhite25px}
  position: absolute;
  width: 182px;
  top: 645px;
  left: 233px;
  text-align: center;
  letter-spacing: 7.5px;
`;

const Arrow2 = styled.img`
  position: absolute;
  width: 298px;
  height: 302px;
  top: 1993px;
  left: 578px;
  object-fit: cover;
`;

const Group11 = styled.img`
  position: absolute;
  width: 359px;
  height: 105px;
  top: 396px;
  left: 576px;
`;

const STACKINGSUBSECTION = styled.div`
  display: flex;
  width: 1489px;
  height: 116px;
  align-self: flex-end;
  margin-top: 208px;
  margin-right: 1px;
  align-items: flex-start;
  justify-content: space-around;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  background-color: var(--black);
`;

const STACKINGTITLE = styled.div`
  position: absolute;
  height: 47px;
  top: 17px;
  left: 51px;
  display: flex;
  align-items: flex-start;
  min-width: 505px;
`;

const LineContainer2 = styled.div`
  width: 54px;
  height: 38px;
  position: relative;
  margin-left: -3px;
  align-self: flex-end;
  margin-bottom: -0.72px;
`;

const OverlapGroup21 = styled.div`
  width: 442px;
  height: 47px;
  position: relative;
  margin-left: 11px;
  margin-top: 0;
`;

const STACKING1 = styled.div`
  ${CourierBoldWhite45px}
  position: absolute;
  width: 389px;
  top: 0;
  left: 0;
  text-align: center;
  letter-spacing: 13.5px;
`;

const LineContainer3 = styled.div`
  position: absolute;
  width: 54px;
  height: 38px;
  top: 9px;
  left: 388px;
`;

const STACKING2 = styled.div`
  width: 1244px;
  height: 762px;
  margin-top: 89px;
  margin-left: 22px;
  display: flex;
  padding: 0 0.8px;
  align-items: flex-start;
`;

const OverlapGroup7 = styled.div`
  ${CourierRegularNormalWhite25px}
  width: 1242px;
  height: 751px;
  position: relative;
  margin-top: -12.1px;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 1242px;
  height: 751px;
  top: 0;
  left: 0;
`;

const Vector264 = styled.img`
  position: absolute;
  width: 136px;
  height: 113px;
  top: 231px;
  left: 0;
`;

const Vector265 = styled.img`
  position: absolute;
  width: 136px;
  height: 113px;
  top: 229px;
  left: 1106px;
`;

const Vector266 = styled.img`
  position: absolute;
  width: 136px;
  height: 113px;
  top: 509px;
  left: 1106px;
`;

const Vector267 = styled.img`
  position: absolute;
  width: 136px;
  height: 113px;
  top: 509px;
  left: 0;
`;

const Vector268 = styled.img`
  position: absolute;
  width: 76px;
  height: 63px;
  top: 663px;
  left: 249px;
`;

const Vector269 = styled.img`
  position: absolute;
  width: 76px;
  height: 63px;
  top: 663px;
  left: 917px;
`;

const Vector270 = styled.img`
  position: absolute;
  width: 479px;
  height: 372px;
  top: 0;
  left: 381px;
`;

const Vector271 = styled.img`
  position: absolute;
  width: 52px;
  height: 2px;
  top: 708px;
  left: 261px;
`;

const Vector272 = styled.img`
  position: absolute;
  width: 52px;
  height: 2px;
  top: 708px;
  left: 929px;
`;

const Vector273 = styled.img`
  position: absolute;
  width: 21px;
  height: 87px;
  top: 523px;
  left: 33px;
`;

const Vector274 = styled.img`
  position: absolute;
  width: 21px;
  height: 87px;
  top: 243px;
  left: 33px;
`;

const Vector275 = styled.img`
  position: absolute;
  width: 21px;
  height: 87px;
  top: 523px;
  left: 1188px;
`;

const Vector276 = styled.img`
  position: absolute;
  width: 21px;
  height: 87px;
  top: 243px;
  left: 1188px;
`;

const Vector277 = styled.img`
  position: absolute;
  width: 1145px;
  height: 569px;
  top: 142px;
  left: 48px;
`;

const Vector278 = styled.img`
  position: absolute;
  width: 1124px;
  height: 552px;
  top: 150px;
  left: 59px;
`;

const Vector279 = styled.img`
  position: absolute;
  width: 7px;
  height: 6px;
  top: 142px;
  left: 48px;
`;

const Vector280 = styled.img`
  position: absolute;
  width: 5px;
  height: 4px;
  top: 146px;
  left: 53px;
`;

const Vector281 = styled.img`
  position: absolute;
  width: 879px;
  height: 552px;
  top: 150px;
  left: 304px;
`;

const Vector282 = styled.img`
  position: absolute;
  width: 1134px;
  height: 4px;
  top: 706px;
  left: 53px;
`;

const Vector283 = styled.img`
  position: absolute;
  width: 1130px;
  height: 4px;
  top: 702px;
  left: 56px;
`;

const Vector284 = styled.img`
  position: absolute;
  width: 21px;
  height: 560px;
  top: 146px;
  left: 33px;
`;

const Vector285 = styled.img`
  position: absolute;
  width: 5px;
  height: 557px;
  top: 148px;
  left: 1183px;
`;

const Vector286 = styled.img`
  position: absolute;
  width: 5px;
  height: 557px;
  top: 148px;
  left: 53px;
`;

const Vector287 = styled.img`
  position: absolute;
  width: 21px;
  height: 560px;
  top: 146px;
  left: 1188px;
`;

const Vector288 = styled.img`
  position: absolute;
  width: 1130px;
  height: 4px;
  top: 146px;
  left: 56px;
`;

const Vector289 = styled.img`
  position: absolute;
  width: 7px;
  height: 6px;
  top: 705px;
  left: 1186px;
`;

const Vector290 = styled.img`
  position: absolute;
  width: 5px;
  height: 4px;
  top: 702px;
  left: 1183px;
`;

const Vector291 = styled.img`
  position: absolute;
  width: 7px;
  height: 6px;
  top: 705px;
  left: 48px;
`;

const Vector292 = styled.img`
  position: absolute;
  width: 5px;
  height: 4px;
  top: 702px;
  left: 53px;
`;

const Vector293 = styled.img`
  position: absolute;
  width: 7px;
  height: 6px;
  top: 142px;
  left: 1186px;
`;

const Vector294 = styled.img`
  position: absolute;
  width: 5px;
  height: 4px;
  top: 146px;
  left: 1183px;
`;

const Vector295 = styled.img`
  position: absolute;
  width: 1082px;
  height: 517px;
  top: 167px;
  left: 79px;
`;

const Vector296 = styled.img`
  position: absolute;
  width: 86px;
  height: 5px;
  top: 176px;
  left: 187px;
`;

const Vector297 = styled.img`
  position: absolute;
  width: 86px;
  height: 5px;
  top: 176px;
  left: 975px;
`;

const Vector298 = styled.img`
  position: absolute;
  width: 33px;
  height: 27px;
  top: 649px;
  left: 1119px;
`;

const Vector299 = styled.img`
  position: absolute;
  width: 5px;
  height: 78px;
  top: 469px;
  left: 1151px;
`;

const Vector300 = styled.img`
  position: absolute;
  width: 42px;
  height: 4px;
  top: 172px;
  left: 142px;
`;

const Vector301 = styled.img`
  position: absolute;
  width: 95px;
  height: 4px;
  top: 172px;
  left: 312px;
`;

const Vector302 = styled.img`
  position: absolute;
  width: 51px;
  height: 94px;
  top: 176px;
  left: 90px;
`;

const Vector303 = styled.img`
  position: absolute;
  width: 11px;
  height: 38px;
  top: 267px;
  left: 38px;
`;

const Vector304 = styled.img`
  position: absolute;
  width: 5px;
  height: 31px;
  top: 271px;
  left: 40px;
`;

const Vector305 = styled.img`
  position: absolute;
  width: 9px;
  height: 5px;
  top: 267px;
  left: 40px;
`;

const Vector306 = styled.img`
  position: absolute;
  width: 11px;
  height: 6px;
  top: 299px;
  left: 38px;
`;

const Vector307 = styled.img`
  position: absolute;
  width: 4px;
  height: 29px;
  top: 271px;
  left: 38px;
`;

const Vector308 = styled.img`
  position: absolute;
  width: 3px;
  height: 38px;
  top: 267px;
  left: 46px;
`;

const Vector309 = styled.img`
  position: absolute;
  width: 11px;
  height: 38px;
  top: 547px;
  left: 38px;
`;

const Vector310 = styled.img`
  position: absolute;
  width: 5px;
  height: 31px;
  top: 551px;
  left: 40px;
`;

const Vector311 = styled.img`
  position: absolute;
  width: 9px;
  height: 5px;
  top: 580px;
  left: 40px;
`;

const Vector312 = styled.img`
  position: absolute;
  width: 11px;
  height: 6px;
  top: 547px;
  left: 38px;
`;

const Vector313 = styled.img`
  position: absolute;
  width: 4px;
  height: 29px;
  top: 552px;
  left: 38px;
`;

const Vector314 = styled.img`
  position: absolute;
  width: 3px;
  height: 38px;
  top: 547px;
  left: 46px;
`;

const Vector315 = styled.img`
  position: absolute;
  width: 11px;
  height: 38px;
  top: 267px;
  left: 1193px;
`;

const Vector316 = styled.img`
  position: absolute;
  width: 5px;
  height: 31px;
  top: 271px;
  left: 1196px;
`;

const Vector317 = styled.img`
  position: absolute;
  width: 9px;
  height: 5px;
  top: 267px;
  left: 1193px;
`;

const Vector318 = styled.img`
  position: absolute;
  width: 11px;
  height: 6px;
  top: 299px;
  left: 1193px;
`;

const Vector319 = styled.img`
  position: absolute;
  width: 4px;
  height: 29px;
  top: 271px;
  left: 1199px;
`;

const Vector320 = styled.img`
  position: absolute;
  width: 3px;
  height: 38px;
  top: 267px;
  left: 1193px;
`;

const Vector321 = styled.img`
  position: absolute;
  width: 11px;
  height: 38px;
  top: 547px;
  left: 1193px;
`;

const Vector322 = styled.img`
  position: absolute;
  width: 5px;
  height: 31px;
  top: 551px;
  left: 1196px;
`;

const Vector323 = styled.img`
  position: absolute;
  width: 9px;
  height: 5px;
  top: 580px;
  left: 1193px;
`;

const Vector324 = styled.img`
  position: absolute;
  width: 11px;
  height: 6px;
  top: 547px;
  left: 1193px;
`;

const Vector325 = styled.img`
  position: absolute;
  width: 4px;
  height: 29px;
  top: 552px;
  left: 1199px;
`;

const Vector326 = styled.img`
  position: absolute;
  width: 3px;
  height: 38px;
  top: 547px;
  left: 1193px;
`;

const Vector327 = styled.img`
  position: absolute;
  width: 78px;
  height: 4px;
  top: 172px;
  left: 1082px;
`;

const Vector328 = styled.img`
  position: absolute;
  width: 8px;
  height: 31px;
  top: 185px;
  left: 1152px;
`;

const Vector329 = styled.img`
  position: absolute;
  width: 4px;
  height: 65px;
  top: 424px;
  left: 82px;
`;

const Vector330 = styled.img`
  position: absolute;
  width: 42px;
  height: 3px;
  top: 680px;
  left: 135px;
`;

const Vector331 = styled.img`
  position: absolute;
  width: 105px;
  height: 17px;
  top: 129px;
  left: 906px;
`;

const Vector332 = styled.img`
  position: absolute;
  width: 105px;
  height: 17px;
  top: 129px;
  left: 230px;
`;

const Vector333 = styled.img`
  position: absolute;
  width: 532px;
  height: 52px;
  top: 94px;
  left: 355px;
`;

const Vector334 = styled.img`
  position: absolute;
  width: 1134px;
  height: 52px;
  top: 94px;
  left: 53px;
`;

const Vector335 = styled.img`
  position: absolute;
  width: 47px;
  height: 9px;
  top: 133px;
  left: 935px;
`;

const Vector336 = styled.img`
  position: absolute;
  width: 37px;
  height: 4px;
  top: 135px;
  left: 940px;
`;

const Vector337 = styled.img`
  position: absolute;
  width: 33px;
  height: 2px;
  top: 136px;
  left: 942px;
`;

const Vector338 = styled.img`
  position: absolute;
  width: 7px;
  height: 7px;
  top: 134px;
  left: 975px;
`;

const Vector339 = styled.img`
  position: absolute;
  width: 8px;
  height: 9px;
  top: 133px;
  left: 935px;
`;

const Vector340 = styled.img`
  position: absolute;
  width: 35px;
  height: 4px;
  top: 133px;
  left: 941px;
`;

const Vector341 = styled.img`
  position: absolute;
  width: 47px;
  height: 2px;
  top: 139px;
  left: 935px;
`;

const Vector342 = styled.img`
  position: absolute;
  width: 47px;
  height: 9px;
  top: 133px;
  left: 259px;
`;

const Vector343 = styled.img`
  position: absolute;
  width: 37px;
  height: 4px;
  top: 135px;
  left: 264px;
`;

const Vector344 = styled.img`
  position: absolute;
  width: 33px;
  height: 2px;
  top: 136px;
  left: 266px;
`;

const Vector345 = styled.img`
  position: absolute;
  width: 7px;
  height: 7px;
  top: 134px;
  left: 259px;
`;

const Vector346 = styled.img`
  position: absolute;
  width: 8px;
  height: 9px;
  top: 133px;
  left: 298px;
`;

const Vector347 = styled.img`
  position: absolute;
  width: 35px;
  height: 4px;
  top: 133px;
  left: 264px;
`;

const Vector348 = styled.img`
  position: absolute;
  width: 47px;
  height: 2px;
  top: 139px;
  left: 259px;
`;

const Vector349 = styled.img`
  position: absolute;
  width: 58px;
  height: 23px;
  top: 108px;
  left: 403px;
`;

const Vector350 = styled.img`
  position: absolute;
  width: 42px;
  height: 6px;
  top: 126px;
  left: 403px;
`;

const Vector351 = styled.img`
  position: absolute;
  width: 42px;
  height: 5px;
  top: 108px;
  left: 419px;
`;

const Vector352 = styled.img`
  position: absolute;
  width: 20px;
  height: 23px;
  top: 108px;
  left: 441px;
`;

const Vector353 = styled.img`
  position: absolute;
  width: 58px;
  height: 23px;
  top: 108px;
  left: 780px;
`;

const Vector354 = styled.img`
  position: absolute;
  width: 42px;
  height: 6px;
  top: 126px;
  left: 796px;
`;

const Vector355 = styled.img`
  position: absolute;
  width: 42px;
  height: 5px;
  top: 108px;
  left: 780px;
`;

const Vector356 = styled.img`
  position: absolute;
  width: 20px;
  height: 23px;
  top: 108px;
  left: 780px;
`;

const Vector357 = styled.img`
  position: absolute;
  width: 332px;
  height: 44px;
  top: 98px;
  left: 455px;
`;

const Vector358 = styled.img`
  position: absolute;
  width: 321px;
  height: 35px;
  top: 102px;
  left: 460px;
`;

const Vector359 = styled.img`
  position: absolute;
  width: 277px;
  height: 5px;
  top: 103px;
  left: 482px;
`;

const Vector360 = styled.img`
  position: absolute;
  width: 316px;
  height: 4px;
  top: 132px;
  left: 462px;
`;

const Vector361 = styled.img`
  position: absolute;
  width: 62px;
  height: 29px;
  top: 105px;
  left: 462px;
`;

const Vector362 = styled.img`
  position: absolute;
  width: 62px;
  height: 29px;
  top: 105px;
  left: 716px;
`;

const Vector363 = styled.img`
  position: absolute;
  width: 330px;
  height: 4px;
  top: 137px;
  left: 455px;
`;

const Vector364 = styled.img`
  position: absolute;
  width: 30px;
  height: 41px;
  top: 99px;
  left: 756px;
`;

const Vector365 = styled.img`
  position: absolute;
  width: 276px;
  height: 5px;
  top: 98px;
  left: 483px;
`;

const Vector366 = styled.img`
  position: absolute;
  width: 30px;
  height: 41px;
  top: 99px;
  left: 455px;
`;

const Vector367 = styled.img`
  position: absolute;
  width: 272px;
  height: 53px;
  top: 554px;
  left: 178px;
`;

const Vector368 = styled.img`
  position: absolute;
  width: 274px;
  height: 299px;
  top: 227px;
  left: 178px;
`;

const Vector369 = styled.img`
  position: absolute;
  width: 274px;
  height: 299px;
  top: 227px;
  left: 484px;
`;

const Vector370 = styled.img`
  position: absolute;
  width: 274px;
  height: 299px;
  top: 227px;
  left: 789px;
`;

const Vector371 = styled.img`
  position: absolute;
  width: 25px;
  height: 32px;
  top: 361px;
  left: 125px;
`;

const Vector372 = styled.img`
  position: absolute;
  width: 25px;
  height: 32px;
  top: 361px;
  left: 1091px;
`;

const Vector373 = styled.img`
  position: absolute;
  width: 272px;
  height: 53px;
  top: 554px;
  left: 487px;
`;

const Vector374 = styled.img`
  position: absolute;
  width: 272px;
  height: 53px;
  top: 554px;
  left: 790px;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 300px;
  height: 89px;
  top: 662px;
  left: 471px;
`;

const Vector375 = styled.img`
  position: absolute;
  width: 124px;
  height: 34px;
  top: 27px;
  left: 0;
`;

const Vector376 = styled.img`
  position: absolute;
  width: 120px;
  height: 31px;
  top: 29px;
  left: 2px;
`;

const Vector377 = styled.img`
  position: absolute;
  width: 115px;
  height: 27px;
  top: 31px;
  left: 4px;
`;

const Vector378 = styled.img`
  position: absolute;
  width: 110px;
  height: 2px;
  top: 27px;
  left: 7px;
`;

const Vector379 = styled.img`
  position: absolute;
  width: 107px;
  height: 2px;
  top: 29px;
  left: 8px;
`;

const Vector380 = styled.img`
  position: absolute;
  width: 107px;
  height: 2px;
  top: 58px;
  left: 8px;
`;

const Vector381 = styled.img`
  position: absolute;
  width: 110px;
  height: 2px;
  top: 60px;
  left: 7px;
`;

const Vector382 = styled.img`
  position: absolute;
  width: 9px;
  height: 17px;
  top: 44px;
  left: 0;
`;

const Vector383 = styled.img`
  position: absolute;
  width: 8px;
  height: 15px;
  top: 44px;
  left: 2px;
`;

const Vector384 = styled.img`
  position: absolute;
  width: 9px;
  height: 17px;
  top: 27px;
  left: 0;
`;

const Vector385 = styled.img`
  position: absolute;
  width: 8px;
  height: 15px;
  top: 29px;
  left: 2px;
`;

const Vector386 = styled.img`
  position: absolute;
  width: 9px;
  height: 17px;
  top: 44px;
  left: 115px;
`;

const Vector387 = styled.img`
  position: absolute;
  width: 8px;
  height: 15px;
  top: 44px;
  left: 114px;
`;

const Vector388 = styled.img`
  position: absolute;
  width: 9px;
  height: 17px;
  top: 27px;
  left: 115px;
`;

const Vector389 = styled.img`
  position: absolute;
  width: 8px;
  height: 15px;
  top: 29px;
  left: 114px;
`;

const Vector390 = styled.img`
  position: absolute;
  width: 97px;
  height: 1px;
  top: 59px;
  left: 13px;
`;

const Vector391 = styled.img`
  position: absolute;
  width: 124px;
  height: 34px;
  top: 27px;
  left: 176px;
`;

const Vector392 = styled.img`
  position: absolute;
  width: 120px;
  height: 31px;
  top: 29px;
  left: 178px;
`;

const Vector393 = styled.img`
  position: absolute;
  width: 115px;
  height: 27px;
  top: 31px;
  left: 180px;
`;

const Vector394 = styled.img`
  position: absolute;
  width: 110px;
  height: 2px;
  top: 27px;
  left: 183px;
`;

const Vector395 = styled.img`
  position: absolute;
  width: 107px;
  height: 2px;
  top: 29px;
  left: 184px;
`;

const Vector396 = styled.img`
  position: absolute;
  width: 107px;
  height: 2px;
  top: 58px;
  left: 184px;
`;

const Vector397 = styled.img`
  position: absolute;
  width: 110px;
  height: 2px;
  top: 60px;
  left: 183px;
`;

const Vector398 = styled.img`
  position: absolute;
  width: 9px;
  height: 17px;
  top: 44px;
  left: 175px;
`;

const Vector399 = styled.img`
  position: absolute;
  width: 8px;
  height: 15px;
  top: 44px;
  left: 178px;
`;

const Vector400 = styled.img`
  position: absolute;
  width: 9px;
  height: 17px;
  top: 27px;
  left: 175px;
`;

const Vector401 = styled.img`
  position: absolute;
  width: 8px;
  height: 15px;
  top: 29px;
  left: 178px;
`;

const Vector402 = styled.img`
  position: absolute;
  width: 9px;
  height: 17px;
  top: 44px;
  left: 291px;
`;

const Vector403 = styled.img`
  position: absolute;
  width: 8px;
  height: 15px;
  top: 44px;
  left: 289px;
`;

const Vector404 = styled.img`
  position: absolute;
  width: 9px;
  height: 17px;
  top: 27px;
  left: 291px;
`;

const Vector405 = styled.img`
  position: absolute;
  width: 8px;
  height: 15px;
  top: 29px;
  left: 289px;
`;

const Vector406 = styled.img`
  position: absolute;
  width: 97px;
  height: 1px;
  top: 59px;
  left: 189px;
`;

const Vector407 = styled.img`
  position: absolute;
  width: 287px;
  height: 79px;
  top: 5px;
  left: 6px;
`;

const Vector408 = styled.img`
  position: absolute;
  width: 277px;
  height: 71px;
  top: 9px;
  left: 11px;
`;

const Vector409 = styled.img`
  position: absolute;
  width: 267px;
  height: 63px;
  top: 13px;
  left: 16px;
`;

const Vector410 = styled.img`
  position: absolute;
  width: 254px;
  height: 4px;
  top: 5px;
  left: 23px;
`;

const Vector411 = styled.img`
  position: absolute;
  width: 247px;
  height: 4px;
  top: 9px;
  left: 26px;
`;

const Vector412 = styled.img`
  position: absolute;
  width: 247px;
  height: 4px;
  top: 76px;
  left: 26px;
`;

const Vector413 = styled.img`
  position: absolute;
  width: 254px;
  height: 4px;
  top: 79px;
  left: 23px;
`;

const Vector414 = styled.img`
  position: absolute;
  width: 20px;
  height: 39px;
  top: 44px;
  left: 6px;
`;

const Vector415 = styled.img`
  position: absolute;
  width: 18px;
  height: 35px;
  top: 44px;
  left: 11px;
`;

const Vector416 = styled.img`
  position: absolute;
  width: 20px;
  height: 39px;
  top: 5px;
  left: 6px;
`;

const Vector417 = styled.img`
  position: absolute;
  width: 18px;
  height: 35px;
  top: 9px;
  left: 11px;
`;

const Group5 = styled.div`
  position: absolute;
  width: 295px;
  height: 89px;
  top: 0;
  left: 3px;
  background-size: 100% 100%;
`;

const Vector418 = styled.img`
  position: absolute;
  width: 20px;
  height: 39px;
  top: 44px;
  left: 273px;
`;

const Vector419 = styled.img`
  position: absolute;
  width: 18px;
  height: 35px;
  top: 44px;
  left: 270px;
`;

const Vector420 = styled.img`
  position: absolute;
  width: 20px;
  height: 39px;
  top: 5px;
  left: 273px;
`;

const Vector421 = styled.img`
  position: absolute;
  width: 18px;
  height: 35px;
  top: 9px;
  left: 270px;
`;

const Vector422 = styled.img`
  position: absolute;
  width: 240px;
  height: 4px;
  top: 12px;
  left: 29px;
`;

const Vector423 = styled.img`
  position: absolute;
  width: 17px;
  height: 32px;
  top: 13px;
  left: 16px;
`;

const Vector424 = styled.img`
  position: absolute;
  width: 240px;
  height: 4px;
  top: 72px;
  left: 29px;
`;

const Vector425 = styled.img`
  position: absolute;
  width: 17px;
  height: 32px;
  top: 44px;
  left: 16px;
`;

const Vector426 = styled.img`
  position: absolute;
  width: 17px;
  height: 32px;
  top: 13px;
  left: 267px;
`;

const Vector427 = styled.img`
  position: absolute;
  width: 17px;
  height: 32px;
  top: 44px;
  left: 267px;
`;

const Vector428 = styled.img`
  position: absolute;
  width: 224px;
  height: 1px;
  top: 15px;
  left: 37px;
`;

const Vector429 = styled.img`
  position: absolute;
  width: 16px;
  height: 25px;
  top: 19px;
  left: 16px;
`;

const Vector430 = styled.img`
  position: absolute;
  width: 16px;
  height: 25px;
  top: 19px;
  left: 267px;
`;

const Vector431 = styled.img`
  position: absolute;
  width: 224px;
  height: 1px;
  top: 79px;
  left: 37px;
`;

const Vector432 = styled.img`
  position: absolute;
  width: 257px;
  height: 28px;
  top: 17px;
  left: 21px;
`;

const Vector433 = styled.img`
  position: absolute;
  width: 257px;
  height: 28px;
  top: 44px;
  left: 21px;
`;

const Vector434 = styled.img`
  position: absolute;
  width: 104px;
  height: 36px;
  top: 119px;
  left: 231px;
`;

const Vector435 = styled.img`
  position: absolute;
  width: 104px;
  height: 36px;
  top: 119px;
  left: 907px;
`;

const Vector436 = styled.img`
  position: absolute;
  width: 277px;
  height: 6px;
  top: 100px;
  left: 482px;
`;

const Vector437 = styled.img`
  position: absolute;
  width: 8px;
  height: 31px;
  top: 624px;
  left: 68px;
`;

const Vector438 = styled.img`
  position: absolute;
  width: 266px;
  height: 1px;
  top: 97px;
  left: 487px;
`;

const Phase1 = styled.div`
  position: absolute;
  width: 106px;
  top: 565px;
  left: 263px;
  letter-spacing: 0;
`;

const Phase2 = styled.div`
  position: absolute;
  width: 106px;
  top: 565px;
  left: 570px;
  letter-spacing: 0;
`;

const Phase3 = styled.div`
  position: absolute;
  width: 106px;
  top: 565px;
  left: 873px;
  letter-spacing: 0;
`;

const StackingPhase1 = styled.div`
  position: absolute;
  width: 211px;
  top: 244px;
  left: 208px;
  text-align: center;
  letter-spacing: 0;
`;

const StackingPhase2 = styled.div`
  position: absolute;
  width: 211px;
  top: 237px;
  left: 516px;
  text-align: center;
  letter-spacing: 0;
`;

const StackingPhase3 = styled.div`
  position: absolute;
  width: 211px;
  top: 237px;
  left: 821px;
  text-align: center;
  letter-spacing: 0;
`;

const StackingDetails = styled.div`
  ${CourierRegularNormalWhite25px}
  width: 1489px;
  min-height: 181px;
  align-self: flex-end;
  margin-top: 88px;
  margin-right: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const Frame11 = styled.div`
  width: 1512px;
  height: 135px;
  margin-top: 186px;
  margin-right: 2px;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
`;

const OverlapGroup211 = styled.div`
  width: 1939px;
  height: 125px;
  position: relative;
  margin-left: -427px;
`;

const Rectangle20 = styled.img`
  position: absolute;
  width: 1512px;
  height: 125px;
  top: 0;
  left: 427px;
  object-fit: cover;
`;

const WHITEPAPERBUTTON = styled.div`
  display: flex;
  width: 747px;
  position: absolute;
  top: 14px;
  left: 0;
  align-items: flex-start;
  gap: 10px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  transform: rotate(180deg);
`;

const WHITEPAPER = styled.div`
  ${CourierBoldWhite25px}
  width: 228px;
  text-align: center;
  letter-spacing: 7.5px;
  height: 29px;
  transform: rotate(-180deg);
`;

const Frame12 = styled.div`
  position: absolute;
  width: 847px;
  height: 34px;
  top: 24px;
  left: 833px;
  display: flex;
  padding: 0 65px;
  align-items: flex-start;
`;

const Vector439 = styled.img`
  width: 24px;
  height: 24px;
  align-self: center;
  margin-left: 22px;
  margin-bottom: 0.56px;
`;

const BPOF2022ALLRIGHTSRESERVED = styled.div`
  ${CourierBoldWhite25px}
  min-height: 29px;
  margin-left: 25px;
  min-width: 646px;
  text-align: center;
  letter-spacing: 7.5px;
`;

export default Desktop2;
