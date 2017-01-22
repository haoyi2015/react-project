/* eslint-disable no-console, react/prop-types */
import 'rc-cascader/assets/index.css';
import Cascader from 'rc-cascader';
import React from 'react';
import ReactDOM from 'react-dom';

//Button || Navbar || Clearfix
import {Navbar} from "react-bootstrap";

import {Button} from "react-bootstrap";

import {Clearfix} from "react-bootstrap";

import {MenuItem} from "react-bootstrap";

import {Modal} from "react-bootstrap";

import {Nav} from "react-bootstrap";

import {NavItem} from "react-bootstrap";

import {NavDropdown} from "react-bootstrap";

import {Popover} from "react-bootstrap";

import {Jumbotron} from "react-bootstrap";

import {Radio} from "react-bootstrap";



// const addressOptions = [{
//   label: '福建',
//   value: 'fj',
//   children: [{
//     label: '福州',
//     value: 'fuzhou',
//     children: [{
//       label: '马尾',
//       value: 'mawei',
//     }],
//   }, {
//     label: '泉州',
//     value: 'quanzhou',
//   }],
// }, {
//   label: '浙江',
//   value: 'zj',
//   children: [{
//     label: '杭州',
//     value: 'hangzhou',
//     children: [{
//       label: '余杭',
//       value: 'yuhang',
//     }],
//   }],
// }, {
//   label: '北京',
//   value: 'bj',
//   children: [{
//     label: '朝阳区',
//     value: 'chaoyang',
//   }, {
//     label: '海淀区',
//     value: 'haidian',
//     disabled: true,
//   }],
// }];

// const MyCascader = React.createClass({
//   getInitialState() {
//     return {
//       inputValue: '',
//     };
//   },
//   onChange(value, selectedOptions) {
//     console.log(value, selectedOptions);
//     this.setState({
//       inputValue: selectedOptions.map(o => o.label).join(', '),
//     });
//   },
//   render() {
//     const { builtinPlacements } = this.props;
//     return (
//       <Cascader
//         options={addressOptions}
//         builtinPlacements={builtinPlacements}
//         onChange={this.onChange}
//       >
//         <input
//           placeholder={builtinPlacements ? 'Will not adjust position' : 'Will adjust position'}
//           value={this.state.inputValue}
//           style={{ width: 170 }}
//         />
//       </Cascader>
//     );
//   },
// });

// const placements = {
//   bottomLeft: {
//     points: ['tl', 'bl'],
//     offset: [0, 4],
//     overflow: {
//       adjustY: 1,
//     },
//   },
//   topLeft: {
//     points: ['bl', 'tl'],
//     offset: [0, -4],
//     overflow: {
//       adjustY: 1,
//     },
//   },
//   bottomRight: {
//     points: ['tr', 'br'],
//     offset: [0, 4],
//     overflow: {
//       adjustY: 1,
//     },
//   },
//   topRight: {
//     points: ['br', 'tr'],
//     offset: [0, -4],
//     overflow: {
//       adjustY: 1,
//     },
//   },
// };

// ReactDOM.render(
//   <div style={{ textAlign: 'right', margin: '0 80px' }}>
//     <MyCascader />
//     <br />
//     <br />
//     <MyCascader builtinPlacements={placements} />
//   </div>
// , document.getElementById('Cascader'));
// 
// 
// 
const buttonsInstance = (
  <Button bsStyle="primary">新建人群包</Button>
);

function onSelectAlert(eventKey) {
  alert(`Alert from menu item.\neventKey: ${eventKey}`);
}

const MenuItems = (
  <Clearfix>
    <ul className="dropdown-menu open">
      <MenuItem header>Header</MenuItem>
      <MenuItem>link</MenuItem>
      <MenuItem divider/>
      <MenuItem header>Header</MenuItem>
      <MenuItem>link</MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <MenuItem title="See? I have a title.">
        link with title
      </MenuItem>
      <MenuItem eventKey={1} href="#someHref" onSelect={onSelectAlert}>
        link that alerts
      </MenuItem>
    </ul>
  </Clearfix>
);
const modalInstance = (
  <div className="static-modal">
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        One fine body...
      </Modal.Body>

      <Modal.Footer>
        <Button>Close</Button>
        <Button bsStyle="primary">Save changes</Button>
      </Modal.Footer>

    </Modal.Dialog>
  </div>
);
//导航
const NavDropdownExample = React.createClass({
  handleSelect(eventKey) {
    event.preventDefault();
    console.log(`selected ${eventKey}`);
  },

  render() {
    return (
      <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
        <NavItem eventKey="1" href="/IN.COM">IN.COM</NavItem>
        <NavItem eventKey="2" href="/GDT">腾讯社交广告数据</NavItem>
        <NavItem eventKey="3" title="Item" href="/MJ">盟聚联盟数据</NavItem>
        <NavItem eventKey="4" href="/adx">Ad exchange数据</NavItem>
        <NavDropdown eventKey="4" title="工具" id="nav-dropdown">
          <MenuItem eventKey="4.1" href="/tool/people.html">人群包</MenuItem>
          <MenuItem eventKey="4.2" href="/tool/qudao.html">渠道包</MenuItem>
          <MenuItem eventKey="4.3" href="/tool/h5.html">H5建站</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4.4" href="/">主站</MenuItem>
        </NavDropdown>
      </Nav>
    );
  }
});
//Popover
const PopoverDom =(
  <div style={{ height: 120 }}>
    <Popover
      id="popover-basic"
      placement="right"
      positionLeft={200}
      positionTop={50}
      title="Popover right"
    >
      And here's some <strong>amazing</strong> content. It's very engaging. right?
    </Popover>
  </div>
)
//内容显示
const jumbotronInstance = (
  <Jumbotron>
    <h1>腾讯社交广告数据</h1>
    <p>这是腾讯社交广告报表数据</p>
    <p><Button bsStyle="primary">效果数据</Button> <Button bsStyle="primary">人群数据</Button></p>
    <p> 
    </p>
  </Jumbotron>
);
ReactDOM.render(jumbotronInstance, document.getElementById('content'));

//ReactDOM.render(PopoverDom, document.getElementById('popover'));
//ReactDOM.render(buttonsInstance, document.getElementById('Button'));
//ReactDOM.render(modalInstance, document.getElementById('modal'));
ReactDOM.render(<NavDropdownExample />, document.getElementById('nav'));