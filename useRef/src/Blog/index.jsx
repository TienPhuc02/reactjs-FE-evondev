import useHover from "../hooks/useHover";
import useLinkNewTab from "../hooks/useLinkNewTab";

const Blog = () => {
  const { contentRef } = useLinkNewTab();
  const { nodeRef, hovered } = useHover();
  console.log(hovered);
  return (
    <div ref={contentRef} className="entry_blank">
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit iure
        blanditiis, sequi suscipit accusantium non officiis quasi saepe est
        debitis? Cumque facere accusantium, consectetur aliquam mollitia autem
        praesentium error eligendi?
      </p>
      <a
        ref={nodeRef}
        href="https://www.google.com/"
        className={`${hovered ? "text-green-400" : ""}  underline`}
      >
        google.com
      </a>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        ipsum neque dolor ea corrupti, et dicta eos pariatur voluptate at
        commodi, ipsam atque, perferendis veritatis! Minima accusamus ratione
        repudiandae mollitia!
      </p>
      <a
        href="https://www.google.com/?hl=vi"
        className={`${hovered ? "text-red-400" : ""}  underline`}
        ref={nodeRef}
      >
        google.com
      </a>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        ipsum neque dolor ea corrupti, et dicta eos pariatur voluptate at
        commodi, ipsam atque, perferendis veritatis! Minima accusamus ratione
        repudiandae mollitia!
      </p>
      <a href="https://www.google.com/?hl=vi" className="underline">
        google.com
      </a>
    </div>
  );
};

export default Blog;
