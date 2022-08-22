import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaEye, FaSpinner, FaTimesCircle } from "react-icons/fa";
import { GiEnvelope } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";

// stylesheet
import styles from "./landing.module.css";

// data
import { homeData } from "../../utils/data/homeData";

import Image from "../../illus.png";
import Image2 from "../../cards.png";

// components
import BgComponent from "../../components/svgs/Bg.component";

const LandingPage: React.FC = () => {
  const [selectedId, setSelectedId] = useState(0);

  return (
    <div className={styles.landing}>
      <div
        className={`${styles.hero__section} ${styles.flex} ${styles.a_j__center} ${styles.flex__column}`}
      >
        <BgComponent />
        <h1>Find Intuitive React Components</h1>
        <h2>Designed Just For You.</h2>
        <div
          className={`${styles.btn__group} ${styles.flex} ${styles.a_j__center}`}
        >
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/theunicorndev237/ui-components-reactjs"
          >
            <button
              type="button"
              className={`${styles.flex} ${styles.a_j__center}`}
            >
              <FaGithub style={{ marginRight: "0.5rem" }} />
              View on Github
            </button>
          </a>
          <Link to="/templates">
            <button
              type="button"
              className={`${styles.flex} ${styles.a_j__center}`}
            >
              <FaSpinner style={{ marginRight: "0.5rem" }} />
              View Templates
            </button>
          </Link>
        </div>
      </div>
      <section className={`${styles.section} ${styles.info}`}>
        <div className={styles.cards}>
          <div
            className={`${styles.text__content} ${styles.flex} ${styles.flex__column}`}
          >
            <h2>Beautifully Made</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
              aliquid dignissimos laudantium quod, sapiente non, accusantium nam
              dolore rem sint praesentium deserunt reiciendis distinctio
              recusandae? Ea et vitae a pariatur?
            </p>
            <Link to="/components">
              <button
                className={`${styles.flex} ${styles.a_j__center}`}
                type="button"
              >
                <FaEye style={{ marginRight: "0.5rem" }} />
                View Components
              </button>
            </Link>
          </div>
          <div>
            <img
              src={Image}
              alt="cards illustration"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.info} ${styles.rotated}`}>
        <div className={styles.cards}>
          <div>
            <img
              src={Image2}
              alt="cards illustration"
              width="100%"
              height="100%"
            />
          </div>
          <div
            className={`${styles.text__content} ${styles.rotated} ${styles.flex} ${styles.flex__column}`}
          >
            <h2>Flexible and Adaptive Components</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
              aliquid dignissimos laudantium quod, sapiente non, accusantium nam
              dolore rem sint praesentium deserunt reiciendis distinctio
              recusandae? Ea et vitae a pariatur?
            </p>
            <Link to="/components">
              <button
                className={`${styles.flex} ${styles.a_j__center}`}
                type="button"
              >
                <FaEye style={{ marginRight: "0.5rem" }} />
                View Components
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.info} ${styles.rotated}`}>
        <div className={styles.head}>
          <h2 style={{ color: "var(--gray-color)" }}>
            Focus on Logic, We on Blocks
          </h2>
          <h4 style={{ color: "rgba(0, 0, 0, 0.5)", textAlign: "center" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
            sequi ipsum blanditiis.
          </h4>
        </div>

        <div className={`${styles.animated__layout}`}>
          {homeData &&
            homeData.map((data, index) => (
              <motion.div
                key={data.title}
                layoutId={`${index + 1}`}
                onClick={() => setSelectedId(index + 1)}
              >
                <img
                  width="100%"
                  height="100%"
                  src={`/images/img-${index + 1}.jpg`}
                  alt={data.title}
                />
                <motion.h5>{data.title}</motion.h5>
                {/* <motion.h2>{data.description}</motion.h2> */}
              </motion.div>
            ))}
          <div
            className={styles.selected__content}
            style={{ display: selectedId === 0 ? "none" : "" }}
          >
            <AnimatePresence>
              {selectedId !== 0 && (
                <motion.div layoutId={`${selectedId}`}>
                  {/* <motion.h5>{homeData[selectedId - 1].title}</motion.h5> */}
                  {/* <motion.h2>{homeData[selectedId - 1].description}</motion.h2> */}
                  <img
                    src={`/images/img-${selectedId}.jpg`}
                    alt={homeData[selectedId - 1].title}
                    width="100%"
                    height="100%"
                  />
                  <motion.button onClick={() => setSelectedId(0)}>
                    <FaTimesCircle size={40} color="#fff" />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.info} ${styles.rotated}`}>
        <div className={styles.head}>
          <h2 style={{ color: "var(--gray-color)" }}>
            Subscribe to Our Newsletters
          </h2>
          <h4 style={{ color: "rgba(0, 0, 0, 0.5)", textAlign: "center" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
            sequi ipsum blanditiis.
          </h4>
        </div>

        <div
          className={`${styles.flex} ${styles.a_j__center} ${styles.flex__column}`}
        >
          <form className={`${styles.form}`}>
            <div
              className={`${styles.flex} ${styles.a_j__center} ${styles.flex__column}`}
            >
              <input type="text" placeholder="Please enter your email" />
            </div>
            <div
              className={`${styles.flex} ${styles.a_j__center} ${styles.flex__column}`}
            >
              <button
                type="submit"
                className={`${styles.flex} ${styles.a_j__center}`}
              >
                <GiEnvelope style={{ marginRight: "0.5rem" }} />
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
