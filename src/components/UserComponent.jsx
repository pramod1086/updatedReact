

import React from 'react';
import './styles/innerContainer.css';

//TODO: create a seperate component. remove duplicate code blocks.

//import axios from "axios";

		class UserComponent extends React.Component {
		constructor(props){
			super(props);
		}

		render() {
		    return (
					<div className="usercomponentdiv">
					<ul>
        {this.props.data.map(function(item, index){
          return (
              <div key={index}>
								<tr>

              <td> <h1>{item.userID}</h1></td>

								<td> <h1>{item.firstName}</h1></td>
									<td> <h1>{item.lastName}</h1></td>

								</tr>

              </div>

            )
          }
        )}
      </ul>
</div>


		    );
		  }
		}



export default UserComponent;
