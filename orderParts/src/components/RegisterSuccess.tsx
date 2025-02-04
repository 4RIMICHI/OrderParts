import React from 'react';
import { Link } from 'react-router-dom';

const RegisterSuccess: React.FC = () => {
  return (
    <div>
      <h2>会員登録が完了しました</h2>
      <Link to="/login">ログイン画面へ</Link>
    </div>
  );
};

export default RegisterSuccess;