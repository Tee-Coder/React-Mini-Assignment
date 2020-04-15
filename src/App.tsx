import * as React from 'react';
import Image from './Image';

export interface AppProps {
}

interface IState {
  myText:string;
  colorUpdate: any;

}


export default class App extends React.Component<AppProps,IState> {
    constructor(props: AppProps) {
        super(props);

        this.state = {colorUpdate:"",myText:""}
      

    }
    componentWillMount() {
      this.setState({ colorUpdate:"red"})
      this.setState({myText:"This is just me trying my hands on color change"})
  
    }
  

    public toggleColour = () => {
      this.setState({ colorUpdate:"orange" })
    }

   render() {
    return (
    

      <body style={{backgroundColor: this.state.colorUpdate, height: '800px'}}>
      
        <h1>{this.state.myText}</h1>
        <body> < Image /></body>
        
        
             <button  onClick={this.toggleColour} > Update Color </button>

      

      </body>

      
    );
  }
}
