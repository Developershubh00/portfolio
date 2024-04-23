import React from 'react';
import { BsChevronDoubleUp } from 'react-icons/bs';
import { social } from '../constants';
import style from './styles/footer.module.css';

const Footer = () => (
  <div id={style.footer}>
    <div className={style.up_icon_container}>
      <abbr title="back to home page">
        <button
          type="button"
          className={`${style.overlay} ${style.up_overlay}`}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <BsChevronDoubleUp className={`${style.icon_hover} ${style.up_icon_hover}`} />
          <BsChevronDoubleUp className={`${style.icon} ${style.up_icon}`} />
        </button>
      </abbr>
    </div>
    <p className={style.title}>
      <span className={style.text}>My Social Networks</span>
    </p>
    <div className={style.icon_container}>
      {social.map((social) => (
        <a key={social.id} href={social.url} target="_blank" className={style.overlay} rel="noreferrer">
          <img className={style.icon_hover} src={social.icon} alt={social.name} />
          <img className={style.icon} src={social.icon1} alt={social.name} />
        </a>
      ))}
    </div>
    <abbr title="Home Page" className={style.p}>
      <a href="#" className={style.a} rel="noreferrer">
        Developed with ❤️ by
        {' '}
        <span className={style.span}>©</span>
        {' '}
        Shubh
      </a>
    </abbr>
  </div>
);

export default Footer;
