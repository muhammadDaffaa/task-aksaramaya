import React, { useContext, useState } from "react";
import { Menu, Icon, Sidebar } from "semantic-ui-react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Template from "./template/Template";
import Sticker from "./sticker/Sticker";
import Wallpaper from "./wallpaper/Wallpaper";
import Plain from "./plain/Plain";
import Background from "./background/Background";
import { ThemeContext } from "../context/ThemeContext";

import TargetContent from "./TargetContent";

const Side = () => {
  const { theme } = useContext(ThemeContext);
  const [index, setIndex] = useState(0);
  const { activeColor, defaultColor } = theme;

  return (
    <Router>
      <Sidebar
        style={{ background: "black" }}
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        vertical
        visible
        width="thin"
      >
        <Menu.Item
          as={Link}
          to="/template"
          onClick={() => {
            setIndex(1);
          }}
          style={
            index === 1
              ? { background: activeColor.bg }
              : { background: defaultColor.bg }
          }
        >
          <Icon
            color={index === 1 ? defaultColor.bg : activeColor.bg}
            name="th"
          />
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/sticker"
          onClick={() => {
            setIndex(2);
          }}
          style={
            index === 2
              ? { background: activeColor.bg }
              : { background: defaultColor.bg }
          }
        >
          <Icon
            color={index === 2 ? defaultColor.bg : activeColor.bg}
            name="star outline"
          />
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/plain-text"
          onClick={() => {
            setIndex(3);
          }}
          style={
            index === 3
              ? { background: activeColor.bg }
              : { background: defaultColor.bg }
          }
        >
          <Icon
            color={index === 3 ? defaultColor.bg : activeColor.bg}
            name="edit outline"
          />
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/wallpaper"
          onClick={() => {
            setIndex(4);
          }}
          style={
            index === 4
              ? { background: activeColor.bg }
              : { background: defaultColor.bg }
          }
        >
          <Icon
            color={index === 4 ? defaultColor.bg : activeColor.bg}
            name="image"
          />
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/background"
          onClick={() => {
            setIndex(5);
          }}
          style={
            index === 5
              ? { background: activeColor.bg }
              : { background: defaultColor.bg }
          }
        >
          <Icon
            color={index === 5 ? defaultColor.bg : activeColor.bg}
            name="chess board"
          />
        </Menu.Item>
      </Sidebar>
      {/* Main Content */}z
      <div className="main-content">
        <Switch>
          <Route exact path="/template" component={Template} />
          <Route exact path="/sticker" component={Sticker} />
          <Route exact path="/plain-text" component={Plain} />
          <Route exact path="/wallpaper" component={Wallpaper} />
          <Route exact path="/background" component={Background} />
        </Switch>
        <TargetContent />
      </div>
    </Router>
  );
};

export default Side;
