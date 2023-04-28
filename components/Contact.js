import { BsGithub, BsTwitter, BsLinkedin, BsDiscord } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import MyLink from '../components/general/Link';

const Contact = () => {
  return (
    <div className="text-justify text-center">
      <h2 className="subtitle text-4xl font-serif font-bold mb-4 shadow-sm pl-2 ">
        Où me trouver ?
      </h2>

      <div className="contact-container border border-slate-500 m-6 p-10 flex flex-wrap justify-between">
        <button className="contact-item flex gap-3 items-center">
          <BsGithub />
          <MyLink href="https://github.com/adnene-guessoum">Github</MyLink>
        </button>

        <button className="contact-item flex gap-3 items-center">
          <BsTwitter />
          <MyLink href="https://github.com/adnene-guessoum">Twitter</MyLink>
        </button>

        <button className="contact-item flex gap-3 items-center">
          <BsLinkedin />
          <MyLink href="https://github.com/adnene-guessoum">Linkedin</MyLink>
        </button>

        <button className="constact-item flex gap-3 items-center">
          <BsDiscord />
          <MyLink href="https://github.com/adnene-guessoum">Discord</MyLink>
        </button>

        <button className="constact-item flex gap-3 items-center">
          <AiOutlineMail />
          <MyLink href="https://github.com/adnene-guessoum">
            adnen.guessoum@gmail.com
          </MyLink>
        </button>
      </div>
    </div>
  );
};

export default Contact;
