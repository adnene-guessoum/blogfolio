import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { SiLeetcode } from 'react-icons/si';
import { FaKaggle, FaHackerrank } from 'react-icons/fa';
import MyLink from '../components/general/Link';

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="text-justify text-center w-4/5">
        <h2 className="subtitle text-4xl font-serif font-bold mb-2 shadow-sm pl-2 ">
          Où me trouver ?
        </h2>

        <div className="contact-container m-6 p-4 md:p-10 flex flex-wrap gap-3 justify-between">
          <button className="hover:-translate-y-1 hover:scale-110 duration-300 flex flex-col border p-2 gap-2 items-center w-1/3 sm:w-1/6">
            <BsTwitter size={20} />
            <MyLink href="https://twitter.com/GuessoumAdnene">Twitter</MyLink>
          </button>

          <button className="hover:-translate-y-1 hover:scale-110 duration-300 flex flex-col border p-2 gap-2 items-center w-1/3 sm:w-1/6">
            <BsGithub size={20} />
            <MyLink href="https://github.com/adnene-guessoum">Github</MyLink>
          </button>

          <button className="hover:-translate-y-1 hover:scale-110 duration-300 flex flex-col border p-2 gap-2 items-center w-1/3 sm:w-1/6">
            <BsLinkedin size={20} />
            <MyLink href="https://www.linkedin.com/in/adnene-guessoum/">
              Linkedin
            </MyLink>
          </button>

          <button className="hover:-translate-y-1 hover:scale-110 duration-300 flex flex-col border p-2 gap-2 items-center">
            <AiOutlineMail size={20} />
            <MyLink href="mailto:adnen.guessoum@gmail.com">
              adnen.guessoum@gmail.com
            </MyLink>
          </button>

          <button className="hover:-translate-y-1 hover:scale-110 duration-300 flex flex-col border p-2 gap-2 items-center w-1/3 sm:w-1/6">
            <SiLeetcode size={20} />
            <MyLink href="https://leetcode.com/adnene/">Leetcode</MyLink>
          </button>

          <button className="hover:-translate-y-1 hover:scale-110 duration-300 flex flex-col border p-2 gap-2 items-center w-1/3 sm:w-1/6">
            <FaHackerrank size={20} />
            <MyLink href="https://www.hackerrank.com/adnen_guessoum">
              Hackerrank
            </MyLink>
          </button>

          <button className="hover:-translate-y-1 hover:scale-110 duration-300 flex flex-col border p-2 gap-2 items-center w-1/3 sm:w-1/6">
            <FaKaggle size={20} />
            <MyLink href="https://www.kaggle.com/adneneguessoum">Kaggle</MyLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
