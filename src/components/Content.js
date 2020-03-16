import React from "react";
import "./Content.css";
import bglead from "../img/index_BG_lead.png";
import leadGraphic from "../img/index_leadGraphic.png";
// import index_BG_setup from "../img/index_BG_setup.png";
import index_coop from "../img/index_coop.png";
import indexserviceicon1 from "../img/index_service_icon1.png";
import index_service_icon2 from "../img/index_service_icon2.png";
import index_service_icon3 from "../img/index_service_icon3.png";
import indexsetupicon1 from "../img/index_setup_icon1.png";
import indexsetupicon2 from "../img/index_setup_icon2.png";
import indexsetupicon3 from "../img/index_setup_icon3.png";
import index_client_icon1 from "../img/index_client_icon1.png";
import index_client_icon2 from "../img/index_client_icon2.png";
import index_client_icon3 from "../img/index_client_icon3.png";
import { Media } from "react-bootstrap";

export const Routes = {
  Content: "/"
};

class Content extends React.Component {
  render() {
    return (
      <div>
        <div className="index_BG_setup">
        <img src={bglead} alt="" className="bgleadstyle" />
        <img src={leadGraphic} alt="" className="leadGraphicleadstyle" />
        <div className="container">
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <div className="row">
            <div className="col-md-6">
              <p className="text1">ONESPACE</p>
              <p className="text2">
                The End to End Blockchain Solutions Provider
              </p>
              <p className="text3">
                เราออกแบบและพัฒนาโครงการ Blockchain ให้กับลูกค้าของเรา
              </p>
              <p className="text4">
                เราสร้างทีมงานวิศวกรที่ตั้งใจศึกษาเกี่ยวกับเทคโนโลยี Blockchain
                อย่างลงลึกโดยเฉพาะ
              </p>
            </div>
          </div>
          <div>
            <div className="texttitle spaceTitle text-center">
              สิ่งที่เราให้บริการ
            </div>
            <div className="row justify-content-between">
              <div className="col-md-3 card">
                <img
                  src={indexserviceicon1}
                  alt=""
                  width="120"
                  className="mx-auto my-5"
                />
                <div className="p-auto text-center">
                  <div className="textsecond1">ออกแบบและให้คำปรึกษา</div>
                  <div className="textsecond2">
                    เราช่วยท่านคิดว่า องค์กรของท่านสามารถเอา Blockchain ในตระกูล
                    Hyperledger ไปใช้งานได้อย่างไรบ้าง
                  </div>
                </div>
              </div>
              <div className="col-md-3 card">
                <img
                  src={index_service_icon2}
                  alt=""
                  width="120"
                  className="mx-auto my-5"
                />
                <div className="p-auto text-center">
                  <div className="textsecond1">พัฒนาโครงการ</div>
                  <div className="textsecond2">
                    เราช่วยท่านติดตั้ง เขียน Smart Contract รวมถึง
                    พัฒนาระบบที่เกี่ยวข้องกับโครงการ Blockchain ในตระกูล
                    Hyperledger ของท่าน
                  </div>
                </div>
              </div>
              <div className="col-md-3 card">
                <img
                  src={index_service_icon3}
                  alt=""
                  width="120"
                  className="mx-auto my-5"
                />
                <div className="p-auto text-center">
                  <div className="textsecond1">
                    ดูแลรักษา Blockchain ของท่าน
                  </div>
                  <div className="textsecond2">
                    เราช่วยท่านดูแลรักษา Blockchain ขององค์กรท่าน
                    เพื่อลดภาระในการจัดสรร ทรัพยกรขององค์กรของท่าน
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part 3 */}
        <div className="container">
        <div className="row" style={{ marginTop: "100px" }}>
          <div className="col-md-6 m-auto">
            <div className="textthird1">ในการติดตั้งและดูแล</div>
            <div className="textthird2">Blockchain - Hyperledger ของท่าน</div>
            <div className="textthird3">เราสามารถช่วยท่านออกแบบว่า</div>
            <div className="textthird4">ท่านจะเอา Blockchain ไปไว้ที่ใด</div>
          </div>
          <div className="col-md-5">
            <ul className="list-unstyled">
              <Media as="li" className="my-5">
                <img width="60" className="mr-3" src={indexsetupicon1} alt="" />
                <Media.Body>
                  <div className="textsecond1 line-height=27px">
                    ติดตั้งที่เครือข่ายของท่าน
                  </div>
                  <div className="textsecond2">
                    เราสามารถช่วยท่านติดตั้งและดูแลในสภาพแวดล้อมที่ท่านกำหนด
                  </div>
                </Media.Body>
              </Media>

              <Media as="li" className="my-5">
                <img width="60" className="mr-3" src={indexsetupicon2} alt="" />
                <Media.Body>
                  <div className="textsecond1">
                    ติดตั้งบน LinuxOne เราลงทุนซื้อเครื่อง LinuxOne
                  </div>
                  <div className="textsecond2">
                    ทำให้ท่านสามารถเลือกใช้งาน Hyperledger บนเครื่อง LinuxOne
                    ได้ในกรณีที่ท่าน ต้องการระบบที่มีการรักษาความปลอดภัยขั้นสูง
                  </div>
                </Media.Body>
              </Media>

              <Media as="li" className="my-5">
                <img width="60" className="mr-3" src={indexsetupicon3} alt="" />
                <Media.Body>
                  <div className="textsecond1">ติดตั้งอยู่บน INET Cloud</div>
                  <div className="textsecond2">
                    ท่านสามารถเลือกติดตั้งและให้เราช่วยดูแล Blockchain
                    บนเครือข่าย INET Cloud ซึ่งเป็น
                    เครือข่ายที่ได้รับรองมาตรฐานต่างๆ เป็นที่น่าเชื่อถือ
                  </div>
                </Media.Body>
              </Media>
            </ul>
          </div>
        </div>
        </div>
        </div>

        {/* Part 4 */}
        <div className="tab container-fluid p-5">
          <div className="textfourth1">ลูกค้าโครงการ Hyperledger</div>
          <div className="textfourth2">ที่ทีมงานเราเคยมีประสบการณ์</div>
          <div className="row justify-content-around pt- px-5">
            <div className="col-md-3">
              <img
                src={index_client_icon1}
                alt=""
                width="170"
                className="mx-auto my-5 d-flex"
              />
              <div className="p-auto text-center">
                <div className="textfourth3">Peer to Peer Lending</div>
                <div className="textfourth4">
                  ออกแบบ พัฒนา และติดตั้งโดยนำ Hyperleder - Blockchain
                  ไปใช้ในโจทย์ Peer to Peer Lending เพื่อ Secure
                  สัญญาเงินกู้ระหว่างกัน
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <img
                src={index_client_icon2}
                alt=""
                width="100"
                className="mx-auto my-5 d-flex"
              />
              <div className="p-auto text-center">
                <div className="textfourth3">Peer to Peer Lending</div>
                <div className="textfourth4">
                  ออกแบบ พัฒนา และติดตั้งโดยนำ Hyperleder - Blockchain
                  ไปใช้ในโจทย์ Peer to Peer Lending เพื่อ Secure
                  สัญญาเงินกู้ระหว่างกัน
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <img
                src={index_client_icon3}
                alt=""
                width="95"
                className="mx-auto my-5 d-flex"
              />
              <div className="p-auto text-center">
                <div className="textfourth3">Peer to Peer Lending</div>
                <div className="textfourth4">
                  ออกแบบ พัฒนา และติดตั้งโดยนำ Hyperleder - Blockchain
                  ไปใช้ในโจทย์ Peer to Peer Lending เพื่อ Secure
                  สัญญาเงินกู้ระหว่างกัน
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part 5 */}
        <div className="container pt-5 pt-5">
          <div className="row">
            <div className="col-xl-5">
              <div className="textFifth1">OneSpace</div>
              <div className="textFifth2">จัดตั้งขึ้นโดยความร่วมมือ</div>
              <div className="py-2">
                <div className="textsecond1">INET</div>
                <div className="textsecond1">
                  บริษัท อินเทอร์เน็ต ประเทศไทย จำกัด (มหาชน)
                </div>
              </div>
              <div className="textsecond2">
                ผู้ให้บริการโครงสร้างพื้นฐานด้านไอซีทีแบบครบวงจรสำหรับธุรกิจและผู้ที่ต้องการนำไอซีทีมาเป็นเครื่องมือเพื่อเสริมสร้างความสามารถในการแข่งขันทางธุรกิจ
              </div>
              <div className="pt-md-4">
                <div className="textsecond1">ENTER Corporation</div>
                <div className="textsecond1">
                  บริษัท เอ็นเทอร์คอปอเรชั่น จำกัด
                </div>
                <div className="textsecond2">
                  เราคือบริษัทที่มุ่งเน้นการทำงานที่มีคุณภาพและต้องมั่นใจว่าลูกค้า
                  สามารถนำผลงานที่เราส่งมอบไปใช้งานได้และ
                  มีคุณค่าทางธุรกิจอย่างแท้จริง ผู้มีประสบการณ์จริงในการ
                  Implement โครงการ Blockchain ให้แก่ภาครับและเอกชน
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <img src={index_coop} alt="" className="index_coop" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
