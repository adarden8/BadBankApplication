function Home() {
  return (
      <Card
          backgroundColor="light"
          header="Home Page"
          status=""
          cardWidth='83vw'
          body={
              <>
              <h5 className="card-title">Please sign up or log back in in order to use all of your banking needs.</h5>
              <img src="./bank.png" className="img-fluid" alt="Responsive"></img>
              </>
          }
      />
  )
}
