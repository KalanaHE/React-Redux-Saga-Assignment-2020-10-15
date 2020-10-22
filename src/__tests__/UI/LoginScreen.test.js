import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import createSagaMiddleware from "redux-saga";

import { mount, shallow } from "enzyme";

import LoginScreen from "../../components/LoginScreen";

import sagas from "../../redux/sagas";

configure({ adapter: new Adapter() });

const sagaMiddleware = createSagaMiddleware();

const mockstore = configureStore([sagaMiddleware]);

describe("LoginScreen", () => {
  it("Should render paragraph and text", () => {
    const store = mockstore({
      login: false,
    });
    sagaMiddleware.run(sagas);

    const wrapper = mount(
      <Provider store={store}>
        <LoginScreen />
      </Provider>
    );

    // const wrapper = shallow(
    //   <Provider store={store}>
    //     <LoginScreen />
    //   </Provider>
    // );

    const text = wrapper.find("h1").text();
    expect(text).toEqual("Login Page");
  });
  // ###########################################################################################
  it("Should render a div and login button", () => {
    const store = mockstore({
      login: false,
    });
    sagaMiddleware.run(sagas);

    const wrapper = mount(
      <Provider store={store}>
        <LoginScreen />
      </Provider>
    );

    expect(wrapper.find("div").exists()).toBe(true);
    expect(wrapper.find("button").exists()).toBe(true);
  });
});
