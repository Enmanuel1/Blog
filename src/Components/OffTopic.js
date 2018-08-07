import React, { Component } from 'react';
import Posts from './PostComponent'
import FloatButton from './FloatButtonComponent'
class OffTopic extends Component{
render(){
	return(
			<div className="OffTopic">
				<Posts pageTitle="Off Topics" />
				<FloatButton />
			</div>
		);
	}

}

export default OffTopic;