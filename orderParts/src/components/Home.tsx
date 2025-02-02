import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from 'react-router-dom';

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <Link to="/login">ログイン画面へ</Link>
      </div>
      <div>
        <Link to="/Register">会員登録画面へ</Link>
      </div>
      <div>
        <Link to="/parts-search">部品検索画面へ</Link>
      </div>
    </div>
  );
}

export default Home;