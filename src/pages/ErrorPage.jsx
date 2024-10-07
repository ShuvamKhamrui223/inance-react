import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      sorry this page doesn't exists
      <button className="" onClick={() => navigate(-1)}>
        back
      </button>
    </div>
  );
};

export default ErrorPage;
