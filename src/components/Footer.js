import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div
        className="row"
        style={{ marginLeft: 0, marginRight: 0, backgroundColor: "#000000" }}
      >
        <div className="col-md-5 px-0">
          <iFrame
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.631082210267!2d102.83834281469017!3d16.494207688619635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31228bf54b3484c9%3A0x5c2f099195f8b03a!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4reC4tOC4meC5gOC4l-C4reC4o-C5jOC5gOC4meC5h-C4leC4m-C4o-C4sOC5gOC4l-C4qOC5hOC4l-C4oiDguIjguLPguIHguLHguJQgKOC4oeC4q-C4suC4iuC4mSkg4Liq4Liy4LiC4Liy4LiC4Lit4LiZ4LmB4LiB4LmI4LiZ!5e0!3m2!1sth!2sth!4v1583205097494!5m2!1sth!2sth"
            width="100%"
            height="100%"
            frameBorder="0"
          ></iFrame>
        </div>
        <div className="col-md-7">
          <div className="row justify-content-between p-5">
            <div className="col-md-5">
              <div className="textfooterbold">
                OneSpace Corporation co., ltd.
              </div>
              <div className="textfooternomal">
                1768 Thai Summit Tower, 16th Floor New Petchaburi Road, Khwaeng
                Bang Kapi, Khet Huay Khwang, Bangkok 10310
              </div>
              <div className="textfooterbold mt-2">Official Hours</div>
              <div className="textfooternomal">
                Monday - Friday 9.00 AM - 5.00 PM
              </div>
            </div>
            <div className="col-md-5">
              <div className="textfooterbold">For Business</div>
              <div className="textfooternomal">hi@onespace.co.th</div>
              <div className="textfooternomal">02-257-7000 Or 063-197-7583</div>
              <div className="textfooterbold mt-2">For Support</div>
              <div className="textfooternomal">support@onespace.co.th</div>
              <div className="textfooternomal">063-197-7583</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
