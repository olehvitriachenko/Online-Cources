import zapier from "public/images/hero/zapier.svg";
import spotify from "public/images/hero/spotify.svg";
import zoom from "public/images/hero/zoom.svg";
import amazon from "public/images/hero/amazon.svg";
import adobe from "public/images/hero/adobe.svg";
import notion from "public/images/hero/notion.svg";
import netflix from "public/images/hero/netflix.svg";

function Partners() {
  return (
    <ul className="partners">
      <li className="partners__item">
        <img className="partners__image" src={zapier} alt="zapier" />
      </li>
      <li className="partners__item">
        <img className="partners__image" src={spotify} alt="spotify" />
      </li>
      <li className="partners__item">
        <img className="partners__image" src={zoom} alt="zoom" />
      </li>
      <li className="partners__item">
        <img className="partners__image" src={amazon} alt="amazon" />
      </li>
      <li className="partners__item">
        <img className="partners__image" src={adobe} alt="adobe" />
      </li>
      <li className="partners__item">
        <img className="partners__image" src={notion} alt="notion" />
      </li>
      <li className="partners__item">
        <img className="partners__image" src={netflix} alt="netflix" />
      </li>
    </ul>
  );
}

export default Partners;
