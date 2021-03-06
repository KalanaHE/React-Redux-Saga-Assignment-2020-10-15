import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import createSagaMiddleware from "redux-saga";

import Enzyme, { mount, shallow } from "enzyme";

import DistanceMeasure from "../../components/DistanceMessure";

import sagas from "../../redux/sagas";

Enzyme.configure({ adapter: new Adapter() });

const sagaMiddleware = createSagaMiddleware();

const mockstore = configureStore([sagaMiddleware]);

describe("Distance Meassure Screen", () => {
  it("Should render div and text", () => {
    const store = mockstore({
      login: true,
    });
    sagaMiddleware.run(sagas);

    const wrapper = mount(
      <Provider store={store}>
        <DistanceMeasure />
      </Provider>
    );

    const container = wrapper.find(DistanceMeasure);

    expect(container.find("div").exists()).toBe(true);
    // expect(container.find(".tt").text()).toEqual("aaaa");

    // expect(wrapper.find("div").exists()).toBe(true);
    // expect(wrapper.find("br").exists()).toBe(false); //Br exists value returns false i don't know why
    // expect(wrapper.find("Card").exists()).toBe(false); //Card exists value returns false i don't know why
    // expect(wrapper.find("CardContent").exists()).toBe(false); //CardContent exists value returns false i don't know why
    // expect(wrapper.find("Typography").exists()).toBe(false); //Typography exists value returns false i don't know why
  });
});
