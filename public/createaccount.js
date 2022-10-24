function CreateAccount(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState(''); 

  return (
    <Card
      backgroundColor="light"
      header="Create Account"
      status={status}
      cardWidth='83vw'
      body={show ? 
        <CreateForm setShow={setShow} setStatus={setStatus} setName={setName}
        setEmail={setEmail} setPassword={setPassword} name={name}
        email={email} password={password}/> : 
        <CreateMsg setShow={setShow} setName={setName}
        setEmail={setEmail} setPassword={setPassword}/>}
    />
  )
}

function CreateMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => {
        props.setShow(true);
        props.setName('');
        props.setEmail('');
        props.setPassword('');
        }}>Add another account</button>
  </>);
}

function CreateForm(props){
  function validate(field, label) {
    if (!field) {
        props.setStatus('Empty ' + label + ' entry');
        return false;
    } 
    return true;
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  
  function handle() {
    const minValidPasswordLen = 8;
    if (!validate(props.name, 'name')) return;
    if (!validate(props.email, 'email')) return;
    if (!validate(props.password, 'password')) return;
    if (!validateEmail(props.email)){
      props.setStatus('Invalid Email Address');
      return;
    }
    if (props.password.length >= minValidPasswordLen) {
      console.log(props.name, props.email, props.password);
      const url = `/account/create/${props.name}/${props.email}/${props.password}`;
      (async () => {
        var res = await fetch(url);
        var data = await res.json();
        if (data.error !== '') {
          console.log('handle function ' + data.error);
          props.setShow(true);
          props.setStatus(data.error);
        } else{
          props.setShow(false);
          props.setStatus('');
        }
      })();
    } else {
      props.setStatus(`Password Must Be ${minValidPasswordLen} Or More Characters`);
    }
  }

  return (<>

    Name<br/>
    <input id="name"
      type="input" 
      className="form-control" 
      placeholder="Enter name" 
      value={props.name} 
      onChange={e => props.setName(e.currentTarget.value)} /><br/>

    Email address<br/>
    <input id="email"
      type="input"
      style={{}} 
      className="form-control" 
      placeholder="Enter email" 
      value={props.email} 
      onChange={e => props.setEmail(e.currentTarget.value)}/><br/>

    Password<br/>
    <input id="password"
      type="password" 
      className="form-control" 
      placeholder="Enter password" 
      value={props.password} 
      onChange={e => props.setPassword(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>Create Account</button>

  </>);
}