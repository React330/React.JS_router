import { useParams, useLocation } from "react-router-dom";
export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  return (
    <div>
      <h1>UrlParameterの画面です</h1>
      <p>パラメータのidは {id} です</p>
      <p>クエリパラメータのidは {query.get("name")} です</p>
    </div>
  );
};
