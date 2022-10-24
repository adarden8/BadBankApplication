function Logout() {
    const loggedInUser = {};
    const [logoutMsg, setLogoutMsg] = React.useState('')
    console.log('logout page')
    return (
        <Card
        backgroundColor="light"
        header="Logout"
        status=''
        cardWidth='83vw'
        body={
        <>
            <LogoutForm setLogoutMsg={setLogoutMsg}/>
            <h4>{logoutMsg}</h4>
        </>
        }
    />);
    
    function LogoutForm(props) {
        (async()=> {
            var res = await fetch('/account/logout');
            var data = await res.json();
            if (data.error === '') {
                localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
                const deposit = document.getElementById("deposit");
                deposit.style.display = 'none';
                const withdraw = document.getElementById("withdraw");
                withdraw.style.display = 'none';
                const balance = document.getElementById("balance");
                balance.style.display = 'none';
                const allData = document.getElementById("allData");
                allData.style.display = 'none';
                const transHistory = document.getElementById("transHistory");
                transHistory.style.display = 'none';
                const logout = document.getElementById("logout");
                logout.style.display = 'none';
                const userName = document.getElementById("userName");
                userName.style.display = 'none';
                const createAccount = document.getElementById("createAccount");
                createAccount.style.display ='inline';
                const login = document.getElementById("login");
                login.style.display ='inline';
                props.setLogoutMsg('Successfully Logged Out');
            } else {
                props.setLogoutMsg('Logout Error ' + data.error);
            }
        })()  
    }
    
}