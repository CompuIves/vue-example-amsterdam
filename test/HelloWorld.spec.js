import Vue from "vue";
// import { shallow } from "@vue/test-utils";
import HelloWorld from "../src/components/HelloWorld";

describe("HelloWorld.vue", () => {
  it("should render correct contents", () => {
    const Constructor = Vue.extend(HelloWorld);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector(".hello h1").textContent).toEqual(
      "My 'interesting' counter"
    );
  });

  it("works with vue-test-utils", () => {
    // const wrapper = shallow(HelloWorld);
    // expect(wrapper.text()).toBe(`My 'interesting' counterCount: 0Increment`);
  });
});
