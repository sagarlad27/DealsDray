import Header from "./Header";


function Dashboard() {
        
    return ( <>
    <Header/>
    
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>

    
            <h1 style={{marginLeft:"230%", textAlign: 'center', fontFamily:"initial",lineHeight:"10vh",color:"rgb(232, 95, 21)"}}>Welcome to Admin Panel</h1>
    </div>
    
       
    </> );
}

export default Dashboard;