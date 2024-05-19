import { BsGithub, BsTwitter, BsLinkedin, BsBook } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { SiLeetcode } from 'react-icons/si';
import { FaKaggle } from 'react-icons/fa';
import MyLink from '../components/general/Link';

const Contact = () => {
  return (
    <div className="text-justify text-center">
      <h2 className="subtitle font-serif font-bold shadow-sm mb-4 flex font-serif font-bold shadow-sm">
        Où me trouver ?
      </h2>

      <div className="contact-container flex flex-col justify-between items-center gap-4">
        <div className="group flex gap-4 justify-center items-center">
          <div>
            <button className="hover:-translate-y-1 hover:scale-110 duration-300 flex flex-col border p-2 m-2 items-center dark:bg-slate-900 bg-gray-300 dark:hover:bg-slate-700 hover:bg-gray-400 rounded-md">
              <BsTwitter size={20} />
              <MyLink href="https://twitter.com/GuessoumAdnene">Twitter</MyLink>
            </button>
          </div>

          <div>
            <button className="hover:-translate-y-1 hover:scale-110 duration-300 flex flex-col border p-2 m-2 items-center dark:bg-slate-900 bg-gray-300 dark:hover:bg-slate-700 hover:bg-gray-400 rounded-md">
              <BsBook size={20} />
              <MyLink href="https://www.goodreads.com/user/show/178342846-adnene-guessoum">
                Goodreads
              </MyLink>
            </button>
          </div>

          <div>
            <button className="hover:-translate-y-1 hover:scale-110 duration-300 flex flex-col border p-2 m-2 items-center dark:bg-slate-900 bg-gray-300 dark:hover:bg-slate-700 hover:bg-gray-400 rounded-md">
              <BsGithub size={20} />
              <MyLink href="https://github.com/adnene-guessoum">Github</MyLink>
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          <div>
            <button className="hover:-translate-y-1 hover:scale-110 duration-300 flex flex-col border p-2 m-2 items-center dark:bg-slate-900 bg-gray-300 dark:hover:bg-slate-700 hover:bg-gray-400 rounded-md">
              <BsLinkedin size={20} />
              <MyLink href="https://www.linkedin.com/in/adnene-guessoum/">
                Linkedin
              </MyLink>
            </button>
          </div>

          <div>
            <button className="hover:-translate-y-1 hover:scale-110 duration-300 flex flex-col border p-2 m-2 items-center dark:bg-slate-900 bg-gray-300 dark:hover:bg-slate-700 hover:bg-gray-400 rounded-md">
              <SiLeetcode size={20} />
              <MyLink href="https://leetcode.com/adnene/">Leetcode</MyLink>
            </button>
          </div>

          {/* <div>
            <button className="hover:-translate-y-1 hover:scale-110 duration-300 flex flex-col border p-2 m-2 items-center dark:bg-slate-900 bg-gray-300 dark:hover:bg-slate-700 hover:bg-gray-400 rounded-md">
              <FaHackerrank size={20} />
              <MyLink href="https://www.hackerrank.com/adnen_guessoum">
                Hackerrank
              </MyLink>
            </button>
          </div>*/}

          <div>
            <button className="hover:-translate-y-1 hover:scale-110 duration-300 flex flex-col border p-2 m-2 items-center dark:bg-slate-900 bg-gray-300 dark:hover:bg-slate-700 hover:bg-gray-400 rounded-md">
              <FaKaggle size={20} />
              <MyLink href="https://www.kaggle.com/adneneguessoum">
                Kaggle
              </MyLink>
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div>
            <button className="hover:-translate-y-1 hover:scale-110 duration-300 flex flex-col border p-2 m-2 items-center dark:bg-slate-900 bg-gray-300 dark:hover:bg-slate-700 hover:bg-gray-400 rounded-md">
              <AiOutlineMail size={20} />
              <MyLink href="mailto:adnen.guessoum@gmail.com">
                adnen.guessoum@gmail.com
              </MyLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
