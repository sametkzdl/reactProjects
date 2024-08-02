import { IntlProvider, FormattedMessage } from "react-intl";
import messages_en from "../../locales/en.json";
import messages_tr from "../../locales/tr.json";
import messages_fr from "../../locales/fr.json";
import { useState } from "react";

const Sixth = () => {
  localStorage.setItem("defaultLanguage", "tr");
  const defaultLanguage = localStorage.getItem("defaultLanguage");
  const date = Date();
  const jsonData = {
    en: messages_en,
    tr: messages_tr,
    fr: messages_fr,
  };

  const [localeLanguage, setLocaleLanguage] = useState(
    defaultLanguage ? defaultLanguage : "en"
  );

  return (
    <div>
      <IntlProvider locale={localeLanguage} messages={jsonData[localeLanguage]}>
        <h2>
          <FormattedMessage id="title" />
        </h2>
        <div>
          <h4>
            <FormattedMessage id="hello" />
          </h4>
          <p>
            <FormattedMessage id="description" />
          </p>
          <p>
            <FormattedMessage id="date" values={{ date: date }} />
          </p>
        </div>
      </IntlProvider>
      <button onClick={() => setLocaleLanguage("en")}>
        Switch Language To En
      </button>
      <button onClick={() => setLocaleLanguage("tr")}>
        Diliyi Türkçeye Çevir Tr
      </button>
      <button onClick={() => setLocaleLanguage("fr")}>
        traduire la langue en français Fr
      </button>
    </div>
  );
};

export default Sixth;
