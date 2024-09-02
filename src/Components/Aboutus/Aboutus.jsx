import React from "react";
import "./About.css";
import { FaCheckCircle } from "react-icons/fa";
import videoFile from "../../assets/video.mp4";

const Aboutus = () => {
  return (
    <>
      <div className="aboutus">
        <div className=" about-header">
          <h4>Welcome to</h4>

          <h5>Family Of Swan Home Pickles </h5>

          <h6>Good Food Gives Good Mood & Good Mood Gives Health & Wealth.</h6>
        </div>

        <div className="aboutus-section ">
          <h4> ABOUT US </h4>
          <p>
            Swan Home Pickles was started by Two Well Educated Homemakers who
            can make pickles in such a way that, each bite of rice you take with
            our pickles will feast your taste buds. It’s more of a tradition
            than business for last 33 years. We feel that everyone should taste
            our pickles at least once to tell this is true. We are backed by a
            couple of grannies, who fed few hundred families in their decades of
            homemade pickling experience. Our pickles are 100% home-made with
            fresh and best quality ingredients which are all sourced from
            nature. We make each pickle in a way that, we are making it for our
            own family consumption. Best quality oils are used in our pickles
            they give the best taste that you experience by eating our pickles.
          </p>
          <p>
            We were doing well with our homemade mommy-granny pickles and our
            customers asked “why don’t you try to share and supply us our
            childhood memories?” We were shocked and then our customer said, by
            tasting our pickles, he got to remember the taste of his granny
            pickles from childhood and so the nostalgic memories turned back in
            his life. Wait! It doesn’t stop there. We thought let’s bring back
            even more memories to all our customers by offering exotic and rare
            fruits & flowers too. These so called exotic varieties were street
            fruits & flowers which vendors used to sell in our days. We started
            offering products like Thati Munjalu, Thati Tegalu, Regi Pallu,
            Eetha Pallu, Kale Kayalu, Bikki Kayalu and many more. This
            generation might not have even heard of a few of these fruits, but
            we used to buy them in front of our school gates every day, Didn’t
            we, Happy Customers?
          </p>
          <p>
            All we can say is, Taste it once and you are sure to come back for
            more – Our pickles are a feast to taste buds in every bite because
            we mix a special ingredient which no one else does and that is
          </p>
          <h4>Granny’s Love & Care</h4>
        </div>
        <div className="abut-video">
          <video controls>
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>
            Our vision is to take Indian Food Products to the International
            Plate. <br />
            We wanted to achieve this without loosing our core values of
          </p>
        </div>
        <div className="about-instrn">
          <p>
            <FaCheckCircle id="abt-icon" /> Being Farmers Friend
          </p>
          <p>
            <FaCheckCircle id="abt-icon" /> Employing Rural Elderly Women
          </p>
          <p>
            <FaCheckCircle id="abt-icon" />
            Keeping our customersHappy & Satisfied
          </p>
        </div>
        <div className="abt-offfer">
          <h4> What we offer? </h4>
          <p>
            Swan Home Pickles prepares and delivers happiness, nostalgic
            memories along with best quality & tasty food that you will
            absolutely love & cherish, which is prepared by our elderly rural
            staff who have cooked for decades with farm fresh ingredients
            procured directly from farms nearby. Products are insanely fresh,
            clean, premium and tasty that is good for you and right for planet
            Earth. We believe good food is the most powerful force for change –
            for our families, our community, and our environment. We offer best
            in class premium food and back it up with a wonderful customer
            experience and the highest quality standards never & ever seen in
            India.
          </p>
        </div>
        <div className="why-swan-pickles">
          <h4>Why Swan Home Pickles </h4>
          <h6>Good Food Gives Good Mood & Good Mood Gives Health & Wealth. </h6>
          <p>
            If you are looking for cheap unhealthy food products then this is
            not a place for you. Our products are made from premium quality
            locally sourced ingredients, prepared with atmost care. So Yes, we
            don’t compromise on quality of our products and hope our customer
            won’t too and is why our products are little expensive. Quality
            comes at a cost.
          </p>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
