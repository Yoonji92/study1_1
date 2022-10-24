import './App.css';

function App() {
  return (
    <div className="App">
    <body>
    <header class="header">
    <div className="logo"></div>
    <div class="header__lang-container">
                <select name="language" id="language" class="header__lang-select-list">
                    <option value="ko_KR">한국어</option>
                    <option value="en_US">English</option>
                    <option value="zh-Hans_CN">中文(简体)</option>
                    <option value="zh-Hant_TW">中文(台灣)</option>
                </select>
            </div>
            </header>

  <div className="container">
      <form action="#" method="post" class="form-login">
        <h1>
          로그인
        </h1><p>
      계정이 없으신가요?
        </p>
        <legend>로그인 폼</legend>
        <div class="form-login__id-container">
        <label className="form-login__id-label"> 아이디 </label><br></br>
        <input className="form-login__id-input" type="text" name="email" placeholder="Username@somma.kr"/>
        <div class="error form-login__id-error-message" aria-live="assertive">아이디를 입력해주세요.</div>
        </div>
        <div class="form-login__password-container">
        <div className="input-password-find">
          <label className="form-login__password-label">비밀번호 </label>
          <a href='#'>비밀번호 찾기</a>
        </div>
        <input className="form-login__password-input" type="text" name="password" placeholder="Password"/>
        <div class="error form-login__password-error-message">비밀번호를 입력해주세요.</div>
        </div>
        <div className="check"><br></br>
          <input type="checkbox" name="form-login__maintain-check-input" />
          <span className='form-login__maintain-check-des'>아이디 기억하기</span>
        </div>
        
        <br></br>
        <div className="space"> </div>

        <div className="login-button">
          <a href='#'>
        <button className="form-login__button" type="button" name="로그인">로그인
        <div className="login-icon"></div></button> </a>
        </div>

        <div className="form-login__register">
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
