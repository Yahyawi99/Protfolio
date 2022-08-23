import React from "react";
import Image from "next/image";
import Link from "next/link";
// icons
import {
  FaGithubAlt,
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
// css
import styles from "../../styles/shared/social.module.css";

function Social() {
  return (
    <section className={styles.container}>
      <div>
        <div>
          <Image
            src="/assets/images/godfather.jpg"
            layout="fill"
            alt="Logo"
            objectFit="contain"
            priority
          />
        </div>

        <div>
          <Link href="/">
            <a target="_blank">
              <FaGithubAlt />
            </a>
          </Link>

          <Link href="/">
            <a target="_blank">
              <FaTwitter />
            </a>
          </Link>

          <Link href="/">
            <a target="_blank">
              <FaLinkedinIn />
            </a>
          </Link>

          <Link href="/">
            <a target="_blank">
              <FaFacebookF />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Social;
