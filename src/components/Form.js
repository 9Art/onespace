import React from "react";
import TextField from "@material-ui/core/TextField";
import "./Form.css";
import Contact_top from "../img/Contact_top.png";
import Contact_lead from "../img/Contact_lead.png";

export const Routes = {
  Content: "/content"
};

function Form() {
  return (
    <div>
      <img src={Contact_top} alt="" width="40%" className="Contact_top" />
      <div className="container mb-5">
        <div className="textH1 text-center">ถ้าท่านเป็น</div>
        <img src={Contact_lead} alt="" width="40%" className="d-flex m-auto" />
        <div className="row m-4 justify-content-center text-center">
          <div className="col-xl-3">
            <div className="textH2">IT Manager</div>
            <div>ที่ได้รับโจทย์ Blockchain</div>
          </div>
          <div className="col-xl-3">
            <div className="textH2">ผู้นำองค์กร</div>
            <div>กำลังมองหาเทคโนโลยีใหม่เพื่อนำพาองค์กรของท่าน</div>
          </div>
          <div className="col-xl-3">
            <div className="textH2">IT Providers</div>
            <div>ผู้ที่กำลังต้องทำโครงการ Blockchain ให้ลูกค้า</div>
          </div>
        </div>

        <div className="cardstyle mx-auto my-5 py-5">
          <div className="text-center mb-5">
            <div className="textSubTitle">
              ให้เราช่วยท่านในโจทย์ที่ท่านได้รับ
            </div>
            <div>
              เรารบกวนขอข้อมูลของท่านเพื่อที่เราจะติดต่อกลับไปโดยไวที่สุด
            </div>
          </div>
          <form noValidate autoComplete="off">
            <TextField id="name" label="ชื่อ นามสกุล" fullWidth className="my-2"/>
            <TextField id="role" label="ตำแหน่ง" fullWidth className="my-2" />
            <TextField id="standard-basic" label="องค์กร" fullWidth className="my-2" />
            <TextField id="email" label="อีเมล์" fullWidth className="my-2" />
            <TextField id="tel" label="เบอร์โทรศัพท์" fullWidth className="my-2" />
            <TextField
              id="additionalQuestions"
              label="ท่านพอจะเล่าโจทย์ของท่านพอสังเขปได้หรือไม่"
              multiline
              fullWidth
              rows="6"
              className="my-2"
            />  
            <button className="d-flex mx-auto mt-5">ส่งข้อมูล</button>
          </form>
        </div>
        <div className="text-center textLink">รู้จัก OneSpace ให้มากขึ้น</div>
      </div>
    </div>
  );
}

export default Form;
