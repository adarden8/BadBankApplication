function Balance() {
  const loggedInUser = localStorage.getItem('loggedInUser');
  return (
      <Card
          backgroundColor="light"
          header="Balance"
          status=""
          cardWidth='83vw'
          body={JSON.parse(loggedInUser).email === '' ? ( 
              <>
                  <h2>LOGIN TO USE FEATURE</h2>
              </>
          ):(
              <>
                  <h3>Available Balance</h3><br/>
                  <h3>${Number(JSON.parse(loggedInUser).balance).toFixed(2)}</h3>
              </>
          )}
      />
  )
}