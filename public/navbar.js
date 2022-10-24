function NavBar(){
  return(

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a id="home" className="navbar-brand" style={{display: 'inline'}} href="#/">Bank of Anna</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a id="createAccount" className="nav-link" style={{display: 'inline'}} href="#/createAccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a id="login" className="nav-link" style={{display: 'inline'}} href="#/login/">Login</a>
          </li>
            <li className="nav-item">
              <a id="deposit" className="nav-link" style={{display: 'none'}} href="#/deposit/">Deposit</a>
            </li>
            <li className="nav-item">
              <a id="withdraw" className="nav-link" style={{display: 'none'}} href="#/withdraw/">Withdraw</a>
            </li>
            <li className="nav-item">
              <a id="balance" className="nav-link" style={{display: 'none'}} href="#/balance/">Balance</a>
            </li>
            <li className="nav-item">
              <a id="allData" className="nav-link" style={{display: 'none'}} href="#/alldata/">All Data</a>
            </li>
            <li className="nav-item">
              <a id="transHistory" className="nav-link" style={{display: 'none'}} href="#/transHistory/">Transaction History</a>
            </li>
            <li className="nav-item">
              <a id="logout" className="nav-link" style={{display: 'none'}} href="#/logout/">Log Out</a>
            </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a id="userName" className="nav-link" style={{display: 'none', fontWeight: 'bold'}}></a>
          </li> 
        </ul>
      </div>
    </nav>

  );
}