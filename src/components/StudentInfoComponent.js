let list_student=[
    {
        name: "huy",
        age: 24,
        address: "Ha Noi"
    },
    {
        name : "huy123",
        age : 30,
        address : "Ha Nam"
    }
];

function StudentInfoComponent(props){
    return(
        <div style={{margin:"30px"}}>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Address</th>
                </tr>
                </thead>
                <tbody>
                {list_student.map((item, index)=>(
                    <tr>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.address}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default StudentInfoComponent