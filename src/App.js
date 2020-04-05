import React from 'react';
import logo from './logo.svg';
import './App.css';
import cat from './cat.jpg';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';


class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgsrc : props.imgsrc
    };
  }

  render() {
    return (
      <div className="Image">
        <img src={this.state.imgsrc}>

        </img>
      </div>
    )
  }
}


class IndexColumn extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      indexItems: [
        'About',
        'Skills',
        'Education',
        'Contact',
      ],
      navLinks: {
        'About': '#About',
        'Skills': '#Skills',
        'Education': '#Education',
        'Contact': '#Contact', 
      }
    };
  }

  render() {
    // const lstyle = {
    //   list-style: "none",
    // }

    return (
      <div className="Elements--column">
        <div className="table-header">
          Table of contents
        </div>
        <div className="index-list">
          <ul>
            {this.state.indexItems.map((item, index) => (
              <li key={item}><HashLink to={this.state.navLinks[item]}>{item}</HashLink></li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

}


class Skillbar extends React.Component {
  render() {
    const container = {
      width: "100%",
      backgroundColor: "#eee"
    }
    const skillLevel = {
      textAlign: "right",
			padding: "10px 0px",
			color: this.props.color || "white",
			backgroundColor: this.props.bgColor,
			width: this.props.width + "%"
    }
    return (
			<div className="container">
				<div>{this.props.text}</div>
				<div className="container" style={container}>
					<div className="skill--level" style={skillLevel}>{this.props.width + "%"}</div>
				</div>
			</div>
		)
  }
}

Skillbar.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string.isRequired,
	bgColor: PropTypes.string.isRequired,
	width: PropTypes.string.isRequired,
}


class Collapsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const hContainer = {
      color: "#FFFFFF",
      cursor: "pointer",
      backgroundColor: this.props.hbgColor,
      padding: "10px 10px 10px",
      // transition: "height 0.25s linear"
    }

    const tContainer = {
      backgroundColor: this.props.tbgColor,
      padding: "10px 10px 10px"
    }

    console.log(this.props.hbgColor)
    return (
      <div className="Education-box">
        <div className="container" onClick={(e)=>this.toggle(e)} style={hContainer}>
          {this.props.title}
        </div>
        {this.state.open ? (
          <div className="container" style={tContainer}>
            {this.props.children}
          </div>
        ) : null}
      </div>
    );
  }
}


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div data-reactroot="">
        <div>
          <div className="rmq-27dabc86">
            <div className="rmq-77791fc">
              <div className="rmq-dc160f08">
                Sawar Sagwal
              </div>
              <div className="rmq-d92f5945">
                Website for my portfolio and other stuff
              </div>
            </div>
            <div className="rmq-9b5d13cf">
              <div className="Elements--two_columns">
                <div className="Index-column">
                  <IndexColumn></IndexColumn>
                </div>
                <div className="Portfolio-column">
                  <Image imgsrc={cat}></Image>
                  <div id="About">
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
                      sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                       consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, 
                       qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi 
                       tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam
                    </p>
                  </div>
                  <div id="Skills">
                    <Skillbar text="c/c++" color="#778899" bgColor="#D3D3D3" width="85"></Skillbar>
                    <Skillbar text="python" color="#778899" bgColor="#D3D3D3" width="85"></Skillbar>
                    <Skillbar text="javascript" color="#778899" bgColor="#D3D3D3" width="70"></Skillbar>
                  </div>
                  <div id="Education">
                    <Collapsible title="Bachelor of Technology in CS" hbgColor="#778899" tbgColor="#D3D3D3">
                      <p>
                        currently pursuing B.Tech in CSE at IIIT Hyderabad
                      </p>
                    </Collapsible>
                  </div>
                  <div id="Contact">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </BrowserRouter>
      
  );
}

export default App;
