function TransHistory() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const [data, setData] = React.useState('');
    const [filter, setFilter] = React.useState('Filter')

    React.useEffect(() => {
        //fetch all transactions from API
        fetch(`/account/alltransactions/${JSON.parse(loggedInUser).email}`)
            .then(response => response.json())
            .then(data => {
                console.log('all transactions ' + JSON.stringify(data));
                setData(data);
            })
    }, [])

    function getTableData() {
        let tableString = "";
        if (data !== '') {
            let transData;
            if (filter === 'Withdrawals'){
                transData = data.filter(trans => trans.transType === "Withdraw");
            }else if (filter === 'Deposits'){
                transData = data.filter(trans => trans.transType === "Deposit");
            } else {
                transData = data
            }
            for (const user of transData) {
                tableString = tableString + 
                `<tr>
                    <td>${user.date}</td>
                    <td>${user.transType}</td>
                    <td>${Number(user.amount).toFixed(2)}</td>
                </tr>`
            }
        }
        console.log(tableString);
        return window.HTMLReactParser(tableString)
    }  

    return (
        <Card
            backgroundColor="light"
            header="Transaction History"
            status=""
            cardWidth='50rem'
            body={JSON.parse(loggedInUser).email === '' ? (
                <>
                    <h2>LOGIN TO USE FEATURE</h2>
                </>
            ):(
                <>
                <div className="dropdown">
                    <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {filter}
                    </button>
                    <div className="dropdown-menu btn-secondary" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item" onClick={()=>{setFilter('All')}} type="button">All</button>
                        <button className="dropdown-item" onClick={()=>{setFilter('Deposits')}} type="button">Deposits</button>
                        <button className="dropdown-item" onClick={()=>{setFilter('Withdrawals')}} type="button">Withdrawels</button>
                    </div>
                </div>
                    <table className='table'>
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Type</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="table-light">
                            {getTableData()}
                        </tbody>
                    </table>
                </>
            )}
        />
    )
}