import { useParams } from "react-router-dom";
export const UrlParameter = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>UrlParameterの画面です</h1>
      <p>パラメータのidは {id} です</p>
    </div>
  );
};
