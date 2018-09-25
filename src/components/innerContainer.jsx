import React from 'react';
import './styles/innerContainer.css';
import UserComponent from './UserComponent';
import VideoGroups from './VideoGroups';



//TODO: create a seperate component. remove duplicate code blocks.


		class InnerContainer extends React.Component {
		constructor(props){
			super(props);
		}

		render() {
// 		    return (
// 					<div className="container-fluid">
//
// 						<div className="wrapper row">
// 							<div className="title col-lg-6"><strong>{this.props.user}</strong></div>
// 							<div className="checkbox-btn">
// 								<input type="checkbox" name="user" />
// 								<div><span className="slide"></span></div>
// 							</div>
// 							<div className="col-lg-6">
// 								<UserComponent   data ={this.props.data}/>
//
// 								</div>
// 						</div>
//
//
// 						<div className="wrapper row">
// 							<div className="title cl"><strong>{this.props.videos}</strong></div>
// 							<div className="checkbox-btn">
// 								<input type="checkbox" name="video" />
// 								<div><span className="slide"></span></div>
// 							</div>
//
// </div>
// 					</div>
//
// 		    );
				return(
					<div className="container-fluid">
							<div className="row">
									<div className="col-lg-5 col-md-6 col-sm-6">
										<div className="checkbox-btn">
														<input type="checkbox" name="video" />
														<div>
															<span className="slide"/></div>
													</div>
									</div>
									<div class="vl col-lg-1"></div>
									<div className="col-lg-6 col-md-6 col-sm-6">
										<div className="checkbox-btn">
														<input type="checkbox" name="video" />
														<div><span className="slide"></span></div>
													</div>
									</div>
							</div>
						<hr size="30"></hr>
							<div className="row">

								<div className="col-lg-6 col-md-6 col-sm-6">
										<UserComponent   data ={this.props.data}/>
								</div>
								<div className="vl col-lg-1"></div>
								<div className="col-lg-6 col-md-6 col-sm-6">
										<VideoGroups   data ={this.props.data}/>
								</div>
							</div>
					</div>
				)
		  }
		}



export default InnerContainer;
