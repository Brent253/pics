import React from 'react';
//Events - onClick, onChange, onSubmit
class SearchBar extends React.Component {
	state = { term: ''};

	onFormSubmit = event => {
	//arrow functions bind the value of this
	//prevents browser from submitting and refreshing page
		event.preventDefault();
			//When using props in a class-based component
			this.props.onSubmit(this.state.term);
		};



	render() {
		return( 
		<div className="ui segment">
			<form onSubmit={this.onFormSubmit} className="ui form">
				<div className="field">
					<label>Image Search</label>
					<input 
					type="text" 
					value={this.state.term} 
					onChange={e => this.setState({term: e.target.value })}>
					</input>
				</div>
			</form>
		</div>
	  );
	}
}

export default SearchBar;