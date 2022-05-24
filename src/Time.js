
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const  Time= (props) => {
    let d = eval(props.val);
    let day = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return (
        <p style={{margin:'0',position:'absolute',right:'10px'}}>{day} {month} {year}</p>
        );
}
 
export default Time;