import { mount } from "@vue/test-utils";
import memberCard from "@/components/MemberCard.vue";

describe("BlogCard.vue", () => {
  it("renders props.email ketika dilempar", () => {
    const email = "some email";
    const wrapper = mount(memberCard, {
      propsData: { email },
    });
    expect(wrapper.find("#email").text()).toBe(email);
  });
});
