import { React} from 'react'


function TablaContent(props) {

    return (
        <tr key={props.key}>
            <th scope="row">{props.item1}</th>
            <td>{props.item2}</td>
            <td>{props.item3}</td>
            <td>{props.item4}</td>
        </tr>
    )
}


export default TablaContent;
