const Bio = (): JSX.Element => {
  return (
    <div data-testid="bio-section" className="flex flex-col">
      <h3 className="flex font-serif font-bold shadow-sm">Introduction :</h3>
      <div className="flex font-serif font-bold shadow-sm p-2 text-justify">
        Software developer at NielsenIQ. Based in France (Orly, Val-de-Marne,
        94). I am mostly working with Python professionnaly, and enjoying JS/TS
        on the side (React, Next, Django, Scrapy etc.). This blog allows me to
        explore anything I could be curious about in tech and keep digging for
        technical depth. These days it has to do with Cybersecurity, Machine
        Learning or lower level concepts. And of course, the blog is also a
        handy portfolio for any opportunities that may come in the future.{' '}
      </div>
      <div className="flex font-serif font-bold shadow-sm p-2 text-justify">
        Feel free to contact me !
      </div>
    </div>
  );
};

export default Bio;
