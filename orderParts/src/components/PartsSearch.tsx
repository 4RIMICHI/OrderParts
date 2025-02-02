import React, { useState } from 'react';
import axios from 'axios';

export const PartsSearch: React.FC = () => {
  const [selectedRadio, setSelectedRadio] = useState('');
  const [selectedCheckbox, setSelectedCheckbox] = useState(false);
  const [selectedDropdown, setSelectedDropdown] = useState('');
  const [selectedListbox, setSelectedListbox] = useState('');
  const [selectedCombobox, setSelectedCombobox] = useState('');
  const [partsList, setPartsList] = useState<string[]>([]);

  const handleSearch = () => {
    // 部品検索ロジックをここに追加
    setPartsList(['部品1', '部品2', '部品3']);
  };

  return (
    <div>
      <h2>部品検索</h2>
      <div>
        <label>
          <input
            type="radio"
            name="radio"
            value="option1"
            checked={selectedRadio === 'option1'}
            onChange={(e) => setSelectedRadio(e.target.value)}
          />
          ラジオボタン
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={selectedCheckbox}
            onChange={(e) => setSelectedCheckbox(e.target.checked)}
          />
          チェックボックス
        </label>
      </div>
      <div>
        <label>
          abc:
          <select value={selectedDropdown} onChange={(e) => setSelectedDropdown(e.target.value)}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          abc:
          <select size={3} value={selectedListbox} onChange={(e) => setSelectedListbox(e.target.value)}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          abc:
          <input
            type="text"
            list="combobox-options"
            value={selectedCombobox}
            onChange={(e) => setSelectedCombobox(e.target.value)}
          />
          <datalist id="combobox-options">
            <option value="Option 1" />
            <option value="Option 2" />
          </datalist>
        </label>
      </div>
      <div>
        <button onClick={handleSearch}>検索</button>
      </div>
      <div>
        <h3>部品リスト</h3>
        <ul>
          {partsList.map((part, index) => (
            <li key={index}>{part}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post<{ message: string }>('http://localhost:5000/api/auth/register', { email, password });
      alert(response.data.message);
    } catch (error) {
      alert('Error registering user');
    }
  };

  return (
    <div>
      <h2>会員登録</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">メールアドレス:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">パスワード:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">パスワード確認:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">登録</button>
      </form>
    </div>
  );
};

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/login', { email, password });
      alert('Login successful');
      // トークンを保存するなどの処理を追加
    } catch (error) {
      alert('Error logging in');
    }
  };

  return (
    <div>
      <h2>ログイン</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">メールアドレス:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">パスワード:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
};

export default Login;