import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { SiLeetcode } from 'react-icons/si';
import { FaKaggle, FaHackerrank } from 'react-icons/fa';
import MyLink from '../components/general/Link';

const Contact = () => {
  return (
    <div className="text-justify text-center">
      <h2 className="subtitle text-4xl font-serif font-bold mb-4 shadow-sm pl-2 ">
        Où me trouver ?
      </h2>

      <div className="contact-container border border-slate-500 m-6 p-4 md:p-10 flex flex-wrap gap-3 justify-between">
        <button className="constact-item flex gap-1 items-center">
          <AiOutlineMail />
          <MyLink href="mailto:adnen.guessoum@gmail.com">
            adnen.guessoum@gmail.com
          </MyLink>
        </button>

        <button className="contact-item flex gap-1 items-center">
          <BsTwitter />
          <MyLink href="https://twitter.com/GuessoumAdnene">Twitter</MyLink>
        </button>

        <button className="contact-item flex gap-1 items-center">
          <BsGithub />
          <MyLink href="https://github.com/adnene-guessoum">Github</MyLink>
        </button>

        <button className="constact-item flex gap-1 items-center">
          <SiLeetcode />
          <MyLink href="https://leetcode.com/adnene/">Leetcode</MyLink>
        </button>

        <button className="constact-item flex gap-1 items-center">
          <FaHackerrank />
          <MyLink href="https://www.hackerrank.com/adnen_guessoum">
            Hackerrank
          </MyLink>
        </button>

        <button className="constact-item flex gap-1 items-center">
          <FaKaggle />
          <MyLink href="https://www.kaggle.com/adneneguessoum">Kaggle</MyLink>
        </button>

        <button className="contact-item flex gap-1 items-center">
          <BsLinkedin />
          <MyLink href="https://www.linkedin.com/in/adnene-guessoum/">
            Linkedin
          </MyLink>
        </button>
      </div>
    </div>
  );
};

export default Contact;
