import ContentTop from "../../components/ContentTop/ContentTop";
import ContentMain from "../../components/ContentMain/ContentMain";
import "./Content.css";

function Content() {
  return (
    <div className="main-content">
      <ContentTop />
      <ContentMain />
    </div>
  );
}

export default Content;
