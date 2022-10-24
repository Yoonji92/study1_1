import './App.css';

function App() {
  return (
    <div className="App">
    <body>
    <div className="logo"></div>
  <div className="loginform">
      <form method="post">
        <h1>
          로그인
        </h1><p>
      계정이 없으신가요?
        </p>
        <label className="login-label"> 이메일 </label><br></br>
        <input className="input-email" type="text" name="email" placeholder="Username@somma.kr"/>
        <div className="input-password-find">
          <label className="login-label">비밀번호 </label>
          <a href='#'>비밀번호 찾기</a>
        </div>
        <input className="input-password" type="text" name="password" placeholder="Password"/>
        <div className="check"><br></br>
          <input type="checkbox" name="login-checkbox" />
          <span className='id-1'>아이디 기억하기</span>
        </div>
        <br></br>
        <div className="space"> </div>

        <div className="login-button">
          <a href='#'>
        <button className="btn-1" type="button" name="">로그인
        <div className="login-icon"></div></button> </a>
        </div>
        <div className="register">
          <p> 도움이 필요하세요? </p>
          <a href='#'>계정 생성하기 </a>
        </div>
      </form>
    </div>
    </body>
    </div>
  );
}

export default App;
