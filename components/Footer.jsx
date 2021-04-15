import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Footer = (_) => {
  const Router = useRouter();

  const term = useStoreState((state) => state.menu.term);
  const updateTerm = useStoreActions((actions) => actions.menu.updateTerm);

  const switchMenu = (e) => {
    if (e.key === "Enter") {
      Router.push({
        query: {
          run: e.target.value,
        },
      });

      updateTerm(e.target.value);
      e.target.value = "";
    }
  };

  useEffect(() => {
    updateTerm(Router.query.run);
  }, [Router.query.run]);

  return (
    <footer className="cv--footer">
      <input type="text" onKeyPress={switchMenu} defaultValue={term} />
    </footer>
  );
};

export default Footer;
