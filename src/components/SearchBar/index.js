import React from 'react';
import axios from 'axios';
import {Typeahead} from 'react-bootstrap-typeahead';

import {devBaseURI as baseURI} from '../../constants/resources';

import './styles.scss';

class SearchBar extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      options : [],
      selected : {}
    };
    this.submit = this.submit.bind(this);
  }
  componentWillMount(){
    // todo better handle errors
    // todo don't use this use a async TypeHeader
    axios.get(`${baseURI}/api/places/loc`)
      .then(({data}) => {
        let options = [];
        for(let type in data){
          data[type].forEach(curr => options.push({type, label : curr.name, key : curr._id}));
        }
        this.setState({options});
    })
      .catch(err => console.error(err));
  }
  submit(){
    let selected = this.state.selected;
    if(!selected.type){
      // todo send a toast stating "please select a city first"
    }
    else
      this.context.router.push(`/${selected.type}/${selected.key}`);
  }
  render(){
    return  (
      <div className="box-typeahead">
        <Typeahead
          bsSize="large"
          multiple={false}
          options={this.state.options}
          placeholder="Travelling to ?"
          maxResults={2}
          minLength={1}
          onChange={selectedItems => this.setState({selected : selectedItems[0]})}
        />
        <button className="btn btn-primary" onClick={this.submit}>Search</button>
      </div>
    );
  }
}
SearchBar.contextTypes = {
  router: React.PropTypes.object.isRequired
};


export default SearchBar;
