import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../../../slices/auth";
import { useNavigate } from "react-router-dom";
import Button from "../../basic/Button";
import InputText from "../../basic/InputText";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [submitData, setSubmitData] = useState({});
  const [loginError, setLoginError] = useState("");
  const { error } = useSelector((state: any) => state.user);

  useEffect(() => {
    setLoginError(error);
  }, [error]);

  const handleChange = (newFormData: { [key: string]: string }) => {
    setSubmitData({ ...submitData, ...newFormData });
    setLoginError("");
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(LoginAction(submitData));
  };

  const handleResetPassword = () => {
    navigate("/password_reset");
  };

  return (
    <form
      className="bg-white xs:px-[20px] sm:px-[40px] md:px-[84px] py-10"
      onSubmit={handleSubmit}
    >
      {loginError && <p className="ml-[20%] text-red-500">{loginError}</p>}
      <label
        htmlFor="email"
        className="sm:flex sm:justify-between gap-5 h-[80px] border-b border-[#CCCCCC] items-center mt-[4px]"
      >
        <p className="whitespace-nowrap sm:w-[112px] py-4">メールアドレス</p>
        <div className="sm:w-[calc(100%-112px)]">
          <InputText
            type="email"
            name="email"
            value={submitData}
            onChange={handleChange}
            required={true}
          />
        </div>
      </label>
      <div className="border-b border-[#CCCCCC]">
        <label
          htmlFor="password"
          className="sm:flex sm:justify-between gap-5 h-[85px] items-center mt-[4px]"
        >
          <p className="whitespace-nowrap sm:w-[112px] py-4">パスワード</p>
          <div className="sm:w-[calc(100%-112px)]">
            <InputText
              type="password"
              name="password"
              value={submitData}
              onChange={handleChange}
              required={true}
            />
          </div>
        </label>
        <div className="sm:ml-[20%] mb-12 pt-2">
          <button
            type="button"
            className="border-b border-[#707070]"
            onClick={handleResetPassword}
          >
            パスワードをお忘れですか？
          </button>
        </div>
      </div>
      <Button />
    </form>
  );
};

export default LoginForm;
