import React, { Component } from "react";
import axios from "axios";
import UtilsStyle from "../styles/utils.module.css";

export default class PostData extends React.Component {
  // 异步获取 JS 普通对象，并绑定在props上当服务渲染时, 我是最先执行的声明周期函数  first
  static async getInitialProps(props) {
    let res = await axios.get("http://localhost:5000/data");
    let serverData = res.data;
    return { serverData };
  }

  render() {
    const { serverData } = this.props;
    return (
      <ul className={UtilsStyle.list}>
        {serverData.map(({ id, title, date }) => {
          return (
            <li
              key={id}
              className={`${UtilsStyle.listItem} ${UtilsStyle.lightText}`}
            >
              {title}——{date}
            </li>
          );
        })}
      </ul>
    );
  }
}
