import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { AiFillFacebook } from "react-icons/ai";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container>
          <h4>
            {" "}
            <b className="purple"> Contact Us </b>{" "}
          </h4>
          <p>
            <strong>
              {" "}
              <b className="purple"> Address: </b>
            </strong>
            <br />
            123 Main Street, Suite 101 <br />
            City, State, ZIP Code
          </p>
          <p>
            <strong>
              {" "}
              <b className="purple">Phone: </b>
            </strong>{" "}
            (555) 123-4567
            <br />
            <strong>
              {" "}
              <b className="purple"> Email: </b>
            </strong>{" "}
            IBT3Aaccountingfirm@gmail.com
          </p>
          <p>
            <strong>
              {" "}
              <b className="purple"> Office Hours: </b>
            </strong>
            <br />
            Monday - Friday: 9:00 AM - 5:00 PM <br />
            Saturday: By appointment only <br />
            Sunday: Closed
          </p>
          <h5>
            {" "}
            <b className="purple"> Social Media </b>
          </h5>
          <p>
            {" "}
            <b className="purple"> Connect with us: IBT3A ACCOUNTING FIRM </b>
          </p>
          <a
            href="https://www.facebook.com/IBT3AACCOUNTINGFIRM"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <AiFillFacebook />
          </a>
          <h5>Contact Form</h5>
          <strong> [Name] </strong> IBT3A ACCOUNTING FIRM <br />{" "}
          <strong> [Email Address] </strong>
          IBT3Aaccountingfirm@gmail.com <br />
          <strong>[Phone Number] </strong> 09997689856
          <h5>
            {" "}
            <b className="purple"> Privacy Policy </b>{" "}
          </h5>
          <p></p>
          BT3A Accounting is committed to protecting the privacy of our clients
          and users. This Privacy Policy outlines how we collect, use, disclose,
          and safeguard your information when you use our bookkeeping/accounting
          services. Information We Collect We may collect personal information,
          including but not limited to: - Contact information, such as your
          name, email address, phone number, and postal address. - Financial
          information, such as bank account details, credit/debit card numbers,
          and other payment information. - Business information, such as company
          name, business address, and tax identification number. - Other
          information you provide to us when using our services or communicating
          with us. How We Use Your Information We may use the information we
          collect for various purposes, including but not limited to: -
          Providing and maintaining our bookkeeping/accounting services. -
          Processing transactions and payments. - Communicating with you about
          your account and our services. - Providing customer support. -
          Complying with legal obligations. - Improving our services and
          developing new features. - Preventing fraudulent activities and
          ensuring the security of our platform. Information Sharing We may
          share your information with third parties only in the following
          circumstances: - With service providers who assist us in operating our
          business and providing our services. - With your consent or at your
          direction. - In response to a legal request or when required by law. -
          To protect our rights, property, or safety, or the rights, property,
          or safety of others. - In connection with a merger, acquisition, or
          sale of assets. Data Security We take reasonable measures to protect
          the security of your information. However, please be aware that no
          method of transmission over the internet or electronic storage is
          completely secure. Your Choices You have the right to access, update,
          or delete your personal information. You may also opt-out of receiving
          promotional emails from us. Please contact us if you wish to exercise
          any of these rights. Changes to This Privacy Policy We may update this
          Privacy Policy from time to time. Any changes will be posted on this
          page, and the effective date will be updated accordingly.
          <h5>Call to Action</h5>
          <p>
            Ready to take control of your finances? Contact us today for a free
            consultation!
          </p>
          <h5>Accessibility</h5>
          <p>
            Our office is wheelchair accessible. Please let us know if you
            require any additional accommodations.
          </p>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
